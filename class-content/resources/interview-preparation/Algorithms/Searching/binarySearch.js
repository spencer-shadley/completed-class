'use strict';

/**
 * A binary search to find the index of a given number in an array
 * @param {Number[]} numbers The numbers to search in
 * @param {Number} number The number to search for
 * @returns {Number} The index of @param number in @param numbers
 */
function binarySearch(numbers, number) {
    // Set some starting values.
    let currentElement;
    let currentIndex;
    let maxIndex = numbers.length - 1;
    let minIndex = 0;

    // Until we've considered the entire array, keep searching
    while (minIndex <= maxIndex) {

        // Get a position near the middle
        currentIndex = Math.floor((minIndex + maxIndex) / 2);

        // Get that element
        currentElement = numbers[currentIndex];

        // Test it
        if (currentElement < number) {
            // if it's less than we are looking for, look *above* this value
            minIndex = currentIndex + 1;
        }
        else if (currentElement > number) {
            // If it's more than we are looking for, look *below* this value
            maxIndex = currentIndex - 1;
        }
        else {
            // We found it; return the index
            return currentIndex;
        }
    }
    // not in the array
    return NaN;
}

// eslint-disable-next-line no-magic-numbers
const result = binarySearch([1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784], 77);
console.log(result);
