'use strict';

const expect = chai.expect;

describe('arraySearch2D', function() {
  it(`should return 3 when given the array
  [["O", "O", "O"]
  ["X", "O", "O"],
  ["O", "O", "X"],
  ["O", "O", "X"]]`, function() {
    const arr = [
      ['O', 'O', 'O'],
      ['X', 'O', 'O'],
      ['O', 'O', 'X'],
      ['O', 'O', 'X']
    ];

    const result = arraySearch2D(arr);

    expect(result).to.eql(3);
  });

  it(`should return 0 when given the array
  [["O", "O", "O"],
  ["O", "O", "O"]]`, function() {
    const arr = [
      ['O', 'O', 'O'],
      ['O', 'O', 'O']
    ];

    const result = arraySearch2D(arr);

    expect(result).to.eql(0);
  });

  it(`should return 5 when given the array
  [["X", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["X", "X", "X", "X"],
  ["O", "O", "O", "O"]]`, function() {
    const arr = [
      ['X', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O'],
      ['X', 'X', 'X', 'X'],
      ['O', 'O', 'O', 'O']
    ];

    const result = arraySearch2D(arr);

    expect(result).to.eql(5);
  });

  it(`should return 0 when given the array
  [[]]`, function() {
    const arr = [[]];

    const result = arraySearch2D(arr);

    expect(result).to.eql(0);
  });
});
