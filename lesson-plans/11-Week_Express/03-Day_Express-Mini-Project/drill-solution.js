'use strict';

function filter(arr, callback) {
  const newArr = [];

  for (let item of arr) {
    const output = callback(item);
    if (output) {
      newArr.push(item);
    }
  }
  return newArr;
}

module.exports = {
  filter
};
