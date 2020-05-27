'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// Using arrays
const songsArr = ['Bad Guy', 'Old Town Road', '7 Rings'];

for (let i = 0; i < songsArr.length; ++i) {
  const value = songsArr[i];
  console.log(value);
}

songsArr.forEach(value => {
  console.log(value);
});

for (const value of songsArr) {
  console.log(value);
}
// Output:
// Bad Guy
// Old Town Road
// 7 Rings

// Using strings
const name = 'Spencer';
for (const letter of name) {
  console.log(letter);
}
// Output:
// S
// p
// ...

// Using map
const songs = new Map([
  ['Bad Guy', 1],
  ['Old Town Road', 2]
]);

for (const [key, value] of songs) {
  console.log(`${key}'s chart position is ${value}`);
}
// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2

const foo = {
  bar: true,
  test: false
};

for (const prop of Object.keys(foo)) {
  console.log(prop);
}
