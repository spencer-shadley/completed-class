Without running the code, determine what the following code will output and why:

```js
var a = 1;
console.log(a);
function outer() {
  var a = 2;
  console.log(a);
  function inner() {
    a++;
    console.log(a);
    var a = 5;
  }
  inner();
}
outer();
```

Once you have a guess, try running it. If it doesn't match your expectations try to figure out why. After a few minutes Google "JavaScript hoisting".
