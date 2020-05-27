// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// Example 1x1: 2
// Right --> Down
// Down --> Right

// Example 2x2: 6
// Right --> Right --> Down --> Down
// Right --> Down --> Right --> Down
// Right --> Down --> Down --> Right
// Down --> Right --> Right --> Down
// Down --> Right --> Down --> Right
// Down --> Down --> Right --> Right

// Example 3x3:

// How many such routes are there through a 20×20 grid?

function latticePaths(n) {

    for (var i = 1, c = 1; i <= n; i++)
        c = c * (n + i) / i;
    return c;
}

function latticeTable(input, output) {
    this.input = input;
    this.output = output;
}

var test1 = new latticeTable(1, latticePaths(1));
var test2 = new latticeTable(2, latticePaths(2));
var test3 = new latticeTable(3, latticePaths(3));
var test4 = new latticeTable(4, latticePaths(4));
var test20 = new latticeTable(20, latticePaths(20));


console.table([
    test1,
    test2,
    test3,
    test4,
    test20
])