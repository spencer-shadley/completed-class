'use strict';

const expect = chai.expect;

describe('permutationSubstring', function() {
  it(`should return true if given the strings "tbacowa" and "bat"`, function() {
    const str = 'tbacowa';
    const sub = 'bat';

    const result = permutationSubstring(str, sub);

    expect(result).to.eql(true);
  });

  it(`should return true if given the strings "nAtsuiPlwuan" and "Austin"`, function() {
    const str = 'nAtsuiPlwuan';
    const sub = 'Austin';

    const result = permutationSubstring(str, sub);

    expect(result).to.eql(true);
  });

  it(`should return false if given the strings "nnhsuieaero" and "summer"`, function() {
    const str = 'nnhsuieaero';
    const sub = 'summer';

    const result = permutationSubstring(str, sub);

    expect(result).to.eql(false);
  });

  it(`should return false if given the strings "octmantisplantic" and "atlantic ocean"`, function() {
    const str = 'octmantisplantic';
    const sub = 'atlantic ocean';

    const result = permutationSubstring(str, sub);

    expect(result).to.eql(false);
  });
});
