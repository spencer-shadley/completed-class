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
  db.animals.find({}, (err, found) => {
    if (err) {
      console.error(err);
    } else {
      res.json(found);
    }
  });
});

app.get(`/name`, (req, res) => {
  db.animals.find().sort({ name: 1 }, (err, found) => {
    if (err) {
      console.error(err);
    } else {
      res.json(found);
    }
  });
});

app.get(`/weight`, (req, res) => {
  db.animals.find().sort({ weight: -1 }, (err, found) => {
    if (err) {
      console.error(err);
    } else {
      res.json(found);
    }
  });
});

app.get(`/bonus/name/:sort`, (req, res) => {
  db.animals.find().sort({ name: parseInt(req.params.sort) }, (err, found) => {
    if (err) {
      console.error(err);
    } else {
      res.json(found);
    }
  });
});

app.get(`/bonus/weight/:sort`, (req, res) => {
  db.animals.find().sort({ weight: parseInt(req.params.sort) }, (err, found) => {
    if (err) {
      console.error(err);
    } else {
      res.json(found);
    }
  });
});

app.get(`/bonus/heaviest`, (req, res) => {
  db.animals.find().sort({ weight: -1 }, (err, found) => {
    if (err) {
      console.error(err);
    } else {
      res.json(found[0]);
    }
  });
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
