/* 
**************** QUESTION DESCRIPTION ***********************

    Given the target value N and an array of allowed numbers, count ways to write N as the sum of those numbers.

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of Integers), Integer
    Output: Integer
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:  [1, 2, 3], 4
    Output: 4
    Explanation:
        1 + 1 + 1 + 1
        1 + 1 + 2
        2 + 2
        1 + 3

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

     Dynamic Programming 

******************** FUNCTION ****************************  */

function combinationSum(arr, num) {

    arr.sort((a, b) => a - b);

    let result = [];
    let temp = [];
    search(0, num);
    return result.length;

    function search(i, num) {
        if (num === 0) return result.push(temp.slice());
        if (num < 0) return;
        if (i === arr.length) return;
        temp.push(arr[i]);
        search(i, num - arr[i]);
        temp.pop();
        search(i + 1, num)
    }

};

console.log(combinationSum([1, 2, 3], 4))



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
let test4 = new Test('Test 4');

// console.table([
//     test1,
//     test2,
//     test3,
//     test4,
// ]);
