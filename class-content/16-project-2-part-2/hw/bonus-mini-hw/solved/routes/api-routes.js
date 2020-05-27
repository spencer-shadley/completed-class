'use strict';

const db = require(`../models`);

module.exports = app => {
  app.get(`/alltodos`, (req, res) => {
    db.Todo.findAll({}).then(dbTodos => {
      res.json(dbTodos);
    }).catch(err => {
      console.error(err);
      res.json(err);
    });
  });

  app.post(`/addtodo`, (req, res) => {
    db.Todo.create({
      text: `temp TODO`
    }).then(dbTodo => {
      const statusCreated = 201;
      res.status(statusCreated).send(dbTodo);
    }).catch(err => {
      console.error(err);
      res.json(err);
    });
  });

  app.get(`/myroute`, (req, res) => {
    res.send(`hey, you hit my route!`);
  });
};
