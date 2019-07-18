const subtractNumbers = require("./Matchers");

test("Subtracting 5 from 7 will be less than 3", () => {
  expect(subtractNumbers(7, 5)).toBeLessThan(3);
  expect(subtractNumbers(7, 5)).toBeGreaterThan(1);
}); 
