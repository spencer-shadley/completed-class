// https://leetcode.com/problems/merge-k-sorted-lists

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
    return mergedListHead || null;
}

/**
 * Verifies that at least one list has remaining elements
 * @param {ListNode[]} lists 
 */
function hasElements(lists) {
    return lists.some(list => !!list);
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

/**
 * Creates a LinkedList from a given array
 * @param {*[]} arr 
 */
function createList(arr) {
    let list;
    let head;
    for (const element of arr) {
        const node = new ListNode(element);
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

/**
 * Verify that when @see mergeKLists is called with @param input @param expected is returned
 * @param {ListNode[]} input The input to run against
 * @param {ListNode} expected The expected merged result
 */
function verify(input, expected) {
    let actual = mergeKLists(input);

    const expectedString = toString(expected);
    const actualString = toString(actual);
    console.log('expected: ', toString(expected));
    console.log('merged:   ', toString(actual));

    console.log(expectedString === actualString);
}

function verifyBasic() {
    const lists = [
        createList([1, 4, 5]),
        createList([1, 3, 4]),
        createList([2, 6])
    ];

    const expected = createList([1, 1, 2, 3, 4, 4, 5, 6]);
    
    verify(lists, expected);
}

function verifyEmpty() {
    const merged = mergeKLists([]);
    const expected = [];
    console.log(merged.toString() === expected.toString());
}

function verifySingleList() {
    const input = [createList([0, 2, 5])];
    const expected = createList([0, 2, 5]);
    verify(input, expected);
}

verifyBasic();
verifyEmpty();
verifySingleList();