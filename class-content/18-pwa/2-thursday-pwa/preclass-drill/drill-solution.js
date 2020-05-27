'use strict'

/**
 * Uses an array as a stack to push elements
 * Each time an element is added it checks if the last two inserts can be cancelled
 * @param {Array} arr 
 * 
 * Time: O(N)
 * Space: O(N)
 */
function dirReducStack(arr) {
  let stack = []; // O(N)
  for (let i = 0; i < arr.length; ++i) { // O(N)
    stack.push(arr[i]);
    while (isReduceable(stack[stack.length - 1], stack[stack.length - 2])) {
      stack.pop();
      stack.pop();
    }
  }
  return stack;
}

/**
 * Loops through the array with a lookahead
 * Each time it finds the current item and lookahead can be reduced, they are removed
 * and the loop starts again at i = 0 (i = -1, ++i)
 * @param {Array} arr 
 * 
 * Time: O(N^2)
 * Space: O(1)
 */
function dirReduc(arr) {
  for(let i = 0; i < arr.length - 1; ++i) { // O(N)
    let currDirection = arr[i];
    let nextDirection = arr[i + 1];
    if(isReduceable(currDirection, nextDirection)) {
      arr.splice(i, 2); // O(N)
      i = -1;
    }
  }
  return arr;
}

function isReduceable(directionOne, directionTwo) {
  return (
    (directionOne === 'NORTH' && directionTwo === 'SOUTH') ||
    (directionOne === 'SOUTH' && directionTwo === 'NORTH') ||
    (directionOne === 'EAST' && directionTwo === 'WEST') ||
    (directionOne === 'WEST' && directionTwo === 'EAST'));
}

dirReducStack(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // ["WEST"]