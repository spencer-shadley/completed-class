
/* eslint-disable no-magic-numbers */

const expect = chai.expect;

describe(`rotationPoint`, () => {
  it(`should return 1 if given the array ['cool', 'cat']`, () => {
    const words = [`cool`, `cat`];

    const result = rotationPoint(words);

    expect(result).to.eql(1);
  });

  it(`should return 4 if given the array ['great', 'ostrich', 'panther', 'ruby', 'chosen', 'feathers']`, () => {
    const words = [`great`, `ostrich`, `panther`, `ruby`, `chosen`, `feathers`];

    const result = rotationPoint(words);

    expect(result).to.eql(4);
  });

  it(`should return 5 if given the array ['problem', 'reactive', 'supper',
  'undesirable', 'xebra', 'alpha',
  'bank', 'banned', 'endanger',
  'fallout', 'yellow']`, () => {
    const words = [
      `problem`,
      `reactive`,
      `supper`,
      `undesirable`,
      `xebra`,
      `alpha`,
      `bank`,
      `banned`,
      `endanger`,
      `fallout`,
      `yellow`
    ];

    const result = rotationPoint(words);

    expect(result).to.eql(5);
  });

  it(`should return -1 if given the array ['any', 'body', 'can', 'dance', 'to', 'violas']`, () => {
    const words = [`any`, `body`, `can`, `dance`, `to`, `violas`];

    const result = rotationPoint(words);

    expect(result).to.eql(-1);
  });
});
