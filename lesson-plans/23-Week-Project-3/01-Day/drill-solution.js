// https://leetcode.com/problems/merge-k-sorted-lists

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    let mergedList;
    let mergedListHead;
    while (hasElements(lists)) {
        let minListIndex = 0;
        for (let i = 0; i < lists.length; ++i) {
            const list = lists[i];
            const minList = lists[minListIndex];
            if (!minList || (list && minList.val > list.val)) {
                minListIndex = i;
            }
        }

        const listNode = new ListNode(lists[minListIndex].val);
        lists[minListIndex] = lists[minListIndex].next;

        if (!mergedList) {
            mergedList = listNode;
            mergedListHead = mergedList;
        } else {
            mergedList.next = listNode;
            mergedList = mergedList.next;
        }
    }
    return mergedListHead || [];
}

/**
 * 
 * @param {ListNode[]} lists 
 */
function hasElements(lists) {
    return lists.some(list => list && list.val);
}

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
