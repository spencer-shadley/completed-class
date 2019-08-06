### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string.


Ex:
Input: “the quick brown fox jumps over the calm kitten quietly”
Output: "b"

Input: “this hat is the greatest!”
Output: "g"

Input: “what a wonderful day it has been!”
Output: "o"


```

* Encourage students to try and solve this a simpler or faster way if they finish early.

* After 15 minutes, code the following solution:

```js

function firstNonRepeatChar(str) {
	for (var i = 0; i < str.length; i++) {
		var char = str[i];
		var count = 0;
		
		for (var j = 0; j < str.length; j++) {
			if (str[j] === char) {
				count++;
			}
		}

		if (count === 1) {
			return char;
		}
	}
}

```

* This solution does the following:

* We loop through each character in our string, initializing a `count` variable at 0. 

* We assign a the variable `char` to its corresponding character in our string.

* We loop through the array, incrementing the count variable every time we see the same character from our first for loop.

* We check to see if the count for each character is one and return the character if that is the case.

Time permitting (and if the class seems up for it), code this solution as an alternative:

```js

function firstNonRepeatChar(str){
	var charCount = {};
	for (var i = 0; i < str.length; i++) {
		var char = str[i];
		if (charCount[char]) {
			charCount[char]++;
		}
		else {
			charCount[char] = 1;
		}
	}
	for (var j in charCount) {
		if (charCount[j]===1) {
			return j;
		}
	}
}  

```

* This solution does the following:

* We create a new object and then create a key corresponding to each different character in our string. The value will be set to be the total number of times that character appears in our string.

* As we iterate through our input string, every time we encounter an additional occurrence of a string, we increment its value in the charCount object by one. 

* Once the string has been iterated through, we loop through each key in our charCount object, returning the first time we encounter a value of 1.

* It is important for students to understand that both solutions are correct, but in its worst case, the first solution has a worse time complexity. This is because it takes longer to iterate through a loop inside a loop (O(n^2)) than it does to iterate through that same loop twice (O(2n)).

* Reassure students that we will spend a full day at the end of the course focusing on this kind of efficiency.