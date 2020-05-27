/* eslint-disable no-magic-numbers */
'use strict';

const _ = require(`lodash`);

// _.times
// Works like a loop. Takes in the number of iterations and a callback function to execute each time
// with the current iteratee optionally passed in as an argument
console.log(`\n------------ _.times --------------\n`);
const iterations = _.times(10, iteratee => {
    const iterationNumber = iteratee + 1;
    console.log(`Iteration number:`, iterationNumber);
    return iteratee + 1;
});
console.log(iterations);

console.log(`\n------------ _.random --------------\n`);

// _.random
// Works like Math.random but gives us a number from 0 to whatever value we pass in
console.log(`Between 0 and 10:`, _.random(10));
// If we pass in 2 values, then it will give us a number from the first number and the second number inclusive
console.log(`Between 1 and 20:`, _.random(1, 20));

console.log(`\n----------- _.each ---------------\n`);

// _.each
// Works just like each in jQuery
const arr = [1, 2, 3, 4, 5];
_.each(arr, (item, index) =>
    console.log(`Index`, index, `multiplied by 2 is`, item * 2)
);

console.log(`\n----------- _.uniq ---------------\n`);

// _.uniq
// Returns a duplicate free version of a given array
const dupeArray = [1, 2, 2, 1, 4, 6, 2, 9, 10, 10, 1, 6];
console.log(`Original array:`, dupeArray);
const uniqueArray = _.uniq(dupeArray);
console.log(`Unique array:`, uniqueArray);

console.log(`\n----------- _.shuffle ---------------\n`);

// _.shuffle
// Returns a shuffled array
console.log(`Original array:`, uniqueArray);
const shuffledArray = _.shuffle(uniqueArray);
console.log(`Shuffled Array:`, shuffledArray);

console.log(`\n----------- _.sum, _.multiply, _.mean ---------------\n`);


// _.sum, _.multiply, _.mean
// Useful math functions for getting the sum, max, and mean of elements in an array
console.log(`Array to use:`, dupeArray);
console.log(`Array sum:`, _.sum(dupeArray));
console.log(`Array max:`, _.max(dupeArray));
console.log(`Array mean:`, _.mean(dupeArray));

console.log(`\n-----------  _.clone ---------------\n`);

// _.clone
// Often times we want to copy an objects values onto another object to manipulate but don't want to alter the original.
// Since JavaScript objects are pass - by - reference, simply setting an object equal to another doesn't copy it
// as you would expect. Instead it just creates another variable thats pointing to the same object in memory.
// Any changes made to one object affects another

// _.clone attempts to solve this
// Before clone
console.log(`Without using _.clone:`);
const originalPerson = { name: `Sarah`, age: 22 };
const samePerson = originalPerson;
samePerson.age = 25;
console.log(`Original Person:`, originalPerson);
console.log(`Modified copy of original person:`, samePerson);

// After clone
console.log(`Using _.clone:`);
const clonedPerson = _.clone(originalPerson);
clonedPerson.name = `Mike`;
console.log(`Original Person:`, originalPerson);
console.log(`Modified cloned Person:`, clonedPerson);

// Using spread
const spreadPerson = { ...originalPerson, name: `Spencer` };
console.log(`Original Person:`, originalPerson);
console.log(`Spread Person:`, spreadPerson);
