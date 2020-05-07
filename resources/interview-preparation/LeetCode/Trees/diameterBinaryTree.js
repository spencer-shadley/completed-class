/* 
**************** QUESTION DESCRIPTION ***********************

    Given a binary tree, you need to compute the length of the diameter of the tree. 
    The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
    This path may or may not pass through the root.

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: 
    Output:
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:      
          1
         / \
        2   3
       / \     
      4   5    
    Output: 3 
    Explanation: [4,2,1,3] or [5,2,1,3]

    Input: 
    Output:
    Explanation:

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    We create an array that only contains the root. 
    Starting at the root, we can traverse to the left, each node found we push to array. 
    Starting at the root, we traverse to teh right, each node found we push to array.


******************** FUNCTION ****************************  */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function diameterOfTree(root) {

    return helper(root)[1];

}

function helper(root) {
    if (!root) {
        return [-1, 0];
    }
    const left = helper(root.left);
    const right = helper(root.right);
    return [Math.max(left[0], right[0]) + 1, Math.max(left[1], right[1], left[0] + right[0] + 2)];
}


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
