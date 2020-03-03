'use strict';

function add(...nums) {
  return nums.reduce((numOne, numTwo) => numOne + numTwo);
}

module.exports = { add };
