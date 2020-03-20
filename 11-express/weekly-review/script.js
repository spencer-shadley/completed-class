'use strict'

// Given a string, write a function to check if it is a permutation of a paldindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutaiton is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// You can ignore casing and non-letter characters.

// Example:
// Input: Tact Coa
// Output: true

// I: string ([a-z][A-Z])
// O: boolean
// Edge: str.length(min/max)?? numbers? Special characters?

const palPerm = str => {
  // If string is even: 2 of every charcter
  // If string is odd: 2 of every character with at most 1 odd

  // Hash map probably?

  const hash = {};
  let charCount = 0;

  for (let i = 0; i < str.length; ++i) {
    let c = str[i].toLowerCase();

    if (c === ' ') {
      continue;
    }
    if (hash[c]) {
      delete hash[c];
    } else {
      hash[c] = true;
    }
    charCount++;
  }

  if (charCount % 2 === 0) {
    return Object.keys(hash).length === 0;
  } else {
    return Object.keys(hash).length === 1;
  }
};

console.table([
  ['Tacocat', palPerm('Tacocat') === true],
  ['atco cat', palPerm('atco cat') === true],
  [' rac ecar rara ', palPerm(' rac  ecar rara ') === true],
  ['testfailed', palPerm('testfailed') === false],
  ['clippers', palPerm('clippers') === false],
  ['aabbc', palPerm('aabbc') === true],
  ['aaaabbbbcc', palPerm('aaaabbbbcc') === true],
  ['aabc', palPerm('aabc') === false],
  ['   ', palPerm('   ') === true]
]);

class testPerm {
  constructor(testInput, expectedResult, actualResult) {
    this.testInput = testInput;
    this.expectedResult = expectedResult;
    this.actualResult = actualResult;
  }
}

let test1 = new testPerm('Tacocat', true, palPerm('Tacocat'));
let test2 = new testPerm('atco cat', true, palPerm('atco cat'));
let test3 = new testPerm(' rac  ecar rara', true, palPerm(' rac  ecar rara '));
let test4 = new testPerm('testfailed', false, palPerm('testfailed'));
let test5 = new testPerm('clippers', false, palPerm('clippers'));
let test6 = new testPerm('aabbc', true, palPerm('aabbc'));
let test7 = new testPerm('aabc', false, palPerm('aabc'));
let test8 = new testPerm('    ', true, palPerm('    '));

console.table([test1, test2, test3, test4, test5, test6, test7, test8]);
