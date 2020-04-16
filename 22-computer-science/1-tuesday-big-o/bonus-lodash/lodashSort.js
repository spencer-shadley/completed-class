/* eslint-disable no-magic-numbers */
'use strict';

const _ = require(`lodash`);
// ===============================================
// RUN THIS USING NODE
// ===============================================
// ================================================
// TEST CASES
// ================================================
// Case 1 - Small Set of Numbers
// Creates a 40 element array with random numbers ranging from 0
// to 40
const arr1 = _.times(40, _.constant(_.random(40)));
// Case 2 - Large set of Numbers
// Creates a 400000 element array with random numbers ranging from 0
// to 400000
const arr2 = _.times(400000, _.constant(_.random(400000)));
// ================================================
// FUNCTION CALL
// ================================================
console.log(`PRE-SORT`);
console.log(`Array 1:`, arr1.join(` `));
console.log(`Array 2:`, arr2.join(` `));
console.log(`---------------------------`);
console.log(`POST-SORT`);
console.log(`Array 1:`, _.sortBy(arr1).join(` `));
console.log(`Array 2:`, _.sortBy(arr2).join(` `));
