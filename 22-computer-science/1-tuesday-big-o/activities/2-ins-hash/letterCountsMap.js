'use strict';

// chromium implementation - https://codereview.chromium.org/220293002/

/**
 * Store the count of a letter using an object
 *
 * After being created, we can use:
 * a letter as the key
 * the number of occurences as the value for that key
 * @param {String} word
 */
function countLettersMap(word) {
    const letterCounts = new Map();
    for (const letter of word) {
        const currLetterCount = letterCounts.get(letter);
        const updatedLetterCount = currLetterCount ? currLetterCount + 1 : 1;
        letterCounts.set(letter, updatedLetterCount);
    }
    return letterCounts;
}

/**
 * Lookup in the Map for letter
 * @param {Map} letterCounts
 * @param {String} letter
 */
function getLetterCount(letterCounts, letter) {
    return letterCounts.get(letter);
}

const letterCountsMap = countLettersMap(`aaabcdeibunf`);
console.log(getLetterCount(letterCountsMap, `a`));
console.log(getLetterCount(letterCountsMap, `b`));
console.log(getLetterCount(letterCountsMap, `i`));
