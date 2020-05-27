'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe('removeDuplicates', function() {
  it(`should update the array [1, 1, 1, 2, 2, 3] to [1, 2, 3]"`, function() {
    const arr = [1, 1, 1, 2, 2, 3];

    removeDuplicates(arr);

    expect(arr).to.eql([1, 2, 3]);
  });

  it(`should update the array [3, 3, 3] to [3]"`, function() {
    const arr = [3, 3, 3];

    removeDuplicates(arr);

    expect(arr).to.eql([3]);
  });

  it(`should update the array [0, 2, 4] to [0, 2, 4]`, function() {
    const arr = [0, 2, 4];

    removeDuplicates(arr);

    expect(arr).to.eql([0, 2, 4]);
  });

  it(`should update the array [] to []`, function() {
    const arr = [];

    removeDuplicates(arr);

    expect(arr).to.eql([]);
  });
});
