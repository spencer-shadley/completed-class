// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.
// Input Format

// [1,2,3,4,5]

// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
// The second line contains  space-separated integers .

const shiftLeft = (arr, d) => {

    if (arr.length >= 1 && arr.length <= 1000000) {
        if (d >= 1 && d <= arr.length) {

            let temp = arr.slice(0);
            for (let i = 0; i < d; ++i) {
                let first = temp.shift();
                temp.push(first);
            }

            return temp;
        }
    }
}

class TestShift {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}

const equalArrays = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

let testArray1A = shiftLeft([1, 2, 3, 4, 5], 3);
let testArray1B = [4, 5, 1, 2, 3];
let testArray2A = shiftLeft([1, 2, 3, 4, 5], 4);
let testArray2B = [5, 1, 2, 3, 4];
let testArray3A = shiftLeft([1, 2, 3, 4, 5], 3);
let testArray3B = [5, 1, 2, 3, 4];

let test1 = new TestShift('Test 1', true, equalArrays(testArray1A, testArray1B));
let test2 = new TestShift('Test 2', true, equalArrays(testArray2A, testArray2B));
let test3 = new TestShift('Test 3', false, equalArrays(testArray3A, testArray3B));



console.table([
    test1,
    test2,
    test3,
])
