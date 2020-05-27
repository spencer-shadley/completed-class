/* 
**************** QUESTION DESCRIPTION ***********************

    There is an 8 x 8 chessboard in which two diagonally opposite corners have been cut off.
    You are given 31 dominos, and a single domino can cover exactly two squares. 
    Can you use the 31 dominos to cover the entire board?
    Prove your answer (by providing example or showing why its impossible)

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: 
    Output:
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:
    Output:
    Explanation:

    Input: 
    Output:
    Explanation:

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    The board is 8 x 8 with bottom left / top right removed.
    Each domino takes up 2 squares. 
    No combination of row will be even, there will be always +1 overflow into next row.


******************** FUNCTION ****************************  */





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
