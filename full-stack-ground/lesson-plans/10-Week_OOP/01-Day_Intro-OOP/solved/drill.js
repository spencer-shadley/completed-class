'use strict';

// We create a new object and then update the value
// to true at the key corresponding to each integer in the input array.
// As we iterate through the input array,
// if we find that the corresponding key in the `dups` object is true,
// we know we have a duplicate and return the value.
function findFirstDuplicate(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
}

// This solution is more efficient because it only loops
// through the values once. Nested for loops loop through all
// the elements one time _for each element_ in the array.
// We will spend at least a full day at the end of the course
// focusing on this kind of efficiency.
function findFirstDuplicateEfficiently(arr) {
  if (!arr) {
    return undefined;
  }

  const dupes = {};
  for (let i = 0; i < arr.length; ++i) {
    const currentItem = arr[i];
    if (dupes[currentItem]) {
      return currentItem;
    } else {
      dupes[currentItem] = true;
    }
  }
}
