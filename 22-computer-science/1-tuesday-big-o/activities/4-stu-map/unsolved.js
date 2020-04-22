'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function twoSum(arr, target) {

    let hash = {};

    for (const number of arr) {
        hash[number] = target - number;
    }

    for (let i = 0; i < arr.length; ++i) {
        if (hash[target - arr[i]]) {
            return [i, arr.indexOf(hash[arr[i]])]
        }
    }
    return Infinity;
}

console.log(twoSum([1, 2, 50, 10, 5, 3], 5))

// arr = [1, 2, 50, 10, 5, 3], 5
// hash = {
//     1: 4,
//     2: 3,
//     50: -45,
//     10: - 5,
//     5: 0,
//     3: 2
// }
