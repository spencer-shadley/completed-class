'use strict';

var expect = chai.expect;

describe('negative', function() {
  const errorMessage = 'input must be coercible to a number';

  it('should convert positive number to negative', function() {
    const actual = getNegative(4);
    expect(actual).to.eql(-4);
  });

  it('should convert negative number to postive', function() {
    const actual = getNegative(-8);
    expect(actual).to.eql(8);
  });

  it('should convert 0 to 0', function() {
    const actual = getNegative(0);
    expect(actual).to.eql(0);
  });

  it('should handle number coercible types', function() {
    const actual = getNegative('34');
    expect(actual).to.eql(-34);
  });

  it('should throw an error for objects', function() {
    expect(() => getNegative({ foo: 'bar' })).to.throw(errorMessage);
  });

  it('should throw an error for null', function() {
    expect(() => getNegative(null)).to.throw(errorMessage);
  });

  it('should throw an error for undefined', function() {
    expect(() => getNegative(undefined)).to.throw(errorMessage);
  });

  it('should throw an error for empty string', function() {
    expect(() => getNegative('')).to.throw(errorMessage);
  });
});
