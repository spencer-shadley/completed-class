'use strict';

// Write code to merge two sorted arrays into a new sorted array

const mergeSorted = function(arr1, arr2) {
  const result = [];

  const idx1 = 0;
  const idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    const num1 = arr1[idx1];
    const num2 = arr2[idx2];

    if (num1 < num2) {
      result.push(num1);
      idx1++;
    } else {
      result.push(num2);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    const num1 = arr1[idx1];
    result.push(num1);
    idx1++;
  }

  while (idx2 < arr2.length) {
    const num2 = arr2[idx2];
    result.push(num2);
    idx2++;
  }

  return result;
};
