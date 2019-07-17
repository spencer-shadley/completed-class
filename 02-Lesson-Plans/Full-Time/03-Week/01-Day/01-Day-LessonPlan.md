## 3.1 Lesson Plan - JavaScript and jQuery Review & Intro to Timing Events (10:00 AM) <!--links--> &nbsp; [⬅️](../../02-Week/05-Day/05-Day-LessonPlan.md) &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)

### Slideshow

* This lesson's slides are available on Google Drive here: [03-1 JavaScript and jQuery Review](https://docs.google.com/presentation/d/1IaujFMuxXQ1GG3XV-S7qDnFn70_8FJ7tLMN9mNEvPqg/edit?usp=sharing)

* To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Add the slide PDF file to your class repository along with other necessary files.

* **Note:** Editing access is not available for this document. If you wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

- - -

### Pre-Class Office Hours

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0
```

* After 15 minutes, take 5 minutes to show the students two different solutions.

  * Emphasize that as developers, there will always be multiple ways to accomplish the same task. Some may be faster or require less memory or be easier to read, but ultimately it's not about right or wrong, it's about finding a way to accomplish the task at hand.

```js
var countVowels = function(str){
  var count = 0;
  var input = str.toLowerCase();
  for (var i = 0; i < input.length; i++){
    if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
      count++;
    }
  }
}
```

```js
var countVowels = function(str){
  var count = 0;
  var input = str.toLowerCase();
  var vowelArr = [“a”, “e”, “i”, “o”, “u”];
  for (var i = 0; i < input.length; i++){
    if(vowelArr.includes(input[i])){
      count++;
    }
  }
  return count;
}
```

### Overview

In this class, we will be providing students an opportunity to review old JavaScript activities to gain a stronger foothold in the fundamentals. We will briefly review JavaScript and jQuery concepts before learning about Timing Events.


`Summary: Review JavaScript and jQuery & Complete activities 04-08 in Unit 05`

##### Instructor Priorities

* Students should have confidence and mastery of concepts covered so far.
* Students should have the extended opportunity for supported coding.
* Students should revisit critical assignments, exercises, and homework covered in class so far.
* Students should complete the JavaScript Checkpoint.

##### Instructor Notes

* The first half of today's class is dedicated to review. At this point in the program, students likely feel weathered by the JavaScript immersion. Let them know this is their chance to get caught up!

* During today's activities, focus on pairing like-level students so they can review old material with one another. If possible, work with TAs to organize these groups before class begins. Pairing like-levels also helps as it allows you and the TAs concentrate on students who need the most significant help. Consider pulling these students out of class and working with them in another space if one is available. 

* Make sure to congratulate students today. They are only two weeks in and they have learned a ton. Now is a good opportunity to remind them that not long ago they came through the door knowing little to nothing about web development and today they can already build an entire working website! Pretty impressive.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3c0be955-68fd-43e3-a7a8-ec392346e29c)

- - -

### Class Objectives

* Students will ask conceptual questions regarding any of the subjects covered so far (HTML, CSS, Git, Github Pages, JavaScript, jQuery)
* Students will absorb a high-level recap of the most important subjects covered to date.
* Students will group code previous or new projects.
* Students will reinforce their knowledge of JavaScript & jQuery.
* Students will understand JavaScript Timing Events including `setTimeout`, `clearTimeout`, & `setInterval`.
* Students will complete the JavaScript Checkpoint

- - -

### 1. Instructor Do: Cover Day's Agenda (5 mins)

* Explain to the class that today will be focused on providing an opportunity for review and recalibration. The class will be divided into three sections.
  1. A few moments to answer lingering questions;
  2. A high-level overview of all the major topics covered; and
  3. Two hours of coding in small groups, either redoing select assignments or working on a new project.

### 2. Instructor Do: Collect Student Feedback (10 mins) (High)

* Using Poll Everywhere or a similar anonymous method have students provide open feedback regarding the general subjects or concepts they feel least comfortable with. Be sure to provide adequate time for all students to provide feedback

* Then, offer brief (VERY BRIEF) commentary on the subjects.

* Open the floor to specific questions tied to these subjects

### 3. Instructor Do: Organize Groups (5 mins)

* Divide the class into pre-defined groups based on personalities and general mastery of the subject so far. Be sure to pair strong students with strong students and weaker students with weaker ones. If possible, this should be done PRIOR to class if possible.

* Have students switch seats and join their defined groups

### 4. Instructor Do: Review (20 mins) (High)

* Using the slide deck ([03-1 JavaScript and jQuery Review](https://docs.google.com/presentation/d/1IaujFMuxXQ1GG3XV-S7qDnFn70_8FJ7tLMN9mNEvPqg/edit?usp=sharing)) provided as a guide, quickly list and explain (at a high-level) the key takeaways students should feel comfortable with at this point in the class. Encourage the class to take note of any topics that remain difficult and to write them down as you speak.

* Be sure to ask individual students questions from time to time to maintain engagement!

* After discussing each section, give the groups a moment to talk to one another and confirm that they understand the topics presented. If there are any issues, encourage them to raise the questions to one another &mdash; and if no member of the team can can answer, to then raise it to the class.

* Continue this way until all topics have been covered. Just aim to have at least 2 hours of class time left by the time this recap is complete.

### 5. Instructor Do: Provide Activity Guidelines (5 mins)

* Task the student groups with choosing one of four different group assignments to work on for the next part of class. Each group should decide which activity/ies to choose based on the following paradigm.

* Slack out the following instructions:

* **Instructions:**

  * As a group, choose to complete one of the following tasks. Use the information provided below as a guide.

    * Can you and your team comfortably build the Word Guess Game (HW 3) from scratch?

      * No? Then start with Word Guess.

    * Can you and your team conceptually explain how "Captain Planet The Game” works?

      * No? Then start by dissecting "Captain Planet the Game".

    * Can you and your team comfortably use jQuery to modify HTML based on clicks?

      * No? Then start with Lottery Generator.

    * Can you and your team comfortably create a grid-based design with Bootstrap?

      * No? Then start with the Bootstrap Portfolio assignment.

### 6. Students Do: Activities (100 mins) (Critical)

* Students begin coding. Be sure to encourage them to try coding from scratch if possible. TAs and Instructors should use this time to assist students where needed.

- - -

### 7. LUNCH BREAK (30 mins)

- - -

### 8. Students Do: Coin Flipper (15 mins)

* Students will be building an app that allows them to guess the outcome of a coin flip, and track their wins/losses.

* Without showing the the code, open [04-CoinFlip/Solved](../../../../01-Class-Content/05-timers/01-Activities/04-CoinFlip/Solved/coin-flip-solution.html) your web browser and demonstrate its functionality.

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

* **Folder**: [04-CoinFlip/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/04-CoinFlip/Unsolved)

### 9. Everyone Do: Coin Flipper Review (10 mins) (High)

* Walk through the solution to the previous activity, [04-CoinFlip/Solved](../../../../01-Class-Content/05-timers/01-Activities/04-CoinFlip/Solved/), in your editor.

* Call on students and quiz them about what different parts of the solution are doing.

### 10. Instructor Do: Recap (5 mins)

* Recap key concepts from the Coin Flipper exercise and answer any final questions.

### 11. Partners Do: This Activity (10 mins)

* For this next exercise, make sure students are working with a partner!

* Slack out the following instructions and files:

* **Instructions**:

  * Find a partner.
  * Together, open the supplied HTML file and answer all questions.

* **Folder**: [05-This/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/05-This/Unsolved)

### 12. Everyone Do: This Review (5 mins)

* Open the solution to the previous activity, [05-This/Solved](../../../../01-Class-Content/05-timers/01-Activities/05-This/Solved) in your editor.

* Choose a team/pair of students to go over their solution to the exercise.

* Run each function to see if they are correct or not.

### 13. Instructor Do: Timeout (10 mins) (High)

* Explain to the class that in programming, we sometimes want events to occur after a certain amount of time. Some examples include:

  * Digital clocks/timers

  * Exams that have a time limit to complete

  * Games that have give the user a certain amount of time to complete a task

* Open [06-Timeout/timeout.html](../../../../01-Class-Content/05-timers/01-Activities/06-Timeout/timeout.html) and demonstrate the application's functionality in your web browser.

  * When the page loads, an alert is automatically thrown one second later.

  * When the `Button Timeout Start` button is clicked, a different alert is thrown three seconds later.

  * The initial alert can be canceled if the `Window Alert Cancel` button is clicked during the one second window after page load.

  * The alert thrown by the `Button Timeout Start` button can be canceled if the `Button Timeout Cancel` button is clicked during the three second window.

* Open the code in your editor and go over `setTimeout` and `clearTimeout` (we will get to `setInterval` after the break). Be sure to point out the following:

  * `setTimeout` accepts two arguments:
    
    * A function to run.

    * The number of milliseconds to **wait before** running the function.
  
  * `setTimeout` returns a reference to the created timer that we can store this in a variable.

  * `clearTimeout` can be used to cancel a timer we have a reference to.

* Be sure to mention these are vanilla JavaScript methods, not jQuery!

* Take a moment to answer any additional questions.

### 14. Instructor Do: Context (5 mins)

* Open [07-Context/context.html](../../../../01-Class-Content/05-timers/01-Activities/07-Context/context.html). Demonstrate the code in your browser and then in the editor.

* Explain that the `this` keyword inside of a function executed by `setTimeout` refers to the window object.

* Don't dwell on this but mention it: the functions are run in a different `execution context`.

  * So for `setTimeout(person.sayHi, 50);`, inside the `sayHi` function, `this` is the window, it isn't the person object anymore.

  * To be able to access the person object in the `sayHi` function when passing it to `setTimeout`, you have to use the person object in `sayHi`.

* Don't talk about call or bind here - WE DO NOT WANT TO FREAK THE STUDENTS OUT!

### 15. Students Do: Simple Timer (10 mins) (Critical)

* Slack out the following instructions and files:

* **Instructions**:

  * Make a page with a a simple timer that sends an alert and plays a sound after 15 seconds.
  * Have it send an alert when 5 seconds has passed, 10 seconds has passed and when the time is up.
  * You will use this to time the break!

* **Folder**: [08-SimpleTimer/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/08-SimpleTimer/Unsolved)

### 16. Instructor Do: Simple Timer Recap (5 mins)

* Open the solution to the Simple Timer activity in [08-SimpleTimer/Solved](../../../../01-Class-Content/05-timers/01-Activities/08-SimpleTimer/Solved)

* Recap the key concepts of the exercise and answer any remaining questions.

### 17. TA's Do: Introduce Homework (2 mins)

* Present the homework - there are two options, a basic trivia game and a slightly more advanced one.

* The students have learned everything they need to complete the homework, and can complete it tonight.

* Play the two videos ([advanced-trivia-demo](https://youtu.be/xhmmiRmxQ8Q) and [basic-trivia-demo](https://youtu.be/fBIj8YsA9dk))

### 18. Instructor Do: Introduce Checkpoint - JavaScript (5 mins) (Critical) 

* Let your class know that they will now be taking a short multiple choice assessment to check their understanding of JavaScript

* DO NOT SKIP THIS INTRODUCTION. DO NOT JUST SEND OUT THE LINK WITHOUT CONTEXT

* Reassure the students that they need not be nervous about the Checkpoint:

  * "This will not affect your grade or graduation requirements."

  * "This is not like the tests and quizzes you might be used to from school or college. The purpose of these tests is not to motivate you to study or punish you for struggling."

  * "This is as much a test of me as an instructor and of the course content as it is of you. We are here to ensure your success, and this is one of the tools we use to make sure we are doing that effectively. This class moves _fast_, so if some or all of you misunderstand something important we as an instructional team need to find out as fast as possible so we can help."

  * "Long story short, this quiz can not hurt you. Only help you."

* Let students know that they should read carefully and focus on thinking about the right answer rather than using any test-taking skills they may have learned:

  * "There are no silly answers or obvious throwaway responses on this quiz, because those kinds of answers reduce the likelihood that we'll be able to figure out whether we've taught something effectively."

  * "Test taking strategies you may have learned for standardized tests _will not work_, so instead of focusing on eliminating wrong answers or looking for sneaky context cues, read the question and each of the possible choices carefully."

* Reassure students once again that the purpose of this is to help them, and remind them that the outcome does not impact their grade or graduation requirements. You should do this _every single time_ you give an Checkpoint.

* You or your TAs should now get the link specific to your class:

  * Navigate in your browser to: `https://www.switchboard.tech`

  * Select your class code (if it doesn't show up on its own)

    * If the class is a parallel class, a class that has two classes combined on a Saturday, and doing a checkpoint with two classes at once you will **need** to slack out two links.

    * One for your class and one for the other. 

  * Select the Checkpoint and copy the resulting link

### 19. Students Do: Take Checkpoint - JavaScript (10 mins) (Critical)

* Slack out the link to the Checkpoint

* Let your students know that once they select their name, it will take them to the Checkpoint

* Checkpoints must be completed in class, **not at home**, to ensure you will be able to effectively find and help struggling students 

* TAs should walk around the class to ensure students aren't looking up answers

* Keep in mind we do not use grades from assessments toward graduation requirements. However, students will be tempted to avoid feeling like they don't understand something.

* It's important for instructional teams to create an environment where it is safe to fail, but also where such failure is visible. You should not be worried about "cheating" on checkpoints, only making sure that students who need help aren't remaining invisible.

* Your SSM will have the results of the Checkpoint within an hour of its completion

### 20. End (0 mins)

### 21. TAs Do: Structured Office Hours - Review JavaScript (30 min)

* Navigate in your browser to: `https://github.com/coding-boot-camp/checkpoint-bank/blob/master/checkpoints/multiple-choice/03-JavaScript-MC/03-JavaScript-MC.md`

* There you will find the questions and answers to the Checkpoint given.

* Please take the entire office hours time to review the questions with the students.

* Suggestion Format:

  * TAs ask a question at a time to the class.

  * Let the students try to answer it.

    * If you see that a majority of the class has a misunderstanding with a question:

      * Take your time on this question!

    * If you see that a small number of students has a misunderstanding with a question:

      * Do your best to reinforce the misunderstanding but be cautious of your time.

      * Make note of the students that are still struggling with the question and schedule a 1:1 with the students.

  * If applicable, demo the answer.

* Take your time on these questions!

* This is a great time to reinforce concepts and misunderstandings!

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=03.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=03.01)
