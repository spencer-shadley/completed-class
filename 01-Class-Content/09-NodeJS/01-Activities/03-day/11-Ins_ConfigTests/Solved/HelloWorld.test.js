const functions = require("./HelloWorld");

test("concatenating the two provided strings should result in 'Hello World!'", () => {
  expect(functions.helloWorld("Hello", " World!")).toBe("Hello World!");
});
