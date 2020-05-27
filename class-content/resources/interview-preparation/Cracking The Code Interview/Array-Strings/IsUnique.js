// **************** QUESTION DESCRIPTION **************** //

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// **************** CONSTRAINTS **************** //

// None

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: String
// Output: Boolean
// Edge: Max overflow string length

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Create a set of each letter used as we iterate through the string.
// To solve without an additional data structure, you would have to brute force it by O(n^2).

// **************** FUNCTION **************** //

const isUnique = (str) => {

    const uniqueSet = new Set();

    for (const letter of str) {
        if (uniqueSet.has(letter)) {
            return false;
        } else {
            uniqueSet.add(letter);
        }
    }
    return true;
};

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
};

let test1 = new Test('Test 1', true, isUnique('abcd'));
let test2 = new Test('Test 2', false, isUnique('aabcdd'));
let test3 = new Test('Test 3', true, isUnique('abcdefghijk'));

console.table([
    test1,
    test2,
    test3,
]);
