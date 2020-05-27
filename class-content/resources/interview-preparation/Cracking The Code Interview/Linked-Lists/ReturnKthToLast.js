/* 
**************** QUESTION DESCRIPTION ***********************

    Implement an algorithm to find the kth to last element of a singly linked list.

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: LinkedList
    Output: Node
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

    I'm not going to write this out, but it is double runner approach.

    Create 2 runner variables

        Rabbit = head 
        Turtle = head

    Send the rabbit k spaces ahead then start them evenly.

    Once rabbit hits the end, you got your element. 

******************* Time / Space *****************************

    Time: O(n)
    Space: O(1)

******************** FUNCTION ****************************  */

const LinkedList = require('./utils/singleLinkedList');

function kToLast(list, k) {

    let fastRunner = list.head;
    let slowRunner = list.head;

    for (let i = 0; i <= k; ++i) {
        fastRunner = fastRunner.next;
    }

    while (fastRunner) {
        fastRunner = fastRunner.next;
        slowRunner = slowRunner.next;
    }
    return slowRunner.value;
}

const list = new LinkedList();
for (const element of [1, 2, 3, 4, 5, 6]) {
    list.append(element);
};

console.log(kToLast(list, 2))

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
