/* 
**************** QUESTION DESCRIPTION ***********************

    You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
        - direction can be 0 (for left shift) or 1 (for right shift). 
        - amount is the amount by which string s is to be shifted.
        - A left shift by 1 means remove the first character of s and append it to the end.
        - Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
    Return the final string after all operations.

******************** CONSTRAINTS ****************************

    1 <= s.length <= 100
    s only contains lower case English letters.
    1 <= shift.length <= 100
    shift[i].length == 2
    0 <= shift[i][0] <= 1
    0 <= shift[i][1] <= 100

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: String, Matrix (Array of arrays)
    Output: String  
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input: s = 'abc', shift = [[0,1],[1,2]]
    Output: 'cab'
    Explanation: 
        [0,1] means shift to left by 1. 'abc' -> 'bca'
        [1,2] means shift to right by 2. 'bca' -> 'cab'

    Input: s = 'abcdefg', shift = [[1,1],[1,1],[0,2],[1,3]]
    Output: 'efgabcd'
    Explanation:  
        [1,1] means shift to right by 1. 'abcdefg' -> 'gabcdef'
        [1,1] means shift to right by 1. 'gabcdef' -> 'fgabcde'
        [0,2] means shift to left by 2. 'fgabcde' -> 'abcdefg'
        [1,3] means shift to right by 3. 'abcdefg' -> 'efgabcd'

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Create a variable to total the shifts.
        Left is negative, Right is positive. 
        0 = left shift. 1 = right shift. 
    Perform the shifts after iterating through the array. 


******************** FUNCTION ****************************  */

function stringShift(str, arr) {

    const length = arr.length;
    const stringLength = str.length;
    // Left is negative, Right is positive
    let count = 0;
    for (let i = 0; i < length; ++i) {
        if (arr[i][0] === 0) {
            count -= arr[i][1];
        } else {
            count += arr[i][1];
        }
    }

    count = count % stringLength;

    return (count > 0) ? shiftRight(str, count) : shiftLeft(str, Math.abs(count))
}

function shiftLeft(str, num) {

    let arr = str.split('');
    let temp = arr.slice(0);
    for (let i = 0; i < num; ++i) {
        let first = temp.shift();
        temp.push(first);
    }

    return temp.join('');
}

function shiftRight(str, num) {

    let arr = str.split('');
    let temp = arr.slice(0);
    for (let i = 0; i < num; ++i) {
        let first = temp.pop();
        temp.unshift(first);
    }

    return temp.join('');
}

// console.log(stringShift('abc', [[0, 1], [1, 2]]));
console.log(stringShift('wpdhhcj', [[0, 7], [1, 7], [1, 0], [1, 3], [0, 3], [0, 6], [1, 2]]));
// count = -4
// 'hcjwpdh'


// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 'cab', stringShift('abc', [[0, 1], [1, 2]]));
let test2 = new Test('Test 2', 'efgabcd', stringShift('abcdefg', [[1, 1], [1, 1], [0, 2], [1, 3]]));
let test3 = new Test('Test 3', 'hcjwpdh', stringShift('wpdhhcj', [[0, 7], [1, 7], [1, 0], [1, 3], [0, 3], [0, 6], [1, 2]]));
let test4 = new Test('Test 4');

console.table([
    test1,
    test2,
    test3,
    // test4,
]);
