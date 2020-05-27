'use strict';

// Create an array of length "length" filled with sorted pseudo-random values
function generate(length) {
    const arr = [];

    for (let i = 0; i < length; ++i) {
        arr.push(Math.ceil(Math.random() * length));
    }
    arr.sort();
    return arr;
}

module.exports = generate;
