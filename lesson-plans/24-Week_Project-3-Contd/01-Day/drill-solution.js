// https://leetcode.com/problems/add-two-numbers/

// If the significant digit order was flipped it would be harder
// but we could use a stack to accomdate the ordering change

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * The trick here is to catch the carry
 * Whenever the base number (in decimal it's 10) is exceeded
 * we need to carry a 1 to the next digit (try it out by hand)
 * @param {ListNode} listOne
 * @param {ListNode} listTwo
 * @return {ListNode}
 */
function addTwoNumbers(listOne, listTwo) {
    let sumList = null;
    let head = null;

    let hasCarry = false;
    while (listOne || listTwo) {
        let sum = 0;
        if (listOne) {
            sum += listOne.val;
            listOne = listOne.next;
        }
        if (listTwo) {
            sum += listTwo.val;
            listTwo = listTwo.next;
        }

        if (hasCarry) {
            sum += 1;
        }

        hasCarry = sum >= 10;
        if (hasCarry) {
            sum -= 10;
        }

        const node = new ListNode(sum);
        if (sumList === null) {
            sumList = node;
            head = node;
        } else {
            sumList.next = node;
            sumList = sumList.next;
        }
    }
    
    if (hasCarry) {
        sumList.next = new ListNode(1);
    }
   
    return head;
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
