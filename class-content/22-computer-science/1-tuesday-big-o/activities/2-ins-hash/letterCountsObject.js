'use strict';

/**
 * Store the count of a letter using an object
 *
 * After being created, we can use:
 * a letter as the key
 * the number of occurences as the value for that key
 * @param {String} word
 */
function countLettersMap(word) {
    const letterCounts = {};
    for (const letter of word) {
        letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
    }
    return letterCounts;
}

/**
 * Lookup in the object for letter
 * @param {Object} letterCountsObject
 * @param {String} letter
 */
function getLetterCount(letterCountsObject, letter) {
    return letterCountsObject[letter];
}

const letterCountsObject = countLettersMap(`aaabcdeibunf`);
console.log(getLetterCount(letterCountsObject, `a`));
console.log(getLetterCount(letterCountsObject, `b`));
console.log(getLetterCount(letterCountsObject, `i`));
