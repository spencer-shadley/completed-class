// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
// Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

// For example s = mom, the list of all anagrammatic pairs is [m,m], [mo,om] at positions [0,2][[0,1][1,2]] respectively.

// Input: String
// Output: Integer (number of sub-string pairs)


// Brainstorm:
// Chop up all the substrings into an array. Sort them and compare
// singles, doubles, triples etc.


const sherlockAnagrams = str => {

    let count = 0;

    for (let i = 1; i < str.length; ++i) {
        let subStrings = [];
        for (let j = 0; j <= str.length - i; ++j) {
            let subString = str.substr(j, i);
            subStrings.push(subString.split('').sort().join(''));
        }
        for (let index1 = 0; index1 < subStrings.length; index1++) {
            let sub1 = subStrings[index1];
            for (let index2 = index1 + 1; index2 < subStrings.length; index2++) {
                let sub2 = subStrings[index2];
                if (sub1 === sub2) count++;
            }
        }
    }

    return count;

}


class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new Test('Test 1', 2, sherlockAnagrams('mom'));
let test2 = new Test('Test 2', 4, sherlockAnagrams('abba'));
let test3 = new Test('Test 3', 0, sherlockAnagrams('abcd'));


console.table([
    test1,
    test2,
    test3,
])
