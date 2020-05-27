'use strict';

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
  console.log(`connected with id ${connection.threadId}`);
  selectAll(); // NOTE: we can only call this after successfully connecting
});

function selectAll() {
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    console.log(res);
    console.log('flavor', res[0].flavor);
    connection.end();
  });
}
