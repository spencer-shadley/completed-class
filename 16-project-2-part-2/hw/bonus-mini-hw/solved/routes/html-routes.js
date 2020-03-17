'use strict';

const db = require(`../models`);

module.exports = app => {
  app.get(`/view-todos`, (req, res) => {
    db.Todo.findAll({}).then(dbTodos => {
      const sanitizedTodos = dbTodos.map(todo => todo.dataValues);
      console.log(sanitizedTodos);
      res.render(`todos`, {todos: sanitizedTodos});
    }).catch(err => {
      console.error(err);
      res.json(err);
    });
  });

  app.get(`/myhtml`, (req, res) => {
    res.send(`<h1>I'm HTML!</h1>`);
  });
};
