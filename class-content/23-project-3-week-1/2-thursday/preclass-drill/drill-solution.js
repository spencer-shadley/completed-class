/* 
**************** QUESTION DESCRIPTION ***********************

    https://leetcode.com/problems/last-stone-weight/

    We have a collection of stones, each stone has a positive integer weight.

    Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

    If x == y, both stones are totally destroyed;
    If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
    At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

******************** CONSTRAINTS ****************************

    1 <= stones.length <= 30
    1 <= stones[i] <= 1000

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of integers)
    Output: Integer
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input: [2,7,4,1,8,1]
    Output: 1
    Explanation:
        We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
        we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
        we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
        we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

    Input: [8,7,4,2,1,1]
    Output: 1
    Explanation:
        We combine 7 and 8 and get 1 so the array converts to [1,4,2,1,1]
        We combine 2 and 4 and get 2 so the array converts to [1,2,1,1]
        We combine 2 and 1 and get 1 so the array converts to [1,1,1,]
        We combine 1 and 1 to get 0 so the array converts to [1]. Value of last stone is 1

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    We need to sort the array.
    Take the first two numbers and compare:
        If equal, hulk smash
        If not, take difference and push to array.
    Re-sort.
    Recursion. 

******************** FUNCTION ****************************  */

function lastStoneWeight(stones) {

    stones.sort((a, b) => b - a)

    while (stones.length > 1) {
        if (stones[0] === stones[1]) {
            stones.splice(0, 2);
        } else {
            let remaining = stones[0] - stones[1];
            stones.push(remaining);
            stones.splice(0, 2);
            stones.sort((a, b) => b - a)
        }
    };

    return stones[0] ? stones[0] : 0;
}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 1, lastStoneWeight([2, 7, 4, 1, 8, 1]));
let test2 = new Test('Test 2', 3, lastStoneWeight([9, 7, 7, 6, 6]));
let test3 = new Test('Test 3', 1, lastStoneWeight([1]));
let test4 = new Test('Test 4', 0, lastStoneWeight([]));

console.table([
    test1,
    test2,
    test3,
    test4,
]);
