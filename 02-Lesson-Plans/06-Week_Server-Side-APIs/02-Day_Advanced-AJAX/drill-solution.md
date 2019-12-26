# Question

Run the following code and explain the output:

```js
function sample() {
  var a = (b = 3);
}
sample();
console.log('Is a defined?', typeof a !== 'undefined');
console.log('Is b defined?', typeof b !== 'undefined');
```

---

# Answer

- This is a bit different from the problems we've seen so far. In interviews some questions focus on logic, like our previous drills, some measure detailed understanding of a language. Today's drill focuses on one of the quirks of JavaScript.

- `var a = b = 3` is equivalent to writing:

```js
b = 3;
var a = b;
```

- This means that `b` is created globally (unless you use strict mode) because there is no `var` keyword in the variable definition.

- After `b` is created globally, `b` is assigned the value 3. Then `a` is created locally inside the function and assigned the value of `b`, which is 3.

- Because `a` is created locally, it doesn’t exist outside the function.
