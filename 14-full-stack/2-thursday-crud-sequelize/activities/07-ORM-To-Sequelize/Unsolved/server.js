'use strict';

// Server.js - This file is the initial starting point for the Node/Express server.
//
// Dependencies
// =============================================================
const express = require(`express`);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(`public`));

// Routes
// =============================================================
require(`./routes/api-routes.js`)(app);

// Starting our Express app
// =============================================================
app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}`)
);
