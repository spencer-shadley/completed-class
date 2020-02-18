'use strict';

const sum = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

const multiply = function(numOne, numTwo) {
  return numOne * numTwo;
};

const anythingGoes = function(functionOne, functionTwo, functionThree) {
  functionThree(functionOne(3, 4), functionTwo(7, 2));
};

// Challenge: what does this return?
anythingGoes(multiply, subtract, sum);
