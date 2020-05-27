/* 
**************** QUESTION DESCRIPTION ***********************

    Write code to remove duplicates from an unsorted linked list.
    
    BONUS: How would you solve this problem if a temporary buffer is not allowed? 

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Linked List
    Output: Linked List
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:  1 -> 5 -> 1 -> 3 -> 6 
    Output: 1 -> 5 -> 3 -> 6
    Explanation:
        The second 1 is removed because it is a duplicate. 

    Input: 
    Output:
    Explanation:

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Create a hashmap to log each node.value
    Check each node.value if it is contained within the linked list
    If yes: Remove node
    If no, Add node to linked list

******************** FUNCTION ****************************  */

const LinkedList = require('./utils/singleLinkedList');

function removeDuplicates(list) {

    const set = new Set();
    let cur = list.head;
    let prev = null;
    while (cur) {
        if (set.has(cur.value)) {
            let elem = cur;
            prev.next = cur.next;
            cur = cur.next;
            elem.next = null;
        }
        else {
            // add to the set
            set.add(cur.value);
            prev = cur;
            cur = cur.next;
        }
    }

    return list;
}

const list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
    list.append(elem);
};

removeDuplicates(list);

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
//  ]);

