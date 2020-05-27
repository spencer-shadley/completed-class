'use strict';
/* eslint-disable no-magic-numbers */

const Child = require('../child');

describe('Child', () => {
  describe('Initialization', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
      const child = new Child('Sarah', 3);

      expect(child.name).toEqual('Sarah');
      expect(child.age).toEqual(3);
    });

    it('should throw an error if provided no arguments', () => {
      const callback = () => new Child();

      expect(callback).toThrow();
    });

    it('should throw an error if not provided an age', () => {
      const callback = () => new Child('Sarah');
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const callback = () => new Child(3, 2);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const callback = () => new Child('Sarah', '2');
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const callback = () => new Child('Sarah', -1);
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(callback).toThrowError(err);
    });
  });
});
