/* 
**************** QUESTION DESCRIPTION ***********************

    You have 20 bottles of pills.
    19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. 
    Given a scale that provides an exact measurement, how would you find the heavy bottle? 
    You can only use the scale once.

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
    
    I'm going to imagine this problem with 5 bottles. Tedious.
    5 bottles total. 
    4 bottles = 1.0 gram / pill
    1 bottle = 1.1 gram / pill

    Bottle 1 x 1 pill
    Bottle 2 x 2 pills
    Bottle 3 x 3 pills
    Bottle 4 x 4 pills
    Bottle 5 x 5 pills
            15 total pills
            If weight = 15.1 (Bottle 1), 15.2 (Bottle 2), 15.3 (Bottle 3), 15.4 (Bottle 4), 15.5 (Bottle 5)


******************** FUNCTION ****************************  */

function findHeavyPills(weight, bottles) {

    let totalPills = bottles;
    let pillWeight = 0;

    while (totalPills > 0) {
        pillWeight += totalPills;
        totalPills--;
    }

    return Math.floor((weight - pillWeight) * 10)
}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 3, findHeavyPills(15.3, 5));
let test2 = new Test('Test 2', 4, findHeavyPills(15.4, 5));
let test3 = new Test('Test 3', 2, findHeavyPills(3.2, 2));

console.table([
    test1,
    test2,
    test3
]);
