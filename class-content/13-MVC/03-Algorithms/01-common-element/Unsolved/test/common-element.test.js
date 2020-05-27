'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe('commonElement', function() {
  it(`should return 4 when given [5, 3, 4, 10] and [0, 4, 9, 99]`, function() {
    const arrA = [0, 4, 9, 99];
    const arrB = [5, 3, 4, 10];

    const result = commonElement(arrA, arrB);

    expect(result).to.eql(4);
  });

  it(`should return 0 when given [82, 43, 17, 0, -81] and [1, 0, -1, -2, -10]`, function() {
    const arrA = [82, 43, 17, 0, -81];
    const arrB = [1, 0, -1, -2, -10];

    const result = commonElement(arrA, arrB);

    expect(result).to.eql(0);
  });

  it(`should return 8 when given [10, 8, 6, 4, 2] and [8, 80, 800, 8000, 80000]`, function() {
    const arrA = [10, 8, 6, 4, 2];
    const arrB = [8, 80, 800, 8000, 80000];

    const result = commonElement(arrA, arrB);

    expect(result).to.eql(8);
  });
});
