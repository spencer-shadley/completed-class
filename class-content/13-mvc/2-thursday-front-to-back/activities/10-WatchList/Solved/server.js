'use strict';

const express = require('express');
const expressHandlebars = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const DEBUGMODE = true;

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
  database: 'movie_planner_db'
});

connection.connect(err => {
  if (err) {
    console.error('error connecting', err.stack);
    return;
  }

  console.log(`connected with id ${connection.threadId}`);
});

// Use Handlebars to render the main index.html page with the movies in it.
app.get('/', (req, res) => {
  connection.query('SELECT * FROM movies;', (err, data) => {
    if (err) {
      return res.status(500).end();
    }

    res.render('index', { movies: data });
  });
});

// Create a new movie
app.post('/api/movies', (req, res) => {
  connection.query(
    'INSERT INTO movies (movie) VALUES (?)',
    [req.body.movie],
    (err, result) => {
      if (err) {
        return res.status(500).end();
      }

      // Send back the ID of the new movie
      res.json({ id: result.insertId });

      if (DEBUGMODE) {
        console.log({ id: result.insertId });
      }
    }
  );
});

// Retrieve all movies
app.get('/api/movies', (req, res) => {
  connection.query('SELECT * FROM movies;', (err, data) => {
    if (err) {
      return res.status(500).end();
    }

    res.json(data);
  });
});

// Update a movie
app.put('/api/movies/:id', (req, res) => {
  connection.query(
    'UPDATE movies SET movie = ? WHERE id = ?',
    [req.body.movie, req.params.id],
    (err, result) => {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      } else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Delete a movie
app.delete('/api/movies/:id', (req, res) => {
  connection.query('DELETE FROM movies WHERE id = ?', [req.params.id], function(
    err,
    result
  ) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    } else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`)
);
