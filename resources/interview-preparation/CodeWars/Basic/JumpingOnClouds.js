// Emma is playing a new mobile game that starts with consecutively numbered clouds.
//Some of the clouds are thunderheads and others are cumulus.
//She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.
//She must avoid the thunderheads.
//Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud.
//It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// Constraints
// Player can either jump 1 or 2 spaces
// 0 = Normal Cloud
// 1 = Thunder Cloud
// c = Array of clouds containing 0 or 1's
// N = Number of clouds
// 2 < N < 100

// Output Format

// Return the shorted number of jumps needed to complete the course

// Print the minimum number of jumps needed to win the game.

function jumpingOnClouds(c) {
  let min = 2;
  let max = 100;

  if (c.length < min || c.length > max) {
    return "Invalid number of clouds";
  }

  let jumps = 0;
  let currentCloud = 2;

  while (currentCloud < c.length) {
    if (c[currentCloud + 2] === 0 && c.length >= currentCloud + 2) {
      currentCloud += 2;
      jumps++;
    } else {
      currentCloud += 1;
      jumps++;
    }
  }

  return jumps;
}

let c = [0, 0, 1, 0, 0, 1, 0]

console.log(jumpingOnClouds(c))
