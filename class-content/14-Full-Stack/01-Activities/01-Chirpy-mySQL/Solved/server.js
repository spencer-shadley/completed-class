'use strict';

// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require(`express`);
const routes = require(`./app/routes/api-routes.js`);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static(`app/public`));

// Routes
// =============================================================
routes(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}`)
);
