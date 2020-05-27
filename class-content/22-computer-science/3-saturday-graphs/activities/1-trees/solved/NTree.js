'use strict';

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

function createExampleTree() {
    const root = new Node(0);

    root.children = [
        new Node(1),
        new Node(2),
        new Node(3)
    ];

    root.children[0].children = [new Node(4)];
    root.children[2].children = [new Node(6), new Node(7)];

    return root;
}

const tree = createExampleTree();
console.log(tree);
console.log(tree.children[2].children[1].data); // 7
