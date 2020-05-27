'use strict';

function findLongestPalindrome(word) {
  for (let currentSize = word.length; currentSize >= 2; --currentSize) {
    for (let i = 0; i <= word.length - currentSize; ++i) {
      let subword = word.substring(i, i + currentSize);
      if (isPalindrome(subword)) {
        return subword;
      }
    }
  }
  return null;
}

function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; ++i) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  findLongestPalindrome
};
