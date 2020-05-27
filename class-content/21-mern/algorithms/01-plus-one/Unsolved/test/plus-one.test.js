'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe('plusOne', function() {
  it(`should return [1, 2, 4] if given the array [1, 2, 3]`, function() {
    const digits = [1, 2, 3];

    const result = plusOne(digits);

    expect(result, 'Modify and return the same array').to.equal(digits);
    expect(result).to.eql([1, 2, 4]);
  });

  it(`should return [1] if given the array []`, function() {
    const digits = [];

    const result = plusOne(digits);

    expect(result, 'Modify and return the same array').to.equal(digits);
    expect(result).to.eql([1]);
  });

  it(`should return [1, 0, 0] if given the array [9, 9]`, function() {
    const digits = [9, 9];

    const result = plusOne(digits);

    expect(result, 'Modify and return the same array').to.equal(digits);
    expect(result).to.eql([1, 0, 0]);
  });

  it(`should return [7, 8, 7, 0] if given the array [7, 8, 6, 9]`, function() {
    const digits = [7, 8, 6, 9];

    const result = plusOne(digits);

    expect(result, 'Modify and return the same array').to.equal(digits);
    expect(result).to.eql([7, 8, 7, 0]);
  });
});
