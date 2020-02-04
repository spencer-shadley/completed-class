'use strict';

const drill = require('../drill');

describe('printPyramid', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log');
    consoleLogSpy.mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should print a small odd sized pyramid', () => {
    const expected = ` X
XXX`;

    drill.printPyramid(3);

    expect(consoleLogSpy).toBeCalledWith(expected);
  });

  it('should print a small even sized pyramid', () => {
    const expected = ` XX
XXXX`;

    drill.printPyramid(4);

    expect(consoleLogSpy).toBeCalledWith(expected);
  });

  it('should print a large odd sized pyramid', () => {
    const expected = `          X
         XXX
        XXXXX
       XXXXXXX
      XXXXXXXXX
     XXXXXXXXXXX
    XXXXXXXXXXXXX
   XXXXXXXXXXXXXXX
  XXXXXXXXXXXXXXXXX
 XXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX`;

    drill.printPyramid(21);

    expect(consoleLogSpy).toBeCalledWith(expected);
  });

  it('should print a large even sized pyramid', () => {
    const expected = `          XX
         XXXX
        XXXXXX
       XXXXXXXX
      XXXXXXXXXX
     XXXXXXXXXXXX
    XXXXXXXXXXXXXX
   XXXXXXXXXXXXXXXX
  XXXXXXXXXXXXXXXXXX
 XXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXX`;

    drill.printPyramid(22);

    expect(consoleLogSpy).toBeCalledWith(expected);
  });
});
