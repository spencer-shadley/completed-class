// Emma is playing a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus.
// She can jump on any cumulus clouds.
// She must avoid the thunderheads.
// Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud.
// It is always possible to win the game.

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):
// c: an array of binary integers
// Input Format: Array of binary integers

// Constraints:
// Player can either jump 1 or 2 spaces
// 0 = Normal Cloud
// 1 = Thunder Cloud
// c = Array of clouds containing 0 or 1's
// N = Number of clouds
// 2 < N < 100

// Input: Array of Integers (Number of Clouds, varying from 0 to 1)
// Output: Number (Minimum number of jumps)

// *************************
//  ** WRITE FUNCTION BELOW **
// *****************************

function cloudJumping(clouds) {
  var jumps = 0;
  var length = clouds.length;

  for (var i = 0; i < length; ++i) {
    if (clouds[i + 2] === 0 && i + 2 < length) {
      ++i;
      ++jumps;
    } else if (i + 1 < clouds.length) {
      ++jumps;
    }
  }

  return jumps;
}
var clouds = [0, 0, 1, 0, 0, 1, 0];
// console.log(cloudJumping(clouds));
let c2 = [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];

console.table([cloudJumping(clouds) === 4, cloudJumping(c2) === 9]);

// function jumpingOnClouds(clouds) {

//   const min = 2;
//   const max = 100;

//   if (clouds.length < min || clouds.length > max) {
//     return 'Invalid number of clouds';
//   }

//   let jumps = 0;
//   // let i = 0;

//   for (let i = 0; i <= clouds.length; ++i) {
//     if (i + 2 < clouds.length && clouds[i + 2] === 0) {
//       ++i;
//       jumps++;
//     } else if (i + 1 < clouds.length) {
//       jumps++;
//     }
//   }

//   // while (i <= clouds.length) {
//   //   if (i + 2 < clouds.length && clouds[i + 2] == 0) {
//   //     i += 2;
//   //   } else if (i + 1 < clouds.length) {
//   //     ++i;
//   //   } else {
//   //     break;
//   //   }
//   //   jumps++;
//   // }

//   return jumps;

// }
