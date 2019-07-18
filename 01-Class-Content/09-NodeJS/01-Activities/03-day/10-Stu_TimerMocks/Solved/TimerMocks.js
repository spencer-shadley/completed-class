function subtractAfterTime(num1, num2) {
  setTimeout(() => {
    return num1 - num2;
  }, 5000);
}
module.exports = subtractAfterTime;
