/* 
**************** QUESTION DESCRIPTION ************************ 

    Given an array of integers and an integer k.
    Find the total number of continuous subarrays whose sum equals to k.
    If no matches found, return Infinity

**************** CONSTRAINTS ********************************

   Array only contains integers

***************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Array, Integer
    Output: Integer
    Edge/Outlier: Empty, Overflow 

***************** EXAMPLES ************************************

    Input:  [1, 1, 3, 1], 2
    Output: 1

    arr[0] + arr[1] = 2
    1 + 1 = 2

    ************************************************************

    Input: [1, 1, 1], 2
    Output: 2

    arr[0] + arr[1] = 2
    1 + 1 = 2

    arr[1] + arr[2] = 2
    1 + 1 = 2

    ************************************************************

    Input: [1, 1, 2, 1, 3, 1, 1], 2
    Output: 3

    arr[0] + arr[1] = 2
    1 + 1 = 2

    arr[2] = 2
    2 = 2

    arr[5] + arr[6] = 2
    1 + 1 = 2

***************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

    Create a rolling sum.
    Check to see if that hash[tempSum - k] exists, increment result if so.
    Hash at each interval, tempSum.

***************** FUNCTION ********************************  */

function subArraySum(arr, k) {

    let hash = {};
    hash[0] = 1;

    let tempSum = 0;
    let result = 0;

    for (const number of arr) {

        tempSum += number;
        const tempTotal = tempSum - k;

        result += (hash[tempTotal] || 0);
        hash[tempSum] = (hash[tempSum] || 0) + 1;
    }

    return (result === 0) ? Infinity : result
}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 1, subArraySum([1, 1, 3, 1], 2));
let test2 = new Test('Test 2', 2, subArraySum([1, 1, 1], 2));
let test3 = new Test('Test 3', 3, subArraySum([1, 1, 2, 1, 3, 1, 1], 2));
let test4 = new Test('Test 4', Infinity, subArraySum([], 2));

console.table([
    test1,
    test2,
    test3,
    test4,
]);
