'use strict';

function multiply(...nums) {
  return nums.reduce((numOne, numTwo) => numOne * numTwo);
}

module.exports = { multiply };
