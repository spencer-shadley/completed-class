'use strict';

/**
 * A binary search to find the index of a given number in an array
 * @param {Number[]} numbers The numbers to search in
 * @param {Number} number The number to search for
 * @returns {Number} The index of @param number in @param numbers
 */
function binarySearch(numbers, number) {
    console.log(numbers, number);
}

// eslint-disable-next-line no-magic-numbers
const result = binarySearch([1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784], 77);
console.log(result);
