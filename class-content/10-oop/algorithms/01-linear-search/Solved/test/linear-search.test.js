'use strict';

const expect = chai.expect;

before(function() {
  sinon.spy(Array.prototype, 'indexOf');
});

describe('linearSearch', function() {
  it("should not call the 'indexOf' method", function() {
    const arr = [8, 22, 3, 0, -2];
    const target = 3;

    linearSearch(arr, target);

    expect(Array.prototype.indexOf.called).to.eql(false);
  });

  it('should return 2 when given the array [8, 22, 3, 0, -2] and a target of 3', function() {
    const arr = [8, 22, 3, 0, -2];
    const target = 3;

    const result = linearSearch(arr, target);

    expect(result).to.eql(2);
  });

  it('should return -1 when given the array [13, 5, 6] and a target of 11', function() {
    const arr = [13, 5, 6];
    const target = 11;

    const result = linearSearch(arr, target);

    expect(result).to.eql(-1);
  });

  it('should return -1 when given the array [] and a target of 0', function() {
    const arr = [];
    const target = 0;

    const result = linearSearch(arr, target);

    expect(result).to.eql(-1);
  });
});
