'use strict';

var fs = require('fs');

fs.writeFile('log.txt', 'hello world!', err => {
  if (err) {
    return console.error(err);
  }
  console.log('Success!');
});
