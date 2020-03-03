'use strict';

const add = require(`../src/add`);
const subtract = require(`../src/subtract`);

describe(`jest test`, () => {
  it(`add`, () => {
    expect(add.add(1, 2)).toEqual(3);
  });

  xit(`subtract`, () => {
    expect(subtract.subtract(1, 2)).toEqual(-1);
  });
});
