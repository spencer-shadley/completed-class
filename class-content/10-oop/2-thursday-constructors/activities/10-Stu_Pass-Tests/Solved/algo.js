'use strict';

function Algo() {}

Algo.prototype.reverse = str =>
  str
    .split('')
    .reverse()
    .join('');

Algo.prototype.isPalindrome = function(str) {
  return this.reverse(str) === str;
};

Algo.prototype.capitalize = str =>
  str
    .split(' ')
    .map(word => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(' ');

module.exports = Algo;

// Another capitalize method using regex
// const upper = str.replace(/^\w/, c => c.toUpperCase());
