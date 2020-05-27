'use strict';

// Benchmark is a library that times performance
// https://benchmarkjs.com/
const Benchmark = require(`benchmark`);
const generate = require(`./generate`);

// Generate an array of the given length.
const length = 100;
const numbers = generate(length);
const number = numbers[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you
//   want to execute and time.
const suite = new Benchmark.Suite();

suite
    .add(`Linear Search`, () => {
        for (let i = 0; i < numbers.length; ++i) {
            if (numbers[i] === number) {
                return numbers[i];
            }
        }
        return NaN;
    })
    .add(`Binary Search`, () => {
        // Set some starting values.
        let currentElement;
        let currentIndex;
        let maxIndex = numbers.length - 1;
        let minIndex = 0;

        // Until we've considered the entire array, keep searching
        while (minIndex <= maxIndex) {

            // Get a position near the middle
            currentIndex = Math.floor((minIndex + maxIndex) / 2);

            // Get that element
            currentElement = numbers[currentIndex];

            // Test it
            if (currentElement < number) {
            // if it's less than we are looking for, look *above* this value
                minIndex = currentIndex + 1;
            }
            else if (currentElement > number) {
            // If it's more than we are looking for, look *below* this value
                maxIndex = currentIndex - 1;
            }
            else {
            // We found it; return the index
                return currentIndex;
            }
        }
        // not in the array
        return NaN;
    })

    // On 'start', run the 'start' function.
    .on(`start`, () => {
        console.log(`Beginning benchmark...`);
    })

    // On the 'complete' event, run the 'report' function.
    .on(`complete`, function report() {
        // Get successful benchmark.
        const benchmarks = Benchmark.filter(this, `successful`);

        for (const benchmark of benchmarks) {
            console.log(`On average, ${ benchmark.name } took ${ benchmark.stats.mean } seconds to complete.`);
        }
    })

    // Run the test!
    .run();
