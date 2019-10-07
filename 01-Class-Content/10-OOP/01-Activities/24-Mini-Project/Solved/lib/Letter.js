// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Letter {
  constructor(char) {
    // If a character is not a number or a letter, make it visible right away
    // Save the underlying character
    this.visible = !/[a-z1-9]/i.test(char);
    this.char = char;
  }
}

module.exports = Letter;
