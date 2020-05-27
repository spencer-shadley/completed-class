'use strict';

const express = require('express');

const PORT = process.env.PORT || 8000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expressHandlebars = require('express-handlebars');

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgersController.js');

app.use(routes);

app.listen(PORT, () => {
  console.log('Listening on port:%s', PORT);
});
