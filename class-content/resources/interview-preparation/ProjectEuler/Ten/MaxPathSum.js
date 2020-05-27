// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

// 3
// 7 4
// 2 4 6
// 8 5 9 3

// The max is 3 + 7 + 4 + 9 = 23

// Find the max of the triangle below

// 75
// 95 64
// 17 47 82
// 18 35 87 10
// 20 04 82 47 65
// 19 01 23 75 03 34
// 88 02 77 73 07 63 67
// 99 65 04 28 06 16 70 92
// 41 41 26 56 83 40 80 70 33
// 41 48 72 33 47 32 37 16 94 29
// 53 71 44 65 25 43 91 52 97 51 14
// 70 11 33 28 77 73 17 78 39 68 17 57
// 91 71 52 38 17 14 91 43 58 50 27 29 48
// 63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23


// Input: Array (Array of arrays marking the rows of the triangle)
// Output: Integer (Max sum of path)

// If my input is an array of arrays. I can iterate through all the arrays, checking each path for the max value. Return that max sum. 
// Check array[i][j] array[i][j+1]
// Brute force is not optimal. Find a more clever solution. 
// Start from the bttom and accumulate sums from below 

const testTree = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];

const treeArray = [[75], [95, 64], [17, 47, 82], [18, 35, 87, 10], [20, 4, 82, 47, 65], [19, 1, 23, 75, 3, 34],
[88, 2, 77, 73, 7, 63, 67], [99, 65, 4, 28, 6, 16, 70, 92], [41, 41, 26, 56, 83, 40, 80, 70, 33], [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14], [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57], [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31], [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]];

function maxPathSum (treeArr) {

    const len = treeArr.length;

    for (let i = len - 1; i >= 0; --i) {
        for (let j = 0; j < treeArr[i].length - 1; ++j) {
                // compare treeArr[i][j] + treeArr[i - 1][j] > treeArr[i][j + 1] + treeArr[i -1][j]
                if (treeArr[i][j] + treeArr[i -1][j] > treeArr[i][j + 1] + treeArr[i - 1][j]) {
                    treeArr[i - 1][j] = treeArr[i][j] + treeArr[i -1][j];
                } else {
                    treeArr[i - 1][j] = treeArr[i][j + 1] + treeArr[i - 1][j];
                }
        }
    }

    const Max = parseInt(treeArr[0]);
    return Max;

}

console.log(maxPathSum(testTree));
console.log(maxPathSum(treeArray));





