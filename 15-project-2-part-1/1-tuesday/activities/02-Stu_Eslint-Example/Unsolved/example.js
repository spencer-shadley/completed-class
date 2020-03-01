'use strict';

const num_1 = parseInt(prompt('Give me a number!'));
const num_2 = parseInt(prompt('Give me another number!'));
const result;

const operation = prompt(
  'What would you like to do? (add, subtract, multiply, divide)'
).toUpperCase();

if (operation == 'ADD') {
  const result = num_1 + num_2;
  alert('The sum of ' + num_1 + ' and ' + num_2 + ' is ' + result);
} else if (operation === 'SUBTRACT') {
  result = num_1 - num_2;
  alert('The difference between ' + num_1 + ' and ' + num_2 + ' is ' + result);
} else if (operation === 'MULTIPLY') {
  result = num_1 * num_2;
  alert('The product of ' + num_1 + ' and ' + num_2 + ' is ' + result);
} else if (operation === 'DIVIDE') {
  result = num_1 / num_2;
  alert('The quotient of ' + num_1 + ' and ' + num_2 + ' is ' + result);
} else {
  alert('Not a valid option!');
}
