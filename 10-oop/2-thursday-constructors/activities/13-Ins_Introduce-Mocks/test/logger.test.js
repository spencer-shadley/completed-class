'use strict';

const Logger = require('../logger');

const colors = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

describe('Logger', () => {
  describe('colors', () => {
    const message = 'Hello world!';
    let mockConsoleLog;
    let log;

    beforeEach(() => {
      mockConsoleLog = jest.spyOn(console, 'log');
      mockConsoleLog.mockImplementation(() => {});
      log = new Logger();
    });

    afterEach(() => {
      mockConsoleLog.mockRestore();
    });

    it('should print in black', () => {
      const log = new Logger();
      const message = 'Hello world!';
      const mock = jest.spyOn(console, 'log');
      mock.mockImplementation(() => {});

      log.black(message);

      expect(mock).toBeCalledWith(colors.black, message);

      mock.mockRestore();
    });

    it('should print in red', () => {
      log.red(message);
      expect(mockConsoleLog).toBeCalledWith(colors.red, message);
    });

    it('should print in green', () => {
      log.green(message);
      expect(mockConsoleLog).toBeCalledWith(colors.green, message);
    });

    it('should print in yellow', () => {
      log.yellow(message);
      expect(mockConsoleLog).toBeCalledWith(colors.yellow, message);
    });

    it('should print in blue', () => {
      log.blue(message);
      expect(mockConsoleLog).toBeCalledWith(colors.blue, message);
    });

    it('should print in magenta', () => {
      log.magenta(message);
      expect(mockConsoleLog).toBeCalledWith(colors.magenta, message);
    });

    it('should print in cyan', () => {
      log.cyan(message);
      expect(mockConsoleLog).toBeCalledWith(colors.cyan, message);
    });

    it('should print in white', () => {
      log.white(message);
      expect(mockConsoleLog).toBeCalledWith(colors.white, message);
    });
  });
});
