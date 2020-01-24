'use strict';

var expect = chai.expect;

describe('reverse', function() {
  describe('reverse characters', function() {
    it('should reverse a sentence', function() {
      var result = reverse('Hello World!');
      expect(result).to.eql('!dlroW olleH');
    });

    it("should reverse a sentence with random characters'", function() {
      var result = reverse('*&^Goodbye World!');
      expect(result).to.eql('!dlroW eybdooG^&*');
    });
  });

  // bonus
  describe('reverse words', function() {
    it('should reverse a sentence', function() {
      var actual = reverseWords('Hello world!');
      expect(actual).to.eql('world! Hello');
    });

    it('should return the same word when given a single word', function() {
      var input = 'Hello';
      var actual = reverseWords(input);
      expect(actual).to.eql(input);
    });

    it('should gracefully handle null', function() {
      var actual = reverseWords(null);
      expect(actual).to.eql(undefined);
    });
  });
});
