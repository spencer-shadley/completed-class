/* 
**************** QUESTION DESCRIPTION ***********************

    Delete the middle node of a linked list.

    If linked list has an even length, delete the second middle node. 

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Linked List
    Output: Linked List
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:  1 -> 2 -> 3 -> 4 -> 5
    Output: 1 -> 2 -> 4 -> 5
    Explanation:
        The 3 is the middle ndoe and is delted

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Import linked list 
    
    Double runner approach

        Tortoise
        Hare

    The hare moves 2 spaces for every 1 space the tortoise moves.

    When the hare has reached the end, remove the element at tortoise location.

******************* Time / Space *****************************

    Time: O(n)
    Space: O(1)

******************** FUNCTION ****************************  */

const LinkedList = require('./utils/singleLinkedList');

function deleteMiddleNode(list) {

    let Hare = list.head;
    let Tortoise = list.head;
    let tortoiseIndex = 1;

    while (Hare && Hare.next) {
        Hare = Hare.next.next;
        Tortoise = Tortoise.next;
        tortoiseIndex++;
    }
    list.removeAt(tortoiseIndex);
    return list;
}

const list = new LinkedList();
for (const element of [1, 2, 3, 4, 5]) {
    list.append(element);
};

deleteMiddleNode(list);

console.log(list.toArray());

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
