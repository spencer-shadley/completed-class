/* 
**************** QUESTION DESCRIPTION ***********************

 Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.

 IMPORTANT: The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
 The additional spacing the example below indicates the partition.

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Linked List
    Output: Linked List
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 , partition = 5
    Output: 3 -> 2 -> 1 -> 5 -> 5 -> 8 -> 10
    Explanation:

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

 This can be a method in a linked list

    Prepend nodes less than partition

    Append nodes greater than partition

******************* Time / Space *****************************

    Time: 
    Space: 

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

// console.table([
//     test1,
//     test2,
//     test3
// ]);
