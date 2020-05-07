// **************** QUESTION DESCRIPTION **************** //

// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the addition characters, and that you are given the 'true' length of the string.

// **************** CONSTRAINTS **************** //

// Validate string inputs
// Stack overflow

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: String
// Output: String
// Edge/Outlier: 

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Example:
// Input: "Mr. John Smith     "
// Output: "Mr%20John%20Smith"

// Create a regex matching pattern for all space
// Replace all regex pattern with '%20'

// **************** FUNCTION **************** //

const urlify = str => {
    let regex = /\s/g;
    return str.trim().replace(regex, '%20');
}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Mr. John Smith     ', 'Mr.%20John%20Smith', urlify('Mr. John Smith     '));
let test2 = new Test('Hello World', 'Hello%20World', urlify('Hello World'));
let test3 = new Test('No pineapple on pizza     ', 'No%20pineapple%20on%20pizza', urlify('No pineapple on pizza     '));

console.table([
    test1,
    test2,
    test3,
]);
