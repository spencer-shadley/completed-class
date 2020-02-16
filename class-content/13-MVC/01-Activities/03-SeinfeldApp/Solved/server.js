'use strict';

// Dependencies
const express = require('express');
const mysql = require('mysql');

// Create instance of express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'seinfeld'
});

// Initiate MySQL Connection.
connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log(`connected with id ${connection.threadId}`);
});

// Routes
app.get('/cast', (req, res) => {
  connection.query('SELECT * FROM actors ORDER BY id', (err, result) => {
    if (err) throw err;

    const html = '<h1>Actors Ordered BY ID</h1>';

    html += '<ul>';

    for (let i = 0; i < result.length; ++i) {
      html += '<li><p> ID: ' + result[i].id + '</p>';
      html += '<p> Name: ' + result[i].name + '</p>';
      html += '<p> Coolness Points: ' + result[i].coolness_points + '</p>';
      html += '<p>Attitude: ' + result[i].attitude + '</p></li>';
    }

    html += '</ul>';

    res.send(html);
  });
});

app.get('/coolness-chart', (req, res) => {
  connection.query(
    'SELECT * FROM actors ORDER BY coolness_points DESC',
    function(err, result) {
      if (err) throw err;

      const html = '<h1>Actors by Coolness</h1>';

      html += '<ul>';

      for (let i = 0; i < result.length; ++i) {
        html += '<li><p> ID: ' + result[i].id + '</p>';
        html += '<p> Name: ' + result[i].name + '</p>';
        html += '<p> Coolness Points: ' + result[i].coolness_points + '</p>';
        html += '<p>Attitude: ' + result[i].attitude + '</p></li>';
      }

      html += '</ul>';

      res.send(html);
    }
  );
});

app.get('/attitude-chart/:att', (req, res) => {
  connection.query(
    'SELECT * FROM actors WHERE attitude = ?',
    [req.params.att],
    function(err, result) {
      if (err) throw err;

      const html = '<h1>Actors With an Attitude of ' + req.params.att + '</h1>';

      html += '<ul>';

      for (let i = 0; i < result.length; ++i) {
        html += '<li><p> ID: ' + result[i].id + '</p>';
        html += '<p> Name: ' + result[i].name + '</p>';
        html += '<p> Coolness Points: ' + result[i].coolness_points + '</p>';
        html += '<p>Attitude: ' + result[i].attitude + '</p></li>';
      }

      html += '</ul>';

      res.send(html);
    }
  );
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
