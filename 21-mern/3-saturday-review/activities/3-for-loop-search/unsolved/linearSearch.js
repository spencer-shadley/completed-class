const generate = require(`./generate`);

// example stuff: [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];
const length = 14;
const stuff = generate(length); 

const randomValue = stuff[Math.floor(Math.random() * 14)];

// log anything in "stuff" that matches "randomValue"
console.log(stuff);