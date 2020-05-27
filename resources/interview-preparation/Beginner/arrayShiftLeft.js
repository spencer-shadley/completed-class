// **************** QUESTION DESCRIPTION **************** //

// Given an array (arr) of integers and a Number (d).
// Perform d left-shifts on arr.
// Return the new shifted array.


// **************** CONSTRAINTS **************** //

// arr.length is greater than 1 and less than 1 million

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Array (arr of integers), Number (shifts)
// Output: Array
// Edge/Outlier: 

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// What if the shift number is greater than array length???
// Create a loop for each shift. Take off the first letter and attach it to the end. 
// Slice, Shift, and Push methods seem useful

// **************** FUNCTION **************** //

const shiftLeft = (arr, shifts) => {

    if (arr.length < 1 || arr.length > 1000000) {
        return 'Invalid array length';
    }

    shifts = shifts % arr.length

    let temp = arr.slice(0);
    for (let i = 0; i < shifts; ++i) {
        let first = temp.shift();
        temp.push(first);
    }

    return temp;
}


// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', [4, 5, 1, 2, 3], shiftLeft([1, 2, 3, 4, 5], 3));
let test2 = new Test('Test 2', [5, 1, 2, 3, 4], shiftLeft([1, 2, 3, 4, 5], 104));
let test3 = new Test('Test 3', 'Invalid array length', shiftLeft([], 5));

console.table([
    test1,
    test2,
    test3,
]);
