'use strict';

const expect = chai.expect;

function containSameElements(arr1, arr2) {
  const arr1Copy = JSON.parse(JSON.stringify(arr1));

  for (let i = 0; i < arr2.length; ++i) {
    const num = arr2[i];

    const arr1Index = arr1Copy.indexOf(num);

    if (arr1Index === -1 || arr1Copy.length === 0) {
      return false;
    }

    arr1Copy.splice(arr1Index, 1);
  }

  return true;
}

describe('arrayIntersection', function() {
  it(`should return [1, 3, 5] when given [1, 2, 3, 4, 5] and [5, 0, 3, 10, -2, 1]`, function() {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [5, 0, 3, 10, -2, 1];

    const result = arrayIntersection(arr1, arr2);
    const expected = [1, 3, 5];

    const areEqual = containSameElements(result, expected);

    expect(areEqual).to.eql(true);
  });

  it(`should return [7, 13, 13, 13] when given [13, 12, 13, 14, 13, -9, 7] and [11, 7, 13, -19, 13, 111, 13]`, function() {
    const arr1 = [13, 12, 13, 14, 13, -9, 7];
    const arr2 = [11, 7, 13, -19, 13, 111, 13];

    const result = arrayIntersection(arr1, arr2);
    const expected = [7, 13, 13, 13];

    const areEqual = containSameElements(result, expected);

    expect(areEqual).to.eql(true);
  });

  it(`should return [] when given [99, 88, 77, 66] and [55, 44, 33, 22, 11]`, function() {
    const arr1 = [99, 88, 77, 66];
    const arr2 = [55, 44, 33, 22, 11];

    const result = arrayIntersection(arr1, arr2);
    const expected = [];

    expect(result).to.eql(expected);
  });
});
