'use strict';

const drill = require(`../drill`);

describe(`haveSubWord`, () => {
  it(`should verify two sub words`, () => {
    verify(true, 'car', 'racecar');
  });

  it(`should verify three sub words`, () => {
    verify(true, `car`, `racecar`, `haircare`, `carbon`);
  });

  it(`should verify sub words with spaces`, () => {
    verify(true, `a b`, `a b c`);
  });

  it(`should fail with invalid sub words`, () => {
    verify(false, `car`, `pizza`);
  });

  it(`should fail with one input`, () => {
    verify(false, `pizza`);
  });

  it(`should fail with undefined`, () => {
    verify(false, undefined);
  });

  it(`should fail with null`, () => {
    verify(false, null);
  });

  it(`should fail with non-array input`, () => {
    verify(false, 3);
  });

  function verify(expected, subword, ...inputs) {
    const actual = drill.haveSubWord(subword, ...inputs);
    expect(actual).toBe(expected);
  }
});
