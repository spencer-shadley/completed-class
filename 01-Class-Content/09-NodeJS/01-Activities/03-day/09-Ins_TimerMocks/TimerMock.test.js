const mockTimer = require("./TimerMock");

jest.useFakeTimers();

test("waits 3 seconds before ending", () => {
  mockTimer();
  jest.runAllTimers();
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
});
