// Count the number of triple indices where they follow geometrical progression (r).

// Complete the countTriplets function in the editor below.
// It should return the number of triplets forming a geometric progression for a given r as an integer.

// countTriplets has the following parameter(s):

// arr: an array of integers
// r: an integer, the common ratio

// Input: Array (of integers), Integer
// Output: Integer (# of triplets) 
// Special note: Can skip order, not linera

// Sample Input = ([1,5,5,25,125], 5)
// Sample Output = 4

const countTriplets = (arr, r) => {

    let dict = {};
    let triplets = 0;

    arr.forEach(val => {
        if (!dict[val]) {
            dict[val] = { s1: 0, s2: 0, s3: 0 };
        };
        if (!dict[val * r]) {
            dict[val * r] = { s1: 0, s2: 0, s3: 0 };
        };
        triplets += dict[val].s3;
        dict[val * r].s3 += dict[val].s2;
        dict[val * r].s2 += 1;
        // console.log(dict);

    });


    return triplets;
}

// console.log(countTriplets([1, 2, 2, 4], 2));

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new Test('Test 1', 4, countTriplets([1, 5, 5, 25, 125], 5));
let test2 = new Test('Test 2', 6, countTriplets([1, 3, 9, 9, 27, 81], 3));
let test3 = new Test('Test 3', 2, countTriplets([1, 2, 2, 4], 2));


console.table([
    test1,
    test2,
    test3,
])