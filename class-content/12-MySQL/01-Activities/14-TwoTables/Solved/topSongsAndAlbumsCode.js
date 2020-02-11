'use strict';

const mysql = require('mysql');
const inquirer = require('inquirer');

const promptMessages = {
  songsByArtist: 'Find songs by artist',
  artistsMoreThanOnce: 'Find all artists who appear more than once',
  dataWithinRange: 'Find data within a specific range',
  searchForSong: 'Search for a specific song',
  findArtistsAndAlbums:
    'Find artists with a top song and top album in the same year',
  exit: 'exit'
};

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'top_songsDB'
});

connection.connect(err => {
  if (err) throw err;
  prompt();
});

function prompt() {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        promptMessages.songsByArtist,
        promptMessages.artistsMoreThanOnce,
        promptMessages.dataWithinRange,
        promptMessages.searchForSong,
        promptMessages.findArtistsAndAlbums,
        promptMessages.exit
      ]
    })
    .then(answer => {
      console.log('answer', answer);
      switch (answer.action) {
        case promptMessages.songsByArtist:
          artistSearch();
          break;

        case promptMessages.artistsMoreThanOnce:
          multiSearch();
          break;

        case promptMessages.dataWithinRange:
          rangeSearch();
          break;

        case promptMessages.searchForSong:
          songSearch();
          break;

        case promptMessages.findArtistsAndAlbums:
          songAndAlbumSearch();
          break;

        case promptMessages.exit:
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
        printRows(res);
        prompt();
      });
    });
}

function multiSearch() {
  const query =
    'SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1';
  connection.query(query, (err, res) => {
    if (err) throw err;
    res.map(row => console.log(row.artist));
    prompt();
  });
}

function rangeSearch() {
  inquirer
    .prompt([
      {
        name: 'start',
        type: 'input',
        message: 'Enter starting position: ',
        validate: value => !isNaN(value)
      },
      {
        name: 'end',
        type: 'input',
        message: 'Enter ending position: ',
        validate: value => !isNaN(value)
      }
    ])
    .then(answer => {
      const query =
        'SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?';
      connection.query(query, [answer.start, answer.end], (err, res) => {
        if (err) throw err;
        printRows(res);
        prompt();
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
          printRow(res[0]);
          prompt();
        }
      );
    });
}

function songAndAlbumSearch() {
  inquirer
    .prompt({
      name: 'artist',
      type: 'input',
      message: 'What artist would you like to search for?'
    })
    .then(answer => {
      const query = `
        SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist 
        FROM top_albums
        INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year = top5000.year)
        WHERE (top_albums.artist = ? AND top5000.artist = ?)
        ORDER BY top_albums.year, top_albums.position`;

      connection.query(query, [answer.artist, answer.artist], (err, res) => {
        if (err) throw err;
        console.log(res.length + ' matches found!');
        printRows(res);
        prompt();
      });
    });
}

function printRows(rows) {
  for (let row of rows) {
    printRow(row);
  }
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
