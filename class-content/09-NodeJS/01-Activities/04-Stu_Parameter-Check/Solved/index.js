'use strict'

var a = process.argv[2];
var b = process.argv[3];

// using a conditional statement
if (a === b) {
  console.log(true);
} else {
  console.log(false);
}

//using a ternary operator
console.log(a === b ? true : false);

// comparing variables
console.log(a === b);

// comparing argument values directly
console.log(process.argv[2] === process.argv[3]);

// Bonus!
// input: node index.js '{"hello": "world"}'
// console.log(JSON.parse(process.argv[2]));
// console.log(JSON.parse(process.argv[2]).hello);
