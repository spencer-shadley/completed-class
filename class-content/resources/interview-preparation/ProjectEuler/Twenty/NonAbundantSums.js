// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

// Input: 
// Output: Integer ( Sum of integers that are NOT sum of two abundant numbers)

// 


const nonAbundantSum = () => {
    let sum = 0;
    let abundantArray = [];
    

    for (let i = 12; i <= 28111; ++i) {
        if (isAbundantNumber(i) !== undefined) {
            abundantArray.push(i);
        }
    };

    let abundantArraySum = createAbundantSumArray(abundantArray);

    for (let k = 1; k < 23123; ++k) {
        if (!abundantArraySum.includes(i)) {
            sum += i;
        }
    }
    return sum;
};

const createAbundantSumArray = (arr) => {
    let sumArray = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j <arr.length - i; ++j) {
            if (!sumArray.includes(arr[j] + arr[i])) {
                sumArray.push(arr[i] + arr[j])
            }
        }
    }
    return sumArray;
};


// Check for abundant number
const isAbundantNumber = num => {
    if (sumProperDivisors(num) > num) {
        return num;
    }
};


// Sum of all divisors function
const sumProperDivisors = (num) => {
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
};


console.log(
    isAbundantNumber(12) === 12,
    isAbundantNumber(18) === 18,
    isAbundantNumber(19) === undefined,
);

console.log(nonAbundantSum());



// function sum(memo, value) {
//     memo += value;
//     return memo;
//   }
  
//   function properDivisors(n) {
//     var divisors = [1];
//     var i;
//     for (i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         divisors.push(i, n / i);
//         if (i === Math.sqrt(n)) {
//           // remove the extra square root, the last step entered it twice
//           divisors.pop();
//         }
//       }
//     }
//     return divisors.sort(function (a, b) {return a - b; });
//   }
  
//   function isAbundantNumber(n) {
//     return properDivisors(n).reduce(sum) > n;
//   }
  
//   function perfectDeficientOrAbundant(n) {
//     var sumOfProperDivisors = properDivisors(n).reduce(sum);
//     if (sumOfProperDivisors === n) {
//       return 'perfect';
//     }
//     if (sumOfProperDivisors < n) {
//       return 'deficient';
//     }
//     if (sumOfProperDivisors > n) {
//       return 'abundant';
//     }
//   }
  
//   // console.log(perfectDeficientOrAbundant(28)); // perfect
//   // console.log(perfectDeficientOrAbundant(12)); // abundant
  
//   // console.log(isAbundantNumber(12)); // true
//   // console.log(isAbundantNumber(28)); // false
  
//   var knownUpperLimit = 28123;
//   var abundantNumbersWithinRange = [];
//   var i;
//   for (i = 1; i <= knownUpperLimit; i++) {
//     if (isAbundantNumber(i)) {
//       abundantNumbersWithinRange.push(i);
//     }
//   }
  
//   // console.log(abundantNumbersWithinRange); // array of 6965 abundant numbers < 28123
  
//   // var length = abundantNumbersWithinRange.length;
//   // console.log(length * length / 2); // === 24.3 million, estimating how long it would take to calculate all the sums of two of these numbers
  
//   function allSumsOfTwoNumbers(sortedArray, upperLimit) {
//     // add each number to all the numbers coming after it,
//     // then return an array of booleans for each sum
//     upperLimit = upperLimit || sortedArray.slice(-2).reduce(sum);
//     var i;
//     var sums = [];
//     for (i = 0; i <= upperLimit; i++) {
//       sums[i] = false;
//     }
//     sortedArray.forEach(function (first, index, list) {
//       list.slice(index).some(function (second) { // [].some let's us short-curcuit
//         var sum = first + second;
//         if (sum > upperLimit) {
//           return true;
//         }
//         sums[sum] = true;
//       });
//     });
//     return sums;
//   }
  
//   // console.log(allSumsOfTwoNumbers([1, 3])); // [ false, false, true, false, true ], testing
//   // console.log(allSumsOfTwoNumbers([1, 3, 5])); // [ false, false, true, false, true, false, true, false, true ], testing
  
//   function booleansToNumbers(arrayOfBooleans) {
//     return arrayOfBooleans.reduce(function (memo, value, index) {
//       if (value) {
//         memo.push(index);
//       }
//       return memo;
//     }, []);
//   }
  
//   // console.log(booleansToNumbers(allSumsOfTwoNumbers([1, 3]))); // === [ 2, 4 ], just testing
//   // console.log(booleansToNumbers(allSumsOfTwoNumbers([1, 3, 5]))); // === [ 2, 4, 6, 8 ], testing
//   // console.log(booleansToNumbers(allSumsOfTwoNumbers([1, 3, 5, 10, 50]))); // === [ 2, 4, 6, 8, 10, 11, 13, 15, 20, 51, 53, 55, 60 ]
  
//   var allSumsOfAbundantsWithinRange = allSumsOfTwoNumbers(abundantNumbersWithinRange, knownUpperLimit);
//   var nonAbundantSums = allSumsOfAbundantsWithinRange.map(function flip(bool) {
//     return !bool;
//   });
  
//   console.log(booleansToNumbers(nonAbundantSums).reduce(sum)); // 4179871