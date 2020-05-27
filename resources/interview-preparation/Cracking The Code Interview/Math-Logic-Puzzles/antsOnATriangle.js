/* 
**************** QUESTION DESCRIPTION ***********************
    
    There are three ants on different vertices of a triangle.
    What is the probability of a collsion (between any two or all of them) if they start walking on the sides of the triangle?
    Assume that each ant randomly picks a direction, with either direction being equally likely to be chosen, and they walk at the same speed.

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

    The ants only have two choices. Left or Right. 0 or 1.
    Math.pow(2, n) posibilities. 
    p (0 + 0 + 0), p (0 + 0 + 1), p (0 + 1 + 0), p (0 + 1 + 1), p (1 + 0 + 0), p (1 + 1 + 0), p (1 + 1 + 1), p (1 + 0 + 1)
    They all have to move in the same direciton in order to avoid collision

    p(1/2) ^ 3 = 0.125
    Multiply it by 2 since they can go in 2 directions.
    
    p(3) = 0.25 
       

******************** FUNCTION ****************************  */

function antProb(ants) {

    return 2 / (Math.pow(2, ants))

};

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 0.25, antProb(3));
let test2 = new Test('Test 2', 0.125, antProb(4));
let test3 = new Test('Test 3', 0.0625, antProb(5));

console.table([
    test1,
    test2,
    test3
]);
