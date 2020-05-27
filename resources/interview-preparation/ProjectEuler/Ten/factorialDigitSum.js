// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

// Create a factorial function to generate the total number. 
// Split up the number by digits
// Add up each individual digit

function factorial(n) {
    let sum = 1;
    for (let i = 1; i <= n; ++i) {
        sum *= i;
    }
    return sum;
}

function digitSum(n) {

    let factorialNumber = factorial(n);
    let numberS = factorialNumber.toString();
    let sum = 0;

    for (let i = 0; i < numberS.length; ++i) {
        sum += parseInt(numberS.charAt(i));
    };
    return sum;
}

console.log(digitSum(10));
console.log(digitSum(20));