'use strict';

const express = require('express');
const expressHandlebars = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const DEBUGMODE = false;

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'wishes_db'
});

connection.connect(err => {
  if (err) {
    console.error('error connecting', err.stack);
    return;
  }

  console.log(`connected with id ${connection.threadId}`);
});

// Root get route.
app.get('/', (req, res) => {
  connection.query('SELECT * FROM wishes;', (err, data) => {
    if (err) {
      throw err;
    }

    if (DEBUGMODE) {
      console.log(`You sent ${req.body.wish}`);
    }

    res.render('index', { wishes: data });
  });
});

// Post route -> back to home
app.post('/', (req, res) => {
  if (DEBUGMODE) {
    console.log(`You sent ${req.body.wish}`);
  }

  connection.query(
    'INSERT INTO wishes (wish) VALUES (?)',
    [req.body.wish],
    (err, result) => {
      if (err) {
        throw err;
      }

      res.redirect('/');
    }
  );
});

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
