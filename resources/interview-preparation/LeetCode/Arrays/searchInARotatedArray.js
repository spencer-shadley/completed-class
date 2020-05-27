/* 
**************** QUESTION DESCRIPTION ***********************

    Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

    (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

    You are given a target value to search. If found in the array return its index, otherwise return -1.

******************** CONSTRAINTS ****************************

    You may assume no duplicate exists in the array.
    
    Your algorithm's runtime complexity must be in the order of O(log n).

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of Integers), Integer (target value)
    Output: Integer (Index of target value)
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input:  [4,5,6,7,0,1,2], 0
    Output: 4
    Explanation:  
        0 is less than 4, must be after rotation. 
        First pivot at 7.
        7 is greater than 3, search to the right.
        1 is next pivot.
        0 is less than 1. Check left.
        0 is found. 
        Record index.   

    Input:  [4,5,6,7,0,1,2], 3
    Output: -1
    Explanation:
        3 is less than 4, must be after rotation.
        First pivot is 7.
        7 is greater than 3, search to the right.
        1 is our next pivot.
        3 is greater than 1, check right
        Not found. 
        Return -1. 

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Find out which sub-array you need to look into

    Once found, perform Binary Search

******************** FUNCTION ****************************  */

function searchArray(arr, num) {

    let currentElement;
    let currentIndex;
    let minIndex = 0;
    let maxIndex = arr.length - 1;

    while (minIndex <= maxIndex) {

        currentIndex = Math.floor((minIndex + maxIndex) / 2);

        currentElement = arr[currentIndex];

        if (currentElement === num) {

            return currentIndex;

        }

        if (arr[minIndex] <= currentElement) {

            if (arr[minIndex] <= num && num < currentElement) {

                maxIndex = currentIndex - 1;

            } else {

                minIndex = currentIndex + 1;

            }
        } else {

            if (currentElement < num && num <= arr[maxIndex]) {

                minIndex = currentIndex + 1;

            } else {

                maxIndex = currentIndex - 1;

            }
        }
    }
    return -1;
}


// console.log(searchArray([4, 5, 6, 7, 0, 1, 2], 0))

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 4, searchArray([4, 5, 6, 7, 0, 1, 2], 0));
let test2 = new Test('Test 2', -1, searchArray([4, 5, 6, 7, 0, 1, 2], 3));
let test3 = new Test('Test 3', 2, searchArray([4, 5, 6, 7, 0, 1, 2], 6));

console.table([
    test1,
    test2,
    test3
]);
