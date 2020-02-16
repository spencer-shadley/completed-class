'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'quotes_db'
});

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log(`connected with id ${connection.threadId}`);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get('/', (req, res) => {});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get('/:id', (req, res) => {});

// Create a new quote using the data posted from the front-end.
app.post('/api/quotes', (req, res) => {});

// Delete a quote based off of the ID in the route URL.
app.delete('/api/quotes/:id', (req, res) => {});

// Update a quote.
app.put('/api/quotes/:id', (req, res) => {});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
