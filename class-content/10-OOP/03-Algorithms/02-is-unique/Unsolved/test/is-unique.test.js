'use strict';

const expect = chai.expect;

describe('isUnique', function() {
  it('should return true when given the array [2, 8, 7, 5, 4, 3]', function() {
    const arr = [2, 8, 7, 5, 4, 3];

    const result = isUnique(arr);

    expect(result).to.eql(true);
  });

  it('should return true when given the array []', function() {
    const arr = [];

    const result = isUnique(arr);

    expect(result).to.eql(true);
  });

  it('should return false when given the array [-2, 5, -2, 53, 22, 1]', function() {
    const arr = [-2, 5, -2, 53, 22, 1];

    const result = isUnique(arr);

    expect(result).to.eql(false);
  });

  it('should return false when given the array [4, 4, 2, 9, 2, 9, 3, 3, 7, 3]', function() {
    const arr = [4, 4, 2, 9, 2, 9, 3, 3, 7, 3];

    const result = isUnique(arr);

    expect(result).to.eql(false);
  });
});
