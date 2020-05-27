'use strict';

// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

const linearSearch = function(arr, target) {
  for (let i = 0; i < arr.length; ++i) {
    const currentNumber = arr[i];

    if (currentNumber === target) {
      return i;
    }
  }

  return -1;
};
