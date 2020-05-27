/* 
**************** QUESTION DESCRIPTION ***********************

    Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

        1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.
        2. Any right parenthesis ')' must have a corresponding left parenthesis '('.
        3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.
        4. '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
        5. An empty string is also valid.

******************** CONSTRAINTS ****************************

    The string size with be between 1 and 100. 

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: String
    Output: Boolean 
    Edge/Outlier: validate inputs, empty input, overflow

********************** EXAMPLES *****************************

    Input:  '()'
    Output: true
    Explanation:

    Input: '(*)'
    Output: true
    Explanation:

    Input: '(*))'
    Output: true
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Create two arrays to hold stacks
        Stack for '(' 
        starStack for '*'
    Iterate through the array, logging index and element
        Push '(' to stack
        Push '*' to starStack
    For each ')', pop either stack or starStack. If there aren't enough for all the ')', auto fail. 

    Recurison to check stack[i] < starStack[i] because stars have to be to the right of '('.
    If this passes for all stacks array, return true: else false.

******************** FUNCTION ****************************  */

function validString(string) {

    let arr = string.split('');

    const stack = [];
    const starStack = [];

    for (const [index, element] of arr.entries()) {
        if (element === '(') {
            stack.push(index);
        } else if (element === '*') {
            starStack.push(index);
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else if (starStack.length > 0) {
                starStack.pop();
            } else {
                return false;
            }
        }
    }

    let i = stack.length - 1;
    let j = starStack.length - 1;

    while (stack[i] < starStack[j]) {
        stack.pop();
        starStack.pop();
        i--; j--;
    }
    return stack.length === 0 ? true : false;
}

console.log(validString('()'))
console.log(validString('((*)'))

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1');
let test2 = new Test('Test 2');
let test3 = new Test('Test 3');
let test4 = new Test('Test 4');

// console.table([
//     test1,
//     test2,
//     test3,
//     test4,
// ]);
