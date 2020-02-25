'use strict';

const drill = require(`../drill`);

describe(`areAnagrams`, () => {
  it(`should verify two anagrams`, () => {
    verify(true, 'car', 'arc');
  });

  it(`should verify three anagrams`, () => {
    verify(true, `foo`, `oof`, `ofo`);
  });

  it(`should verify anagrams with spaces`, () => {
    verify(true, `the morse code`, `here come dots`, `e ooesmhcrdt e`);
  });

  it(`should fail with two invalid anagrams`, () => {
    verify(false, `pizza`, `pzza`);
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

  function verify(expected, ...input) {
    const actual = drill.areAnagrams(...input);
    expect(actual).toBe(expected);
  }
});
