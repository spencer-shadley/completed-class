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

function createList(stack) {
    let list;
    let head;
    while (stack.length > 0) {
        const value = stack.pop();
        const node = new ListNode(value);
        if (list) {
            list.next = node;
            list = list.next;
        } else {
            list = node;
            head = list;
        }
    }
    return head;
}

verify(createList([3, 4, 2]), createList([4, 6, 5]), createList([7, 0, 8]));
