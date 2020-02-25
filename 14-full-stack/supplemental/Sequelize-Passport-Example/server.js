'use strict';

const express = require('express');
const db = require('./models');

const PORT = process.env.PORT || 3000;
const app = express();

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
});
