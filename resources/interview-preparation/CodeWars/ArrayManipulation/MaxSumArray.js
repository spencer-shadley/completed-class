// Given an array of integers, find the subset of non-adjacent elements with the maximum sum. 
// Calculate the sum of that subset.

// For example, given an array  we have the following possible subsets:

// Subset      Sum
// [-2, 3, 5]   6
// [-2, 3]      1
// [-2, -4]    -6
// [-2, 5]      3
// [1, -4]     -3
// [1, 5]       6
// [3, 5]       8
// Our maximum subset sum is .


function maxSubArray(arr) {

    const length = arr.length;
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for (let i = 1; i < length; ++i) {

        maxCurrent = Math.max(arr[i], arr[i] + maxCurrent);
        maxGlobal = Math.max(maxGlobal, maxCurrent)

    }
    return maxGlobal;
}
