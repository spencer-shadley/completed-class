'use strict';

/**
 *
 * @param {Array} array
 */
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const leftHalf = array.slice(0, array.length / 2);
    const rightHalf = array.slice(array.length / 2);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

/**
 *
 * @param {Array} arrayOne
 * @param {Array} arrayTwo
 */
function merge(arrayOne, arrayTwo) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i !== arrayOne.length || j !== arrayTwo.length) {
        if (arrayOne[i] < arrayTwo[j] || j === arrayTwo.length) {
            merged.push(arrayOne[i]);
            ++i;
        } else {
            merged.push(arrayTwo[j]);
            ++j;
        }
    }
    return merged;
}

const input = [4, 2, 6, 9, 3];
console.log(mergeSort(input));
