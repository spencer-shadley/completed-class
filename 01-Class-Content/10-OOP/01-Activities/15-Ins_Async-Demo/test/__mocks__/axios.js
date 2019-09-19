const getMock = require("./getMock");
const axios = jest.genMockFromModule("axios");

axios.get = getMock;

module.exports = axios;
