'use strict';

// **************** QUESTION DESCRIPTION **************** //

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the 'compressed' string would not become smaller than the original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a-z)

// **************** CONSTRAINTS **************** //

// String only has upper case and lower case
// (A-Z, a-z)

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: String
// Output: String

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Iterate through the string
// Create temporary variable for count
// Look ahead and increment count for each identical letter
// Once a different letter is found, add letter and count to new string
// Return newString or oldString based upon length

// **************** FUNCTION **************** //

const strComp = str => {
  let output = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  return output.length < str.length ? output : str;
};

// **************** TESTING **************** //

class Test {
  constructor(testInput, expectedResult, actualResult) {
    this.testInput = testInput;
    this.expectedResult = expectedResult;
    this.actualResult = actualResult;
  }
}

let test1 = new Test('aabcccccaaa', 'a2b1c5a3', strComp('aabcccccaaa'));
let test2 = new Test('aabc', 'aabc', strComp('aabc'));
let test3 = new Test(
  'aabbbbbcccccceeeeaaaa',
  'a2b5c6e4a4',
  strComp('aabbbbbcccccceeeeaaaa')
);

console.table([test1, test2, test3]);
