'use strict';

// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

const noMoreThanPrevious = function(str) {
  const letterCount = {};

  const currentLetter = arr[0];
  const prevLetter;
  for (const i = 1; i < str.length; ++i) {
    const letter = str[i];
    letterCount[letter] = (letterCount[letter] || 0) + 1;

    if (prevLetter) {
      if (letterCount[letter] > letterCount[letter]) {
        return false;
      }
    }
  }
};
