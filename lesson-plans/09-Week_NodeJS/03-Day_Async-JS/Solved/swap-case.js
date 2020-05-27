'use strict';

// Write code to create a function takes a string and returns the string with all of the letter cases swapped

const swapCase = str => {
  let result = '';
  for (const letter of str) {
    result +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
  }
  return result;
};
