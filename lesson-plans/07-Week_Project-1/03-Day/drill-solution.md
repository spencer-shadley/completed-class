# Question

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

---

# Answer

- The output will be `1`, `2` and `NaN`.

- `1` and `2` reference their closest scoped `a` and because each `a` is both declared and initiatilized prior to its reference these work as expected.

- Inside `inner` we have declared a variable `a` with the var keyword, so when we reference `a` inside of `inner`, it will always look to _that_ `a` - not the one declared in `outer` or globally.

- We are referencing `a` twice before it is declared, but that does _not_ give us a reference error.

- In JavaScript, variable declarations are **hoisted**, meaning `var a` is essentially moved to the top line of the function, but the assignment `= 5` is not. So `a` is declared but has a value of `undefined` until the line `var a = 5;` is run.

- `undefined` is not a number so performing a mathematical operation on it, like the post-increment operation `++`, will result in a value of `NaN`.

- [more info here](https://scotch.io/tutorials/understanding-hoisting-in-javascript)
