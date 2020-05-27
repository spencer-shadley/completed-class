const expect = chai.expect;

describe(`intToRoman`, () => {
    it(`should return "III" if given the number 3`, () => {
        const num = 3;

        const result = intToRoman(num);

        expect(result).to.eql(`III`);
    });

    it(`should return "IV" if given the number 4`, () => {
        const num = 4;

        const result = intToRoman(num);

        expect(result).to.eql(`IV`);
    });

    it(`should return "XIII" if given the number 13`, () => {
        const num = 13;

        const result = intToRoman(num);

        expect(result).to.eql(`XIII`);
    });

    it(`should return "IX" if given the number 9`, () => {
        const num = 9;

        const result = intToRoman(num);

        expect(result).to.eql(`IX`);
    });

    it(`should return "LVIII" if given the number 58`, () => {
        const num = 58;

        const result = intToRoman(num);

        expect(result).to.eql(`LVIII`);
    });

    it(`should return "MCMXCIV" if given the number 1994`, () => {
        const num = 1994;

        const result = intToRoman(num);

        expect(result).to.eql(`MCMXCIV`);
    });

    it(`should return "MDCCXXXVIII" if given the number 1738`, () => {
        const num = 1738;

        const result = intToRoman(num);

        expect(result).to.eql(`MDCCXXXVIII`);
    });
});
