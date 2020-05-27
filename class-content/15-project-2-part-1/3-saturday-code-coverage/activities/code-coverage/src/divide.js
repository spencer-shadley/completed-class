'use strict';

function divide(...nums) {
  return nums.reduce((numOne, numTwo) => numOne / numTwo);
}

module.exports = { divide };
