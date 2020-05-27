'use strict';

/**
 * @param {number} n
 * @return {number}
 *
 * Loop through each of the digits, updating sum and product
 *
 * Time: O(logN)
 * Space: O(logN)
 *
 * Runtime: 52 ms, faster than 81.60% of JavaScript online submissions
 * Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions
 */
function subtractProductAndSum(n) {
  const nString = `${n}`;
  let product = 1;
  let sum = 0;
  for (const digit of nString) {
    const digitNum = parseInt(digit);
    product *= digitNum;
    sum += digitNum;
  }
  return product - sum;
}

/**
 * @param {number} n
 * @return {number}
 *
 * Loop through the number directly using the modulus operator
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * Runtime: 56 ms, faster than 59.42% of JavaScript online submissions
 * Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions
 */
function subtractProductAndSumMod(n) {
  let product = 1;
  let sum = 0;
  while (n > 0) {
    const digit = parseInt(n % 10);
    product *= digit;
    sum += digit;

    n = parseInt(n / 10);
  }
  return product - sum;
}

/**
 * @param {number} n
 * @return {number}
 *
 * Convert to an array and reduce it twice - as a product and as a sum
 *
 * Time: O(logN)
 * Space: O(logN)
 *
 * Runtime: 52 ms, faster than 81.60% of JavaScript online submissions
 * Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions
 */
function subtractProductAndSumAsArray(n) {
  const digits = Array.from(String(n), Number);
  const sum = digits.reduce((a, b) => a + b);
  const product = digits.reduce((a, b) => a * b);
  return product - sum;
}

const input = 234;
subtractProductAndSum(input);
subtractProductAndSumMod(input);
subtractProductAndSumAsArray(input);
