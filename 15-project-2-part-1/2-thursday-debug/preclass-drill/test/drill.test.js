'use strict';

const drill = require('../drill');

describe('findLongestPalindrome', () => {
  it('should find two letter palindrome', () => {
    verify('aa', 'aa');
  });

  it('should find two letter palindrome as sub-word', () => {
    verify('aab', 'aa');
  });

  it('should find three letter palindrome', () => {
    verify('aba', 'aba');
  });

  it('should find the first three letter palindrome as sub-word', () => {
    verify('abab', 'aba');
  });

  it('should find the longer palindrome', () => {
    verify('abaqcabbap', 'abba');
  });

  it('should not find a palindrome', () => {
    verify('abcdef', null);
  });

  function verify(input, expected) {
    const actual = drill.findLongestPalindrome(input);
    expect(actual).toEqual(expected);
  }
});
