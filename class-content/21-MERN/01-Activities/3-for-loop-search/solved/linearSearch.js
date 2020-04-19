// Require dependencies.
const generate = require(`../shared/generate`);

// Generate array of given length.
const length = 14;
const stuff = generate(length);
const randomValue = stuff[Math.floor(Math.random() * length)];

for (let i = 0; i < stuff.length; ++i) {
    if (stuff[i] === randomValue) {
        console.log(i);
    }
}
