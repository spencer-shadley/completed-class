// **************** QUESTION DESCRIPTION **************** //

// Given a directed graph and two nodes (S and E).
// Design an algorithm to find out whether there is a route from S to E.

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

// This looks like a depth first search between two vertexes



// **************** FUNCTION **************** //

const breadthFirstSearch = node => {

    let currentNode = node;
    checkNode(currentNode);
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
        currentNode = queue.shift();
        checkNode(currentNode);
        list.push(currentNode.value)
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }
    return false;
}

const checkNode = node => {
    if (node === `E`) {
        return true;
    }
}


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
