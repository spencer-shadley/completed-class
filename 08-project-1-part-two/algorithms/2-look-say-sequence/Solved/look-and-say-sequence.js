'use strict';

// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

// Input: Integer
// Output: Integer

var lookAndSay = function (n) {

    let arr = [...n + ''].map(Number)
    let result = [];

    for (let i = 0; i < arr.length; ++i) {
        let prefix = 1;
        while (arr[i] === arr[i + 1]) {
            ++prefix;
            ++i;
        }
        result.push(prefix, arr[i]);
    }
    return Number(result.join(''));
};


class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new Test(5422, 151422, lookAndSay(5422));

console.table([
    test1,
])