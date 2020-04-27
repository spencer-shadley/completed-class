/* 
**************** QUESTION DESCRIPTION ***********************

    https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

    The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
    They would like your help with an application form that will tell prospective members which category they will be placed.

    To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
    In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

******************** CONSTRAINTS ****************************

    Handicaps range from -2 to 26.

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of Arrays)
    Output: Array (of Strings)
    Edge/Outlier: 

********************** EXAMPLES *****************************

    Input:  [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
    Output: ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']
    Explanation:
        Too young, Too young, Passes both tests, Too young, Too young, Passes both tests

      
    Input: [[55, 20],[54, 10],[61, 12],[72, 0],[21, 21],[78, 9]]
    Output: ['Senior', 'Open', 'Senior', 'Open', 'Open', 'Senior']
    Explanation:
        Passes both tests, Too young, Passes both tests, Too low handicap, Too young, Passes both tests
        

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    The sort takes in two variables. Both must be true in order to be `Senior'.
    Map through the array, use object destructuring to grab both variables.
    Apply ternary condition so if both conditions are met, return 'Senior', otherwise return 'Open'.

******************** FUNCTION ****************************  */

function newMember(arr) {

    return arr.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');

};

// **************** TESTING ******************************** //

// console.log(newMember([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

function checkAnswers(arr1, arr2) {
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

const members1 = newMember([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);
const answers1 = ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior'];

const members2 = newMember([[55, 20], [54, 10], [61, 12], [72, 0], [21, 21], [78, 9]]);
const answers2 = ['Senior', 'Open', 'Senior', 'Open', 'Open', 'Senior']

const members3 = newMember([[75, 20], [55, 10], [61, 12], [67, 9], [70, 21], [78, 9]]);
const answers3 = ['Senior', 'Senior', 'Senior', 'Senior', 'Senior', 'Senior'];

let test1 = new Test('Test 1', true, checkAnswers(members1, answers1));
let test2 = new Test('Test 2', true, checkAnswers(members2, answers2));
let test3 = new Test('Test 3', true, checkAnswers(members3, answers3));

console.table([
    test1,
    test2,
    test3
]);
