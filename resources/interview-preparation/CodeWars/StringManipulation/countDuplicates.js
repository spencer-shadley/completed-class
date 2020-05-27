/* 
**************** QUESTION DESCRIPTION ************************ 

    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
    The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

 **************** CONSTRAINTS ********************************

    Convert all upper case into lower case letters. 

 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: String
    Output: Integer
    Edge/Outlier:

 **************** EXAMPLES ************************************

    Input: 'abcde'
    Output: 0
    There are no duplicates

    Input: aabbccdd
    Output: 4
    abcd are all duplicates

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

    Create a hashmap.
    First pass, hash the count of each letter.
    Second, examine the hashmap keys. 
    Increment count for each key with a value creater than 1. 

 **************** FUNCTION ********************************  */

function countDuplicates(string) {

    let hash = {};
    let count = 0;
    string = string.toLowerCase();

    for (const letter of string) {
        hash[letter] = hash[letter] ? hash[letter] + 1 : 1;
    }

    for (const letter in hash) {
        if (hash.hasOwnProperty.call(hash, letter)) {
            if (hash[letter] > 1) {
                count++;
            }
        }
    }
    return count;
}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 0, countDuplicates('abcde'));
let test2 = new Test('Test 2', 4, countDuplicates('aabbccdd'));
let test3 = new Test('Test 3', 1, countDuplicates('Indivisibility'));

console.table([
    test1,
    test2,
    test3,
]);
