'use strict';

function findSumIndices(target, nums) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

module.exports = { findSumIndices };
