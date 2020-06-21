// **************** QUESTION DESCRIPTION **************** //

// Determine minimum numbers of miles to walk to maintain weight while eating cupcakes.

// j = cupcake
// c = cupcake calories
// (2 ^ j) x c miles to burn off calories

// **************** EXAMPLE **************** //

// 3 cupcakes eaten, j = 3.
// calories = [5, 10, 7]

// (2 ^ j)  x c
// Min = (2 ^ 0) * 10 + (2 ^ 1) * 7 + (2 ^ 2) * 5
// Min = 10 + 14 + 20
// Min = 44 Miles

// -------------------------------------------------

// 4 cupcakes eaten, j = 4.
// calories = [1, 1, 5, 10]

// Min = (2 ^ 0) * 10 + (2 ^ 1) * 5 + (2 ^ 2) * 1 + (2 ^ 3) * 1
// Min = 10 + 10 + 4 + 8
// Min = 32 Miles

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Array
// Output: Integer
// Edge/Outlier:

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Sort the array from largest to smallest
// Iterate through with the equation

// **************** FUNCTION **************** //

const cakeWalk = arr => {

    const sortedArr = arr.sort((a, b) => b - a);

    let result = 0;
    let n = 0;

    for (const calorie of sortedArr) {
        result += Math.pow(2, n) * calorie;
        ++n;
    }

    return result;
}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 44, cakeWalk([5, 10, 7]));
let test2 = new Test('Test 2', 11, cakeWalk([1, 3, 2]));
let test3 = new Test('Test 3', 79, cakeWalk([7, 4, 9, 6]));

console.table([
    test1,
    test2,
    test3,
]);