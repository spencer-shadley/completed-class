'use strict';

const Algo = require('../algo');

describe('Algo', () => {
  describe('reverse', () => {
    it('should reverse a given string', () => {
      const str = 'Hello World!';
      const expected = '!dlroW olleH';

      const actual = new Algo().reverse(str);

      expect(actual).toEqual(expected);
    });
  });

  describe('isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
      const str = 'racecar';

      const actual = new Algo().isPalindrome(str);

      expect(actual).toBeTrue();
    });

    it('should return false if a string is not a palindrome', () => {
      const str = 'neon';

      const actual = new Algo().isPalindrome(str);

      expect(actual).toEqual(false);
    });
  });

  describe('capitalize', () => {
    it('should take a string and return a new string with the first letter of each word capitalized', () => {
      const str = 'capitalize every first word of the string.';
      const expected = 'Capitalize Every First Word Of The String.';

      const actual = new Algo().capitalize(str);

      expect(actual).toEqual(expected);
    });
  });
});
