/**
 * https://leetcode.com/problems/add-two-numbers/
 * 
 * Add Two Numbers
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. * Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

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
