/**
 * Sum the numbers between 0 and num
 * @param {Number} num
 * @example 5 => 0 + 1 + 2 + 3 + 4 + 5 = 15
 */
function accumulatedSum(num) {
    // base case - the accumulated sum of 0 is 0
    if (num === 0) {
        return 0;
    }

    // get the currently solved part and add the next smaller piece of the problem
    return num + accumulatedSum(num - 1);
}

console.log(accumulatedSum(5));

/**
 * Sum the number between 0 and num using tail recursion
 * @param {*} num
 * @param {*} sum
 */
function accumulatedSumTailRecursion(num, sum) {
    if (num === 0) {
        return sum;
    }

    return accumulatedSumTailRecursion(num - 1, sum + num);
}

console.log(accumulatedSumTailRecursion(5, 0));
