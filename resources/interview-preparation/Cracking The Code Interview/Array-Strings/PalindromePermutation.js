// **************** QUESTION DESCRIPTION **************** //

// Given a string, write a function to check if it is a permutation of a paldindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutaiton is a rearrangement of letters. 
// The palindrome does not need to be limited to just dictionary words. 
// You can ignore casing and non-letter characters.

// **************** CONSTRAINTS **************** //

// Validate inputs. ASCII
// No specification on length / characters used. 

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: String
// Output: Boolean
// Edge: String length / Outlier characters. Ignore spaces
// Validate ASCII

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Hash table to store numbers of letters
// If string is even length: 2 of every charcter
// If string is odd length: 2 of every character, 1 odd

// **************** FUNCTION **************** //

const palindromePerm = (str) => {

    let hash = {};
    let charCount = 0;

    for (const letter of str) {
        if (letter === ' ') {
            continue;
        };
        if (hash[letter]) {
            delete hash[letter];
        } else {
            hash[letter] = true;
        };
        charCount++;
    };

    if (charCount % 2 === 0) {
        return Object.keys(hash).length === 0;
    } else {
        return Object.keys(hash).length === 1;
    };
};

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
};

let test1 = new Test('taco cat', true, palindromePerm('taco cat'));
let test2 = new Test('atco cat', true, palindromePerm('atco cat'));
let test3 = new Test(' rac ecar rara ', true, palindromePerm(' rac ecar rara '));
let test4 = new Test('chirpingmermaid', false, palindromePerm('chirpingmermaid'));
let test5 = new Test('aabbc ', true, palindromePerm('aabbc'));
let test6 = new Test('aaaabbbbcc', true, palindromePerm('aaaabbbbcc'));
let test7 = new Test('aabc', false, palindromePerm('aabc'));
let test8 = new Test('     ', true, palindromePerm('     '));

console.table([
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
]);

