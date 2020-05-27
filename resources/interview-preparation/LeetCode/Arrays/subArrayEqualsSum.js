/* 
**************** QUESTION DESCRIPTION ***********************

    Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

******************** CONSTRAINTS ****************************

    The length of the array is in range [1, 20,000].
    The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array, Integer
    Output: Integer
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input: [1, 1, 1], 2
    Output: 2
    Explanation:
        1 + 1 = 2
        arr[0] + arr[1]
        1 + 1 = 2
        arr[1] + arr[2]

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Use a hashmap to index / cumulative sum
        We are going to store a cumulative sum and index 
        We check if cumulative sum - target is inside hashmap
        If true, add to result
    Return the total times we found pairs

******************* Time / Space *****************************

    Time: O(n)
    Space: O(n)

******************** FUNCTION ****************************  */

function subArray(arr, k) {

    let hash = {};
    hash[0] = 1;

    let tempSum = 0;
    let result = 0;

    for (const number of arr) {

        tempSum += number;
        let tempTotal = tempSum - k;

        result += (hash[tempTotal] || 0);
        hash[tempSum] = (hash[tempSum] || 0) + 1;
    }

    console.log(hash)

    return result;

}

console.log(subArray([1, 2, 3, 1, 1, 3, 5], 5))

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
let test4 = new Test('Test 4');

// console.table([
//     test1,
//     test2,
//     test3,
//     test4,
// ]);
