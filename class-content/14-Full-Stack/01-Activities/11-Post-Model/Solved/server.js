'use strict';

// =============================================================
// Dependencies
// =============================================================

const express = require(`express`);

const isDebug = !process.env.NODE_ENV || process.env.NODE_ENV === `development`;

// =============================================================
// Sets up the Express App
// =============================================================

const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
const db = require(`./models`);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: isDebug }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});
