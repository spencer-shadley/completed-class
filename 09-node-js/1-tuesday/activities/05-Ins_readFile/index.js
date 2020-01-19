'use strict'

// fs is a Node standard library package for reading and writing files
var fs = require('fs');

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// Node documentation for readFile: https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
// Wikipedia article on character encoding: https://en.wikipedia.org/wiki/Character_encoding
fs.readFile('data.csv', 'utf8', function(error, data) {
  if (error) {
    return console.log(error);
  }
  console.log(data);
});
