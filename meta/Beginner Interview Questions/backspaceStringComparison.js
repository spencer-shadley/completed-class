/* 
**************** QUESTION DESCRIPTION ***********************

    Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

    Note that after backspacing an empty text, the text will continue empty.

******************** CONSTRAINTS ****************************

    1 <= S.length <= 200
    1 <= T.length <= 200
    S and T only contain lowercase letters and '#' characters.

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Two Strings
    Output: Boolean
    Edge/Outlier: Overflow

********************** EXAMPLES *****************************

    Input: S = "ab#c", T = "ad#c"
    Output: true
    Explanation: Both S and T become "ac".

    Input: S = "ab##", T = "c#d#"
    Output: true
    Explanation: Both S and T become "".

    Input: S = "a#c", T = "b"
    Output: false
    Explanation: S becomes "c" while T becomes "b".

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Create an internal function

    Iterate through the string and either pop or push the letter based upon letter or #.

    Rejoin string.

    Compare both strings doing the build function. 

************* ALTERNATIVE ****************

To get this to constant space you can compare each string from the end with double pointer.

As you iterate towards the beginning of the strings validate that each character matches.

If you find a mismatched character return false.

To handle backspaces keep a count of the number of backspaces seen.

When you find a non-backspace, continue iterating in the string numBackspaces times to skip those (deleted) characters

O(N) in time and O1) in space

Adding a constant space complexity requirement is a way to complicate this problem.

******************** FUNCTION ****************************  */

function stringCompare(str1, str2) {

    const build = (string) => {
        let arr = [];

        for (const letter of string) {
            (letter === '#') ? arr.pop() : arr.push(letter);
        }
        return arr.join('');
    };
    return build(str1) === build(str2);
}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', true, stringCompare('ab#c', 'ad#c'));
let test2 = new Test('Test 2', true, stringCompare('ab##', 'c#d#'));
let test3 = new Test('Test 3', false, stringCompare('a#c', 'b'));
let test4 = new Test('Test 4', true, stringCompare('y#fo##f', 'y#f#o##f'));

console.table([
    test1,
    test2,
    test3,
    test4,
]);
