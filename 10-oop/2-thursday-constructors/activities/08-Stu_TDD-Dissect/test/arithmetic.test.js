'use strict';

const Arithmetic = require('../arithmetic');

describe('Arithmetic', () => {
  describe('Initialization', () => {
    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      const actual = new Arithmetic();

      expect('number' in actual).toEqual(true);
    });

    it("should set 'number' when created", () => {
      // Arrange
      const num = 108;

      // Act
      const actual = new Arithmetic(num);

      // Assert
      expect(actual.number).toEqual(num);
    });

    it("should default 'number' to 0", () => {
      const actual = new Arithmetic();

      expect(actual.number).toEqual(0);
    });
  });

  describe('value', () => {
    it("should return the 'Arithmetic' object's 'number' value", () => {
      // Arrange
      const num = 10;
      const arithmetic = new Arithmetic(num);

      // Act
      const actual = arithmetic.value();

      // Assert
      expect(actual).toEqual(num);
    });
  });

  describe('plus', () => {
    it("should return a new 'Arithmetic' object", () => {
      const actual = new Arithmetic(3).plus(3);

      expect(actual instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      // Arrange
      const start = 8;
      const addAmount = 7;
      const expected = start + addAmount;

      // Act
      const { number: actual } = new Arithmetic(start).plus(addAmount);

      // Assert
      expect(actual).toEqual(expected);
    });
  });

  describe('minus', () => {
    it("should return a new 'Arithmetic' object", () => {
      const actual = new Arithmetic(9).minus(4);

      expect(actual instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      // Arrange
      const num = 10;
      const subtracted = 17;
      const difference = num - subtracted;

      // Act
      const { number } = new Arithmetic(num).minus(subtracted);

      // Assert
      expect(number).toEqual(difference);
    });

    it('should handle chained substractions', () => {
      // Arrange
      const start = 10;
      const substractA = 5;
      const subtractB = 33;
      const expected = start - substractA - subtractB;

      // Act
      const { number: actual } = new Arithmetic(start)
        .minus(substractA)
        .minus(subtractB);

      // Assert
      expect(actual).toEqual(expected);
    });
  });
});
