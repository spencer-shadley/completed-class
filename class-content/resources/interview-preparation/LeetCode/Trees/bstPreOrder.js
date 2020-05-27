/* 
**************** QUESTION DESCRIPTION ***********************

    Return the root node of a binary search tree that matches the given preorder traversal.

    (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

    It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

******************** CONSTRAINTS ****************************

    1 <= preorder.length <= 100
    1 <= preorder[i] <= 10^8
    The values of preorder are distinct.

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array
    Output: Array
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input: [8,5,1,7,10,12]
    Output: [8,5,10,1,7,null,12]
    Explanation:
        8 is the root node.
        5 / 10 are direct chidlren.
        1 / 7 are children of 5.
        null and 12 are children of 10. 

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************




******************** FUNCTION ****************************  */

function bst(arr) {

    let go = (root, x) => {
        if (root.val > x) {
            if (!root.left)
                root.left = new TreeNode(x);
            else
                go(root.left, x);
        } else {
            if (!root.right)
                root.right = new TreeNode(x);
            else
                go(root.right, x);
        }
    };
    let root = new TreeNode(arr[0]);
    for (let i = 1; i < arr.length; ++i)
        go(root, arr[i]);
    return root;

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
