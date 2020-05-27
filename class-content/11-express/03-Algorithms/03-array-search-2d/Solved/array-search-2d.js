'use strict';

// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

const arraySearch2D = function(arr) {
  const count = 0;

  for (let i = 0; i < arr.length; ++i) {
    for (const k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === 'X') {
        count++;
      }
    }
  }

  return count;
};
