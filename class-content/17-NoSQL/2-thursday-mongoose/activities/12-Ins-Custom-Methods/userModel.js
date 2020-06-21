'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: `Username is Required`
  },

  password: {
    type: String,
    trim: true,
    required: `Password is Required`,
    validate: [({ length }) => length >= 6, `Password should be longer.`]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, `Please enter a valid e-mail address`]
  },

  userCreated: {
    type: Date,
    default: Date.now
  },

  isCool: {
    type: Boolean,
    default: false
  }
});

UserSchema.methods.coolifier = function() {
  this.username = `${this.username} is the coolest!`;
  return this.username;
};

UserSchema.methods.makeCool = function() {
  this.isCool = true;
  return this.isCool;
};

module.exports = mongoose.model(`User`, UserSchema);