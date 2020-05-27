'use strict';

function hasPalindrome(word) {
  if (!word || word.length <= 1) {
    return false;
  }

  return hasEvenPalindrome(word) || hasOddPalindrome(word);
}

function hasOddPalindrome(word) {
  for (let i = 0; i < word.length; ++i) {
    if (word.charAt(i - 1) === word.charAt(i + 1)) {
      return true;
    }
  }
  return false;
}

function hasEvenPalindrome(word) {
  for (let i = 0; i < word.length; ++i) {
    if (word.charAt(i) === word.charAt(i + 1)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  hasPalindrome
};
