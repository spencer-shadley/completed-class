'use strict';

// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

const sortedSquares = function(arr) {
  const result = new Array(arr.length);

  const idx1 = 0;
  const idx2 = arr.length - 1;
  const idx3 = result.length - 1;

  while (idx1 <= idx2) {
    const left = arr[idx1];
    const right = arr[idx2];

    if (Math.abs(left) > Math.abs(right)) {
      result[idx3] = left ** 2;
      idx1++;
    } else {
      result[idx3] = right ** 2;
      idx2--;
    }

    idx3--;
  }

  return result;
};

// Alternate solution (less efficient)

// const sortedSquares = function(arr) {
//   const squares = arr.map(function(num) {
//     return num ** 2;
//   });

//   const sortedSquares = squares.sort(function(a, b) {
//     return a - b;
//   });

//   return sortedSquares;
// };
