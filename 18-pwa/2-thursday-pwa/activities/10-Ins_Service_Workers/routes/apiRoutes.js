'use strict';

const db = require(`../models`);

module.exports = app => {
  app.get(`/api/posts`, (req, res) => {
    db.Post.find({}).then(dbPosts => {
      res.json(dbPosts);
    });
  });

  app.put(`/api/posts/:id`, (req, res) => {
    db.Post.updateOne({ _id: req.params.id }, { likes: req.body.likes }).then(dbPost => {
      res.json(dbPost);
    });
  });
};
