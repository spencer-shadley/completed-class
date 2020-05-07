/* 
**************** QUESTION DESCRIPTION ************************ 

    Given a non-empty array of integers, every element appears twice except for one. Find that single one.

 **************** CONSTRAINTS ********************************



 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Array
    Output: Integer
    Edge/Outlier:   

 **************** EXAMPLES ************************************

    Input:  [2, 2, 1]
    Output: 1

    Input: [4,1,2,1,2]
    Output: 4

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********




 **************** FUNCTION ********************************  */

function singleNumber(arr) {

    let hash = {};

    for (const number of arr) {
        hash[number] = hash[number] ? hash[number] + 1 : 1;
    }

    for (const number of arr) {
        if (hash[number] === 1) {
            return number;
        }
    }

}

console.log(singleNumber([2, 2, 1]))

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
