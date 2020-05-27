/* eslint-disable no-magic-numbers */
'use strict';

/*
**************** QUESTION DESCRIPTION ************************

    Given an array of integers, find the subset of non-adjacent elements with the maximum sum.
    Calculate the sum of that subset.
    If the array is empty, output: Infinity

***************** CONSTRAINTS ********************************


***************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Array (of integers)
    Output: Integer (Sum of max subset)
    Edge/Outlier: Overflow, empty-array

***************** EXAMPLES ************************************

    Input: [-2, 1, 3, -4, 5]
    Output: 8
        [3, 5]
        3 + 5 = 8

    Input: [3, 7, 4, 6, 5]
    Output:  13
        [7, 6]
        7 + 6 = 13

    Input: [2, 1, 5, 8, 4]
    Output:  11
        [2, 5, 4]
        2 + 5 + 4 = 11

***************** PSEUDO CODE SOLUTION / BRAINSTORM ***********


**************** FUNCTION ********************************  */

//              Your code here .....


// **************** TESTING ******************************** //
class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}

const test1 = new Test(`Test 1`, 8, maxSubsetSum([-2, 1, 3, -4, 5]));
const test2 = new Test(`Test 2`, 13, maxSubsetSum([3, 7, 4, 6, 5]));
const test3 = new Test(`Test 3`, 11, maxSubsetSum([2, 1, 5, 8, 4]));
const test4 = new Test(`Test 4`, Infinity, maxSubsetSum([]));

console.table([
    test1,
    test2,
    test3,
    test4
]);

