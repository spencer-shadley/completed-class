'use strict';

function getNegative(num) {
  const throwError = () => {
    throw new Error('input must be coercible to a number');
  };

  if (!num && num !== 0) {
    throwError();
  }

  const negativeNum = num * -1;

  if (isNaN(negativeNum)) {
    throwError();
  }

  if (Object.is(negativeNum, -0)) {
    return 0;
  }

  return negativeNum;
}
