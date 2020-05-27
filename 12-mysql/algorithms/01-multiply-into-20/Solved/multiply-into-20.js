'use strict';

// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

const multiplyInto20 = function(arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; ++i) {
    const currentNum = arr[i];

    const neededNumber = 20 / currentNum;

    if (numMap[neededNumber]) {
      return true;
    } else {
      numMap[currentNum] = true;
    }
  }

  return false;
};
