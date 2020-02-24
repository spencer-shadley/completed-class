'use strict';

// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

const commonElement = function(arrA, arrB) {
  const elements = {};

  for (let i = 0; i < arrA.length; ++i) {
    const num = arrA[i];
    elements[num] = true;
  }

  for (let i = 0; i < arrB.length; ++i) {
    const num = arrB[i];

    if (elements[num] ) {
      return num;
    }
  }
};

// This could also be achieved using a Set data structure

// const commonElement = function(arrA, arrB) {
//   const elements = new Set();

//   for (let i = 0; i < arrA.length; ++i) {
//     const num = arrA[i];
//     elements.add(num);
//   }

//   for (let i = 0; i < arrB.length; ++i) {
//     const num = arrB[i];

//     if (elements.has(num)) {
//       return num;
//     }
//   }
// };
