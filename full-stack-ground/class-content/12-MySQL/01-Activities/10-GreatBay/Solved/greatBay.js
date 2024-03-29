'use strict';

const mysql = require('mysql');
const inquirer = require('inquirer');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'greatBay_DB'
});

// connect to the mysql server and sql database
connection.connect(err => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  login();
});

function login() {
  console.log('Please login:');
  inquirer
    .prompt([
      {
        name: 'username',
        type: 'input',
        message: 'What is your username?'
      },
      {
        name: 'password',
        type: 'input',
        message: 'What is your password?'
      }
    ])
    .then(answer => {
      const username = answer.username;
      const password = answer.password;
      connection.query(
        'SELECT username FROM users WHERE ?',
        { username },
        (err, results) => {
          if (err) throw err;
          const isNewUser = results.length === 0;
          if (isNewUser) {
            createUser(username, password);
          } else {
            validateUser(username, password);
          }
        }
      );
    });
}

function validateUser(username, password) {
  connection.query(
    'SELECT password FROM users WHERE ? AND ?',
    [{ username }, { password }],
    (err, results) => {
      if (err) throw err;
      const hasMatchingUser = results.length > 0;
      if (hasMatchingUser) {
        console.log(`${username} successfully logged in`);
        start(username);
      } else {
        console.error('Wrong password...');
        login();
      }
    }
  );
}

function createUser(username, password) {
  connection.query(
    'INSERT INTO users SET ?',
    {
      username: username,
      password: password
    },
    err => {
      if (err) throw err;
      console.log(`Created user ${username}`);
      start(username);
    }
  );
}

// function which prompts the user for what action they should take
function start(username) {
  inquirer
    .prompt({
      name: 'postOrBid',
      type: 'list',
      message: `Would ${username} like to [POST] an auction or [BID] on an auction?`,
      choices: ['POST', 'BID', 'MY BIDS', 'LOGOUT', 'EXIT']
    })
    .then(answer => {
      // based on their answer, either call the bid or the post functions
      switch (answer.postOrBid) {
        case 'POST':
          postAuction(username);
          break;
        case 'BID':
          bidAuction(username);
          break;
        case 'MY BIDS':
          showBids(username);
          break;
        case 'LOGOUT':
          console.log('Successfully logged out');
          login();
          break;
        default:
          connection.end();
      }
    });
}

function showBids(username) {
  connection.query(
    'SELECT * FROM auctions WHERE ?',
    { username },
    (err, results) => {
      if (err) throw err;
      const names = results.map(result => result.item_name);
      console.log(names);
      start(username);
    }
  );
}

// function to handle posting new items up for auction
function postAuction(username) {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: 'item',
        type: 'input',
        message: 'What is the item you would like to submit?'
      },
      {
        name: 'category',
        type: 'input',
        message: 'What category would you like to place your auction in?'
      },
      {
        name: 'startingBid',
        type: 'input',
        message: 'What would you like your starting bid to be?',
        validate: value => !isNaN(value)
      }
    ])
    .then(answer => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        'INSERT INTO auctions SET ?',
        {
          item_name: answer.item,
          category: answer.category,
          starting_bid: answer.startingBid || 0,
          highest_bid: answer.startingBid || 0,
          username: username
        },
        err => {
          if (err) throw err;
          console.log('Your auction was created successfully!');
          // re-prompt the user for if they want to bid or post
          start(username);
        }
      );
    });
}

function bidAuction(username) {
  // query the database for all items being auctioned
  connection.query('SELECT * FROM auctions', (err, results) => {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: 'choice',
          type: 'rawlist',
          choices: () => results.map(result => result.item_name),
          message: 'What auction would you like to place a bid in?'
        },
        {
          name: 'bid',
          type: 'input',
          message: 'How much would you like to bid?'
        }
      ])
      .then(answer => {
        // get the information of the chosen item
        let chosenItem = results.filter(
          result => result.item_name === answer.choice
        )[0];

        // determine if bid was high enough
        if (chosenItem.highest_bid < parseInt(answer.bid)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            'UPDATE auctions SET ? WHERE ?',
            [
              {
                highest_bid: answer.bid,
                username
              },
              {
                id: chosenItem.id
              }
            ],
            error => {
              if (error) throw err;
              console.log('Bid placed successfully!');
              start(username);
            }
          );
        } else {
          // bid wasn't high enough, so apologize and start over
          console.log('Your bid was too low. Try again...');
          start(username);
        }
      });
  });
}
