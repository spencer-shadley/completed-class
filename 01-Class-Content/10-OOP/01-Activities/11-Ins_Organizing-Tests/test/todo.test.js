const Todo = require("../todo");

describe("Todo", () => {
  describe("Initialization", () => {
    it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
      const text = "Pick up milk";

      const obj = new Todo(text);

      expect(obj.text).toEqual(text);
    });

    it("should throw an error if not provided a 'text' value", () => {
      const cb = () => new Todo();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );

      expect(cb).toThrowError(err);
    });
  });
});
