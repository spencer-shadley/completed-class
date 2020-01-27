'use strict';

// Write a function that takes in a Roman Numeral string and returns its integer form

const romanToInt = function(str) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const result = 0;

  for (let i = 0; i < str.length; ++i) {
    const currentNumeral = str[i];
    const nextNumeral = str[i + 1];

    const currentValue = numerals[currentNumeral];
    const nextValue = numerals[nextNumeral];

    if (currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }

  return result;
};
