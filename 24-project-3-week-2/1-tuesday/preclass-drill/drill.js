// https://leetcode.com/problems/add-two-numbers/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} listOne
 * @param {ListNode} listTwo
 * @return {ListNode}
 */
function addTwoNumbers(listOne, listTwo) {
    
}

function verify(inputOne, inputTwo, expected) {
    console.log(`${inputOne} + ${inputTwo}`);
    const actual = addTwoNumbers(inputOne, inputTwo);
    if (actual === expected) {
        console.log('passed!')
    } else {
        console.log('expected', expected);
        console.log('actual', actual);
    }
}

verify(createList([3, 4, 2]), createList([4, 6, 5]), createList([7, 0, 8]));
