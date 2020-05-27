'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe('isAnagram', function() {
  it("should return true when given the strings 'abc` and `cba`", function() {
    const strA = 'abc';
    const strB = 'cba';

    const result = isAnagram(strA, strB);

    expect(result).to.eql(true);
  });

  it("should return true when given the strings 'octagonal` and `tganoalc`", function() {
    const strA = 'octagonal';
    const strB = 'tganoalco';

    const result = isAnagram(strA, strB);

    expect(result).to.eql(true);
  });

  it("should return false when false the strings 'obsidian` and `danisboba`", function() {
    const strA = 'obsidian';
    const strB = 'danisboba';

    const result = isAnagram(strA, strB);

    expect(result).to.eql(false);
  });

  it("should return false when false the strings 'targaryen` and `gratawyen`", function() {
    const strA = 'targaryen';
    const strB = 'gratawyen';

    const result = isAnagram(strA, strB);

    expect(result).to.eql(false);
  });
});
