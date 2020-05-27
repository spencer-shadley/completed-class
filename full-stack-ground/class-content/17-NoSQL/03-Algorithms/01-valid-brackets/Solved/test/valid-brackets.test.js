'use strict';

const expect = chai.expect;

describe(`validBrackets`, () => {
  it(`should return true if given the string "( )"`, () => {
    const str = `( )`;

    const result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "[ ( ) ]"`, () => {
    const str = `[ ( ) ]`;

    const result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "{ } [ ( [] ) ]"`, () => {
    const str = `{ } [ ( ) ]`;

    const result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "( )[ ]{ }"`, () => {
    const str = `( )[ ]{ }`;

    const result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return false if given the string "( ]"`, () => {
    const str = `( ]`;

    const result = validBrackets(str);

    expect(result).to.eql(false);
  });

  it(`should return false if given the string "( [ ) ]"`, () => {
    const str = `( [ ) ]`;

    const result = validBrackets(str);

    expect(result).to.eql(false);
  });
});
