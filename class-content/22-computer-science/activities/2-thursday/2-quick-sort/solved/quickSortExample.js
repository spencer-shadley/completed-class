'use strict';

// modified from https://gist.github.com/ttezel/3124434
const unsorted = [];
for (let index = 0, t = 400000; index < t; ++index) {
    unsorted.push(Math.round(Math.random() * t));
}

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // get random pivot element (and remove from array to add back in later)
    const pivot = array.splice(Math.floor(Math.random() * array.length), 1);

    // create left array (elements <= pivot), and right array (elements > pivot)
    const left = [];
    const right = [];

    // loop through array and create left/right
    array.forEach(element => {
        if (element <= pivot) {
            left.push(element);
        }
        else {
            right.push(element);
        }
    });

    // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
    // result of recursively sorting the right array (using quicksort).
    // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(`Pre Sort:`, unsorted.join(` `));
const sorted = quickSort(unsorted);
console.log(`Post Sort:`, sorted.join(` `));
console.log(`DONE!`);
