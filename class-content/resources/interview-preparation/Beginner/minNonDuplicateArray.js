/* 
**************** QUESTION DESCRIPTION ************************ 

    Find the smallest non-duplicating value in an array

 **************** CONSTRAINTS ********************************



 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Array
    Output: Integer
    Edge/Outlier: Empty, StackOverflow

 **************** EXAMPLES ************************************

    Input:  
    Output:

    Input: 
    Output:

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

    Create a hashmap to store all the number of each number in the array.
    Iterate again through the numbers array to find the smallest non-duplicating number.

 **************** FUNCTION ********************************  */

function minArray(arr) {

    let hash = {};
    let min = Infinity;

    for (const number of arr) {
        hash[number] = hash[number] ? hash[number] + 1 : 1;
    }

    for (const number of arr) {
        if (hash[number] === 1) {
            min = Math.min(min, number)
        }
    }

    return min;

}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 1, minArray([10, 2, 3, 1, 2]));
let test2 = new Test('Test 2', 20, minArray([1, 2, 1, 2, 20]));
let test3 = new Test('Test 3', 10, minArray([1, 2, 10, 5, 2, 1, 5]));
let test4 = new Test('Test 4', Infinity, minArray([1, 2, 1, 2]));

console.table([
    test1,
    test2,
    test3,
    test4,
]);
