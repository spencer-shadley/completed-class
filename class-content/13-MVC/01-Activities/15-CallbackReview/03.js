'use strict';

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

const multiply = function(numOne, numTwo) {
  return numOne * numTwo;
};

const addCallBacks = function(functionOne, functionTwo) {
  return functionOne(6, 2) + functionTwo(6, 3);
};

// What does this return?
addCallBacks(subtract, multiply);
