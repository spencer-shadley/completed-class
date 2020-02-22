'use strict';

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
const orm = require('../config/orm.js');

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
    orm.getTodos(function(results) {
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post('/api/todos', (req, res) => {
    orm.addTodo(req.body, function(results) {
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete('/api/todos/:id', (req, res) => {
    orm.deleteTodo(req.params.id, function(results) {
      res.json(results);
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put('/api/todos', (req, res) => {
    orm.editTodo(req.body, function(results) {
      res.json(results);
    });
  });
};
