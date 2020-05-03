/* 
**************** QUESTION DESCRIPTION ************************ 

    Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

 **************** CONSTRAINTS ********************************

    Only lower case letters will be used (a-z)
    No punctuations or digits will be included.

 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: Two Strings
    Output: Boolean
    Edge/Outlier:

 **************** EXAMPLES ************************************

    Input: 'rkqodlw', 'world
    Output: true

    Input: 'cedewaraaossoqqyt', 'codewars'
    Output: true

    Input: 'katas', 'steak'
    Output: false

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

    Create a hash map of str2 characters.

    Delete hash letters for each str1 characters that match.

    Return true is hash is empty at end, else return false.

 **************** FUNCTION ********************************  */

function scramble(str1, str2) {

    let hash = {};

    for (const letter of str2) {
        hash[letter] = hash[letter] ? hash[letter] + 1 : 1;
    }

    for (const letter of str1) {
        hash[letter] = hash[letter] > 0 ? hash[letter] - 1 : 0;
    }

    for (const letter of str2) {
        if (hash[letter] > 0) {
            return false;
        }
    }
    return true;
}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', true, scramble('rkqodlw', 'world'));
let test2 = new Test('Test 2', true, scramble('cedewaraaossoqqyt', 'codewars'));
let test3 = new Test('Test 3', false, scramble('katas', 'steak'));

console.table([
    test1,
    test2,
    test3,
]);
