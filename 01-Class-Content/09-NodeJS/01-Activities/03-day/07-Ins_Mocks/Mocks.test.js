const checkCallback = require("./Mocks");

test("Tests that our mock is called twice", () => {
  // Create a mock callback function
  const mockCallback = jest.fn(x => 5 + x);

  // invoke our function with an array and our mock callback as arguments
  checkCallback([10, 20], mockCallback);

  // Expects our mock function to be called twice
  expect(mockCallback.mock.calls.length).toBe(2);
});
