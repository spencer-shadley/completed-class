'use strict';
/* eslint-disable no-magic-numbers */

var expect = chai.expect;

describe('find first dupe', function() {
  it('should find the first duplicate when there is one duplicate', function() {
    const actual = findFirstDuplicate([2, 5, 6, 3, 5]);
    expect(actual).to.eql(5);
  });

  it('should find the first duplicate when there are multiple duplicates', function() {
    const actual = findFirstDuplicate([1, 3, 4, 1, 3, 4]);
    expect(actual).to.eql(1);
  });

  it('should return undefined when there are no duplicates', function() {
    const actual = findFirstDuplicate([2, 3, 5]);
    expect(actual).to.eql(undefined);
  });

  it('should return undefined when the input is a number', function() {
    const actual = findFirstDuplicate(42);
    expect(actual).to.eql(undefined);
  });

  it('should return undefined when the input is null', function() {
    const actual = findFirstDuplicate(null);
    expect(actual).to.eql(undefined);
  });

  it('should return undefined when the input is undefined', function() {
    const actual = findFirstDuplicate(undefined);
    expect(actual).to.eql(undefined);
  });

  it('should return undefined when the input is true', function() {
    const actual = findFirstDuplicate(true);
    expect(actual).to.eql(undefined);
  });
});
