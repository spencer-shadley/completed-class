const expect = chai.expect;

describe(`simplifyPath`, () => {
    it(`should return "/home" if given the string "/home/"`, () => {
        const path = `/home/`;

        const result = simplifyPath(path);

        expect(result).to.eql(`/home`);
    });

    it(`should return "/" if given the string "/../"`, () => {
        const path = `/../`;

        const result = simplifyPath(path);

        expect(result).to.eql(`/`);
    });

    it(`should return "/c" if given the string "/a/./b/../../c/"`, () => {
        const path = `/a/./b/../../c/`;

        const result = simplifyPath(path);

        expect(result).to.eql(`/c`);
    });

    it(`should return "/c" if given the string "/a/../../b/../c//.//"`, () => {
        const path = `/a/../../b/../c//.//`;

        const result = simplifyPath(path);

        expect(result).to.eql(`/c`);
    });

    it(`should return "/c" if given the string "/a//b////c/d//././/.."`, () => {
        const path = `/a//b////c/d//././/..`;

        const result = simplifyPath(path);

        expect(result).to.eql(`/a/b/c`);
    });
});
