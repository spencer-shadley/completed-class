// **************** QUESTION DESCRIPTION **************** //

// Complete the minimumAbsoluteDifference function in the editor below. 
// It should return an integer that represents the minimum absolute difference between any pair of elements.

// minimumAbsoluteDifference has the following parameter(s):

// n: an integer that represents the length of arr
// arr: an array of integers

// **************** EXAMPLE **************** //




// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Array
// Output: Integer

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Sort the array (NlogN)
// Compare neighbors (N)

// **************** FUNCTION **************** //


const minimumAbsoluteDifference = (arr) => {

    arr.sort((a, b) => a - b);
    let min;

    for (let i = 0; i < arr.length - 1; ++i) {
        let temp = Math.abs(arr[i] - arr[i + 1]);
        if (!min) {
            min = temp;
        } else {
            if (temp < min) {
                min = temp;
            }
        }
    }

    return min;
}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 1, minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]));
let test2 = new Test('Test 2', 3, minimumAbsoluteDifference([1, -3, 71, 68, 17]));
let test3 = new Test('Test 3', 10, minimumAbsoluteDifference([-10, 0, 100, 201310]));

console.table([
    test1,
    test2,
    test3,
]);
