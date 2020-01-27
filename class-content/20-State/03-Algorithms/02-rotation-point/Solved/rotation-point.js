'use strict';

// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

const rotationPoint = function(words) {
  const left = 0;
  const right = words.length - 1;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);

    if (words[middle] < words[middle - 1]) {
      return middle;
    }

    if (words[left] > words[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
