// Consider an array of integers, . 
// We define the absolute difference between two elements,  and  (where ), to be the absolute value of .

// Given an array of integers, find and print the minimum absolute difference between any two elements in the array. 
// For example, given the array  we can create  pairs of numbers:  and . The absolute differences for these pairs are ,  and . The minimum absolute difference is .

// Function Description

// Complete the minimumAbsoluteDifference function in the editor below. 
// It should return an integer that represents the minimum absolute difference between any pair of elements.

// minimumAbsoluteDifference has the following parameter(s):

// n: an integer that represents the length of arr
// arr: an array of integers
// Input Format

// The first line contains a single integer , the size of .
// The second line contains  space-separated integers .

// Constraints

// Output Format

// Print the minimum absolute difference between any two elements in the array.

// Sample input
// -59 -36 -13 1 -53 -92 -2 -96 -54 75
// 1

function minimumAbsoluteDifference(arr) {

    arr.sort((a, b) => a - b);

    let difference = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (i < arr.length - 1) {
            difference.push(Math.abs(arr[i] - arr[i + 1]));
        }
    }

    var minAbsoluteDifference = Math.min(...difference);
    return minAbsoluteDifference;
}

console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]))