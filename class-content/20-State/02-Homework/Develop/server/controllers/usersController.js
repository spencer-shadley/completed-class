'use strict'

const db = require('../models');

// Defining methods for the productsController
module.exports = {
  signUp: function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(data => res.json(data))
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  }
};
