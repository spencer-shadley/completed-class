'use strict';

function removeSpaces(str) {
  if (!str || typeof str !== 'string') {
    throw new Error('Unsupported input');
  }

  const noSpaces = str.split(' ').join('');
  return noSpaces.toLowerCase();
}

function bruteForce(str) {
  if (!str || typeof str !== 'string') {
    throw new Error('Unsupported input');
  }

  let result = '';
  for (const letter of str) {
    if (letter !== ' ') {
      result += letter;
    }
  }
  return result.toLowerCase();
}

function removeSpacesRegEx(str) {
  if (!str || typeof str !== 'string') {
    throw new Error('Unsupported input');
  }

  const noSpaces = str.split(/\s/g).join('');
  return noSpaces.toLowerCase();
}

module.exports = {
  removeSpaces
  //   removeSpaces: removeSpacesRegEx
  //   removeSpaces: bruteForce
};
