// **************** QUESTION DESCRIPTION **************** //

// Given a sorted (increasing order) array with unique integer elements. 
// Write an algorithm to create a binary search tree with minimal height. 

// **************** CONSTRAINTS ************************* //



// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Sorted Array (of Integers)
// Output: BST
// Edge/Outlier: 

// **************** EXAMPLE **************** //

// Input: [1, 2, 3, 4, 5, 6, 7]
// Output:
//          4
//      2       6
//   1    3   5    7


// Input: [1, 2, 3, 4, 5]
// Output:  
//           3
//      2       4
//   1             5

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Since the array is sorted, we can start in the middle for our root node.
// Create two new arrays
// Take the middle of those new arrays for next node
// Repeat 

// **************** FUNCTION **************** //

const minimalTree = arr => {

    const tree = new BinarySearchTree();

    return treeSort(arr, 0, arr.length - 1, tree);
};

const treeSort = (arr, start, end, tree) => {
    if (end < start) {
        return null;
    };

    let mid = (start + end) / 2
    if (start === 0) {
        mid = Math.ceil(mid);
    } else {
        mid = Math.floor(mid);
    }
    tree.insert(arr[mid]);

    treeSort(arr, start, mid - 1, tree);
    treeSort(arr, mid + 1, end, tree);
    return tree.breadthFirstSearch();
};


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
};

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
};

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', [2, 1, 3], minimalTree([1, 2, 3]));
let test2 = new Test('Test 2', [3, 2, 4, 1, 5], minimalTree([1, 2, 3, 4, 5]));
let test3 = new Test('Test 3', [4, 2, 6, 1, 3, 5, 7], minimalTree([1, 2, 3, 4, 5, 6, 7]));

console.table([
    test1,
    test2,
    test3,
]);
