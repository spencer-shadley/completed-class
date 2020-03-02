'use strict';

const drill = require('../drill');

describe('findSumIndices', () => {
  it('should find two indices', () => {
    verify(3, [1, 2], [0, 1]);
  });

  it('should find two indices when there are multiple answers', () => {
    verify(3, [0, 1, 2, 3, 4, 5], [0, 3]);
  });

  it('should not find when the target does not exist', () => {
    verify(30, [0, 1, 2, 3, 4, 5], null);
  });

  it('should work with negatives', () => {
    verify(2, [-3, 4, 5], [0, 2]);
  });

  function verify(target, nums, expected) {
    const actual = drill.findSumIndices(target, nums);
    expect(actual).toEqual(expected);
  }
});
