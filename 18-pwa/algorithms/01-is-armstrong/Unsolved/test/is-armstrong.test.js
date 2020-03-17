'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe('isArmstrong', function() {
  it(`should return true if given the number 153`, function() {
    const num = 153;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 371`, function() {
    const num = 371;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 1634`, function() {
    const num = 1634;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 0`, function() {
    const num = 0;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 1`, function() {
    const num = 1;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return false if given the number 11`, function() {
    const num = 11;

    const result = isArmstrong(num);

    expect(result).to.eql(false);
  });

  it(`should return false if given the number 1883`, function() {
    const num = 1883;

    const result = isArmstrong(num);

    expect(result).to.eql(false);
  });

  it(`should return false if given the number 443`, function() {
    const num = 443;

    const result = isArmstrong(num);

    expect(result).to.eql(false);
  });
});
