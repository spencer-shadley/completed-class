'use strict';

// ===========================================================
// Dependencies
// ===========================================================

const express = require('express');

const app = express();
const PORT = 3000;

// Data
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
    role: 'Jedi Knight',
    age: 60,
    midichlorianCount: 13400
  }
];

// ===========================================================
// Routes
// ===========================================================
app.get('/', (req, res) => res.send('Welcome to the Star Wars Page!'));

app.get('/:character', (req, res) => {
  const chosen = req.params.character;

  // What does this log?
  console.log(chosen);

  res.end();
});

// ===========================================================
// Listener
// ===========================================================

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
