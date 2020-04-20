'use strict';

class Node {
    constructor(data) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
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
console.log(`tree\n`, tree);
console.log(`\n\ntree.right\n`, tree.right);
console.log(`\n\ntree.right.right.data\n`, tree.right.right.data);
