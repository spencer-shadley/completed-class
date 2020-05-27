/* 
**************** QUESTION DESCRIPTION ***********************

    Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

******************** CONSTRAINTS ****************************

    length will not exceeed 50,000

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of integers)
    Output: Integer
    Edge/Outlier: Empty, All of 1 digit

********************** EXAMPLES *****************************

    Input: [0,1]
    Output: 2
    Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

    Input: [0,1,0]
    Output: 2
    Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Create a varaible called count, which tracks current level.
    For each 1, increment. For each 0, decrement.
    Use a hashmap to see if you've reached that level before. 


******************** FUNCTION ****************************  */

function contigiousArray(arr) {

    const length = arr.length;
    let maxLength = 0;
    let count = 0;
    let map = new Map();
    map.set(0, -1)

    for (let i = 0; i < length; ++i) {
        count += arr[i] === 1 ? 1 : -1;
        if (map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count))
        } else {
            map.set(count, i)
        }
    }
    return maxLength
}

console.log(contigiousArray([0, 0, 1, 0, 0, 0, 1, 1]))

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
