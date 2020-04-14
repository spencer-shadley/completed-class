'use strict';

/**
 * Store the count of a letter at a "hash"ed index
 * https://miro.medium.com/max/1000/1*wHiuDrmhLsyJbgGWCEBBcQ.png
 *
 * A hash function creates a hashcode for the given key,
 * corresponding to an index in an underlying "bucket",
 * representing the index of an underlying array.
 *
 * On a colliding hashcode we have two choices:
 * store a collection (usually LinkedList or a BST) and use a linear search
 * or add another layer of hash
 *
 * After being created, we can use:
 * a letter as the key
 * the number of occurences as the value for that key
 * @param {String} word
 */
function countLettersMap(word) {
    const letterCounts = [];
    for (const letter of word) {
        const hashCode = letter.charCodeAt(0);
        letterCounts[hashCode] = letterCounts[hashCode] ? letterCounts[hashCode] + 1 : 1;
    }
    return letterCounts;
}

/**
 * Lookup in the "hash"ed array for letter
 * @param {Array} letterCountsArray
 * @param {String} letter
 */
function getLetterCount(letterCountsArray, letter) {
    const hashCode = letter.charCodeAt(0);
    return letterCountsArray[hashCode];
}

const letterCountsArray = countLettersMap(`aaabcdeibunf`);
console.log(getLetterCount(letterCountsArray, `a`));
console.log(getLetterCount(letterCountsArray, `b`));
console.log(getLetterCount(letterCountsArray, `i`));
