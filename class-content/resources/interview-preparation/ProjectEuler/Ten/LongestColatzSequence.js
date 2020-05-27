// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
// Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

function longestColatzSequence() {

    let result;
    let maxChain = 0;
    let i = 1;

    while (i <= 1000000) {

        let temp = i;
        let chain = 0;

        while (temp > 1) {
            if (temp % 2 === 0) {
                temp = evenMath(temp);
            } else {
                temp = oddMath(temp);
            }
            ++chain;
        }

        if (maxChain < chain) {
            maxChain = chain;
            result = i;
        }

        ++i;
    }

    return result;

}

function evenMath(num) {
    return num / 2;
}

function oddMath(num) {
    return ((num * 3) + 1);
}

console.log(longestColatzSequence());