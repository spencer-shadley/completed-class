
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe(`romanToInt`, () => {
    it(`should return 3 if given the string "III"`, () => {
        const str = `III`;

        const result = romanToInt(str);

        expect(result).to.eql(3);
    });

    it(`should return 4 if given the string "IV"`, () => {
        const str = `IV`;

        const result = romanToInt(str);

        expect(result).to.eql(4);
    });

    it(`should return 13 "XIII" if given the string "XIII"`, () => {
        const str = `XIII`;

        const result = romanToInt(str);

        expect(result).to.eql(13);
    });

    it(`should return 9 if given the string "IX"`, () => {
        const str = `IX`;

        const result = romanToInt(str);

        expect(result).to.eql(9);
    });

    it(`should return 58 if given the string "LVIII"`, () => {
        const str = `LVIII`;

        const result = romanToInt(str);

        expect(result).to.eql(58);
    });

    it(`should return 1994 if given the string "MCMXCIV"`, () => {
        const str = `MCMXCIV`;

        const result = romanToInt(str);

        expect(result).to.eql(1994);
    });

    it(`should return 1738 if given the string "MDCCXXXVIII"`, () => {
        const str = `MDCCXXXVIII`;

        const result = romanToInt(str);

        expect(result).to.eql(1738);
    });
});
