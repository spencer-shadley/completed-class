// **************** QUESTION DESCRIPTION **************** //

// You have a basketball hoop and someone says that you can play one of two games.
// Game 1: You get one shot to make the hoop.
// Game 2: You get three shots and you have to make two of three shots.
// If p is the probability of making a particular shot, for which values of p should you pick one game or the other?

// **************** CONSTRAINTS **************** //

// Probability is between .00 and 1.00

// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Number (0.00 < p < 1.00)
// Output: String (Game 1 or Game 2)

// **************** EXAMPLES **************** //

// EXAMPLE 1: 30%
// Game 1 = 30% = .30
// Game 2 = p(70% * 30% * 30%) + p(30% * 70% * 30%) + p(30% * 30% * 70%) + p(30% * 30% * 30%) 
// Game 2 = (0.063) + (0.063) + (0.063) + (0.027) = 0.216

// EXAMPLE 2: 50%
// Game 1 = 50% = .50
// Game 2 = p(50% * 50% * 50%) + p(50% * 50% * 50%) * p(50% * 50% * 50%) + p(50% * 50% * 50%)
// Game 2 = (0.125) + (0.125) + (0.125) + (0.125) = .50 

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// const p = probabilty
// Game 1 = p
// Game 2 = p(miss score score) + p(score miss score) + p(score score miss) + p(score score score)

// **************** FUNCTION **************** //

function pickAGame(p) {

    const prob1 = p
    const prob2 = ((p * p * (1 - p)) * 3) + (p * p * p);

    // console.log(`This is the prob of game 1: ${prob1} and game 2: ${prob2}`);

    return prob1 > prob2 ? 'Game 1' : 'Game 2';
};

// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('.30', 'Game 1', pickAGame(.3));
let test2 = new Test('.50', 'Game 2', pickAGame(.5));
let test3 = new Test('.75', 'Game 2', pickAGame(.75));

console.table([
    test1,
    test2,
    test3,
]);
