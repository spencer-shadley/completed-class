'use strict';

const expect = chai.expect;

describe('mergeSorted', function() {
  it(`should return [1, 2, 3, 4] when given [1, 3] and [2, 4]`, function() {
    const arr1 = [1, 3];
    const arr2 = [2, 4];

    const result = mergeSorted(arr1, arr2);

    expect(result).to.eql([1, 2, 3, 4]);
  });

  it(`should return [3, 4, 8, 10, 13] when given [3, 4, 8, 10, 13] and []`, function() {
    const arr1 = [3, 4, 8, 10, 13];
    const arr2 = [];

    const result = mergeSorted(arr1, arr2);

    expect(result).to.eql([3, 4, 8, 10, 13]);
  });

  it(`should return [8, 12, 13, 14, 20, 40, 41, 43, 50, 51] when given [12, 13, 20, 51] and [8, 14, 40, 41, 43, 50]`, function() {
    const arr1 = [12, 13, 20, 51];
    const arr2 = [8, 14, 40, 41, 43, 50];

    const result = mergeSorted(arr1, arr2);

    expect(result).to.eql([8, 12, 13, 14, 20, 40, 41, 43, 50, 51]);
  });
});
