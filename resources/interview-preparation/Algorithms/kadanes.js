// Kadane's algorotihm is used to isolate the mex sub-array within an array.
// Starting from the beginning, creates maximums for each index. 
// Upon each extra iteration, add more to the bracket
// Create a rolling globalMax

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


// console.log(maxSubArray([-2, 3, 2, 1, -6]) === 6);
// console.log(maxSubArray([-6, 4, -2, 3, -2]) === 5);
