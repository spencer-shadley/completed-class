'use strict';

// Create an array of length "length" filled with pseudo-random values
function generate(length) {
    const arr = [];

    for (let i = 0; i < length; i += 1) {
        arr.push(Math.ceil(Math.random() * length));
    }
    return arr;
}

module.exports = generate;
