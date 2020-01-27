'use strict';

const expect = chai.expect;

describe('simplifyPath', function() {
  it(`should return "/home" if given the string "/home/"`, function() {
    const path = '/home/';

    const result = simplifyPath(path);

    expect(result).to.eql('/home');
  });

  it(`should return "/" if given the string "/../"`, function() {
    const path = '/../';

    const result = simplifyPath(path);

    expect(result).to.eql('/');
  });

  it(`should return "/c" if given the string "/a/./b/../../c/"`, function() {
    const path = '/a/./b/../../c/';

    const result = simplifyPath(path);

    expect(result).to.eql('/c');
  });

  it(`should return "/c" if given the string "/a/../../b/../c//.//"`, function() {
    const path = '/a/../../b/../c//.//';

    const result = simplifyPath(path);

    expect(result).to.eql('/c');
  });

  it(`should return "/c" if given the string "/a//b////c/d//././/.."`, function() {
    const path = '/a//b////c/d//././/..';

    const result = simplifyPath(path);

    expect(result).to.eql('/a/b/c');
  });
});
