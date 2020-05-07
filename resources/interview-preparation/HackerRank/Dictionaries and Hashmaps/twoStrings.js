// Given two strings, determine if they share a common substring. 
// A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common substring a. 
// The words "be" and "cat" do not share a substring.

// Input: String, String
// Output: String (YES or NO)

// Constraints: ASCII = american standard code for information exhcahnge 

const twoStrings = (s1, s2) => {

    let s1Arr = s1.split('');

    for (const letter of s1Arr) {
        let i = s2.indexOf(letter);
        if (i !== -1) {
            return 'YES'
        }
    }
    return 'NO';
};

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new Test('Test 1', 'YES', twoStrings('a', 'art'));
let test2 = new Test('Test 2', 'NO', twoStrings('be', 'cat'));
let test3 = new Test('Test 3', 'YES', twoStrings('hello', 'clippers'));

console.table([
    test1,
    test2,
    test3,
])
