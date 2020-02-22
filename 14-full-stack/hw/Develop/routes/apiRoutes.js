'use strict';

const db = require('../models');

module.exports = function(app) {
  // Get all examples
  app.get('/api/examples', (req, res) => {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post('/api/examples', (req, res) => {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete('/api/examples/:id', (req, res) => {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
