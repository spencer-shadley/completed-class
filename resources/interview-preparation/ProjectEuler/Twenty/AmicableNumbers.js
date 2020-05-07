// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

// Input: Integer (10000)
// Output: Integer (Sum of all amicable numbers [ a + b ])

// Create a hash map of all divisor sums of numbers 1 to 10000
// Compare those key/values to test if numbers are amicable numbers
// If amicable numbers, add both numbers to a running sum

const amicableNumbers = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        let correspondingNum = sumDivisors(i);
        if (correspondingNum !== i && sumDivisors(correspondingNum) === i) {
            sum += i;
            console.log(`Found a pair! ${i} + ${correspondingNum}`)
        }
    }
    return sum;
}

const sumDivisors = (num) => {
    let divisorSum = 0;
    for (let i = 2; i <= Math.sqrt(num); ++i) {
        if (num % i === 0) {
            if (i === (num / i)) {
                divisorSum += i;
            } else {
                divisorSum += (i + num / i)
            }
        }
    }
    return divisorSum + 1;
}

// console.log(sumDivisors(220));
// console.log(sumDivisors(284));
console.log(amicableNumbers(10000));

