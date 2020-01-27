'use strict';

function Arithmetic(number = 0) {
  this.number = number;
}

Arithmetic.prototype.plus = function(number = 0) {
  const newNumber = this.number + number;
  return new Arithmetic(newNumber);
};

Arithmetic.prototype.minus = function(number = 0) {
  const newNumber = this.number - number;
  return new Arithmetic(newNumber);
};

Arithmetic.prototype.value = function() {
  return this.number;
};

module.exports = Arithmetic;
