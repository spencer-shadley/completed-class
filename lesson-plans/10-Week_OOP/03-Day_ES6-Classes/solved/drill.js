'use strict';

function includes(arr, elem) {
  if (!arr) {
    throw 'Unexpected input';
  }

  return arr.includes(elem);

  for (const item of arr) {
    if (item === elem) {
      return true;
    }
  }
  return false;
}
