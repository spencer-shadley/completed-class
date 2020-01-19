// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// Using arrays
const songsArr = ['Bad Guy', 'Old Town Road', '7 Rings'];

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
