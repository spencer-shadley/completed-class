// **************** QUESTION DESCRIPTION **************** //

// Write a program that selects a subset of items that has maximum value and satisfies a given weight constraint.
// Items:
// Weight     Value
// ---------------------
//  5           60
//  3           50
//  2           70
//  1           30
// ---------------------

// **************** CONSTRAINTS **************** //




// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Array, Integer
// Output: Array



// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //




// **************** FUNCTION **************** //

const maxKnapsack = (items, W) => {
    let cache = [];
    for (g = 0; g < items.length + 1; g++) {
        cache[g] = [];
        for (h = 0; h < W + 1; h++) {
            cache[g][h] = 0;
        }
    }
    let weights = items.map(item => item.weight);
    let values = items.map(item => item.value);
    for (let i = 0; i < items.length + 1; i++) {
        for (let j = 0; j < W + 1; j++) {
            if (i === 0 || j === 0) {
                cache[i][j] = 0;
            } else if (weights[i - 1] <= j) {
                let included = values[i - 1] + cache[i - 1][j - weights[i - 1]];
                let excluded = cache[i - 1][j];
                cache[i][j] = Math.max(included, excluded);
            }
            else
                cache[i][j] = cache[i - 1][j]
        }
    }
    return cache[items.length][W];
}


// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1');
let test2 = new Test('Test 2');
let test3 = new Test('Test 3');

// console.table([
//     test1,
//     test2,
//     test3,
// ]);
