/* 
**************** QUESTION DESCRIPTION ************************ 

  Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

 **************** CONSTRAINTS ********************************

  Positive and Negative Integers

 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Array, Integer
    Output: Array
    Edge/Outlier: 

 **************** EXAMPLES ************************************

    Input:  
    Output:

    Input: 
    Output:

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

  Hash map 


 **************** FUNCTION ********************************  */

function sumOfPairs(arr, sum) {

  let hash = {};

  for (const number of arr) {

    if (hash[sum - number]) {
      return [sum - number, number]
    };

    hash[number] = true;
  }
  return Infinity;
}


// **************** TESTING ******************************** //

class Test {
  constructor(testInput, expectedResult, actualResult) {
    this.testInput = testInput;
    this.expectedResult = expectedResult;
    this.actualResult = actualResult;
  };
};

let l1 = [1, 4, 8, 7, 3, 15];
let l2 = [1, -2, 3, 0, -6, 1];
let l3 = [20, -13, 40];
let l4 = [1, 2, 3, 4, 1, 0];

let test1 = new Test('Test 1', [1, 7], sumOfPairs([1, 4, 8, 7, 3, 15], 8));
let test2 = new Test('Test 2', [0, -6], sumOfPairs([1, -2, 3, 0, -6, 1], -6));
let test3 = new Test('Test 3', [20, -13], sumOfPairs([20, -13, 40], 7));
let test4 = new Test('Test 4', [1, 1], sumOfPairs([1, 2, 3, 4, 1, 0], 2));
let test5 = new Test('Test 5', Infinity, sumOfPairs([], 8));

console.table([
  test1,
  test2,
  test3,
  test4,
  test5
]);
