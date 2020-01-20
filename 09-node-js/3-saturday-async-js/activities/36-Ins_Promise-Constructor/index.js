'use strict';

const fs = require('fs');

function readFileAsync(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
}

readFileAsync('example.txt', 'utf8')
  .then(console.log)
  .catch(console.error);
