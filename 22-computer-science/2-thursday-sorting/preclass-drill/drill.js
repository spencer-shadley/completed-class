/*
**************** QUESTION DESCRIPTION ************************

  Given an array of integers, find the beginning and ending
  indices (inclusive) of the subarray with the largest summed
  value.
***************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Array (of integers)
    Output: Array of two indices
    Edge/Outlier: empty-array

***************** EXAMPLE ************************************

    Input: [-2, 1, 3, 1, -4, 5]
    Output: [1, 3], as the subarray with the highest sum is
            [1, 3, 1]

***************** PSEUDO CODE SOLUTION / BRAINSTORM ***********


**************** FUNCTION ********************************  */

const kadanesIndices = arr => {

  //              Your code here .....

};


// **************** TESTING ******************************** //
const assert = require(`assert`);
const tests = [
  [[1, 3, -4, -2, 5, -1, 5], [4, 6]],
  [[], [0, 0]],
  [[2], [0, 0]],
  [[-3, 1, -2, -1, -5], [1, 1]],
  [[3, 7, -1, 4], [0, 3]]
]

tests.forEach((test, i) => {
  try {
    assert.deepStrictEqual(kadanesIndices(test[0]), test[1]);
    console.log(`test ${i} passed`);
  }
  catch ({ expected, actual }){
    console.log(`test ${i} failed. expected ${expected}, got ${actual}`);
  }
})
