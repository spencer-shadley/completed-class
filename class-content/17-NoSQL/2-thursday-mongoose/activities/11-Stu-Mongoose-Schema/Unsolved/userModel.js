'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
});

module.exports = mongoose.model(`User`, UserSchema);