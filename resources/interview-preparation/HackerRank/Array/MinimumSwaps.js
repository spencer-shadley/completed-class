// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. 
// You are allowed to swap any two elements. 
// You need to find the minimum number of swaps required to sort the array in ascending order.

// For example, given the array  we perform the following steps:

// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
// It took  swaps to sort the array.

// Function Description

// Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.

// minimumSwaps has the following parameter(s):

// arr: an unordered array of integers
// Input Format

// The first line contains an integer, , the size of .
// The second line contains  space-separated integers .

// Constraints

// Output Format

// Return the minimum number of swaps to sort the given array.

// Sample
// [4, 3, 1, 2]
// 3

const minimumSwaps = (arr) => {

    if (1 <= arr.length && arr.length <= 1000000) {

        let swaps = 0;

        for (let i = 0; i < arr.length; ++i) {

            const right = i + 1;

            if (arr[i] !== right) {

                const rightIdx = arr.indexOf(right, i);

                arr[rightIdx] = arr[i];
                arr[i] = right;
                swaps++;

            }
        }
        return swaps;
    }
}



console.log(minimumSwaps([4, 3, 1, 2]));

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new Test(`Test 1`, 3, minimumSwaps([4, 3, 1, 2]));
let test2 = new Test(`Test 2`, 4, minimumSwaps([4, 3, 1, 2, 6, 5]));
let test3 = new Test(`Test 3`, 3, minimumSwaps([4, 3, 1, 2, 5]));
let test4 = new Test(`Test 4`, 0, minimumSwaps([1]));


console.table([
    test1,
    test2,
    test3,
    test4,
])