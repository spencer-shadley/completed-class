# Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

```js
function accumulate(num) {
  var sum = 0;
  for (var i = 1; i <= num; ++i) {
    sum += i;
  }
  return sum;
}
console.log(accumulate(5));
```

## Bonus - Print a message every time the accrued sum is divisible by 10
```js
function accumulate(num) {
  var sum = 0;
  for (var i = 1; i <= num; ++i) {
    if (sum % 10 === 0) {
        console.log(sum + ' is divisible by 10');
    }
    sum += i;
  }
  return sum;
}
console.log(accumulate(5));
```
