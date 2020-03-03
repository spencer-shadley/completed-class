'use strict';

const express = require(`express`);

const app = express();
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
  const sum = add('1', '2');
  res.json({ sum });
});

app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}`)
);

function add(...nums) {
  nums.reduce((numOne, numTwo) => numOne + numTwo);
}
