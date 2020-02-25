'use strict';

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
// eslint-disable-next-line no-unused-vars
const db = require(`../models`);

// Routes
// =============================================================
module.exports = app => {
  // GET route for getting all of the posts
  app.get(`/api/posts`, (req, res) => {
    // Add sequelize code to find all posts, and return them to the user with res.json
    console.log(req, res);
  });

  // Get route for returning posts of a specific category
  app.get(`/api/posts/category/:category`, (req, res) => {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    console.log(req, res);
  });

  // Get route for retrieving a single post
  app.get(`/api/posts/:id`, (req, res) => {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    console.log(req, res);
  });

  // POST route for saving a new post
  app.post(`/api/posts`, (req, res) => {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    console.log(req, res);
  });

  // DELETE route for deleting posts
  app.delete(`/api/posts/:id`, (req, res) => {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json
    console.log(req, res);
  });

  // PUT route for updating posts
  app.put(`/api/posts`, (req, res) => {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    console.log(req, res);
  });
};
