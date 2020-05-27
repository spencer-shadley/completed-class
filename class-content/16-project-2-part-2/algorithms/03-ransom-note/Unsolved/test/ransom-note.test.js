'use strict';

const expect = chai.expect;

describe('ransomNote', function() {
  it(`should return true if given the strings "hello world" and "hello"`, function() {
    const magazine = 'hello world';
    const note = 'hello';

    const result = ransomNote(magazine, note);

    expect(result).to.eql(true);
  });

  it(`should return true if given the strings "Why are there so many songs about rainbows and whats on the other side" and "what about rainbows and songs"`, function() {
    const magazine =
      'Why are there so many songs about rainbows and whats on the other side';
    const note = 'on about rainbows and songs';

    const result = ransomNote(magazine, note);

    expect(result).to.eql(true);
  });

  it(`should return true if given the strings "give me one grand today night" and "give one grand today"`, function() {
    const magazine = 'Give me one grand today night';
    const note = 'Give one grand today';

    const result = ransomNote(magazine, note);

    expect(result).to.eql(true);
  });

  it(`should return false if given the strings "ive got a lovely bunch of coconuts" and "two times two is four"`, function() {
    const magazine = 'Ive got a lovely bunch of coconuts';
    const note = 'Ive got some coconuts';

    const result = ransomNote(magazine, note);

    expect(result).to.eql(false);
  });

  it(`should return false if given the strings "Whats so amazing that keeps us stargazing" and "stargazing whats keeps us so amazing"`, function() {
    const magazine = 'Whats so amazing that keeps us stargazing';
    const note = 'stargazing whats keeps us so amazing';

    const result = ransomNote(magazine, note);

    expect(result).to.eql(false);
  });
});
