'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author: String,
  title: String
});

module.exports = mongoose.model(`Book`, BookSchema);
