'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe('zeroesAndOnes', function() {
  it(`should return true when given '10101010'`, function() {
    const str = '10101010';

    const result = zeroesAndOnes(str);

    expect(result).to.eql(true);
  });

  it(`should return false when given '00010'`, function() {
    const str = '00010';

    const result = zeroesAndOnes(str);

    expect(result).to.eql(false);
  });

  it(`should return true when given the number
  '001101'`, function() {
    const str = '001101';

    const result = zeroesAndOnes(str);

    expect(result).to.eql(true);
  });

  it(`should return true when given ''`, function() {
    const str = '';

    const result = zeroesAndOnes(str);

    expect(result).to.eql(true);
  });
});
