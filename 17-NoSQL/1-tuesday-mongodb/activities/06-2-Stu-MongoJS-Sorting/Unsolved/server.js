'use strict';

const express = require(`express`);
const mongojs = require(`mongojs`);

const app = express();

const dbName = `farm`;
const collections = [`animals`];

const db = mongojs(dbName, collections);

db.on(`error`, error => {
  console.log(`Database Error:`, error);
});

app.get(`/`, (req, res) => {
  res.send(`Hello world`);
});

app.get(`/all`, (req, res) => {
  db.animals.find({}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.json(data);
    }
  });
});

// TODO: Implement the remaining two routes

// 1: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"

// 2: Weight: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"

// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log(`App running on port http://localhost:3000`);
});
