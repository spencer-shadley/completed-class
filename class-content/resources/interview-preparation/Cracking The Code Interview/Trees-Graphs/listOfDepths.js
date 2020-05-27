// **************** QUESTION DESCRIPTION **************** //

// Given a binary tree.
// Design an algorithm which creates a linked list of all the nodes at each depth.
// (I.E. If you have a tree with depth D, you'll have D linked lists)

// **************** CONSTRAINTS ************************* //



// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: 
// Output:
// Edge/Outlier:

// **************** EXAMPLE **************** //

// Input:
// Output:


// Input: 
// Output:

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Breadth First Search


// **************** FUNCTION **************** //

class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };

    append(value) {

        if (this.head === null) {
            this.head = new ListNode(value);
            this.tail = this.head;
        } else {
            this.tail.next = new ListNode(value);
            this.tail = this.tail.next;
        }
    }
}

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // right 
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return list;
    }
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.breadthFirstSearch())


// **************** TESTING **************** //

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
//     test3,
// ]);
