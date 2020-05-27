'use strict';

function haveSubWord(subword, ...words) {
  if (!subword || !Array.isArray(words) || words.length === 0) {
    return false;
  }

  return words.every(word => word.indexOf(subword) !== -1);
}

module.exports = { haveSubWord };
