'use strict';

var expect = chai.expect;

describe('reverse', function() {
  it("should return '!dlroW olleH' when given 'Hello World!'", function() {
    var str = 'Hello World!';

    var result = reverse(str);

    expect(result).to.eql('!dlroW olleH');
  });

  it("should return '!dlroW eybooG' when given 'Goodbye World!'", function() {
    var str = 'Goodbye World!';

    var result = reverse(str);

    expect(result).to.eql('!dlroW eybdooG');
  });
});

// bonus
describe('reverse words', function() {
  it('should reverse a sentence', function() {
    var actual = reverseWords('Hello world!');
    expect(actual).to.eql('world! Hello');
  });

  it('should handle a single word', function() {
    var input = 'Hello';
    var actual = reverseWords(input);
    expect(actual).to.eql(input);
  });

  it('should gracefully handle null', function() {
    var actual = reverseWords(null);
    expect(actual).to.eql(undefined);
  });
});
