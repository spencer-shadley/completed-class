
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe(`mergeMeetingTimes`, () => {
    it(`should return [[ 1, 4 ]] if given the array [[ 1, 3 ], [ 2, 4 ]]`, () => {
        const arr = [
            [1, 3],
            [2, 4]
        ];

        const result = mergeMeetingTimes(arr);

        expect(result).to.eql([[1, 4]]);
    });

    it(`should return [[ 5, 8 ]] if given the array [[ 5, 6 ], [ 6, 8 ]]`, () => {
        const arr = [
            [5, 6],
            [6, 8]
        ];

        const result = mergeMeetingTimes(arr);

        expect(result).to.eql([[5, 8]]);
    });

    it(`should return [[ 1, 8 ]] if given the array [[ 1, 8 ], [ 2, 5 ]]`, () => {
        const arr = [
            [1, 8],
            [2, 5]
        ];

        const result = mergeMeetingTimes(arr);

        expect(result).to.eql([[1, 8]]);
    });

    it(`should return [[1, 4], [5, 8]] if given the array [
    [ 5, 8 ],
    [ 1, 4 ],
    [ 6, 8 ]
  ]`, () => {
        const arr = [
            [5, 8],
            [1, 4],
            [6, 8]
        ];

        const result = mergeMeetingTimes(arr);

        expect(result).to.eql([
            [1, 4],
            [5, 8]
        ]);
    });

    it(`should return [[ 1, 12 ]] if given the array [
    [ 1, 10 ],
    [ 2, 5 ],
    [ 6, 8 ],
    [ 9, 10 ],
    [ 10, 12 ]
  ]`, () => {
        const arr = [
            [1, 10],
            [2, 5],
            [6, 8],
            [9, 10],
            [10, 12]
        ];

        const result = mergeMeetingTimes(arr);

        expect(result).to.eql([[1, 12]]);
    });
});
