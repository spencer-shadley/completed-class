'use strict';

// ===========================================================
// Dependencies
// ===========================================================

const express = require('express');

const app = express();
const PORT = 3000;

// ===========================================================
// Data
// =================================
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

// Displays all characters
app.get('/api/characters', (req, res) => res.json(characters));

// Displays a single character, or shows "No character found"
app.get('/api/characters/:character', (req, res) => {
  // Grab the selected parameter
  const chosen = req.params.character;
  console.log(chosen);

  // Filter to show only the selected character
  for (let i = 0; i < characters.length; ++i) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // Otherwise display "No character found"
  return res.send('No character found');
});

// ===========================================================
// Listener
// ===========================================================

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
