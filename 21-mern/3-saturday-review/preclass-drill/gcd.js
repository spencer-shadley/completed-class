// **************** QUESTION DESCRIPTION **************** //

// In this challenge, we learn how to compute GCD using the Euclidean algorithm.

// The algorithm states that, for computing the GCD of two positive integers x and y, if x and y are equal, GCD(x, y)= x . 
// Otherwise GCD(x, y) = GCD(x-y,y) if x > y. 
// There are a few optimizations that can be made to the above logic to arrive at a more efficient implementation.

// **************** CONSTRAINTS ************************* //

// Validate inputs

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Two Integers
// Output: Integer
// Edge/Outlier: Number overflow

// **************** EXAMPLE **************** //

// Input: 1, 5
// Output: 1

// Input: 10, 100
// Output: 10

// Input: 22, 131
// Output: 1

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Recursively call the function with modulus of x and y

// **************** FUNCTION **************** //

const gcd = (x, y) => {

    // Your code here

}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 1, gcd(1, 5));
let test2 = new Test('Test 2', 10, gcd(10, 100));
let test3 = new Test('Test 3', 1, gcd(22, 131));

// console.table([
//     test1,
//     test2,
//     test3,
// ]);
