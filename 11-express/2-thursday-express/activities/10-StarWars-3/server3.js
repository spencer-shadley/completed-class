'use strict';

// ===========================================================
// Dependencies
// ===========================================================

const express = require('express');

const app = express();
const PORT = 3000;

// Data
// ===========================================================
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    midichlorianCount: 17700
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 35,
    midichlorianCount: 12000
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Master',
    age: 55,
    midichlorianCount: 1350
  }
];

// ===========================================================
// Routes
// ===========================================================

app.get('/', (req, res) => res.send('Welcome to the Star Wars Page!'));

// What does this route do?
app.get('/api/characters', function(req, res) {
  return res.json(characters);
});

// What does this route do?
app.get('/api/characters/:character', function(req, res) {
  // What does this code do?
  const chosen = req.params.character;
  console.log(chosen);

  // What does this code do?
  for (let i = 0; i < characters.length; ++i) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
  return res.send('No character found');
});

// ===========================================================
// Listener
// ===========================================================

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
