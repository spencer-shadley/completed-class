/*
**************** QUESTION DESCRIPTION ***********************

    Find the middle of a linked lsit 

    https://leetcode.com/problems/middle-of-the-linked-list/

    Given a non-empty, singly linked list with head node head, return a middle node of linked list.

    If there are two middle nodes, return the second middle node.

******************** CONSTRAINTS ****************************

    The number of nodes on this list is between 1 and 100.

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Linked List
    Output: Node (from Linked List)
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:  [1,2,3,4,5]
    Output: 3 -> 4 -> 5

    Input: [1,2,3,4,5,6]
    Output: 4 -> 5 -> 6

    Input:
    Output:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

 

******************** FUNCTION ****************************  */
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

function middleNode(head) {

    // Your code here

}

const n6 = new ListNode(6, null);
const n5 = new ListNode(5, n6);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);

// This should equal node 4. 
console.log(middleNode(n1))

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
