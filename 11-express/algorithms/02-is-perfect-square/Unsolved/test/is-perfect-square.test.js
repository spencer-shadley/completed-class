'use strict';

const expect = chai.expect;

describe('isPerfectSquare', function() {
  it(`should return true when given the number
  9`, function() {
    const num = 9;

    const result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return true when given the number
  16`, function() {
    const num = 16;

    const result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return true when given the number
  81`, function() {
    const num = 81;

    const result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return true when given the number
  1`, function() {
    const num = 1;

    const result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return true when given the number
  0`, function() {
    const num = 0;

    const result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return false when given the number
  7`, function() {
    const num = 7;

    const result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });

  it(`should return false when given the number
  15`, function() {
    const num = 15;

    const result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });

  it(`should return false when given the number
  14`, function() {
    const num = 14;

    const result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });

  it(`should return false when given the number
  -9`, function() {
    const num = -9;

    const result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });

  it(`should return false when given the number
  66`, function() {
    const num = 66;

    const result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });
});
