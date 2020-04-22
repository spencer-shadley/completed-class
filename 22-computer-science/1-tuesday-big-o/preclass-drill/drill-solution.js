/**
 * A brute-force solution to find the maximum contiguous subarray sum
 * 
 * This computes every possible combination of sums
 * 
 * It works but does a lot of duplicated work
 * 
 * This is a fine starting point in an interview. Talk about the solution, iterate and
 * improve on it and tell the interviewer what you're thinking.
 * 
 * This idea can be somewhat improved to O(N^2) by removing the inner for loop and replacing it
 * by referencing the previous sum (the new window is the already computed previous sum + the new element)
 * 
 * Time: O(N^3)
 * Space: O(1)
 * 
 * @param {number[]} numbers 
 */
function maxSubarrayBruteForce(numbers) {
    let maxSum = numbers[0];
    for (let i = 0; i < numbers.length; ++i) {
        for (let j = 0; j < numbers.length; ++j) {
            let sum = 0;
            for (let k = i; k <= j; ++k) {
                sum += numbers[k];
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

/**
 * Great video on Kadane's algorithm:
 * https://www.youtube.com/watch?v=2MmGzdiKR9Y
 * 
 * Article on Kadane's algorithm:
 * https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
 * 
 * Break down the problem into smaller pieces
 * 
 * We can build a local subarray and keep track of the
 * current max of that subarray
 * 
 * At each iteration we have two choices - extend the
 * current subarray or start a new subarray
 * 
 * It takes some time to digest but once you get it the idea is intuitive
 * 
 * Example:
 * 
 * input:
 * [6, 4, -2, 3, -2]
 * 
 * representation of localMax as an array:
 * [-6, 4, 2, 5, 3]
 * 
 * The maximum local subarray was 5 so that is our answer
 * 
 * Time: O(N)
 * Space: O(1)
 * 
 * @param {number[]} numbers 
 */
function kadanesAlgorithm(numbers) {
    let localMax = numbers[0]; // we have to start somewhere! Initial subarray is just the element itself
    let globalMax = localMax;
    for (let i = 1; i < numbers.length; ++i) {
        localMax = Math.max(
            localMax + numbers[i], // extend the current subarray
            numbers[i]); // or start a new subarray
        globalMax = Math.max(globalMax, localMax);
    }
    return globalMax;
}

console.log(maxSubarrayBruteForce([-6, 4, -2, 3, -2]) === 5);
console.log(kadanesAlgorithm([-6, 4, -2, 3, -2]) === 5);

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * The idea here is to envision the stock price choices as a
 * maximum contiguous subarray problem and then apply Kadane's Algorithm.
 * 
 * Time: O(N)
 * Space: O(N)
 * 
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    // convert the prices into potential profits
    const profits = [];
    for (let i = 1; i < prices.length; ++i) {
        // the previous profit is buying now and selling at the previous price
        profits[i - 1] = prices[i] - prices[i - 1];
    }

    // run Kadane's algorithm on those profits
    return kadanesAlgorithm(profits);
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5);

/**
 * An optimized version of @see maxProfit
 * 
 * Instead of keeping track of profits, inline them into Kadane's algorithm
 * 
 * Time: O(N)
 * Space: O(1)
 * 
 * @param {number[]} prices the stock prices
 */
function optimalMaxProfit(prices) {
    let localMax = 0;
    let globalMax = localMax;
    
    for (let i = 1; i < prices.length; ++i) {
        localMax += prices[i] - prices[i - 1];
        localMax = Math.max(0, localMax);
        globalMax = Math.max(globalMax, localMax);
    }
    return globalMax;
}
console.log(optimalMaxProfit([7, 1, 5, 3, 6, 4]) === 5);
