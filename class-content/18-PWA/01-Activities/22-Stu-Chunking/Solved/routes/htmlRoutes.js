'use strict';

const path = require('path');

module.exports = app => {
  app.get('/images/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/detail.html'));
  });

  app.get('/favorites', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/favorites.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
