/* 
**************** QUESTION DESCRIPTION ***********************

    Given an integer array arr, count element x such that x + 1 is also in arr.
    If there're duplicates in arr, count them seperately.

******************** CONSTRAINTS ****************************

    Array only contains integers.

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of Integers)
    Output: Integer
    Edge/Outlier:   

********************** EXAMPLES *****************************

    Input: [1,2,3]
    Output: 2
        [2,3,4]
        Count element that exist

    Input: [1,1,3,3,5,5,7,7]
    Output: 0

    Input: [1,3,2,3,5,0]
    Output: 3

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Create a hashmap of number + 1. 
    Loop through array checking if hash[value] exists as a key in hashmap. 
    Increment each time we find one that mathces. 

******************** FUNCTION ****************************  */

function countingElements(arr) {

    let count = 0;
    let hash = {};

    for (const number of arr) {
        hash[number] = number + 1;
    }

    for (const number of arr) {
        if (hash.hasOwnProperty(hash[number])) {
            count++
        }
    }
    return count;
};

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 2, countingElements([1, 2, 3]));
let test2 = new Test('Test 2', 0, countingElements([1, 1, 3, 3, 5, 5, 7, 7]));
let test3 = new Test('Test 3', 3, countingElements([1, 3, 2, 3, 5, 0]));
let test4 = new Test('Test 4', 2, countingElements([1, 1, 2, 2]));

console.table([
    test1,
    test2,
    test3,
    test4,
]);
