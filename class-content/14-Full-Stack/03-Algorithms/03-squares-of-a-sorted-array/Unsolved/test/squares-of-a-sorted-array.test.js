/* eslint-disable no-magic-numbers */
'use strict';

const expect = chai.expect;

describe(`sortedSquares`, () => {
  it(`should return [0, 1, 9, 16, 100] when given [-4,-1,0,3,10]`, () => {
    const arr = [-4, -1, 0, 3, 10];

    const result = sortedSquares(arr);

    expect(result).to.eql([0, 1, 9, 16, 100]);
  });

  it(`should return [] when given []`, () => {
    const arr = [];

    const result = sortedSquares(arr);

    expect(result).to.eql([]);
  });

  it(`should return [4, 9, 9, 49, 121] when given [-7, -3, 2, 3, 11]`, () => {
    const arr = [-7, -3, 2, 3, 11];

    const result = sortedSquares(arr);

    expect(result).to.eql([4, 9, 9, 49, 121]);
  });
});
