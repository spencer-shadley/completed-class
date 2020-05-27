/* 
**************** QUESTION DESCRIPTION ***********************

    Given an array of Player objects, write a function that sorts them in order of decreasing score. 
    Player objects contain two properties: name and score. 
    If 2 or more players have the same score, sort those players alphabetically ascending by name. 

******************** CONSTRAINTS ****************************

    Two ot more players CAN have the same name
    Player names consist of lowercase English alphabetic letters.
    Scores are between 0 and 250.

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of objects)
    Output: Array (of objects)
    Edge/Outlier: Empty, Null, Overflow

********************** EXAMPLES *****************************

    Input: 
        const players1 = [ 
        { name: 'david', score: 100 },
        { name: 'aakansha', score: 75 },
        { name: 'heraldo', score: 50 },
        { name: 'amy', score: 100 },
        { name: 'allie', score: 100 },
        { name: 'aleksa', score: 150 }
     ];
    Output:
    [ 
        { name: 'aleksa', score: 150 },
        { name: 'allie', score: 100 },
        { name: 'amy', score: 100 },
        { name: 'david', score: 100 },
        { name: 'aakansha', score: 75 },
        { name: 'heraldo', score: 50 }
     ];
    Explanation: 
        aleksa has the highest score.
        allie, amy, and david have the same score so they are then sorted by alphabetical name.
        aakansha sorted by score.
        heraldo sorted by score.  

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

     TRIPLE NESTED TERNARY CONDITION! 
     SUPREME TERNARY POWER

******************** FUNCTION ****************************  */

function sortPlayers(arr) {

    return arr.sort((a, b) => (a.score < b.score) ? true : (a.score === b.score) ? (a.name > b.name) : false);

}

// **************** TESTING ******************************** //

const players1 = [
    { name: 'david', score: 100 },
    { name: 'aakansha', score: 75 },
    { name: 'heraldo', score: 50 },
    { name: 'amy', score: 100 },
    { name: 'allie', score: 100 },
    { name: 'aleksa', score: 150 }];

const player1Answers = ['aleksa', 'allie', 'amy', 'david', 'aakansha', 'heraldo'];

const players2 = [
    { name: 'sonson', score: 150 },
    { name: 'sam', score: 150 },
    { name: 'vin', score: 175 },
    { name: 'elucard', score: 25 },
    { name: 'erica', score: 25 },
    { name: 'kaladin', score: 200 }];

const player2Answers = [`kaladin`, 'vin', 'sam', 'sonson', 'elucard', 'erica'];

const players3 = [
    { name: 'harry', score: 150 },
    { name: 'ron', score: 100 },
    { name: 'hermoine', score: 150 },
    { name: 'voldemort', score: 150 },
    { name: 'neville', score: 200 },
    { name: 'luna', score: 200 }];

const player3Answers = ['luna', 'neville', 'harry', 'hermoine', 'voldemort', 'ron'];

function checkSorted(arr1, arr2) {
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i].name !== arr2[i]) {
            return false
        }
    }
    return true;
}

class Test {
    constructor(testInput, runSort, expectedResult, actualResult) {
        this.testInput = testInput;
        this.runSort = runSort;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', sortPlayers(players1), true, checkSorted(players1, player1Answers));
let test2 = new Test('Test 2', sortPlayers(players2), true, checkSorted(players2, player2Answers));
let test3 = new Test('Test 3', sortPlayers(players3), true, checkSorted(players3, player3Answers));

console.table([
    test1,
    test2,
    test3,
]);





