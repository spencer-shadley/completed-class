// Breadth First Search / Traversal

// Visti all nodes reachable from given vector
// Start at root node. Go from left to right at each level of tree. 
// Go until you find the node you look for or tree ends. 
// Time: O(V + E) or O(n)

// Look at all nodes reachable in 0 moves.
// Look at all nodes reachable in 1 moves.
// Look at all nodes reachable in 2 moves.
// Look at all nodes reachable in n moves.

// Be careful to avoid duplicates. 

// Upside: Very good at finding the shortest path between nodes
// Downside: More memory

// Binary Search Tree

// This data structure preserves relationships.
// left is lower, Right is higher
// Lookup, Insert, Delete = O(log N)

// Balanced vs Unbalanced BST
// Unbalanced BST turns into:
// Lookup, Insert, Delete = O(N)

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

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree)
console.log(tree.breadthFirstSearch());