const functions = require("./MultipleTest");

test("When passed the two strings `Hello` and `World` we receive the output Hello World", () => {
  expect(functions.concatString("hello", " world")).toEqual("hello world");
});

test("Dividing 5 by 1 will be greater than or equal to 5", () => {
  expect(functions.divideNums(5, 1)).toBeGreaterThanOrEqual(5);
});


