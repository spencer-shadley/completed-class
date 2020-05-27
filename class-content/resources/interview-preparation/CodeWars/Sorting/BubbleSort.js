// Consider the following version of Bubble Sort:

// for (int i = 0; i < n; i++) {

//     for (int j = 0; j < n - 1; j++) {
//         // Swap adjacent elements if they are in decreasing order
//         if (a[j] > a[j + 1]) {
//             swap(a[j], a[j + 1]);
//         }
//     }

// }
// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.
// Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.

// For example, given a worst-case but small array to sort:  we go through the following steps:

// swap    a       
// 0       [6,4,1]
// 1       [4,6,1]
// 2       [4,1,6]
// 3       [1,4,6]
// It took  swaps to sort the array. Output would be

// Array is sorted in 3 swaps.  
// First Element: 1  
// Last Element: 6  
// Function Description

// Complete the function countSwaps in the editor below. It should print the three lines required, then return.

// countSwaps has the following parameter(s):

// a: an array of integers .
// Input Format

// The first line contains an integer, , the size of the array .
// The second line contains  space-separated integers .

// Constraints

// Output Format

// You must print the following three lines of output:

// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.

function BubbleSortCount(a) {


    let swaps = 0;
    let n = a.length

    if (n < 2 || n > 600) {
        return "Invalid Array Length"
    }

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < (n - i - 1); j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swaps++;
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
            }
        }

    }

    console.log("Array is sorted in " + swaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[n - 1]);

}

BubbleSortCount([4, 2, 3, 1])