'use strict'

// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
  var result = '';

  for (var i = 0; i < str.length; ++i) {
    var letter = str[i];

    result +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
  }

  return result;
};
