'use strict';

var fs = require('fs');

var shouldAppend = process.argv[2] === 'append';
var fileName = process.argv[3];
var contents = process.argv[4];

// we add a newline character to the command line argument

fs[shouldAppend ? 'appendFile' : 'writeFile'](
  fileName,
  contents + '\n',
  function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Commit logged!');
    }
  }
);
