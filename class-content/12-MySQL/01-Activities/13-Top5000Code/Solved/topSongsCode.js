'use strict';

const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'password',
  database: 'top_songsDB'
});

connection.connect(err => {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  const songsByArtist = 'Find songs by artist';
  const artistsMoreThanOnce = 'Find all artists who appear more than once';
  const dataWithinRange = 'Find data within a specific range';
  const searchForSong = 'Search for a specific song';
  const exit = 'exit';

  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        songsByArtist,
        artistsMoreThanOnce,
        dataWithinRange,
        searchForSong,
        exit
      ]
    })
    .then(answer => {
      switch (answer.action) {
        case songsByArtist:
          artistSearch();
          break;

        case artistsMoreThanOnce:
          multiSearch();
          break;

        case dataWithinRange:
          rangeSearch();
          break;

        case searchForSong:
          songSearch();
          break;

        case exit:
          connection.end();
          break;
      }
    });
}

function artistSearch() {
  inquirer
    .prompt({
      name: 'artist',
      type: 'input',
      message: 'What artist would you like to search for?'
    })
    .then(answer => {
      const query = 'SELECT position, song, year FROM top5000 WHERE ?';
      connection.query(query, { artist: answer.artist }, (err, res) => {
        if (err) throw err;
        for (let row of res) {
          printRow(row);
        }
        runSearch();
      });
    });
}

function printRow(row) {
  if (row) {
    let rowAsString = '';
    for (let key in row) {
      rowAsString += getPrintableColumn(row, key);
    }
    console.log(rowAsString);
  }
}

function getPrintableColumn(row, column) {
  return `${column}: ${row[column]} | `;
}

function multiSearch() {
  const query =
    'SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1';
  connection.query(query, (err, res) => {
    if (err) throw err;
    for (let i = 0; i < res.length; ++i) {
      console.log(res[i].artist);
    }
    runSearch();
  });
}

function rangeSearch() {
  inquirer
    .prompt([
      {
        name: 'start',
        type: 'input',
        message: 'Enter starting position: ',
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: 'end',
        type: 'input',
        message: 'Enter ending position: ',
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(answer => {
      const query =
        'SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?';
      connection.query(query, [answer.start, answer.end], (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; ++i) {
          console.log(
            'Position: ' +
              res[i].position +
              ' || Song: ' +
              res[i].song +
              ' || Artist: ' +
              res[i].artist +
              ' || Year: ' +
              res[i].year
          );
        }
        runSearch();
      });
    });
}

function songSearch() {
  inquirer
    .prompt({
      name: 'song',
      type: 'input',
      message: 'What song would you like to look for?'
    })
    .then(answer => {
      console.log(answer.song);
      connection.query(
        'SELECT * FROM top5000 WHERE ?',
        { song: answer.song },
        (err, res) => {
          if (err) throw err;
          console.log(
            'Position: ' +
              res[0].position +
              ' || Song: ' +
              res[0].song +
              ' || Artist: ' +
              res[0].artist +
              ' || Year: ' +
              res[0].year
          );
          runSearch();
        }
      );
    });
}
