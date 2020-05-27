'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe('includes', function() {
  it('should find elements in an array', function() {
    const actual = includes([1, 3, 6], 3);
    expect(actual).to.be.true;
  });

  it('should not find elements that do not exist in an array', function() {
    const actual = includes([1, 3, 6], 2);
    expect(actual).to.be.false;
  });

  it('should not find elements that do not exist in an array', function() {
    const actual = includes([1, 3, 6], 2);
    expect(actual).to.be.false;
  });

  it('should find a character in a string', function() {
    const actual = includes('abc', 'c');
    expect(actual).to.be.true;
  });

  it('should find a character in a string', function() {
    const actual = includes('abc', 'z');
    expect(actual).to.be.false;
  });

  it('should throw on null collection', function() {
    expect(() => includes(null, 'z')).to.throw('Unexpected input');
  });

  it('should handle nulls in an array', function() {
    const actual = includes(['a', null, 3], null);
    expect(actual).to.be.true;
  });
});
