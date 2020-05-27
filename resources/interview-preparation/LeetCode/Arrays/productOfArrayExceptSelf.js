/* 
**************** QUESTION DESCRIPTION ***********************

    Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

******************** CONSTRAINTS ****************************



********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of Integers)
    Output: Array (of Integers)
    Edge/Outlier: Empty, Type, Overflow

********************** EXAMPLES *****************************

    Input: [1,2,3,4]
    Output: [24,12,8,6]
    Explanation:

    Input: [0,0,1,2,3]
    Output: [0,0,0,0,0]
    Explanation:

    Input: [1,2,0,3,4]
    Output: [0,0,24,0,0]
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    Iterate through the array, multipling all the numbers together.
        If we find a 0, multiple by 1, increment countZeros.
    Iterate through array, adding product / number to a new result array.

******************** FUNCTION ****************************  */

function productNotSelf(arr) {

    let countZeros = 0;
    let result = [];
    let product = 1;

    for (const number of arr) {
        if (number === 0) {
            countZeros++;
        }
        product *= number === 0 ? 1 : number;
    };

    for (const number of arr) {
        if (countZeros > 1) {
            result.push(0);
        } else if (countZeros === 1) {
            if (number === 0) {
                result.push(product)
            } else {
                result.push(0)
            }
        } else {
            result.push(product / number)
        }
    };

    return result;
}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', [24, 12, 8, 6], productNotSelf([1, 2, 3, 4]));
let test2 = new Test('Test 2', [0, 0, 0, 0], productNotSelf([0, 0, 3, 4]));
let test3 = new Test('Test 3', [6, 0, 0, 0], productNotSelf([0, 1, 2, 3]));

console.table([
    test1,
    test2,
    test3
]);
