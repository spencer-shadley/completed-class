'use strict';

// ===========================================================
// Dependencies
// ===========================================================

const express = require('express');
const path = require('path');

// =============================================================
// Setup
// =============================================================

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
// DATA
// =============================================================

let characters = [
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

// =============================================================
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) =>
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, 'view.html'))
);

// Displays all characters
app.get('/api/characters', (req, res) => res.json(characters));

// Displays a single character, or returns false
app.get('/api/characters/:character', (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  for (let character of characters) {
    if (character.routeName === chosen) {
      return res.json(character);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post('/api/characters', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

// ===========================================================
// Listener
// ===========================================================

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
