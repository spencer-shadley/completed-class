## 5.2 - JavaScript // jQuery Review & Timing Events (6:30 PM) <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

### Pre-Class Office Hours

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

### Overview

In this class, we will briefly review JavaScript and jQuery concepts before learning about Timing Events.

`Summary: Complete activities 04-11 in Unit 05`

##### Instructor Priorities

* Try to get students to volunteer and participate in going over today's exercises. Fostering an environment where students are comfortable sharing and talking about code is paramount!

* Make sure everyone is contributing in their groups. It's important students get used to talking about and working on code with other developers. This is valuable experience with real world application!

* Reinforce good coding habits! Clean code with proper variable names and indentation!

##### Instructor Notes

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5d4f0ea2-7472-4744-a7f3-995f451d999b)

- - -

### Class Objectives

* Students will reinforce their knowledge of JavaScript & jQuery.
* Students will understand JavaScript Timing Events including `setTimeout`, `clearTimeout`, & `setInterval`.
* Give students experience working on, and talking about code with other developers.
* Implement complex logical conditions to meet an objective.

- - -

### 0. Instructor Do: Welcome & Housekeeping (5 mins)

* Welcome students to class and give an introduction to the day's topics.

* Remind students that homework is due Saturday! Even if they haven't fully completed it they should submit it anyway. Career Services and Academic Support monitor homework and it helps us to know where everyone is in the class.

### 1. Students Do: Coin Flipper (15 mins)

* Students will be building an app that allows them to guess the outcome of a coin flip, and track their wins/losses.

* Open `coin-flip-solution.html` in `04-CoinFlip/solution` in Chrome and demo it for the class.

* Slack out the following instructions and files to the class:

* **Instructions:**

  * Make a Coin Flipper game.

  * Follow the directions in the html file.

  * How the app works:

    * The user chooses Heads or Tails, and the computer randomly selects heads or tails and displays the outcome on the screen. The app then displays whether or not the user won or lost.
    * If heads, use: <http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg>
    * If tails, display: <http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg>

  * **BONUS**:
    * Put your JavaScript in its own file and link to it in the HTML.
    * Keep track of the number of Heads or Tails and display the results on the screen.
    * Add CSS styling.

* **File**: [coin-flip.html](../../../../01-Class-Content/05-timers/01-Activities/04-CoinFlip/Unsolved/coin-flip.html)

### 2. Everyone Do: Coin Flipper Review (10 mins)

* Open the code for the coin flipper solution `coin-flip-solution.html` & `coinFlipSolution.js`

* Call on students and work through the solution to the exercise.

### 3. Instructor Do: Recap (5 mins)

* Recap key concepts from the Coin Flipper exercise and answer any final questions.

### 4. Groups Do: This (10 mins)

* For this next exercise, make sure students are working in groups!

* Slack out the following instructions and files:

* **Instructions**:

  * Together with your group, open the supplied HTML file and answer all questions.

* **File**: `this.html` in `05-This`

### 5. Everyone Do: This Review (10 mins)

* Open the code to the 'This' exercise: `this-solution.html` in `05-This`.

* Choose a team of students to go over their solution to the exercise.

* Run each function to see if they are correct or not.

### 6. Instructor Do: This Recap (5 mins)

* Recap key concepts from the 'This' exercise and answer any last questions.

### 7. Instructor Do: Timeout (10 mins)

* Open `timeout.html` in `06-Timeout`.

* Introduce `setTimeout` and `clearTimeout` (we will get to `setInterval` after the break).

* Go through the code and explain what it's doing.

* Be sure to mention these are vanilla JavaScript methods, not jQuery!

### 8. Instructor Do: Context (5 mins)

* Open `context.html` in `07-Context`.

* Explain how `this` inside of functions executed by a `setTimeout` are scoped to the window!

* Don't dwell on this but mention it: the functions are run in a different `execution context`.

  * So for `setTimeout(person.sayHi, 50);`, inside the `sayHi` function, `this` is the window, it isn't the person object anymore.

  * To be able to access the person object in the `sayHi` function when passing it to `setTimeout`, you have to use the person object in `sayHi`.

* Don't talk about call or bind here - WE DO NOT WANT TO FREAK THE STUDENTS OUT!

### 9. Students Do: Simple Timer (10 mins)

* Slack out the following instructions and files:

* **Instructions**:

  * Make a page with a a simple timer that sends an alert and plays a sound after 15 seconds.
  * Have it send an alert when 5 seconds has passed, 10 seconds has passed and when the time is up.
  * You will use this to time the break!

* **File**: `simple-timer.html` in `08-SimpleTimer/skeleton`

- - -

### 10. BREAK (15 mins)

- - -

### 11. Instructor Do: Simple Timer Recap (5 mins)

* Open the solution to the Simple Timer activity in `08-SimpleTimer/solution`

* Recap the key concepts of the exercise and answer any remaining questions.

### 12. Students Do: Intervals (5 mins)

* Slack out `interval-unsolved.html` in `09-Interval/Unsolved` to the class.

* Have students think about what is happening in this file.

### 13. Instructor Do: Interval Recap (5 mins)

* Open the Interval activity file: `interval-solved.html` in `09-Interval/Solved`.

* Choose a student to go over what they thought was happening in the code.

* Answer any questions about anything we've covered so far.

### 14. Students Do: Stopwatch (20 mins)

* Open `stopwatch solution` in `10-Stopwatch` and demonstrate the stopwatch to the class.

* Leave it running while they work.

* Zip and slack out the following instructions and files to the class:

* Instructions:

  * Unzip the attached file.
  * Open `stopwatch.js` and follow the instructions in the file.
  * You will not not need to edit the HTML file we give you.
  * Use jQuery and the timing events you learned today to create a stopwatch with Start, Stop and Reset buttons.
  * **Bonus**: Add a lap timer.
  * **Bonus**: Use CSS to style the timer

* **Files**: `stopwatch skeleton` in `10-Stopwatch/stopwatch_skeleton`

### 15. Everyone Do: Stopwatch Review (15 mins)

* Open the solution code: `stopwatch-solution` in `10-Stopwatch/stopwatch_solution`.

* Go over the exercise, illustrating key concepts and answering any questions students may have.

* You do not need to show the CSS unless someone asks to see it. The focus is on the javascript.

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=EGhF4iJSnl0) for the activity.

### 16. Groups Do: Slideshow (20 mins)

* Open `slideshow_solution` in `11-Slideshow/slideshow_solution` and show the students what they will be making.

* Zip and slack the following instructions and files to the class:

* **Instructions**:

  * Unzip the attached file.
  * Create a slideshow using jQuery and JavaScript Timing Events.
  * Select a few images and make a slideshow.
  * Display the "loading.gif" image in between each picture for one second.
  * **Bonus**: Add CSS styling.

* **Files**: `slideshow_skeleton` in `11-Slideshow/slideshow_skeleton`

### 17. Everyone Do: Slideshow Recap (10 mins)

* Open the files in the `slideshow_solution` in `11-Slideshow/slideshow_solution` folder.

* Go over the exercise, illustrating key concepts and answering any questions students may have.

### 18. Instructor Do: Homework (5 mins)

* Present the homework - there are two options, a basic trivia game and a slightly more advanced one.

* The students have learned everything they need to complete the homework, and can complete it tonight.

* Play the two videos ([advanced-trivia-demo](https://youtu.be/xhmmiRmxQ8Q) and [basic-trivia-demo](https://youtu.be/fBIj8YsA9dk))

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=lo&sentiment=positive&lesson=05.02)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=lo&sentiment=negative&lesson=05.02)
