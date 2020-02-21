// John works at a clothing store.
// He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar = [1, 2, 1, 2, 1, 3, 2] . There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.


// Input: Integer, Array
// Output: Integer (Number of matching pairs of socks available)
// Outlier: 
// Edge:

// Constraints: 1 <= n <= 100, 1 <= arr[i] <= 100

const sockMerchant = (n, arr) => {

    let sockPairs = 0;

    if (1 <= n && n <= 100) {

        let hash = {};
        for (const sock of arr) {
            if (hash[sock]) {
                sockPairs++;
                delete hash[sock];
            } else {
                hash[sock] = true;
            }
        }
    }
    return sockPairs;
}

class TestSocks {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new TestSocks(`test1`, 2, sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
let test2 = new TestSocks('test2', 3, sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

console.table([
    test1,
    test2,
])
