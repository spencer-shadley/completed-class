'use strict';

function hasSome(arr, callback) {
  if (!Array.isArray(arr) || !callback) {
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

function hasAll(arr, callback) {
  if (!Array.isArray(arr) || !callback) {
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
  if (!Array.isArray(arr) || !callback) {
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
