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
    let stackOne = createStack(listOne);
    let stackTwo = createStack(listTwo);
    let sumStack = [];

    let hasCarry = false;
    while (stackOne.length !== 0 || stackTwo.length !== 0) {
        let sum = 0;
        if (stackOne) {
            sum += stackOne.val;
            stackOne.pop();
        }
        if (stackTwo) {
            sum += stackTwo.val;
            stackTwo.pop();
        }

        if (hasCarry) {
            sum += 1;
        }

        hasCarry = sum > 10;
        if (hasCarry) {
            sum -= 10;
        }

        sumStack.push(sum);
    }

    if (hasCarry) {
        sumStack.push(1);
    }

    const sumList = createList(sumStack);
    return sumList;
}

function createStack(list) {
    let stackOne = [];
    while (listOne.next) {
        stackOne.push(listOne.val);
        listOne = listOne.next;
    }
    return stackOne;
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

verify(createList([2, 4, 3], createList(5, 6, 4), createList(807)));
