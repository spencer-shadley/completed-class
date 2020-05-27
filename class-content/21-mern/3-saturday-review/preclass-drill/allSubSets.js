// **************** QUESTION DESCRIPTION **************** //

// Given an array of numbers
// Create all unique subsets of the given array
// [] counts as a subset
// Should return Math.pow(2, n) solutions

// **************** CONSTRAINTS ************************* //

// Only contains numbers
// Small range

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Array (Of Integers)
// Output: Array (of Arrays)
// Edge/Outlier:

// **************** EXAMPLE **************** //

// Input: [1]
// Output: [[1], []]

// Input: [1,2]
// Output: [[1,2], [1], [2], []]

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Should return Math.pow(2, n) solutions.
// **HINT** This will call itself two separate times recursively (inclusive/exclusive)

// **************** FUNCTION **************** //

const getAllSubsets = array => {

    // Your code goes here

}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let answer1 = [[1], []];
let answer2 = [[1, 2], [1], [2], []];
let answer3 = [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []];


let test1 = new Test('Test 1', 2, getAllSubsets([1]).length);
let test2 = new Test('Test 2', 4, getAllSubsets([1, 2]).length);
let test3 = new Test('Test 3', 8, getAllSubsets([1, 2, 3]).length);

console.table([
    test1,
    test2,
    test3,
]);
