/* 
**************** QUESTION DESCRIPTION ***********************

    Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 

    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 

    You may assume all four edges of the grid are all surrounded by water.

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Matrix (Array of Arrays)
    Output: Integer
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:

        11110
        11010
        11000
        00000

    Output: 1
    Explanation:

   Input:

        11000
        11000
        00100
        00011

    Output: 3
    Explanation:

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Breadth First Search

        Iterate through the matrix.
            
            If we find a 1, increment count and run BFS at that location.
        
        BFS
    
******************** FUNCTION ****************************  */


function countIslands(matrix) {

    let count = 0;

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j] === 1) {
                BFS(matrix, i, j);
                count++;
            }
        }
    }
    return count;
}

function BFS(matrix, i, j) {
    if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length || matrix[i][j] === 0) {
        return
    };
    matrix[i][j] = 0;
    BFS(matrix, i + 1, j)
    BFS(matrix, i - 1, j)
    BFS(matrix, i, j + 1)
    BFS(matrix, i, j - 1)
}


const islands1 = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

const islands2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];

const islands3 = [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1]
];

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 1, countIslands(islands1));
let test2 = new Test('Test 2', 3, countIslands(islands2));
let test3 = new Test('Test 3', 5, countIslands(islands3));


console.table([
    test1,
    test2,
    test3,
]);
