'use strict';

const db = require('../models');

module.exports = function(app) {
  app.get('/api/posts', (req, res) => {
    db.Post.find({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  app.put('/api/posts/:id', (req, res) => {
    db.Post.updateOne({ _id: req.params.id }, { likes: req.body.likes }).then(
      function(dbPost) {
        res.json(dbPost);
      }
    );
  });
};
