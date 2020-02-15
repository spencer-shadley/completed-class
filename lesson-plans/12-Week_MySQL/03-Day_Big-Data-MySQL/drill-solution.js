'use strict';

const isValid = (arr, callback) => Array.isArray(arr) && !!callback;

/**
 * Checks if any of the elements in @param arr meet the condition @param callback
 * @param {Array} arr The array to check against
 * @param {Function} callback Condition which at least one element must meet
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some}
 * @returns {boolean}
 */
function hasSome(arr, callback) {
  if (!isValid(arr, callback)) {
    return false;
  }

  for (const entry of arr) {
    if (callback(entry)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if none of the elements in @param arr meet the condition @param callback
 * @param {Array} arr The array to check against
 * @param {Function} callback Condition which at least one element must meet
 * @returns {boolean}
 */
function hasNone(arr, callback) {
  return !hasSome(arr, callback);
}

/**
 * Checks if all of the elements in @param arr meet the condition @param callback
 * @param {Array} arr The array to check against
 * @param {Function} callback Condition all elements must meet
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every}
 * @returns {boolean}
 */
function hasAll(arr, callback) {
  if (!isValid(arr, callback)) {
    return false;
  }

  for (const entry of arr) {
    if (!callback(entry)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if more than half of the elements in @param arr meet the condition @param callback
 * @param {Array} arr The array to check against
 * @param {Function} callback Condition which most elements must meet
 * @returns {boolean}
 */
function hasMost(arr, callback) {
  if (!isValid(arr, callback)) {
    return false;
  }

  let numMatching = 0;
  for (const entry of arr) {
    if (callback(entry)) {
      ++numMatching;
    }
  }
  return numMatching > arr.length / 2;
}

module.exports = {
  hasSome,
  hasAll,
  hasNone,
  hasMost
};
