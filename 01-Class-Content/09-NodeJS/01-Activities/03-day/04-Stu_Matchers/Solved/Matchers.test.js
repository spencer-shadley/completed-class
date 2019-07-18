const addFloats = require("./Matchers");

test("Adding 0.1 and 0.5 will be close to 0.6", () => {
  expect(addFloats(0.1, 0.5)).toBeCloseTo(0.6);
});
