// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple() {

    let i = 2520
    let found = false;

    while (!found) {
        i += 2520
        let isDivisible = true;

        for (let j = 11; j <= 20; j++) {

            if (i % j != 0) {
                isDivisible = false;
                break;
            }
        }

        if (isDivisible) {
            found = true;
        }

    }
    return i;
}

console.log(smallestMultiple());