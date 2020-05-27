// **************** QUESTION DESCRIPTION **************** //

// Given two strings, write a method to decide if one is a permutation of the other one.

// **************** CONSTRAINTS **************** //

// Validate they are strings

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Two Strings
// Output: Boolean
// Outlier: Max string lengths

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Create a hashmap of letters
// Compare second string to hashmap values

// **************** FUNCTION **************** //

const permutation = (a, b) => {

    if (a.length !== b.length) {
        return false;
    };

    let hash = {};
    a.split('').forEach(char => hash[char] = (hash[char] || 0) + 1);
    b.split('').forEach(char => hash[char] = (hash[char] || 0) - 1);

    for (const number of Object.values(hash)) {
        if (number !== 0) {
            return false;
        };
    };
    return true;
};

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('abcd / dcba', true, permutation('abcd', 'dcba'));
let test2 = new Test('aabb / abcd', false, permutation('aabb', 'abcd'));
let test3 = new Test('racecar / rraacce', true, permutation('racecar', 'rraacce'));
let test4 = new Test('aabbcd / abcdc', false, permutation('aabbcd', 'abcdc'));
let test5 = new Test('lakers / clippers', false, permutation('lakers', 'clippers'));

console.table([
    test1,
    test2,
    test3,
    test4,
    test5,
]);
