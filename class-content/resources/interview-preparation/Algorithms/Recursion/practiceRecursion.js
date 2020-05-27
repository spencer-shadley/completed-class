// Following along with Udemy course for Recursion

let counter = 0;

const inception = () => {
    console.log(counter);
    if (counter > 3) {
        return `Done`;
    }
    counter++;
    return inception();
};

inception();

// *************************************************

// RECURSION RULES

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have two returns, base case and recursive case.

// *************************************************

// When would I ever use recursion?

// Mathetmatically, anything that is done using recursion, can also be done iteratively.
// Possible:
// Every time you are using a tree or converting something into a tree, consider using recursion.
//  1. Divided into a number of subproblems that are smaller instances of the same problem.
//  2. Each instance of the subproblem is identical in nature.
//  3. The solutions of each subproblem can be combined to solve the problem at hand.
// Divide and Conquer using Recursion

// *************************************************

// Recursion is powerful, yet expensive. Esepcially to memory / call stack.

