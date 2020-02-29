'use strict';

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// =============================================================
// Dependencies
// =============================================================

// Requiring our Todo model
// eslint-disable-next-line no-unused-vars
const db = require(`../models`);

// Routes
// =============================================================
module.exports = app => {
  // GET route for getting all of the todos
  app.get(`/api/todos`, (req, res) => {
    db.Todo.findAll({}).then(dbTodo => {
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post(`/api/todos`, (req, res) => {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(dbTodo => {
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete(`/api/todos/:id`, (req, res) => {
    console.log(req, res);
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put(`/api/todos`, (req, res) => {
    console.log(req, res);
  });
};
