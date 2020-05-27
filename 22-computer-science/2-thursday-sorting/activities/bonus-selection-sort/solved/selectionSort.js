'use strict';

// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
const arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

const array = [];
for (let index = 0; index < arraySize; index++) {
    const randomNumber = Math.round(Math.random() * arraySize);

    array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function selectionSort(items) {

    const len = items.length;
    let min;

    for (let i = 0; i < len; i++) {

        // set index of minimum to this position
        min = i;

        // check the rest of the array to see if anything is smaller
        for (let j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }

        // if the current position isn't the minimum, swap it and the minimum
        if (i !== min) {
            swap(items, i, min);
        }
    }

    return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log(`PRE-SORT`);
console.log(array.join(` `));
console.log(`---------------------------`);
console.log(`POST-SORT`);
console.log(selectionSort(array).join(` `));
