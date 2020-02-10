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
  database: 'playlistDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log(`connected with id ${connection.threadId}`);
  queryAllSongs();
  queryDanceSongs();
});

function queryAllSongs() {
  connection.query('SELECT * FROM songs', (err, res) => {
    if (err) throw err;
    for (let i = 0; i < res.length; ++i) {
      console.log(
        res[i].id +
          ' | ' +
          res[i].title +
          ' | ' +
          res[i].artist +
          ' | ' +
          res[i].genre
      );
    }
    console.log('-----------------------------------');
  });
}

function queryDanceSongs() {
  const query = connection.query(
    'SELECT * FROM songs WHERE genre=?',
    ['Dance'],
    (err, res) => {
      if (err) throw err;
      for (let i = 0; i < res.length; ++i) {
        console.log(
          res[i].id +
            ' | ' +
            res[i].title +
            ' | ' +
            res[i].artist +
            ' | ' +
            res[i].genre
        );
      }
    }
  );

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
}
