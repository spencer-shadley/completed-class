/* 
**************** QUESTION DESCRIPTION ***********************

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: 
    Output:
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:
    Output:
    Explanation:

    Input: 
    Output:
    Explanation:

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************




******************** FUNCTION ****************************  */

const minStack = function () {
    this.stack = [];
    this.min = Infinity;
    this.size = 0;
};

MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (x < this.min) {
        this.min = x;
    }
};

MinStack.prototype.pop = function () {
    const popped = this.stack.pop();
    if (this.min === popped) {
        this.min = Math.min(...this.stack);
    }
    return popped;
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function () {
    return this.min
};

// **************** TESTING ******************************** //

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
let test4 = new Test('Test 4');

// console.table([
//     test1,
//     test2,
//     test3,
//     test4,
// ]);
