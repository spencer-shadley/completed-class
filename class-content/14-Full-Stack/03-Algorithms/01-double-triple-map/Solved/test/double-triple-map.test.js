'use strict';

const expect = chai.expect;

describe('doubleTripleMap', function() {
  it(`should return [3, 4, 9, 8] when given [1, 2, 3, 4]`, function() {
    const arr = [1, 2, 3, 4];

    const result = doubleTripleMap(arr);

    expect(result).to.eql([3, 4, 9, 8]);
  });

  it(`should return [8, 16, 45, 32, 69, 84] when given [4, 8, 15, 16, 23, 42]`, function() {
    const arr = [4, 8, 15, 16, 23, 42];

    const result = doubleTripleMap(arr);

    expect(result).to.eql([8, 16, 45, 32, 69, 84]);
  });

  it(`should return [-9, 9, -8, 0, -21, 27] when given the number
  [-3, 3, -4, 0, -7, 9]`, function() {
    const arr = [-3, 3, -4, 0, -7, 9];

    const result = doubleTripleMap(arr);

    expect(result).to.eql([-9, 9, -8, 0, -21, 27]);
  });

  it(`should return [] when given []`, function() {
    const arr = [];

    const result = doubleTripleMap(arr);

    expect(result).to.eql([]);
  });
});
