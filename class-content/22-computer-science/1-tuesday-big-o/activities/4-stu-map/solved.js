'use strict';

/**
 * O(N)
 *
 * Runtime: 60ms
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function twoSum(nums, target) {
    const targetCounts = new Map();
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        targetCounts.set(num, i);
    }
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        const remainder = target - num;

        const remainderIndex = targetCounts.get(remainder);
        if (remainderIndex && remainderIndex !== i) {
            return [i, remainderIndex];
        }
    }
    return [];
}

/**
 * O(N^2)
 *
 * Runtime: 100ms
 *
 * @param {Number[]} nums
 * @param {Number} target
 */
// eslint-disable-next-line no-unused-vars
function twoSumSlow(nums, target) {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i+1; j < nums.length; ++j) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
