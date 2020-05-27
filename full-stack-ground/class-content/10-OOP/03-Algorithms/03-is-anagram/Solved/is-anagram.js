'use strict';

// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

const isAnagram = function(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  const aLetterMap = {};
  const bLetterMap = {};
  const strLength = strA.length;

  for (let i = 0; i < strLength; ++i) {
    const aLetter = strA[i];
    const bLetter = strB[i];

    aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
    bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
  }

  for (const key in aLetterMap) {
    if (aLetterMap[key] !== bLetterMap[key]) {
      return false;
    }
  }

  return true;
};
