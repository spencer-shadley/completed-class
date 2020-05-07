/* 
**************** QUESTION DESCRIPTION ***********************

    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time.

******************** CONSTRAINTS ****************************

    Only contains integers / non-negative numbers

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Matrix
    Output: Integer
    Edge/Outlier:

********************** EXAMPLES *****************************

   Input:
    [
        [1,3,1],
        [1,5,1],
        [4,2,1]
    ]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

   Input:
    [
        [1,2,4],
        [1,5,1],
        [4,2,1]
    ]
Output: 9
Explanation: Because the path 1→1→4→2→1 minimizes the sum.

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    The brute force method is to try every single path. O(n ^ 2)

    DFS 

    Dynamic Programming to store min path at that location. O(m * n)

    Combine min cost to get to that location

******************** FUNCTION ****************************  */

function minPathSum(matrix) {

    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            if (row === 0 && col === 0) {
                continue;
            } else if (row === 0) {
                matrix[row][col] = matrix[row][col] + matrix[row][col - 1];
            } else if (col === 0) {
                matrix[row][col] = matrix[row][col] + matrix[row - 1][col];
            } else {
                matrix[row][col] = matrix[row][col] + Math.min(matrix[row - 1][col], matrix[row][col - 1])
            }

        }
    }
    return matrix[matrix.length - 1][matrix[0].length - 1];
}

const matrix1 = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];

const matrix2 = [
    [1, 2, 4],
    [1, 5, 1],
    [4, 2, 1]
];

const matrix3 = [
    [1, 4, 1],
    [3, 5, 3],
    [4, 2, 1]
]

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 7, minPathSum(matrix1));
let test2 = new Test('Test 2', 9, minPathSum(matrix2));
let test3 = new Test('Test 3', 10, minPathSum(matrix3));

console.table([
    test1,
    test2,
    test3
]);
