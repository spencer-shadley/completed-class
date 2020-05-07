// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. 
// He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. 
// The words in his note are case-sensitive and he must use only whole words available in the magazine. 
// He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". 
// The magazine has all the right words, but there's a case mismatch. 
// The answer is NO.

// checkMagazine has the following parameters:

// magazine: an array of strings, each a word in the magazine
// note: an array of strings, each a word in the ransom note

// Input: Array (of strings), Array (of strings)
// Output: String (Yes or No)
// Constraints: CASE SENSITIVE. [a=z][A-Z]

// Sample Input:
// two times three is not four
// two times two is four
// Output: No

const ransomNote = (magazine, note) => {

    for (const letter of note) {
        let i = magazine.indexOf(letter);

        if (i === -1) {
            return `No`;
        };
        magazine.splice(i, 1);
    }
    return 'Yes';
}

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new Test('Test 1', 'Yes', ransomNote(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']));
let test2 = new Test('Test 2', 'No', ransomNote(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']));
let test3 = new Test('Test 3', 'No', ransomNote(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'], ['ive', 'got', 'some', 'coconuts']));



console.table([
    test1,
    test2,
    test3,
])

