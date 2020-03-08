'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe(`minIncrement`, () => {
  it(`should return 1 if given the array [1, 2, 2]`, () => {
    const arr = [1, 2, 2];

    const result = minIncrement(arr);

    expect(result).to.eql(1);
  });

  it(`should return 6 if given the array [3, 2, 1, 2, 1, 7]`, () => {
    const arr = [3, 2, 1, 2, 1, 7];

    const result = minIncrement(arr);

    expect(result).to.eql(6);
  });

  it(`should return 3 if given the array [8, 6, 8, 9, 10]`, () => {
    const arr = [8, 6, 8, 9, 10];

    const result = minIncrement(arr);

    expect(result).to.eql(3);
  });

  it(`should return 13 if given the array [0, 0, 1, 2, 2, 3, 0]`, () => {
    const arr = [0, 0, 1, 2, 2, 3, 0];

    const result = minIncrement(arr);

    expect(result).to.eql(13);
  });

  it(`should return 0 if given the array [1, 0, 2, -4, 9, 4]`, () => {
    const arr = [1, 0, 2, -4, 9, 4];

    const result = minIncrement(arr);

    expect(result).to.eql(0);
  });

  it(`should return 0 if given the array []`, () => {
    const arr = [];

    const result = minIncrement(arr);

    expect(result).to.eql(0);
  });
});
