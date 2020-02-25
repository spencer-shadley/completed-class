'use strict';

const drill = require(`../drill`);

describe(`haveSameTotalPosition`, () => {
  it(`should verify two inputs permuted`, () => {
    verify(true, 'abc', 'cab');
  });

  it(`should verify two inputs with different lengths`, () => {
    verify(true, `abc`, `f`);
  });

  it(`should verify z`, () => {
    verify(true, `z`, `ay`);
  });

  it(`should fail with different counts`, () => {
    verify(false, `abc`, `q`);
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

  function verify(expected, ...inputs) {
    const actual = drill.haveSameTotalPosition(...inputs);
    expect(actual).toBe(expected);
  }
});
