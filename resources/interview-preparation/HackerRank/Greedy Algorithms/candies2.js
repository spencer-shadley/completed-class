// **************** QUESTION DESCRIPTION **************** //

// Alice is a kindergarten teacher.
// She wants to give some candies to the children in her class.  
// All the children sit in a line and each of them has a rating score according to his or her performance in the class.  
// Alice wants to give at least 1 candy to each child. 
// If two children sit next to each other, then the one with the higher rating must get more candies. 
// Alice wants to minimize the total number of candies she must buy.

// **************** EXAMPLE **************** //

// arr = [4, 6, 4, 5, 6, 2]
// solution = [1, 2, 1, 2, 3, 1]
// totalCandy = 10

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Integer (# of students), Array (Student scores)
// Output: Integer
// Edge/Outlier:

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Create an array = n
// Fill array with 1's

// Loop once forward looking for incrementing patterns
// Increaase candy distribution when found
// Increment by past +1

// Loop once backward looking for incrementing patterns
// Increaase candy distribution when found
// Increment by past +1


// **************** FUNCTION **************** //

const minCandies = (n, arr) => {

    const candiesArray = new Array(n);

    // Fill the candy array
    candiesArray.fill(1);
    let totalCandies = 0;

    for (let i = 1; i < n; ++i) {
        if (arr[i] > arr[i - 1]) {
            candiesArray[i] = candiesArray[i - 1] + 1;
        }
    }

    for (let j = n - 2; j >= 0; --j) {
        if (arr[j] > arr[j + 1] && candiesArray[j] <= candiesArray[j + 1]) {
            candiesArray[j] = candiesArray[j + 1] + 1;
        }
    }

    totalCandies = candiesArray.reduce((a, b) => a + b, 0);
    return totalCandies;
}

// console.log(minCandies(3, [1, 2, 2]))
// // Solution: 4
// console.log(minCandies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]))
// // Solution 19
// console.log(minCandies(6, [9, 8, 7, 6, 5, 4,]))
// // Solution 21

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 4, minCandies(3, [1, 2, 2]));
let test2 = new Test('Test 2', 19, minCandies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]));
let test3 = new Test('Test 3', 21, minCandies(6, [9, 8, 7, 6, 5, 4,]));

console.table([
    test1,
    test2,
    test3,
]);
