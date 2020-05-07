/* 
**************** QUESTION DESCRIPTION ************************ 

    Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

 **************** CONSTRAINTS ********************************

    This function can take in upper-case letters, lower-case letters, or numbers.
    This function takes in either a string or array. Annoying. 

 **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER ***********

    Input: String or Array
    Output: Array
    Edge/Outlier: Empty string, undefined, overflow

 **************** EXAMPLES ************************************

    Input:  'AAAABBBCCDAABBB'
    Output: ['A', 'B', 'C', 'D', 'A', 'B']

    Input: [1,2,2,3,3]
    Output: [1,2,3]

    Input: 'ABBCcAD'
    Output: ['A', 'B', 'C', 'c', 'A', 'D']

 **************** PSEUDO CODE SOLUTION / BRAINSTORM ***********

    Create a temp variable to hold onto our corrent element.
    Compare next element to current element.
    Push to result array as soon as a change occurs.

 **************** FUNCTION ********************************  */

function uniqueInOrder(input) {

    let arr = (typeof input === 'string') ? input.split('') : input;

    if (arr.length === 0) {
        return [];
    } else {

        const result = [arr[0]];
        let temp = arr[0];

        for (const element of arr) {
            if (temp !== element) {
                result.push(element);
            }
            temp = element;
        }
        return result;
    }

}

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', ['A', 'B', 'C', 'D', 'A', 'B'], uniqueInOrder('AAAABBBCCDAABBB'));
let test2 = new Test('Test 2', ['A', 'B', 'C', 'c', 'A', 'D'], uniqueInOrder('ABBCcAD'));
let test3 = new Test('Test 3', [1, 2, 3], uniqueInOrder([1, 2, 2, 3, 3]));

console.table([
    test1,
    test2,
    test3,
]);
