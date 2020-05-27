'use strict';

const db = require(`../models`);

module.exports = function(app) {
  app.get(`/api/images`, (req, res) => {
    db.Image.find({}).then(dbImages => {
      res.json(dbImages);
    });
  });

  app.get(`/api/images/:id`, (req, res) => {
    db.Image.findById(req.params.id).then(dbImage => {
      res.json(dbImage);
    });
  });


  app.put(`/api/images/:id`, (req, res) => {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(dbImage => {
      res.json(dbImage);
    });
  });
};
