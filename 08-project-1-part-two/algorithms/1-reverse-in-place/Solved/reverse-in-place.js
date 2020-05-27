'use strict';

// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function (arr) {

    let len = arr.length;
    let left;
    let right;

    for (left = 0, right = len - 1; left < right; ++left, --right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    return arr;
};

console.log(reverseInPlace([2, 4, 6, 8]))

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new Test([2, 4, 6, 8], [8, 6, 4, 2,], reverseInPlace([2, 4, 6, 8]));

console.table([
    test1,
])