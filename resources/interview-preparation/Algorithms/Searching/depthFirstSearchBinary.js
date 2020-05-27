// Depth First Search / Traversal

// Follows one branch of the tree down all levels 
// Continues to nearest ancestor branch

// Lower memory requirement than BFS because you don't need to track descendants

// Time: O(V + E) or O(n)

// Upside: Less memeory. Best at `Does Path Exist?`
// Downside: Slower

// Three ways to implement DFS: 
//            EXAMPLE TREE
//                  101
//               33    105

//      Inorder -   33, 101, 105
//      Preorder -  101, 33, 105
//      Postorder - 33, 105, 101


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
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
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
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
    };
    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value = currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }
    // remove

    depthFirstSearchInOrder() {
        return traverseInOrder(this.root, []);
    }
    depthFirstSearchPreOrder() {
        return traversePreOrder(this.root, []);
    }
    depthFirstSearchPostOrder() {
        return traversePostOrder(this.root, []);
    }

    // DFS InOrder - [1, 4, 6, 9, 15, 20, 170]
    // DFS PreOrder - [9, 4, 1, 6, 20, 15, 170]
    // DFS PostOrder - [1, 6, 4, 15, 170, 20, 9]

}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value)
    if (node.right) {
        traverseInOrder(node.right, list)
    }
    return list;
};

function traversePreOrder(node, list) {
    list.push(node.value)
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list)
    }
    return list;
};

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree)
console.log(`This is InOrder: ${tree.depthFirstSearchInOrder()}`)
console.log(`This is PreOrder: ${tree.depthFirstSearchPreOrder()}`)
console.log(`This is PostOrder: ${tree.depthFirstSearchPostOrder()}`)

