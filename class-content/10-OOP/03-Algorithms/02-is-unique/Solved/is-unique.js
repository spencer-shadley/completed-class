'use strict';

// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

const isUnique = function(arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; ++i) {
    const currentNumber = arr[i];

    if (numMap[currentNumber] ) {
      return false;
    }

    numMap[currentNumber] = true;
  }

  return true;
};
