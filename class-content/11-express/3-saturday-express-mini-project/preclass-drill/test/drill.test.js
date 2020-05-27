'use strict';

const drill = require('../drill');

describe('filter', () => {
  it('should filter a simple function', () => {
    const inputArr = [1, 2, 3, 4];
    const isEven = num => num % 2 === 0;

    const actual = drill.filter(inputArr, isEven);

    expect(actual).toEqual([2, 4]);
  });

  it('should filter a when all are true', () => {
    const inputArr = [1, 2, 3, 4];
    const alwaysTrue = _ => true;

    const actual = drill.filter(inputArr, alwaysTrue);

    expect(actual).toEqual([1, 2, 3, 4]);
  });

  it('should filter when none are true', () => {
    const inputArr = [1, 2, 3, 4];
    const alwaysFalse = _ => false;

    const actual = drill.filter(inputArr, alwaysFalse);

    expect(actual).toEqual([]);
  });
});
