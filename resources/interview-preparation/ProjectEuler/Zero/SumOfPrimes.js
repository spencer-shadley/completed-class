// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// Create a while loop as sum is less than 2 million. 
// Look for additional primes and add them to the temp sum variable

function sumPrimes() {

    let primeArray = [2]
    let i = 3;
    let sum = 2;

    do {
        if (primeArray.every(primeNumber => i % primeNumber !== 0)) {
            sum += i;
            primeArray.push(i);
        }
        i += 2;
    }
    while (i < 2000000);


    return sum;
}

console.log(sumPrimes());

