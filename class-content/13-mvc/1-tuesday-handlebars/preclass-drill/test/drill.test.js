'use strict';

const drill = require('../drill');

describe('reverseNumber', () => {
  it('should reverse a normal number', () => {
    const input = 1234;
    const expected = 4321;

    const actual = drill.reverseNumber(input);

    expect(actual).toBe(expected);
  });

  it('should reverse a number with randomly ordered digits', () => {
    verify({ input: 841651, expected: 156148 });
  });

  it('should reverse a number with one digit', () => {
    const digit = 4;
    verify({ input: digit, expected: digit });
  });

  it('should reverse a large number', () => {
    verify({ input: 6816841864168181, expected: 1818614681486186 });
  });

  it('should reverse a negative number', () => {
    verify({ input: -96, expected: -69 });
  });

  it('should reverse 0', () => {
    verify({ input: 0, expected: 0 });
  });

  it('should throw for null', () => {
    verifyThrow(null);
  });

  it('should throw for undefined', () => {
    verifyThrow(undefined);
  });

  function verify({ input, expected }) {
    const actual = drill.reverseNumber(input);
    expect(actual).toBe(expected);
  }

  function verifyThrow(input) {
    expect(() => drill.reverseNumber(input)).toThrow();
  }
});
