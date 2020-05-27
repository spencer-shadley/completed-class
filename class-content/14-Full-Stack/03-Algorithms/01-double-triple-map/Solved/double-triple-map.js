'use strict';

// Write code to create a function that accepts an array of numbers
// and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same
// index in the new array should be double the original element
// If an element in the original array is odd, the element at the same
// index of the new array should be triple the original element

function doubleTripleMap(arr) {
  const doubleTripleArr = arr.map(num => {
    if (num % 2 === 0) {
      return num * 2;
    }
    return num * 3;
  });

  return doubleTripleArr;
}

// This could also be achieved using a for-loop

// const doubleTripleMap = function(arr) {
//   const doubleTripleArr = [];

//   for (let i = 0; i < arr.length; ++i) {
//     const num = arr[i];

//     if (num % 2 === 0) {
//       doubleTripleArr.push(num * 2);
//     } else {
//       doubleTripleArr.push(num * 3);
//     }
//   }
//   return doubleTripleArr;
// };

module.exports = doubleTripleMap;
