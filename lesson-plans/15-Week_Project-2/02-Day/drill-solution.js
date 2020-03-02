'use strict';

function findLongestPalindrome(word) {
  let longestPalindrome = null;

  for (let currentSize = 2; currentSize <= word.length; ++currentSize) {
    for (let i = 0; i <= word.length - currentSize; ++i) {
      let subword = word.substring(i, i + currentSize);
      if (isPalindrome(subword)) {
        longestPalindrome = subword;
        break;
      }
    }
  }
  return longestPalindrome;
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
