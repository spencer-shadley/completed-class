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

// eslint-disable-next-line no-unused-vars
function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

// eslint-disable-next-line no-unused-vars
function selectionSort(items) {

    // FILL IN YOUR CODE HERE
    // Use the above swap function when you are ready to start swapping elements in the array.
}

// ================================================
// FUNCTION CALL
// ================================================
console.log(`PRE-SORT`);
console.log(array.join(` `));
console.log(`---------------------------`);
console.log(`POST-SORT`);
console.log(selectionSort(array).join(` `));
