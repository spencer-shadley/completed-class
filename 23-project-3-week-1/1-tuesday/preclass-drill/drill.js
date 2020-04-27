// https://leetcode.com/problems/merge-k-sorted-lists

// Below is a template for easily testing your code as you write it
// set a breakpoint on and start debugging when you get stuck!

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Pull out the current smallest item from lists and add
 * to a merged list
 * 
 * Make sure to keep track of the head of the list so we know where it begins
 * 
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) { }

/**
 * Verifies that at least one list has remaining elements
 * @param {ListNode[]} lists 
 */
function hasElements(lists) {
    return lists.some(list => list && list.val);
}

/**
 * Converts the given LinkedList into a readable string
 * @param {ListNode[]} list 
 */
function toString(list) {
    let ret = '';
    while (list.next !== null) {
        ret += list.val;
        if (list.next.next !== null) {
            ret += ' -> ';
        }
        list = list.next;
    }
    return ret;
}

function verify() {
    const listA = new ListNode(1);
    listA.next = new ListNode(4);
    listA.next.next = new ListNode(5);

    const listB = new ListNode(1);
    listB.next = new ListNode(3);
    listB.next.next = new ListNode(4);

    const listC = new ListNode(2);
    listC.next = new ListNode(6);

    const lists = [listA, listB, listC];

    let expected = new ListNode(1);
    expected.next = new ListNode(1);
    expected.next.next = new ListNode(2);
    expected.next.next.next = new ListNode(3);
    expected.next.next.next.next = new ListNode(4);
    expected.next.next.next.next.next = new ListNode(4);
    expected.next.next.next.next.next.next = new ListNode(5);
    expected.next.next.next.next.next.next.next = new ListNode(6);
    
    let merged = mergeKLists(lists);

    const expectedString = toString(expected);
    const actualString = toString(merged);
    console.log('expected: ', toString(expected));
    console.log('merged:   ', toString(merged));

    console.log(expectedString === actualString);
}

function verifyEmpty() {
    const merged = mergeKLists([]);
    const expected = [];
    console.log(merged.toString() === expected.toString());
}

verify();
verifyEmpty();
