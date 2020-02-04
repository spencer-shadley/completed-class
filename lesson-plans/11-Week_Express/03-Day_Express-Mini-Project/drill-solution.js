'use strict';

function filter(arr, callback) {
  const newArr = [];

  for (let i = 0; i < arr.length; ++i) {
    const output = callback(arr[i]);
    if (output) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

module.exports = {
  filter
};
