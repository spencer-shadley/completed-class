'use strict';

const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'ice_creamDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log(`connected with id ${connection.threadId} \n`);
  createProduct();
});

async function createProduct() {
  console.log('Inserting a new product...\n');

  const userIcecream = await inquirer.prompt([
    {
      name: 'flavor',
      type: 'list',
      choices: ['vanilla', 'chocolate', 'strawberry', 'rocky road']
    }
  ]);

  const query = connection.query(
    'INSERT INTO products SET ?',
    {
      flavor: userIcecream.flavor,
      price: 3.0,
      quantity: 50
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} product inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateProduct() {
  console.log('Updating all Rocky Road quantities...\n');
  const query = connection.query(
    'UPDATE products SET ? WHERE ?',
    [
      {
        quantity: 100
      },
      {
        flavor: 'Rocky Road'
      }
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} products updated!\n`);
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteProduct() {
  console.log("Deleting all strawberry icecream because it's gross...\n");
  connection.query(
    'DELETE FROM products WHERE ?',
    {
      flavor: 'strawberry'
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} products deleted!\n`);
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}

function readProducts() {
  console.log('Selecting all products...\n');
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
