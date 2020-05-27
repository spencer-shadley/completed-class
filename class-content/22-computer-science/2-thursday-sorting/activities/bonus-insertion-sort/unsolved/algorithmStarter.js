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
// SOLUTION - Insertion Sort
// ================================================


// ================================================
// FUNCTION CALL
// ================================================
console.log(`PRE-SORT`);
console.log(array.join(` `));
console.log(`---------------------------`);
console.log(`POST-SORT`);
console.log(insertionSort(array).join(` `));
