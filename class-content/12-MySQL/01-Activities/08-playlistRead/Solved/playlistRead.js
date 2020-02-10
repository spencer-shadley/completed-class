'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'password',
  database: 'playlistDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log(`connected with id ${connection.threadId}`);
  queryAllSongs();
  queryDanceSongs();
});

function queryAllSongs() {
  connection.query('SELECT * FROM songs', (err, songs) => {
    if (err) throw err;
    for (let song of songs) {
      console.log(
        `${song.id} | ${song.title} | ${song.artist} | ${song.genre}`
      );
    }
    console.log('-----------------------------------');
  });
}

function queryDanceSongs() {
  const query = connection.query(
    'SELECT * FROM songs WHERE genre=?',
    ['Dance'],
    (err, songs) => {
      if (err) throw err;
      for (let song of songs) {
        console.log(
          `${song.id} | ${song.title} | ${song.artist} | ${song.genre}`
        );
      }
    }
  );

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
}
