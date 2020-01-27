'use strict';

const expect = chai.expect;

describe('sumArrayDigits', function() {
  it(`should return [6, 9] if given the arrays [2, 2] and [4, 7]`, function() {
    const arr1 = [2, 2];
    const arr2 = [4, 7];

    const result = sumArrayDigits(arr1, arr2);

    expect(result).to.eql([6, 9]);
  });

  it(`should return [8, 4] if given the arrays [2, 7] and [5, 7]`, function() {
    const arr1 = [2, 7];
    const arr2 = [5, 7];

    const result = sumArrayDigits(arr1, arr2);

    expect(result).to.eql([8, 4]);
  });

  it(`should return [3, 3, 3] if given the arrays [2, 9, 9] and [3, 4]`, function() {
    const arr1 = [2, 9, 9];
    const arr2 = [3, 4];

    const result = sumArrayDigits(arr1, arr2);

    expect(result).to.eql([3, 3, 3]);
  });

  it(`should return [1, 0, 0, 0] if given the arrays [1] and [9, 9, 9]`, function() {
    const arr1 = [1];
    const arr2 = [9, 9, 9];

    const result = sumArrayDigits(arr1, arr2);

    expect(result).to.eql([1, 0, 0, 0]);
  });
});
