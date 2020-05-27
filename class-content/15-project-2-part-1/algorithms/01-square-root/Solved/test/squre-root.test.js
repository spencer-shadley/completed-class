'use strict';
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

before(function() {
  sinon.spy(Math, 'sqrt');
});

describe('sqrt', function() {
  it(`should return 2 when given 4`, function() {
    const num = 4;

    const result = sqrt(num);

    expect(result).to.eql(2);
  });

  it(`should return 2 when given 8`, function() {
    const num = 8;

    const result = sqrt(num);

    expect(result).to.eql(2);
  });

  it(`should return 0 when given 0`, function() {
    const num = 0;

    const result = sqrt(num);

    expect(result).to.eql(0);
  });

  it(`should not use the built-in Math.sqrt method`, function() {
    const called = Math.sqrt.called;

    expect(called).to.eql(false);
  });
});
