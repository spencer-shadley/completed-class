'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  body: String
});

module.exports = mongoose.model(`Note`, NoteSchema);
