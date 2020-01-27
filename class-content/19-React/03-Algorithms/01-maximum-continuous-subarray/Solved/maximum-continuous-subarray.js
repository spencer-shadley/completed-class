'use strict';

// Write a function that takes in an array and returns the sum of the maximum continuous subarray

const subSubArray = function(arr) {
  const max = arr[0];
  const currentMax = arr[0];

  for (let i = 0; i < arr.length; ++i) {
    const num = arr[i];

    currentMax = Math.max(currentMax + num, num);
    max = Math.max(max, currentMax);
  }

  return max;
};
