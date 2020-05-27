'use strict';

// =============================================================
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// =============================================================

// =============================================================
// Dependencies
// =============================================================

// Requiring our models
const db = require(`../models`);

// =============================================================
// Routes
// =============================================================
module.exports = app => {
  // GET route for getting all of the todos
  app.get(`/api/todos`, (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(dbTodo => {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo
  app.post(`/api/todos`, (req, res) => {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    })
      .then(dbTodo => {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbTodo);
      })
      .catch(err => {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete(`/api/todos/:id`, (req, res) => {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbTodo => {
      res.json(dbTodo);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put(`/api/todos`, (req, res) => {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update(
      {
        text: req.body.text,
        complete: req.body.complete
      },
      {
        where: {
          id: req.body.id
        }
      }
    )
      .then(dbTodo => {
        res.json(dbTodo);
      })
      .catch(err => {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
