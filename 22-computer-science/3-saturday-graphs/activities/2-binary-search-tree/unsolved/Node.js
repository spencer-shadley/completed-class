'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /**
     * BONUS - implement search first
     * Inserts a new Node while maintaining a BST
     * Note: This is very unbalanced and inefficient
     * Look into Red-Black Tree for a balanced BST solution
     * @param {Number} value The value of the node being inserted
     */
    insert(value) { console.log(value); }
}

/**
 * Search @param root for @param value
 * @param {Node} root the root of the tree to begin the search
 * @param {Number} value the desired value of the node
 * @returns {Node} the node with a matching @param value
 */
function search(root, value) {
    console.log(root, value);
}

function createTreeExample() {
    const root = new Node(0);
    root.left = new Node(1);
    root.right = new Node(2);
    root.left.left = new Node(3);
    root.right.left = new Node(5);
    root.right.right = new Node(6);
    return root;
}

const tree = createTreeExample();
const foundNode = search(tree, 6);
console.log(foundNode);

// Bonus
// tree.insert(400);
// console.log(tree);
// console.log(tree.right.right.right);
// console.log(search(tree, 400));
