'use strict';

function areAnagrams(...anagrams) {
  if (!anagrams || anagrams.length < 2) {
    return false;
  }

  const firstWordLetterCounts = countLetters(anagrams[0]);
  anagrams.splice(0, 1);

  return anagrams.every(anagram =>
    hasMatchingLetterCounts(firstWordLetterCounts, anagram)
  );
}

function countLetters(word) {
  const letterCounts = {};
  for (const letter of word) {
    const letterCount = letterCounts[letter];
    if (letterCount) {
      ++letterCounts[letter];
    } else {
      letterCounts[letter] = 1;
    }
  }
  return letterCounts;
}

function hasMatchingLetterCounts(letterCounts, word) {
  const wordLetterCounts = countLetters(word);
  for (const key of Object.keys(letterCounts)) {
    if (letterCounts[key] !== wordLetterCounts[key]) {
      return false;
    }
  }
  return true;
}

module.exports = { areAnagrams };
