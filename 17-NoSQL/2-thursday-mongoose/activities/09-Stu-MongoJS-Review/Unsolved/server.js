'use strict';

// Your assignment is to define the routes below. Good luck!

const express = require(`express`);
const mongojs = require(`mongojs`);
const logger = require(`morgan`);

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

const dbName = `warmup`;
const collections = [`books`];

const db = mongojs(dbName, collections);
db.on(`error`, error => {
  console.log(`Database Error:`, error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Post a book to the mongoose database
app.post(`/submit`, ({ body }, res) => {
  console.log(res);
  // Save the request body as an object called book
  const book = body;

  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  book.hasRead = false;
});

// Find all books marked as read
app.get(`/read`, (req, res) => {
  console.log(req, res);
});

// Find all books marked as unread
app.get(`/unread`, (req, res) => {
  console.log(req, res);
});

// Mark a book as having been read
app.put(`/markread/:id`, (req, res) => {
  console.log(req, res);

  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
});

// Mark a book as having been not read
app.put(`/markunread/:id`, (req, res) => {
  console.log(req, res);

  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
});

// Listen on port 3000
app.listen(3000, () => {
  console.log(`App running on port http://localhost:3000`);
});
