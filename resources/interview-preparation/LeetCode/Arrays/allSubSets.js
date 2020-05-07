// **************** QUESTION DESCRIPTION **************** //

// Given an array of numbers
// Create all unique subsets of the given array
// [] counts as a subset

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

// The solution is Math.pow(n, 2)
// The recursive solution will call itself twice
// One call inclusive, one call exclusive

// **************** FUNCTION **************** //

function getAllSubsets(array) {

    const result = [];

    rec(0, [], array, result);

    return result;
}

function rec(i, temp, array, result) {
    // console.log(`At ${i}, this is temp: ${temp}`)
    if (i === array.length) {
        result.push(temp)
        return;
    }
    rec(i + 1, temp.concat([array[i]]), array, result);
    rec(i + 1, temp, array, result);
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
