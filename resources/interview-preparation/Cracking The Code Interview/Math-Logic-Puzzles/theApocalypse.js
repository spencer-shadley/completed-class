/* 
**************** QUESTION DESCRIPTION ***********************

    In the new post-apocalyptic world, the world queen is desperately concerned about the birth rate.
    Therefore, she decrees that all families should ensure that they have one girl or else they face massive fines.
    If all families abide by this policy - that is, they continue to have children until they have one girl, at which point they immediately stop - what will the gender ratio of the new generation be?
    (Assume the odds of having a boy or a girl on any given pregnancy is equal).
    Solve this out logically and then write a computer simulation of it. 

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

        Imagine 100 families
    First child: 100 families
        50 B : 50 G

    Second child: 50 families
        25 BB : 25 BG

    Third child: 25 families
        12.5 BBB : 12.5 BBG

    The probabilites will grow closer to .5 / .5 as the sample size increases. 
    


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
