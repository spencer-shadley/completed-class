'use strict';

const drill = require('../drill');

describe('hasPalindrome', () => {
  it('should validate two letters', () => {
    verify('aa', true);
  });

  it('should validate three same letters', () => {
    verify('aaa', true);
  });

  it('should validate three letter palindrome with different middle', () => {
    verify('aba', true);
  });

  it('should validate sub-palindrome', () => {
    verify('aaba', true);
  });

  it('should validate sub-palindrome in middle', () => {
    verify('aqabac', true);
  });

  it('should validate two letter sub-palindrome', () => {
    verify('aqaabac', true);
  });

  it('should validate long palindrome', () => {
    verify('qabcdefedcbap', true);
  });

  it('should fail with a single letter', () => {
    verify('a', false);
  });

  it('should fail with two different letters', () => {
    verify('ab', false);
  });

  it('should fail when there is no palindrome', () => {
    verify('abcdefgh', false);
  });

  it('should fail with null', () => {
    verify(null, false);
  });

  it('should fail with undefined', () => {
    verify(undefined, false);
  });

  it('should fail with empty string', () => {
    verify('', false);
  });

  it('should fail with non-string', () => {
    verify(88, false);
  });

  function verify(input, expected) {
    const actual = drill.hasPalindrome(input);
    expect(actual).toEqual(expected);
  }
});
