// Given an array of integers, find the subset of non-adjacent elements with the maximum sum.
// Calculate the sum of that subset.

// For example, given an array arr = [-2, 1, 3, -4, 5] we have the following possible subsets:

// Subsets:
// [-2, 3, 5]   6
// [-2, 3]      1
// [-2, -4]    -6
// [-2, 5]      3
// [1, -4]     -3
// [1, 5]       6
// [3, 5]       8

// Input: Array (of integers)
// Output: Integer (Sum of max subset)

const maxSubsetSum = arr => {

    let incl = arr[0];
    let excl = 0;
    let excl_new;

    for (let i = 1; i < arr.length; i++) {

        /* current max excluding i */
        excl_new = (incl > excl) ? incl : excl;

        /* current max including i */
        incl = excl + arr[i];
        excl = excl_new;

        // console.log(`This is excl_new ${excl_new}`)
        // console.log(`This is incl ${incl}`)
        // console.log(`This is excl ${excl}`)
    }

    /* return max of incl and excl */
    return (incl > excl) ? incl : excl;
}

// console.log(maxSubsetSum([-2, 1, 3, -4, 5]));

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}

let test1 = new Test('Test 1', 8, maxSubsetSum([-2, 1, 3, -4, 5]));
let test2 = new Test('Test 2', 13, maxSubsetSum([3, 7, 4, 6, 5]));
let test3 = new Test('Test 3', 11, maxSubsetSum([2, 1, 5, 8, 4]));


console.table([
    test1,
    test2,
    test3,
])
