'use strict';

// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

function reverse(str) {
  var result = '';

  for (var i = str.length - 1; i >= 0; --i) {
    result += str[i];
  }

  return result;
}

function reverseWords(str) {
  if (!str || typeof str !== 'string') {
    return undefined;
  }
  return str
    .split(' ')
    .reverse()
    .join(' ');
}

function reverseWordsNoBuiltIn(str) {
  if (!str || typeof str !== 'string') {
    return undefined;
  }

  var reversed = [];
  var words = str.split(' ');
  for (var i = words.length - 1; i >= 0; --i) {
    reversed.push(words[i]);
  }
  return reversed.join(' ');
}
