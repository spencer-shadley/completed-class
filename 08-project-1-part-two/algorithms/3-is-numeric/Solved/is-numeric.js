'use strict';

// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

// Input: String
// Output: Boolean


var isNumeric = function (str) {

    let arr = str.split('');
    let numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let positiveNegative = ['-', '+'];
    let decimal = '.';
    let decimalCount = 0;
    let numberCount = 0;

    if (arr.length === 0) {
        return false;
    };

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === decimal) {
            decimalCount++;
            continue;
        };
        if (positiveNegative.includes(arr[i])) {
            if (i > 0) {
                return false
            } else {
                continue;
            }
        };
        if (numeric.includes(arr[i])) {
            numberCount++;
            continue;
        };
        return false;
    };

    return (decimalCount <= 1 && numberCount > 0) ? true : false;
};

// console.log(isNumeric('-0123.00'));
// console.log(isNumeric('+-a13'));
