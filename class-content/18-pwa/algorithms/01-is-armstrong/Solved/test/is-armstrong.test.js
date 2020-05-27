'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe(`isArmstrong`, () => {
  it(`should return true if given the number 153`, () => {
    const num = 153;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 371`, () => {
    const num = 371;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 1634`, () => {
    const num = 1634;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 0`, () => {
    const num = 0;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 1`, () => {
    const num = 1;

    const result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return false if given the number 11`, () => {
    const num = 11;

    const result = isArmstrong(num);

    expect(result).to.eql(false);
  });

  it(`should return false if given the number 1883`, () => {
    const num = 1883;

    const result = isArmstrong(num);

    expect(result).to.eql(false);
  });

  it(`should return false if given the number 443`, () => {
    const num = 443;

    const result = isArmstrong(num);

    expect(result).to.eql(false);
  });
});
