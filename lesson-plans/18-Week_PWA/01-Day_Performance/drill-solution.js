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

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // ["WEST"]