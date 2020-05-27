'use strict';

function flatten(...arrays) {
  let result = [];
  for (const arr of arrays) {
    if (Array.isArray(arr)) {
      result.push(...arr);
    }
  }
  return result;
}

module.exports = { flatten };
