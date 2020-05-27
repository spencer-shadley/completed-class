// **************** QUESTION DESCRIPTION **************** //

// Given a square grid of characters in the range ascii[a-z].
// Determine if the columns are also in ascending alphabetical order, top to bottom. 
// Return YES if they are or NO if they are not.

// **************** EXAMPLE **************** //

// test1= [
//     ['a', 'b', 'c'],
//     ['a', 'd', 'e'],
//     ['e', 'f', 'g']
// ];
// Output: YES

// test2 = [
//     ['k', 'c'],
//     ['i', 'u']
// ];
// Output: NO

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Array of Arrays (of strings, all lowercase characters[a-z])
// Output: String (YES or NO)
// Edge/Outlier:    

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Since we only care about columns, we can just look down each column individually.
// We only need to check each pair of two. Compare each 2 and see if it is in alphabetical order.

// **************** FUNCTION **************** //

const grid = arr => {

    const len = arr.length;

    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < len - 1; ++j) {
            if (arr[j][i] > arr[j + 1][i]) {
                return `NO`
            }
        }
    }
    return 'YES'
}

// **************** TESTING **************** //

const testArray1 = [
    ['a', 'b', 'c'],
    ['a', 'd', 'e'],
    ['e', 'f', 'g']
];
const testArray2 = [
    ['k', 'c'],
    ['i', 'u']
];
const testArray3 = [
    ['a', 'b', 'c'],
    ['z', 'd', 'e'],
    ['e', 'f', 'g']
];

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 'YES', grid(testArray1));
let test2 = new Test('Test 2', 'NO', grid(testArray2));
let test3 = new Test('Test 3', 'NO', grid(testArray3));

console.table([
    test1,
    test2,
    test3,
]);
