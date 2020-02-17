'use strict';

// Dependencies
const express = require('express');
const expressHandlebars = require('express-handlebars');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Data
const icecreams = [
  { name: 'vanilla', price: 10, awesomeness: 10 },
  { name: 'chocolate', price: 4, awesomeness: 8 },
  { name: 'banana', price: 1, awesomeness: 8 },
  { name: 'green tea', price: 5, awesomeness: 3 },
  { name: 'jawbreakers', price: 6, awesomeness: 2 },
  { name: 'pistachio', price: 11, awesomeness: 1 }
];

// Routes
app.get('/icecreams/:name', (req, res) => {
  res.render(
    'icecream',
    icecreams.find(icecream => icecream.name === req.params.name)
  );
});

app.get('/icecreams', (req, res) => {
  const sortedIcecreams = icecreams.sort(
    (a, b) => a.awesomeness > b.awesomeness
  );

  res.render('icecreams', {
    icecreams: sortedIcecreams
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`)
);
