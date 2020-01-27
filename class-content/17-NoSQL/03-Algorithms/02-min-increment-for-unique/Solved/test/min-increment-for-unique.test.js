'use strict';

const expect = chai.expect;

describe('minIncrement', function() {
  it(`should return 1 if given the array [1, 2, 2]`, function() {
    const arr = [1, 2, 2];

    const result = minIncrement(arr);

    expect(result).to.eql(1);
  });

  it(`should return 6 if given the array [3, 2, 1, 2, 1, 7]`, function() {
    const arr = [3, 2, 1, 2, 1, 7];

    const result = minIncrement(arr);

    expect(result).to.eql(6);
  });

  it(`should return 3 if given the array [8, 6, 8, 9, 10]`, function() {
    const arr = [8, 6, 8, 9, 10];

    const result = minIncrement(arr);

    expect(result).to.eql(3);
  });

  it(`should return 13 if given the array [0, 0, 1, 2, 2, 3, 0]`, function() {
    const arr = [0, 0, 1, 2, 2, 3, 0];

    const result = minIncrement(arr);

    expect(result).to.eql(13);
  });

  it(`should return 0 if given the array [1, 0, 2, -4, 9, 4]`, function() {
    const arr = [1, 0, 2, -4, 9, 4];

    const result = minIncrement(arr);

    expect(result).to.eql(0);
  });

  it(`should return 0 if given the array []`, function() {
    const arr = [];

    const result = minIncrement(arr);

    expect(result).to.eql(0);
  });
});
