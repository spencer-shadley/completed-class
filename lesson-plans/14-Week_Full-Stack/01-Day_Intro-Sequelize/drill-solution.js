'use strict';

function haveSameTotalPosition(...words) {
  if (!Array.isArray(words) || words.length < 2) {
    return false;
  }

  const totalCount = total(words[0]);
  words.splice(0, 1);

  return words.every(word => totalCount === total(word));
}

function total(word) {
  let count = 0;
  for (const letter of word.toLowerCase()) {
    const ascii = letter.charCodeAt(0);
    if (ascii < 'a'.charCodeAt(0) || ascii > 'z'.charCodeAt(0)) {
      return null;
    }
    count += ascii - 96;
  }
  return count;
}

module.exports = { haveSameTotalPosition };
