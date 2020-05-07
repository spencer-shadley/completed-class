/* 
**************** QUESTION DESCRIPTION ************************ 

    Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 **************** CONSTRAINTS ********************************



 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Array
    Output: Integer
    Edge/Outlier:   

 **************** EXAMPLES ************************************

    Input:  [-2, 1,-3, 4,-1, 2, 1,-5, 4],
    Output: 6

    Input: 
    Output:

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

    Kadanes Algorithm

 **************** FUNCTION ********************************  */

function maxSubArray(arr) {

    const length = arr.length;
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for (let i = 1; i < length; ++i) {

        maxCurrent = Math.max(arr[i], arr[i] + maxCurrent);
        maxGlobal = Math.max(maxCurrent, maxGlobal);

    }

    return maxGlobal;
}


// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1');
let test2 = new Test('Test 2');
let test3 = new Test('Test 3');

// console.table([
//     test1,
//     test2,
//     test3,
// ]);
