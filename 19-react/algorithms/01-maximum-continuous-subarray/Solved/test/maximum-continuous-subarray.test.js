
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe(`smallestDifference`, () => {
    it(`should return [2, 2] if given the arrays [1, 2, 3, 5, 6] and [0, 2, 4, 8, 10]`, () => {
        const arr1 = [1, 2, 3, 5, 6];
        const arr2 = [0, 2, 4, 8, 10];

        const result = smallestDifference(arr1, arr2);

        expect(result).to.eql([2, 2]);
    });

    it(`should return [99, 101] if given the arrays [15, 30, 31, 40, 99] and [36, 47, 58, 69, 80]`, () => {
        const arr1 = [-9, 0, 15, 30, 31, 40, 99];
        const arr2 = [36, 47, 58, 69, 80, 101];

        const result = smallestDifference(arr1, arr2);
        expect(result).to.eql([99, 101]);
    });

    it(`should return [42, 108] if given the arrays [4, 8, 15, 16, 23, 42] and [108, 112, 112, 155, 156, 170]`, () => {
        const arr1 = [4, 8, 15, 16, 23, 42];
        const arr2 = [108, 112, 112, 155, 156, 170];

        const result = smallestDifference(arr1, arr2);
        expect(result).to.eql([42, 108]);
    });
});
