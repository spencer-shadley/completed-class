/* 
**************** QUESTION DESCRIPTION ***********************

    Given an array of integers, find the subset of non-adjacent elements with the maximum sum.
    Calculate the sum of that subset.

******************** CONSTRAINTS ****************************

    The array may only contain integers.

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of integers)
    Output: Integer (Sum of max non-adjacent subset)
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input: [-2, 1, 3, -4, 5]
    Output: 8
    Explanation: The maximum non-adjacent sub-array is [3,5]

    Input: [5, 5, 10, 100, 10, 5]
    Output: 110
    Explanation: The maximum non-adjacent sub-array is [5, 100, 5]

    Input: [5, 5, 10, 40, 50, 35]
    Output: 80
    Explanation: The maximum non-adjacent sub-array is [5, 40, 35]

    Input: [1, 2, 9, 4, 5, 0, 4, 11, 6]
    Output: 26
    Explanation: The maximum non-adjacent sub-array is [1, 9, 5, 11]

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    This is a variation of Kadane's algorithm.
    The only difference here is that you have we have to manage two max values.
    We have an inclusive max and exclusive max.
    We do two max comparisons to calculate the currentMax. 

******************** FUNCTION ****************************  */

class TestTable {
    constructor(i, prev_prev, prev, currentMax) {
        this.i = i;
        this.prev_prev = prev_prev;
        this.prev = prev;
        this.currentMax = currentMax;
    };
};

function maxNonAdjacentSubsetSum(arr) {

    if (arr.length === 0) {
        return [];
    } else if (arr.length === 1) {
        return arr[1];
    }

    const length = arr.length;
    const testArr = [];
    let prev_prev = arr[0];
    let prev = Math.max(arr[0], arr[1]);


    for (let i = 2; i < length; i++) {

        let currentMax = Math.max(arr[i], Math.max(prev, prev_prev + arr[i]));

        let testSample = new TestTable(i, prev_prev, prev, currentMax);
        testArr.push(testSample)

        prev_prev = prev;
        prev = currentMax;


    }
    console.table(testArr)
    return prev;
}

console.log(maxNonAdjacentSubsetSum([1, 2, 9, 4, 5, 0, 4, 11, 6]));

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

// let test1 = new Test('Test 1', 26, maxNonAdjacentSubsetSum([1, 2, 9, 4, 5, 0, 4, 11, 6]));
// let test2 = new Test('Test 2', 8, maxNonAdjacentSubsetSum([-2, 1, 3, -4, 5]));
// let test3 = new Test('Test 3', 110, maxNonAdjacentSubsetSum([5, 5, 10, 100, 10, 5]));
// let test4 = new Test('Test 4', 200, maxNonAdjacentSubsetSum([5, 100, 50, 5, 100]));
// let test5 = new Test('Test 5', [], maxNonAdjacentSubsetSum([]));

// console.table([
//     test1,
//     test2,
//     test3,
//     test4,
//     test5,
// ]);

