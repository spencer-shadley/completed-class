function dirReducStack(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; ++i) {
    stack.push(arr[i]);
    while (isReduceable(stack[stack.length - 1], stack[stack.length - 2])) {
      stack.pop();
      stack.pop();
    }
  }
  return stack;
}

function dirReduc(arr) {
  for(let i = 0; i < arr.length - 1; ++i) {
    let currDirection = arr[i];
    let nextDirection = arr[i + 1];
    if(isReduceable(currDirection, nextDirection)) {
      arr.splice(i, 2);
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