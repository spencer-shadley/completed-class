// **************** QUESTION DESCRIPTION **************** //

// Pawel and Shaka recently became friends. 
// They believe their friendship will last forever if they merge their favorite strings.

// The lengths of their favorite strings are the same, n.
// Mingling two strings, P = p1p2....Pn and Q = q1q2,...qn , both of length n, will result in the creation of a new string R of length 2 x n. 
// It will have the following structure:
// R = p1q1p2q2....pnqn

// You are given two strings P (Pawel's favorite) and Q (Shaka's favorite), determine the mingled string R.

// **************** CONSTRAINTS ************************* //

// 1 <= n <= 10^5
// string only contains lowercase English letters (a-z)

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Two Strings (P and Q)
// Output: String (R)
// Edge/Outlier: 

// **************** EXAMPLE **************** //

// Input: abcde, pqrst
// Output: apbqcrdset

// Input: hacker, ranker
// Output: hraacnkkeerr

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// Iterate between strings....

// **************** FUNCTION **************** //

const stringMingling = (str1, str2) => {

    let result = '';
    let n = str1.length
    let i = 0;

    while (i < n) {
        result += str1.charAt(i);
        result += str2.charAt(i);
        ++i
    }
    return result;
}

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 'hraacnkkeerr', stringMingling('hacker', 'ranker'));
let test2 = new Test('Test 2', 'apbqcrdset', stringMingling('abcde', 'pqrst'));
let test3 = new Test('Test 3', 'pmioznzgao', stringMingling('pizza', 'mongo'));

console.table([
    test1,
    test2,
    test3,
]);
