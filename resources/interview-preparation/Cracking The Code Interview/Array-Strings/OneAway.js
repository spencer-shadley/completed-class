// **************** QUESTION DESCRIPTION **************** //

// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit(or zero edits) away.

// **************** CONSTRAINTS **************** //

// Validate only string inputs

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Two Strings
// Output: Boolean
// Outlier: Max string length

// Example:
// pale, ple --> true;
// pales, pale --> true;
// pale, bale --> true;
// pale, bake --> false;

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Break the string into hash table
// Check frequency of each character
// If it is equal to 0 or 1, true. Else false.

// **************** FUNCTION **************** //

const oneAway = (str1, str2) => {

    let hash = {};
    str1.split('').forEach(char => hash[char] = (hash[char] || 0) + 1);
    str2.split('').forEach(char => hash[char] = (hash[char] || 0) - 1);

    let sumDifference = Object.values(hash);
    let minAddition = 0;
    let minSubtraction = 0;

    for (const number of sumDifference) {
        if (number === 1) {
            minAddition++;
            if (minAddition > 1) {
                return false;
            }
        } else if (number === -1) {
            minSubtraction++;
            if (minSubtraction > 1) {
                return false;
            }
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
}


let test1 = new Test('pale / ple', true, oneAway(`pale`, `ple`));
let test2 = new Test('pales / pale', true, oneAway('pales', 'pale'));
let test3 = new Test('pale / bale', true, oneAway('pale', 'bale'));
let test4 = new Test('pale / bake', false, oneAway('pale', 'bake'));
let test5 = new Test('clippers / lakers', false, oneAway('clippers', 'lakers'));


console.table([
    test1,
    test2,
    test3,
    test4,
    test5,
])

