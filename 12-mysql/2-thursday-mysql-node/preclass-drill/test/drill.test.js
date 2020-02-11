'use strict';

const drill = require('../drill');

describe('flatten', () => {
  it('should flatten normal arrays', () => {
    const arrOne = [1, 2, 3];
    const arrTwo = [4, 5, 6];
    const arrThree = [7, 8, 9];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const actual = drill.flatten(arrOne, arrTwo, arrThree);

    expect(actual).toEqual(expected);
  });

  it('should flatten arrays with mixed types', () => {
    const arrOne = [1, 'pizza', 3];
    const arrTwo = ['a', 5, true];
    const expected = [1, 'pizza', 3, 'a', 5, true];

    const actual = drill.flatten(arrOne, arrTwo);

    expect(actual).toEqual(expected);
  });

  it('should handle arrays with nulls', () => {
    const arrOne = [1, null, 3];
    const arrTwo = [null, 'a'];
    const expected = [1, null, 3, null, 'a'];

    const actual = drill.flatten(arrOne, arrTwo);

    expect(actual).toEqual(expected);
  });

  it('should handle all empty arrays', () => {
    const arrOne = [];
    const arrTwo = [];
    const expected = [];

    const actual = drill.flatten(arrOne, arrTwo);

    expect(actual).toEqual(expected);
  });

  it('should handle undefined input', () => {
    const arrOne = undefined;
    const arrTwo = [];
    const expected = [];

    const actual = drill.flatten(arrOne, arrTwo);

    expect(actual).toEqual(expected);
  });

  it('should non-array inputs', () => {
    const arrOne = true;
    const arrTwo = ['pizza', 'is', 'my', 'favorite', 'food'];
    const arrThree = 'pizza';
    const expected = arrTwo;

    const actual = drill.flatten(arrOne, arrTwo, arrThree);

    expect(actual).toEqual(expected);
  });
});
