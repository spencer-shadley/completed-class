/* 
**************** QUESTION DESCRIPTION ***********************

    Given an array of non-negative integers, you are initially positioned at the first index of the array.

    Each element in the array represents your maximum jump length at that position.

    Determine if you are able to reach the last index.

******************** CONSTRAINTS ****************************

    1 <= nums.length <= 3 * 10^4
    
    0 <= nums[i][j] <= 10^5

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array
    Output: Boolean 
    Edge/Outlier: Null, undefined, Overflow

********************** EXAMPLES *****************************

    Input: [2, 3, 1, 1, 4]
    Output: true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

    Input: [3, 2, 1, 0, 4]
    Output: false
    Explanation: 
        You will always arrive at index 3 no matter what. 
        Its maximum jump length is 0, which makes it impossible to reach the last index.

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

   We are trying to add numbers to reach arr.length -1

   



******************* Time / Space *****************************

    Time: O(n)
    Space: O(1)

******************** FUNCTION ****************************  */

function jumpGame(arr) {

    const length = arr.length;
    let max = 0;

    for (let i = 0; i < length; ++i) {

        if (i > max) return false;

        if (i + arr[i] >= length - 1) return true;

        max = Math.max(max, i + arr[i])
    }
}

// console.log(jumpGame([2, 3, 1, 1, 4]))
// console.log(jumpGame([3, 2, 1, 0, 4]))

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', true, jumpGame([2, 3, 1, 1, 4]));
let test2 = new Test('Test 2', false, jumpGame([3, 2, 1, 0, 4]));
let test3 = new Test('Test 3', true, jumpGame([3, 2, 0, 1, 4]));

console.table([
    test1,
    test2,
    test3
]);
