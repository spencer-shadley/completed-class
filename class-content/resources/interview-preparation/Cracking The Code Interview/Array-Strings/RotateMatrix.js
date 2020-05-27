// **************** QUESTION DESCRIPTION **************** //

// Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees.
// Can you do this in place? (Constant Space)

// **************** CONSTRAINTS **************** //

// Size
// Constnat space 
// Preferred linear time O(n)

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: integer (dimensions of matrix)
// Output: Array of arrays (Matrix)
// Edge/Outlier: Space overflow

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Transpose the matrix swap(arr[i][j] = arr[j][i])
//                       j = i
// Rotate the matrix    swap(arr[i][j] = arr[i][length-j])
//                      j > length/2
// [[1,2,3],            
//  [4,5,6],    
//  [7,8,9]]

// [[7,4,1],
//  [8,5,2],
//  [9,6,3]]

// **************** FUNCTION **************** //

const rotateMatrix = (n) => {

    let matrix = [];
    let count = 1;
    for (let i = 0; i < n; ++i) {
        matrix.push([])
    };
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            matrix[i][j] = count;
            ++count;
        }
    };
    for (let i = 0; i < n; ++i) {
        for (let j = i; j < n; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    };
    for (let i = 0; i < n; ++i) {
        for (let j = 0; (j < n / 2); ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j]
            matrix[i][n - 1 - j] = temp;
        }
    };
    return matrix;
};

// **************** TESTING **************** //

console.log(rotateMatrix(3));
console.log(rotateMatrix(4));
console.log(rotateMatrix(5));