// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

// Input: None
// Output: Integer (first fibonacci sequence to contain 1000 digits)

var BigNumber = require('big-number');

const fibonacci1000 = (max) => {

    let num = 1;

    while (getNumberLength(fibonacci(num)) <= max) {
        num++;
    }
  
    return num - 4;
}

const getNumberLength = (number) => {
    return number.toString().length;
}

function fibonacci(num) {
    let a = 1;
    let b = 0;
    let temp;

    while (num >= 0) {
        temp = a;
        a = BigNumber(a).plus(b);
        b = temp;
        num--;
    }
    return b;
  }

console.log(fibonacci1000(3));
console.log(fibonacci1000(10));
console.log(fibonacci1000(100));




