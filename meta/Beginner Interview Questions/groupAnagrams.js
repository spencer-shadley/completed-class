/* 
**************** QUESTION DESCRIPTION ***********************

    Given an array of strings, group anagrams together.

******************** CONSTRAINTS ****************************

    Only contains lower case letters.

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of strings)
    Output: Array (of arrays (of strings))
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
    Output: 
    [
        ['ate','eat','tea'],
        ['nat','tan'],
        ['bat']
    ]

    Input: ['god', 'dog', 'cat']
    Output: 
    [
        ['god', 'dog'],
        ['cat']
    ]

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    For each array, split and sort the string.

    Hash those letters.

    If other strings match, push them to array. 


******************** FUNCTION ****************************  */

function groupAnagrams(arr) {

    let hash = {};

    for (const str of arr) {

        let letters = str.split('').sort();

        hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
    }

    return Object.keys(hash).map(key => {
        return hash[key]
    })

}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let answer1 = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
let answer2 = [['god', 'dog'], ['cat']];
let answer3 = [['race', 'cear'], ['pizza']];

let test1 = new Test('Test 1', true, groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']).length === 3);
let test2 = new Test('Test 2', true, groupAnagrams(['god', 'dog', 'cat']).length === 2);
let test3 = new Test('Test 3', true, groupAnagrams(['race', 'cear', 'pizza']).length === 2);

console.table([
    test1,
    test2,
    test3,
]);
