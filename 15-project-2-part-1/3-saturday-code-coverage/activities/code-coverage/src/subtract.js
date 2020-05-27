'use strict';

function subtract(...nums) {
  return nums.reduce((numOne, numTwo) => numOne - numTwo);
}

module.exports = { subtract };
