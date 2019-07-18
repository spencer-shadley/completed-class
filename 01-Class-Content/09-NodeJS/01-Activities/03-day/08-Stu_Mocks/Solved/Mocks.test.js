const addAndCallback = require("./Mocks");

test("Our mock callback is called once", () => {
  const mockCb = jest.fn(num1 => num1 + 3);

  addAndCallback(1, 2, mockCb);

  expect(mockCb.mock.calls.length).toBe(1);
});
