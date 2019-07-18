const subtractAfterTime = require("./TimerMocks");

jest.useFakeTimers();

test("setTimeout was called 1 time", () => {
  subtractAfterTime();
  expect(setTimeout).toHaveBeenCalledTimes(1);
});
