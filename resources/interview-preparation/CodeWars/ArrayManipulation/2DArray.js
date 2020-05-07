// Complete the function hourglassSum in the editor below. 
// It should return an integer, the maximum hourglass sum in the array.

// hourglassSum has the following parameter(s):

// arr: an array of integers
// Input Format

// Each of the  lines of inputs  contains  space-separated integers .

// Constraints

// Output Format

// Print the largest (maximum) hourglass sum found in .

// Sample Array
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// Output 19

function Hourglass(arr) {

    let hourglasses = []

    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
            let sum = 0;

            sum += arr[row][col] // 1 - top left
            sum += arr[row][col + 1] // 1 - top middle
            sum += arr[row][col + 2] // 1 - top right
            sum += arr[row + 1][col + 1] // 1 - middle middle
            sum += arr[row + 2][col] // 1 - bottom left
            sum += arr[row + 2][col + 1] // 1 - bottom middle
            sum += arr[row + 2][col + 2] // 1 - bottom right

            hourglasses.push(sum)

        }
    }

    return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;

}