### Pre-Class Drill

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in an input and returns true if it’s an integer and false otherwise.

Ex:
Input: "7"
Output: false

Input: 7
Output: true

Input: 4.3
Output: false

```

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

  * Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided). 

  * Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

```js
var isInt = function (input) {
  return parseInt(input) === input;
}

```

```js
var isInt = function (input) {
  return Math.floor(input) === input;
}
```

* Briefly tell students that the second solution is preferable. The first one actually won't work for very large numbers because of the way `parseInt` works under the hood.

* This isn't important for them to fully understand at this point, but it's a great opportunity for them to see that learning the language they work in deeply can help them write less error-prone code.

* [more info on using parseInt on numbers](https://www.gideonpyzer.com/blog/use-parseint-for-strings-not-for-numbers/)