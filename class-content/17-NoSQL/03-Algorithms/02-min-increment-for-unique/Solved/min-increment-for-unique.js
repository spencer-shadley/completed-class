'use strict';

// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = nums => {
  const uniqueNums = {};
  const increments = 0;

  for (let i = 0; i < nums.length; ++i) {
    while (uniqueNums[nums[i]]) {
      nums[i] += 1;
      increments++;
    }

    uniqueNums[nums[i]] = true;
  }

  return increments;
};
