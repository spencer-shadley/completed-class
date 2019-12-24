Without running the code, determine what the following code will output and why:

```js
var a = 1;
function outer() {
  var a = 2;
  function inner() {
    a++;
    console.log(a);
    var a = 5;
  }
  inner();
}
outer();
```
