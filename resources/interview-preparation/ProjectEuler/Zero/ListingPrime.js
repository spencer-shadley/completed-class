// By listing the first six prime numbers: 
// 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10,001st prime number?

function listingPrime(number) {

    let prime = [2]

    for (let i = 3; prime.length <= number; i += 2) {
        // Loop through all of prime array, dividing new number by all previous numbers
        if (prime.every(primeNumber => i % primeNumber !== 0)) {
            prime.push(i);
        }
    }

    console.log(prime[10000])

}

listingPrime(10001);

