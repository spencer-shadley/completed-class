// **************** QUESTION DESCRIPTION **************** //

// Write a function for pig latin
// Take first letter in each word and move to end then add "ay" to end. 

// **************** CONSTRAINTS **************** //

// Only includes [a-z][A-Z]

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: String (This problem may contain multiple words)
// Output: String
// Edge/Outlier: Input overload

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Split apart each word and then 


// **************** FUNCTION **************** //

const piglatinize = str => {

    const pigArray = [];
    const splitArray = str.split(' ');

    for (const word of splitArray) {
        let newWord = word.slice(1) + word.charAt(0) + 'ay';
        pigArray.push(newWord);
    };

    finalWord = pigArray.join(' ');
    return finalWord;
};

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('fish are delicious', 'ishfay reaay eliciousday', piglatinize('fish are delicious'));
let test2 = new Test('clippers over lakers', 'lipperscay veroay akerslay', piglatinize('clippers over lakers'));
let test3 = new Test('this is a test sentence', 'histay siay aay esttay entencesay', piglatinize('this is a test sentence'));

console.table([
    test1,
    test2,
    test3,
]);
