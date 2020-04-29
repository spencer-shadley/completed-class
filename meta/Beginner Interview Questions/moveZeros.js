/* 
**************** QUESTION DESCRIPTION ************************ 

    Given an array integers; write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 **************** CONSTRAINTS ********************************



 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Array
    Output: Array
    Edge/Outlier: Empty, Null, Overflow

 **************** EXAMPLES ************************************

    Input:  [0, 1, 0, 3, 12]
    Output: [1, 3, 12, 0, 0]

    Input: [0, 0, 1]
    Output: [1, 0, 0]

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

    Splice Method
    Count zeros cut
    Add them all back at the end

 **************** FUNCTION ********************************  */

function moveZeros(arr) {

    let zeroCount = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            zeroCount++;
            i--;
        }
    }
    for (let i = 0; i < zeroCount; ++i) {
        arr.push(0);
    }

    return arr;
}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', [1, 0, 0], moveZeros([0, 1, 0]));
let test2 = new Test('Test 2', [1, 3, 12, 0, 0], moveZeros([0, 1, 0, 3, 12]));
let test3 = new Test('Test 3', [1, 5, 2, 0, 0], moveZeros([0, 1, 5, 0, 2]));

console.table([
    test1,
    test2,
    test3,
]);
