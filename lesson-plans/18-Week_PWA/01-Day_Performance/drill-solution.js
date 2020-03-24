// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

/**
 * Problem from codewars - https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 * 
 * @description
 * convert a string to a new string where each character in the new string is "("
 * if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string.
 * 
 * Ignore capitalization when determining if a character is a duplicate.
 * 
 * @example recede => ()()()
 * @param {String} word 
 * @returns {String}
 * 
 * @summary
 * This takes two passes to efficiently solve. The first pass counts the letters so that
 * we can easily know if a letter is duplicate in the second pass.
 * 
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
function duplicateEncode(word){
  const letterCounts = {}; // O(N) space

  for (const letter of word) { // O(N) time
    if (letterCounts[letter]) {
      ++letterCounts[letter];
    } else {
      letterCounts[letter] = 1;
    }
  }
  
  let output = '';
  for(const letter of word) { // O(N) time
    output += letterCounts[letter] === 1 ? '(' : ')';
  }
  return output;
}

/**
 * Problem from codewars - https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 * 
 * @description
 * convert a string to a new string where each character in the new string is "("
 * if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string.
 * 
 * Ignore capitalization when determining if a character is a duplicate.
 * 
 * @example recede => ()()()
 * @param {String} word 
 * @returns {String}
 * 
 * @summary
 * This takes two passes to efficiently solve. The first pass counts the letters so that
 * we can easily know if a letter is duplicate in the second pass.
 * 
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
function duplicateEncode(word){
  const letterCounts = {}; // O(N) space

  const lowerCasedWord = word.toLowerCase(); // O(N) time and space
  for (const letter of lowerCasedWord) { // O(N) time
    if (letterCounts[letter]) {
      ++letterCounts[letter];
    } else {
      letterCounts[letter] = 1;
    }
  }
  
  let output = '';
  for(const letter of lowerCasedWord) { // O(N) time
    output += letterCounts[letter] === 1 ? '(' : ')';
  }
  return output;
}

/**
 * Problem from codewars - https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 * 
 * @description
 * convert a string to a new string where each character in the new string is "("
 * if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string.
 * 
 * Ignore capitalization when determining if a character is a duplicate.
 * 
 * @example recede => ()()()
 * @param {String} word 
 * @returns {String}
 * 
 * @summary
 * This takes two passes to efficiently solve. The first pass counts the letters so that
 * we can easily know if a letter is duplicate in the second pass.
 * 
 * Time complexity: O(N^2)
 * Space complexity: O(N)
 */
function duplicateEncodeSlow(word) {
  let output = '';
  const lowerCasedWord = word.toLowerCase(); // O(N) time and space
  for (const letter of lowerCasedWord) { // O(N) time
    const isRepeatingLetter = lowerCasedWord.indexOf(letter) === lowerCasedWord.lastIndexOf(letter); // O(N)
    output += isRepeatingLetter ? '(' : ')';
  }
  return output;
}

duplicateEncode('recede');
