'use strict';

const fs = require('fs');

fs.readFile('animals.json', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
});
