'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }

    /**
     * Inserts a new Node while maintaining a BST
     * Note: This is very unbalanced and inefficient
     * Look into Red-Black Tree for a balanced BST solution
     * @param {Number} value The value of the node being inserted
     */
    insert(value) {
        if (this.value > value) {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new Node(value);
            }
        } else {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new Node(value);
            }
        }
    }
}

/**
 * Search @param root for @param value
 * @param {Node} root the root of the tree to begin the search
 * @param {Number} value the desired value of the node
 * @returns {Node} the node with a matching @param value
 */
function search(root, value) {
    let currentNode = { ...root };
    while (currentNode) {
        // if the currentNode is larger it must be in the left subtree
        if (currentNode.value > value) {
            currentNode = currentNode.left;
        }
        // if the currentNode is smaller it must be in the right subtree
        else if (currentNode.value < value) {
            currentNode = currentNode.right;
        }
        // we found it!
        else {
            return currentNode;
        }
    }
    return null; // not in the tree
}

/**
 * Recursively search @param root for @param value
 * @param {Node} root the root of the tree to begin the search
 * @param {Number} value the desired value of the node
 * @returns {Node} the node with a matching @param value
 */
function searchRecursive(node, value) {
    // we found it!
    if (node.value === value) {
        return node;
    }

    // too big, try the left subtree
    if (node.value > value) {
        return searchRecursive(node.left, value);
    }

    // too small, try the right subtree
    else {
        return searchRecursive(node.right, value);
    }
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

const foundNodeRecursively = searchRecursive(tree, 6);
console.log(foundNodeRecursively);

tree.insert(400);
console.log(tree);
console.log(tree.right.right.right);
console.log(search(tree, 400));
