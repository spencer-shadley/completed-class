const getMock = jest.fn().mockImplementation(async () => {
  return { data: {} };
});

module.exports = getMock;
