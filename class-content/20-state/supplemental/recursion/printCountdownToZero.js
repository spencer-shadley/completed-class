/**
 * Print all numbers from num to 0 using recursion
 * @param {Number} num
 */
function printCountdownToZeroRecursive(num) {
    // print the number
    console.log(num);

    // base case - if we hit zero we are done
    if (num === 0) {
        console.log(`all done!`);
    } else {
        // call again, getting closer to zero
        if (num < 0) {
            printCountdownToZeroRecursive(num + 1);
        } else {
            printCountdownToZeroRecursive(num - 1);
        }
    }
}

/**
 * Print all numbers from num to 0 iteratively
 * @param {Number} num
 */
function printCountdownToZeroIterative(num) {
    while (num !== 0) {
        console.log(num);
        if (num < 0) {
            ++num;
        } else {
            --num;
        }
    }
    console.log(`all done!`);
}

printCountdownToZeroRecursive(5);
printCountdownToZeroIterative(5);
