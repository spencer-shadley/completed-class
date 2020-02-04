'use strict';

function printByLoop(baseSize) {
  let initialSideSpaces = baseSize / 2;
  if (baseSize % 2 === 0) {
    --initialSideSpaces;
  }

  for (
    let numSideSpaces = initialSideSpaces;
    numSideSpaces >= 0;
    --numSideSpaces
  ) {
    let side = ' '.repeat(numSideSpaces);
    let x = 'X'.repeat(baseSize - side.length * 2);
    console.log(side + x);
  }
}

function printPyramid(baseSize) {
  let output = [];
  let base = 'X'.repeat(baseSize);
  let side = '';

  while (base.length > 0) {
    output.push(side + base);
    side += ' ';
    base = base.substring(2);
  }

  console.log(output.reverse().join('\n'));
}

module.exports = {
  printByLoop,
  printPyramid
};
