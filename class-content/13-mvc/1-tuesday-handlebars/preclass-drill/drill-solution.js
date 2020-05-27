'use strict';

function reverseNumber(number) {
  if (Number.isNaN(number)) {
    throw new Error(`${number} is not a number`);
  }

  const isNegative = number < 0;
  const numberAsString = number.toString();
  let reversedNumberString = '';
  for (let i = numberAsString.length - 1; i >= 0; --i) {
    reversedNumberString += numberAsString.charAt(i);
  }

  let reversedNumber = parseInt(reversedNumberString);

  if (isNegative) {
    reversedNumber *= -1;
  }
  return reversedNumber;
}

function reverseNumberArr(number) {
  if (Number.isNaN(number)) {
    throw new Error(`${number} is not a number`);
  }

  const isNegative = number < 0;
  const numberArr = number.toString().split('');
  const reversedNumber =
    parseInt(numberArr.reverse().join('')) * (isNegative ? -1 : 1);
  return reversedNumber;
}

function reverseNumberDirect(number) {
  if (Number.isNaN(number) || number === null || number === undefined) {
    throw new Error(`${number} is not a number`);
  }

  const isNegative = number < 0;
  number = Math.abs(number);

  let reversedNumber = 0;
  let lastDigit;
  while (number > 0) {
    lastDigit = number % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    number = parseInt(number / 10);
  }

  return reversedNumber * (isNegative ? -1 : 1);
}

module.exports = {
  reverseNumber: reverseNumberDirect
  //   reverseNumber: reverseNumber
  //   reverseNumber: reverseNumberArr
};
