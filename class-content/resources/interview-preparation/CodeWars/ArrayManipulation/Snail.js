// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as [[]]

function snail(array) {
  var result = [];

  while (array.length > 0) {
    //grab the first row
    result = result.concat.apply(result, array.splice(0, 1));

    //grab the last column
    for (var i = 0; i <= array.length - 1; i++) {
      result = result.concat(array[i].splice(array.length));
    }

    //grab the last row
    var temp = [].concat.apply([], array.splice(array.length - 1)).reverse();
    result = result.concat.apply(result, temp);

    //grab the first column
    for (var i = array.length - 1; i >= 0; i--) {
      result = result.concat(array[i].splice(0, 1));
    }
  }
  return result;
}
var matrix1 = [[]]

var matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(snail(matrix1))
console.log(snail(matrix2))