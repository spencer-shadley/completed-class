'use strict';

const drill = require('../drill');

describe('remove whitespace', () => {
  it('should remove spaces from a normal lowercase sentence', () => {
    verify({ input: 'i like pizza', expected: 'ilikepizza' });
  });

  it('should remove spaces with mixed casing', () => {
    verify({ input: 'I liKe PIZZA', expected: 'ilikepizza' });
  });

  it('should remove spaces from a normal sentence', () => {
    verify({ input: 'I like pizza', expected: 'ilikepizza' });
  });

  it('should remove many spaces from a sentence', () => {
    verify({ input: 'I         like pizza', expected: 'ilikepizza' });
  });

  it('should remove leading spaces from a sentence', () => {
    verify({ input: ' I like pizza', expected: 'ilikepizza' });
  });

  it('should remove trailing spaces from a sentence', () => {
    verify({ input: 'I like pizza ', expected: 'ilikepizza' });
  });

  it('should remove leading and trailing spaces from a sentence', () => {
    verify({ input: ' I like pizza ', expected: 'ilikepizza' });
  });

  it('should return empty string when only spaces are provided', () => {
    verify({ input: '    ', expected: '' });
  });

  it('should throw on null', () => {
    verifyThrow(null);
  });

  it('should throw on undefined', () => {
    verifyThrow(undefined);
  });

  it('should throw on 8', () => {
    verifyThrow(8);
  });

  it('should throw on objects', () => {
    verifyThrow({ foo: 'bar' });
  });

  function verify({ input, expected }) {
    const actual = drill.removeSpaces(input);
    expect(actual).toEqual(expected);
  }

  function verifyThrow(input) {
    expect(() => drill.removeSpaces(input)).toThrow(
      new Error('Unsupported input')
    );
  }
});
