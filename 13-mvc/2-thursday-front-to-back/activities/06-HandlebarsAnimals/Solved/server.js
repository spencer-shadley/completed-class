'use strict';

const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const animals = [
  {
    animalType: 'dog',
    pet: true,
    fierceness: 4
  },
  {
    animalType: 'cat',
    pet: true,
    fierceness: 100
  },
  {
    animalType: 'hedgehog',
    pet: true,
    fierceness: 6
  },
  {
    animalType: 'lion',
    pet: false,
    fierceness: 10
  },
  {
    animalType: 'zebra',
    pet: false,
    fierceness: 8
  }
];

app.get('/dog', (req, res) => {
  // Handlebars requires an object to be sent to the dog handlebars file.
  // Lucky for us, animals[0] is an object!

  // 1. send the dog object from the animals array to the dog handlebars file.
  res.render('dog', animals[0]);

  // bonus: search for the dog in case it moves around in the array
  // res.render(
  //   'dog',
  //   animals.find(animal => animal.animalType === 'dog')
  // );
});

app.get('/all-pets', (req, res) => {
  // 2. Find all pets and send them to the index handlebars file
  let pets = animals.filter(animal => animal.pet);

  // bonus: sort by fierceness
  // pets = sortByFierceness(pets);

  // Handlebars expects an object to be sent to the index handlebars file.
  res.render('index', { animals: pets });
});

app.get('/all-non-pets', (req, res) => {
  // 3. Loop through the animals, and send those that are not pets to the index handlebars file.
  let nonPets = animals.filter(animal => !animal.pet);

  // bonus: sort by fierceness
  // nonPets = sortByFierceness(pets);

  // Handlebars expects an object to be sent to the index handlebars file.
  res.render('index', { animals: nonPets });
});

// bonus: sort by fierceness
function sortByFierceness(animals) {
  return animals.sort((a, b) => a.fierceness - b.fierceness);
}

app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}`)
);
