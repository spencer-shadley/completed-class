/* 
**************** QUESTION DESCRIPTION ***********************

    You have a five-quart jug, a three-quart jug, and an unlimited supply of water (but no measuring cups).
    How would you come up with exactly four quarts of water? 
    Note that the jugs are oddly shaped, such that filling up exactly 'half' of the jug would be impossible.

******************** CONSTRAINTS ****************************

    Nice.

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

    I have seen Die Hard. Best Christmas Movie.

    Your have 2 jugs:

            3               5
        *************************
            3               2
            0               2
            2               0
            2               5
            3               4

    Fill 5 gallon jug.
    Pour 3 gallons from 5-gal into 3-gal.
    Empty 3-gal.
    Pour 2 gal from 5-gal into 3-gal.
    Re-fill 5-gal
    Pour 1 gal from 5-gal into 3-gal.
    You now have 4 gallons in 5-gal

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
