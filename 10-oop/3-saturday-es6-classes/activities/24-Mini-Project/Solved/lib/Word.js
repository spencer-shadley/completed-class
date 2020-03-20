'use strict'

const Letter = require('./Letter');

// The Word class is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
class Word {
  constructor(word) {
    // word.split - splits word into array of letters
    // .map - instantiate a new `Letter` for each character and return an array
    // referred to with the instance variable, `letters`
    this.letters = word.split('').map(char => new Letter(char));
  }

  /**
   * iterate over each letter
   * return the solution for each to form an array of solved letters
   * create a string from the array of solved letters
   */
  getSolution() {
    return this.letters.map(letter => letter.getSolution()).join('');
  }

  // setting `toString()` as a method lets us concatenate it like we would a string!
  toString() {
    // see Letter.prototype.toString in Letter.js
    return this.letters.join(' ');
  }

  // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
  guessLetter(char) {
    for (const letter of this.letters) {
      if (letter.guess(char)) {
        // Print the word guessed so far--because we set the method for toString,
        //  JavaScript will automatically concatenate this even if we don't call toString
        console.log(`'\n'${this}'\n'`);
        return true;
      }
    }
    return false;
  }

  // Returns true if all letters in the word have been guessed
  didGuessCorrectly() {
    // The `every` method returns true if the callback function returns true for every element in the array
    return this.letters.every(letter => letter.visible);
  }
}

module.exports = Word;
