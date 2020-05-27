// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

// Input: None
// Output: Integer (Sum of all numbers)
// Outlier: What is my max??????????

const digitFifthPowers = () => {
    let result = 0;
    let fifthPowerHash = {};

    for (let i = 0; i <= 9; ++i) {
        let tempPower = Math.pow(i, 5);
        fifthPowerHash[i] = tempPower;
    }

    for (let i = 2; i <= 355000; ++i) {
        let arr = splitDigits(i);
        // console.log(`arr is ${arr}`);
        let tempSum = 0;
        arr.forEach(element => tempSum += fifthPowerHash[element]);
        // console.log(`ArrSum is ${tempSum}`)
        if (tempSum === i) {
            result += i;
        }
    };
    return result;
}

const splitDigits = (n) => {
    return Array.from(String(n), Number);
};


console.log(digitFifthPowers());
