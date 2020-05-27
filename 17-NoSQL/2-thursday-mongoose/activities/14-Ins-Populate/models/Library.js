'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: `Book`
    }
  ]
});

module.exports = mongoose.model(`Library`, LibrarySchema);
