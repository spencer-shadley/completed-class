// **************** QUESTION DESCRIPTION **************** //

// Find the number of ways that a given integer, X, can be expressed as the sum of the Nth power of unique, natural numbers.S

// **************** CONSTRAINTS ************************* //

// 1 <= X <= 10000
// 1 <= n <= 10

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Two Integers (X and n)
// Output: Integer (Single Permuations)
// Edge/Outlier:

// **************** EXAMPLE **************** //

// Input: 10, 2
// Output: 1
// 10 = 2^2 + 3^2

// Input: 100, 2
// Output: 3
// 100 = 10^2
// 100 = 6^2 + 8^2
// 100 = 1^2 + 3^2 + 4^2 + 5^2 + 7^2

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Create an array of all possible numbers from powers(n)
// Recursively check if numbers in array equal the x sum
// 

// **************** FUNCTION **************** //

const sumOfPowers = (x, n) => {

    const array = []
    let i = 1;

    while (Math.pow(i, n) <= x) {
        array.push(Math.pow(i, n));
        ++i;
    }
    // console.log(`This is my options array: ${array}`);

    return countSets(array, x)

}

const countSets = (arr, total) => {
    let mem = {} // empty dict or hash table
    return dp(arr, total, arr.length - 1, mem);
}

const dp = (arr, total, i, mem) => {
    let key = `${total}:${i}`;
    for (const keys in mem) {
        if (keys === key) {
            return mem[key];
        }
    }
    if (total === 0) {
        return 1;
    } else if (total < 0) {
        return 0;
    } else if (i < 0) {
        return 0;
    } else if (total < arr[i]) {
        to_return = dp(arr, total, i - 1, mem);
    } else {
        to_return = (dp(arr, total - arr[i], i - 1, mem) + dp(arr, total, i - 1, mem));
    }
    mem[key] = to_return;
    return to_return;
}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 1, sumOfPowers(10, 2));
let test2 = new Test('Test 2', 3, sumOfPowers(100, 2));
let test3 = new Test('Test 3', 4, sumOfPowers(65, 2));

console.table([
    test1,
    test2,
    test3,
]);
