'use strict';

// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// =============================================================
// Dependencies
// =============================================================
const express = require(`express`);

const db = require(`./models`);

// =============================================================
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================

db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});
