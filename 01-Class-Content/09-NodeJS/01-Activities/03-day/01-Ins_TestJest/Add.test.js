const addNumbers = require("./Add");

test("Adds 3 + 4 to equal 7", () => {
  expect(addNumbers(3, 4)).toBe(7);
});
