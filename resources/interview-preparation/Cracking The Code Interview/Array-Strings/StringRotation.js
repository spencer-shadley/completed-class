// **************** QUESTION DESCRIPTION **************** //

// Assume you have a method, isSubString which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotaiton of s1 using only one call to isSubString. 

// **************** CONSTRAINTS **************** //

// Validate inputs as strings

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Two Strings
// Output: Boolean
// Edge/Outlier: Input overflow

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Create a hashmap of all the letters in string 1
// Delete letters in string 2 from hashamp 
// If the hashmap reduces to 0, return true. Else, return false.

// **************** FUNCTION **************** //

const stringRotation = (s1, s2) => {

    if (s1.length !== s2.length) {
        return false;
    };

    let hash = {}
    s1.trim().split('').forEach(char => hash[char] = (hash[char] || 0) + 1);
    s2.trim().split('').forEach(char => hash[char] = (hash[char] || 0) - 1);

    let result = (Object.values(hash)).reduce((a, b) => a + b, 0)

    return (result === 0) ? true : false;
};

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('waterbottle / erbottlewat', true, stringRotation('waterbottle', 'erbottlewat'));
let test2 = new Test('racecar / rraacce', true, stringRotation('racecar', 'rraacce'));
let test3 = new Test('waterbottle / erbotafdsatlewat', false, stringRotation('waterbottle', 'erbotafdsatlewat'));

console.table([
    test1,
    test2,
    test3,
]);
