'use strict';

const drill = require('../drill');

describe('has', () => {
  const isEven = num => num % 2 === 0;

  describe('hasSome', () => {
    it('should verify when a value matches', () => {
      const input = [1, 2, 3];
      const expected = true;

      expect(drill.hasSome(input, isEven)).toEqual(expected);
    });

    it('should verify when a value does not match', () => {
      const input = [1, 3];
      const expected = false;

      expect(drill.hasSome(input, isEven)).toEqual(expected);
    });

    it('should handle non-arrays', () => {
      const input = null;
      const expected = false;

      expect(drill.hasSome(input, isEven)).toEqual(expected);
    });
  });

  describe('hasNone', () => {
    it('should verify when a value matches', () => {
      const input = [1, 2, 3];
      const expected = false;

      expect(drill.hasNone(input, isEven)).toEqual(expected);
    });

    it('should verify when none match', () => {
      const input = [1, 3];
      const expected = true;

      expect(drill.hasNone(input, isEven)).toEqual(expected);
    });

    it('should handle non-arrays', () => {
      const input = null;
      const expected = true;

      expect(drill.hasNone(input, isEven)).toEqual(expected);
    });
  });

  describe('hasAll', () => {
    it('should verify when all values match', () => {
      const input = [2, 4, 8, 16];
      const expected = true;

      expect(drill.hasAll(input, isEven)).toEqual(expected);
    });

    it('should verify when no values match', () => {
      const input = [1, 3, 5, 7, 11];
      const expected = false;

      expect(drill.hasAll(input, isEven)).toEqual(expected);
    });

    it('should handle non-arrays', () => {
      const input = null;
      const expected = false;

      expect(drill.hasAll(input, isEven)).toEqual(expected);
    });
  });

  describe('hasMost', () => {
    it('should verify when most match', () => {
      const input = [1, 2, 3, 4, 6, 8];
      const expected = true;

      expect(drill.hasMost(input, isEven)).toEqual(expected);
    });

    it('should verify when most do not match', () => {
      const input = [1, 2, 3];
      const expected = false;

      expect(drill.hasMost(input, isEven)).toEqual(expected);
    });

    it('should verify when none match', () => {
      const input = [1, 3];
      const expected = false;

      expect(drill.hasMost(input, isEven)).toEqual(expected);
    });

    it('should handle non-arrays', () => {
      const input = null;
      const expected = false;

      expect(drill.hasMost(input, isEven)).toEqual(expected);
    });
  });
});
