/**
 * Gets the value of the fibonacci sequence at index indexInSeries
 * fibonacci the fibonacci sequence starts with 1, 1 and each
 * subsequent number is the two previous in the series summed
 * @example 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * @param {Number} indexInSeries
 *
 * watch how long it takes to compute 5, 10, 20, 40, 80 and 160
 */
function fibonacciIterative(indexInSeries) {
    let a = 1;
    let b = 0;
    while (indexInSeries >= 0) {
        const temp = a;
        a = a + b;
        b = temp;
        --indexInSeries;
    }
    return b;
}
console.log(fibonacciIterative(5));

/**
 * Gets the value of the fibonacci sequence at index indexInSeries
 * fibonacci the fibonacci sequence starts with 1, 1 and each
 * subsequent number is the two previous in the series summed
 * @example 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * @param {Number} indexInSeries
 *
 * O(2^N) (very VERY VERY bad!)
 *
 * watch how long it takes to compute 5, 10, 20, 40, 80 and 160
 */
function fibonacciRecursive(indexInSeries) {
    if (indexInSeries <= 1) {
        return 1;
    }
    return (
        fibonacciRecursive(indexInSeries - 1) +
        fibonacciRecursive(indexInSeries - 2));
}
console.log(fibonacciRecursive(5));

/**
 * Gets the value of the fibonacci sequence at index indexInSeries
 * fibonacci the fibonacci sequence starts with 1, 1 and each
 * subsequent number is the two previous in the series summed
 * @example 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * @param {Number} indexInSeries
 *
 * O(N)
 *
 * watch how long it takes to compute:
 * 5, 10, 20, 40, 80 and 160 (immediate)
 * 1000 (immediate)
 * 5000 (infinity)
 * 10000 (stack overflow)
 */
function fibonacciRecursiveMemoized(indexInSeries, cache) {
    cache = cache || {};

    if (cache[indexInSeries]) {
        return cache[indexInSeries];
    }

    if (indexInSeries <= 1) {
        return 1;
    }

    cache[indexInSeries] =
        fibonacciRecursiveMemoized(indexInSeries - 1, cache) +
        fibonacciRecursiveMemoized(indexInSeries - 2, cache);

    return cache[indexInSeries];
}
console.log(fibonacciRecursiveMemoized(5));


// more info on fibonacci
// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
// https://www.youtube.com/watch?v=OQ5jsbhAv_M
