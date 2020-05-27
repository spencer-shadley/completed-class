// **************** QUESTION DESCRIPTION **************** //

// Zipping Up an Array
// Two arrays are part of the same zipper if the ending is identical. 
// The identical section can be thought of as being "zipped-up". 
// Below, [2, 2, 4] is "zipped-up".

// Array 1: [3, 5, 8, 9, 2, 2, 4]
// Array 2: [1, 7, 2, 2, 4]
// Create a function that takes in two arrays. 
// Return false if none of the array is "zipped." 
// Return true if the arrays are identical. Otherwise, return an array with the first index in each array where the zipper diverges.

// To illustrate:

// zipper([3, 5, 8, 9, 2, 2, 4], [1, 7, 2, 2, 4]) ➞ [3, 1]
// Zipper 1: 9 (index-3) is first element to diverge.
// Zipper 2: 7 (index-1) is first element to diverge.

// **************** EXAMPLES **************** //

// zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2]) ➞ [4, 7]
// zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6]) ➞ [0, 0]
// zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6]) ➞ false
// zipper([5, 4, 3, 2, 6], [5, 4, 3, 2, 6]) ➞ true

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Two Arrays
// Output: Boolean OR Integer
// Edge: 

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Loop through arrays starting from the last element.
// Use double pointers to check if elements match.
// Set returns for three seperate outputs

// **************** FUNCTION **************** //

const zipper = (arr1, arr2) => {

    const result = [];
    const len1 = arr1.length;
    const len2 = arr2.length;

    for (let i = 0; i < len1; ++i) {
        if (arr1[len1 - 1 - i] === arr2[len2 - 1 - i]) {
            continue;
        } else {
            if (i === 0) {
                return false;
            } else {
                result.push(len1 - 1 - i);
                result.push(len2 - 1 - i);
                return result;
            }
        }
    }
    return true;
}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', [4, 7], zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2]));
let test2 = new Test('Test 2', true, zipper([5, 4, 3, 2, 6], [5, 4, 3, 2, 6]));
let test3 = new Test('Test 3', false, zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6]));

console.table([
    test1,
    test2,
    test3,
]);





