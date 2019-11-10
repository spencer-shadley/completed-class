### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

Ex:
Input: "noon"
Output: true

Input: "horse"
Output: false

Input: "racecar"
Output: true

```

* Let students know that this is a difficult problem and encourage them to start with what they know. 

* Remind students that learning often feels like frustration, and it's important that they stick with it and keep trying rather than Google. 

* Students should start by writing out the steps necessary to solve the problem, before coding. 

* After 15 minutes, write the following steps out before coding a solution:

```
1. make a function expression.
2. loop through the string.
3. compare the first and last letters and return false if not equal.
4. compare the second and second from last letters and return false if not equal.
5. continue in this manner until all letters are checked. 
6. after all letters are checked, return true.
```
* Then code the following solution, mapping each line to a step above:

```js
var isPalindrome = function (str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== str[str.length - (i + 1)]) {
			return false;
		}
	}
	return true;
}
```
* **Only** if you have time after covering the previous solution, and the class seems up for it, demonstrate the following solution covering the following points:

  * Learning array methods and string methods can help make their code much cleaner and easier to read.

  * This solution is technically less efficient because under the hood it is iterating through all the characters in the string four times, but it is faster to write and easier to read which is often more important than performance.

  ```js
  var isPalindrome = function (str) {
	  return str.split("").reverse().join("") === str;
  }
  ```