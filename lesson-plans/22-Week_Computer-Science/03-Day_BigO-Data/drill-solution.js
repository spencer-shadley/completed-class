// **************** QUESTION DESCRIPTION **************** //

// Given an array, return the longest contigious sub-array within the array.

// **************** CONSTRAINTS ************************* //

// The array only contains numbers 

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Array
// Output: Array
// Edge/Outlier: Overflow

// **************** EXAMPLE **************** //

// Input: [-3, 7, 3, -10, -5, 4, 6, -4, 10, 8]
// Output: 24
// 4 + 6 -4 + 10 + 8

// Input: [6, -3, 4, 2, 1, 3, -2, 5, 7, 10]
// Output: 33
// 6 - 3 + 4 + 2 + 1 + 3 - 2 + 5 + 7 + 10
// I randomly generated these online and its the entire array length. Neat. 

// Input: [-4, 3, -2, 10, -5, 9, 1, 6, 8, 4]
// Output: 34
// 3 + -2 + 10 + -5 + 9 + 1 + 6 + 8 + 4 = 34

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Kadane's algorotihm is used to isolate the mex sub-array within an array.
// Starting from the beginning, creates maximums for each index. 
// Upon each extra iteration, add more to the bracket
// Create a rolling globalMax

// **************** FUNCTION **************** //


const maxSubArray = (arr) => {

    const length = arr.length;
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for (let i = 1; i < length; ++i) {

        maxCurrent = Math.max(arr[i], arr[i] + maxCurrent);

        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        };
    }
    return maxGlobal;
}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};


let test1 = new Test('Test 1', 24, maxSubArray([-3, 7, 3, -10, -5, 4, 6, -4, 10, 8]));
let test2 = new Test('Test 2', 33, maxSubArray([6, -3, 4, 2, 1, 3, -2, 5, 7, 10]));
let test3 = new Test('Test 3', 34, maxSubArray([-4, 3, -2, 10, -5, 9, 1, 6, 8, 4]));

console.table([
    test1,
    test2,
    test3,
]);
