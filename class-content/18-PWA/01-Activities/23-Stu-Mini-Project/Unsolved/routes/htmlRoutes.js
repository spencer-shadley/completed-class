'use strict';

const path = require('path');

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
  app.get('/topic', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/topic.html'));
  });
  app.get('/favorites', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/favorites.html'));
  });
};
