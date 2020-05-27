// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function primeFactors(integer) {


    let divisor = 2;
    let number = integer;


    while (number > 1) {
        if (number % divisor === 0) {
            number = number / divisor;
        } else {
            divisor++;
        }
    }
    
    return divisor;
}

console.log(primeFactors(13195));
console.log(primeFactors(600851475143));
