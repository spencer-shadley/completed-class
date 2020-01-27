'use strict';

const expect = chai.expect;

before(function() {
  sinon.spy(Array.prototype, 'indexOf');
});

describe('strStr', function() {
  it(`should return 2 when given the strings "Hello" and "ll"`, function() {
    const str1 = 'Hello';
    const str2 = 'll';

    const result = strStr(str1, str2);

    expect(result).to.eql(2);
  });

  it(`should return -1 when given the strings "aaaaaa" and "bba"`, function() {
    const str1 = 'aaaaaa';
    const str2 = 'bba';

    const result = strStr(str1, str2);

    expect(result).to.eql(-1);
  });

  it(`should return 0 when given "Hello World" and ""`, function() {
    const str1 = 'Hello World';
    const str2 = '';

    const result = strStr(str1, str2);

    expect(result).to.eql(0);
  });
});
