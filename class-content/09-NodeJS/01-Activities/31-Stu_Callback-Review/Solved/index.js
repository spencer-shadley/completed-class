'use strict';

const fs = require('fs');

function writeAnimal(fileName, animal) {
  // Turn the arrays into JSON strings so they can be written to files
  const json = JSON.stringify(animal, null, 2);

  fs.writeFile(fileName, json, err => {
    if (err) {
      throw err;
    }

    console.log(`Successfully wrote to ${fileName} file`);
  });
}

fs.readFile('animals.json', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  // For each element in animal
  for (const animal of animalJSON) {
    if (animal.species === 'dog') {
      dogs.push(animal);
    } else if (animal.species === 'cat') {
      cats.push(animal);
    }
  }

  writeAnimal('dogs.json', dogs);
  writeAnimal('cats.json', cats);
});
