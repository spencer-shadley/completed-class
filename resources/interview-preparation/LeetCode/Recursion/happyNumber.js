/* 
**************** QUESTION DESCRIPTION ************************ 

    Write an algorithm to determine if a number n is "happy".

    A happy number is a number defined by the following process: 
    Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

    Return True if n is a happy number, and False if not.

 **************** CONSTRAINTS ********************************



 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Integer
    Output: Boolean
    Edge/Outlier:

 **************** EXAMPLES ************************************

    Input:  19
    Output: true
        1^2 + 9^2 = 82
        8^2 + 2^2 = 68
        6^2 + 8^2 = 100
        1^2 + 0^2 + 0^2 = 1

    Input: 
    Output:

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

    Recursion


 **************** FUNCTION ********************************  */

function happyNumber(n) {

    let seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n)
    }
    return n === 1 ? true : false
}

function sumOfSquares(n) {
    return n.toString().split('').reduce((sum, num) => sum + Math.pow(num, 2), 0)
}




console.log(happyNumber(7))

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1');
let test2 = new Test('Test 2');
let test3 = new Test('Test 3');

// console.table([
//     test1,
//     test2,
//     test3,
// ]);
