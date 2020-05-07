// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.
// Input Format

// [1,2,3,4,5]

// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
// The second line contains  space-separated integers .

function ShiftLeft(arr, d) {

    if (arr.length < 1 || arr.length > 1000000) {
        return "Invalid array length";
    }
    while (d > arr.length) {
        d -= arr.length;
    }
    let temp = arr.slice(0);
    for (let i = 0; i < d; i++) {
        let first = temp.shift();
        temp.push(first);
    }

    return temp;
}

console.log(ShiftLeft([1, 2, 3, 4, 5], 8));