'use strict';

const isValid = (arr, callback) => Array.isArray(arr) && !!callback;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
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

function hasNone(arr, callback) {
  return !hasSome(arr, callback);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
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
