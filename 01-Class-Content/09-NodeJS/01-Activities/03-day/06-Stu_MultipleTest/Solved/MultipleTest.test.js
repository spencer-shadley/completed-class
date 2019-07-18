const functions = require("./MultipleTest");

test("Comparing 1 to an empty array would be false", () => {
  expect(functions.trueOrFalse(1, [])).toBeFalsy();
});

test("Adding 10 and 10 and diving the sum by 2 is greater than 9", () => { 
  expect(functions.addAndDivide(10, 10, 2)).toBeGreaterThan(9);
});
