const addAndCallback = (num1, num2, callback) => {
  const sum = num1 + num2;
  callback(sum);
};

module.exports = addAndCallback;
