### Pre-Class Drill

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.

Ex:
Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
Output: true

Input: “Five hexing wizard bots jump quickly” 
Output: true

Input: “JavaScript is the best”
Output: false

```

* Remind students to write the steps first, then start with what they know.

* After 15 minutes, ask for solutions from students or code the one below, talking through each step as you code:

```js
var isPangram = function (str) {
  str = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < alphabet.length; i++) {
    if (!str.includes(alphabet[i])){
      return false;
    }
  }
  return true;
}
```