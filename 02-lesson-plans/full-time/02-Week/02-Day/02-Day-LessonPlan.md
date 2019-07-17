## 2.2 Lesson Plan - Jumping for JavaScript (10:00 AM) <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

### Slideshow

* This lesson's slides are available on Google Drive here: [02-2 Jumping for JavaScript](https://docs.google.com/presentation/d/1H8ZjXAP9jCK5b7cS_90eWyCnqNT64zuBeWIgTuThOVg/edit?usp=sharing)

* To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Add the slide PDF file to your class repository along with other necessary files.

* **Note:** Editing access is not available for this document. If you wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

- - -

### Pre-class Drills

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
 Explain the box model, its 4 components, and related CSS properties.

```
 
* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students to share their answers.

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

* Provide your own answer or the one below:

> "The term box model is way of referencing the space that an element takes up on a page. It consists of margin (the space between the element and other elements), border, padding (the space between the content and border), and content."

Associated CSS properties include:

width
height
padding
border
margin

### Overview

Today's class is focused on re-introducing students to the concept of `for` loops and of how they can be used in combination with arrays, if/else statements, and other common programming tools to create a Rock-Paper-Scissors game. We will be introducing students to the concept of JavaScript Functions.

`Summary: Complete Activities 19-27 in Unit 03`

##### Instructor Priorities

* Students should complete the `23-RPS-Coded` activity.
* Students should understand what a function is and why it is useful (to DRY up code).
* Students should complete the HTML/CSS/Git Checkpoint.

##### Instructor Notes

* In today's class, you will be recapping the concept of `for` loops, the concept of combining arrays, conditionals, and user inputs to create more sophisticated JavaScript applications. Much of what students have learned to date will culminate in the last activity of the day where they will work together to build a rock-paper-scissors game.

* Today's lesson plan is packed to the brim with activities. Realistically assess your usual pace; if you are an instructor who tends to fall behind, skip activities which say "TIME PERMITTING" on the slides. If you tend to speak and present at a fast pace, take the time to complete as many of these exercises as you like. Alternatively, you can always just show students the solutions to these activities in live demos, and then Slack them the answers. Just BE SURE to leave around 1 hour of class time for students to work on the rock-paper-scissors activity. This activity is extremely important, and it's a close match to their homework assignment.

* Students should be given a substantial amount of time to complete the rock-paper-scissors activity. They will not have been given everything they need to complete the activity. The idea is for students to become more comfortable with the idea of working without knowing _everything_. Reveal bits of the solution using the code in the `23-RPS-Coded` directory while students are working. Throughout class, show these bits of the solution on the projector, and try to help guide students through the problem.

* Have your TAs reference [02-Day-TimeTracker](02-Day-TimeTracker.xlsx) to help keep track of time during class. Your instructor NEEDS to leave enough time for students to complete the rock-paper-scissors game.

* **Note**: Even if you don't cover an activity in class, still include it in the list of activities you share into your local repo. Students will be able to look back at these activities on their own time.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0441f776-86a3-4379-8733-84c357e64172)

- - -

### Class Objectives

* To use `for` loops, arrays, and conditional logic to create a rock-paper-scissors game.
* To complete the HTML/CSS/Git Checkpoint

- - -

### 1. Instructor Do: Welcome Students (1 mins)

* Welcome students. Then open the slide deck [02-2 Jumping for JavaScript](https://docs.google.com/presentation/d/1H8ZjXAP9jCK5b7cS_90eWyCnqNT64zuBeWIgTuThOVg/edit?usp=sharing).

### 2. Instructor Do: Today's Class (1 mins)

* Introduce students to the overall objectives of today's class.

### 3. Everyone Do: Basics Recap (10 mins)

* Spend a few moments helping students to remember what was covered during the last class. Try to move swiftly through these slides. Ideally, this should take you less than 10 minutes.

* Always call on individual students as you go through the slides.

* **Important: Once you reach the "PAUSE" slide, close the slide deck and go through the next few activities and demonstrations without it.**

  * We'll re-open and continue going through slides after lunch.

### 4. Students Do: Another Loop (5 mins)

* Slack out the following instructions.

  * **Instructions**

    * Starting from scratch, create a `for` loop that console logs the following lines:
      ```
      I am 0
      I am 1
      I am 2
      I am 3
      I am 4
      ```
    * Don't use an array!

### 5. Instructor Do: Review Activity (5 mins)

* Review [another-loop-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/19-AnotherLoop/Solved/another-loop-solved.html) in `19-AnotherLoop/Solution`.

  * Point out that in this case, the iterator is not an array length but an integer.

  * Point out that the length is **one less than** the final number desired.

      ![Images/6-AnotherLoop.png](Images/6-AnotherLoop.png)

* Then Slack out `another-loop-solved.html`

### 6. Partners Do: Loop with Conditions (Optional) (10 mins)

* **Instructions**

  * Starting from scratch, write code that loops through the following array and that logs the name of each animal on the farm to the console:

    ```
    var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
    ```

  * Then check if the first letter in the animal's name begins with a "c" or "o." If it does, create an alert saying, "Starts with 'c' or 'o'!"

  * **Hint**: You can access the first character of a string as if it were the first element of an array.

### 7. Instructor Do: Review Activity (5 mins)

* Review [hard-loop.html](../../../../01-Class-Content/03-javascript/01-Activities/20-HardLoop/Solved/hard-loop.html) in `20-HardLoop/Solution`.

    ![Images/7-HardLoop.png](Images/7-HardLoop.png)

### 8. Students Do: Random Number Loop (7 mins) (Critical)

* Slack out the following file and instructions to students.

  * **File**:

    * `random-numbers-unsolved.html` in `21-RandomNumbers/Unsolved`

  * **Instructions**:

    * Research how to improve on `Math.random()` to generate a random whole number between 1 and 10 instead of a random decimal number.

* Before they get started on the activity, briefly explain that we're using a built-in JavaScript feature called `Math.random()` to print 10 random numbers, but the numbers are all decimals. Prompt students to do some Googling to change this to print 10 random _whole_ numbers. It shouldn't take long for them to find the answer.

### 9. Instructor Do: Review Random Numbers (3 mins) (Critical)

* Have a student share what they found. If you're running short on time, or no one has an answer, open the solution at [random-numbers-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/21-RandomNumbers/Solved/random-numbers-solved.html) in `21-RandomNumbers/Solution`

* Point out that we added a few more things around the random function: `Math.floor(Math.random() * 10) + 1`

* If you have time, explain that multiplying `Math.random()` by 10 will now give us a random number between 0 and 9.999. We're still getting a decimal, though, so we use `Math.floor()` to round down. But now we're only getting a random number between 0 and 9, so we'll always add 1 to bump it up to 1-10.

* If time is short, simply state that this is a common solution when needing random whole numbers, and the more students see and use this syntax, the more it will make sense to them.

### 10. Instructor Do: Demo RPS (2 mins)

* Take a couple of minutes to demonstrate the final application `23-RPS-Coded`.

* Be brief. Show students what they'll be building, but don't fiddle with the app for more than a minute.

* Explain that the core logic of the application is the decision as to which player wins, based on whether they've played rock, paper, or scissors.

  * Remind students that they'll need to use conditional statements and the `&&`/`||` operators to make things work.

  * Remind students that it's okay if they have to write a long chain of `if`/`else if`/`else` statements. If they find themselves doing this, they're on the right track.

  * Emphasize that the computer _randomly_ chooses each time.

* Take an extra few minutes here if necessary to make sure everyone understands the rules of Rock, Paper, Scissors (it's not uncommon for a few students to have never played as it's not universally popular around the world.)

### 11. Students Do: Pseudocode RPS (3 mins)

* Once they've played a few rounds, have them pseudocode a solution that lays out the steps involved in playing rock-paper-scissors against a computer.

* Slack out the following instructions.

  * **Instructions**

    * With a partner, spend a few moments outlining all the steps and conditions that go into a single game of rock paper scissors.

    * Try to break it down into steps that you could code out.

    * Think of basic elements like loops, if-else statements, arrays, alerts, etc.

    * Be prepared to share your outlined approach.

* **Instructor Note:** When time is up, show [pseudocode-rps.md](../../../../01-Class-Content/03-javascript/01-Activities/22-PseudoCode/Solved/pseudocode-rps.md) in `22-PseudoCode/Solution`.

* Encourage students to use this pseudocode as a starting point or as a guide with which to finish their own sketch of the application.

### 12. Partners Do: Coding out RPS (60 mins) (Critical)

* Slack out the following instructions to students.

  * **Instructions**:

    * In groups of 4, begin the process of coding out the rock-paper-scissors game.

    * Have users play the game 10 times, then show them their total scores.

    * Do as much as you can on your own, but don't be afraid to ask for help if you feel your team is struggling.

    * **Note**: Don’t worry. We know this is a very challenging assignment. We also know that you won’t know where to start. In fact, we haven’t shown you EVERYTHING you need yet, but that’s okay. Part of being a developer is figuring things out on your own through trial and error.

### 13. Instructor Do: Review RPS (10 mins) (Critical)

* Open [rps-6.html](../../../../01-Class-Content/03-javascript/01-Activities/23-RPS-Coded/Solved/rps-6.html) in `23-RPS-Coded/Solved`, and walk students through the solution. Use the comments in the solution to help guide the conversation.

    ```js
      // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
      var computerChoices = ["r", "p", "s"];

      // Creating variables to hold the number of wins, losses, and ties. They start at 0.
      var wins = 0;
      var losses = 0;
      var ties = 0;

      for (var i = 0; i < 10; i++) {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Collect the user's response and convert to lower case.
        var userGuess = prompt("Enter r, p, or s to play!");
        userGuess = userGuess.toLowerCase();

        // Only run game logic if user chose a valid option
        if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

          alert("The computer chose " + computerGuess);

          // Win/lose conditions:
          if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") || 
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
            alert("You've won " + wins + " time(s)!");
          } else if (userGuess === computerGuess) {
            ties++;
            alert("You've tied " + ties + " time(s).");
          } else {
            losses++;
            alert("You've lost " + losses + " time(s).");
          }
        }
      }

      // When the game is over, alert the totals to the user. We can use the \n character to make a line break.
      alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses);
    ```

- - -

### 14. LUNCH BREAK (30 mins)

- - -

### 15. Partners Do: Array Building (10 mins)

* In this activity, students just fill in the empty comments for each line of code. This is intended to passively show them how to use `for` loops to populate arrays.

* Slack out the following files and instructions:

  * **File**

    * `loop-tv-unsolved.html` in `25-LoopTV/Unsolved`

  * **Instructions**

    * Run the program sent to you via Slack.

    * Then with a partner, fill in the missing comments for each line of code.

    * Make sure both of you can fully explain what each line means.

    * Be prepared to share with the class!

### 16. Instructor Do: Review Activity (10 mins)

* Go over the solution. First, have them try to explain each line of code to you as a class.

* Open [loop-tv-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/25-LoopTV/Solved/loop-tv-solved.html) in `25-LoopTV/Solved`, and walk them through the solution.

* Slack out the file when done.

    ![Images/1-LoopTV.png](Images/1-LoopTV.png)

### 17. Instructor Do: Logging - No Functions (5 mins)

* Open [superhero-logging-solved-no-functions.html](../../../../01-Class-Content/03-javascript/01-Activities/26-SuperheroLogging/superhero-logging-solved-no-functions.html) in `26-SuperheroLogging` in Chrome and in your editor.

* Walk students through the basics of how this application works. In essence, the application has a series of repeated `for` loops which print out the contents of each of the 6 arrays.

* The key point to emphasize to students is that this code is _extremely_ repetitive and is kind of bulky because of it. This code is intended to offer them perspective on why functions are useful.

* Slack out the file when done with your explanation.

### 18. Instructor Do: Logging - With Functions (10 mins)

* Open [superhero-logging-solved-with-functions.html](../../../../01-Class-Content/03-javascript/01-Activities/26-SuperheroLogging/superhero-logging-solved-with-functions.html) in `26-SuperheroLogging` in Chrome and in your editor.

* Walk students through this solution as well. Point out how this application greatly simplifies the previous activity by reducing the number of `for` loops to just one.

    ![Images/2-SuperHeroLogging.png](Images/2-SuperHeroLogging.png)

* Be sure to point out how the function is composed of two parts.

  * The function **definition**.

    * Pay special attention to the notion of **arguments**.

    * Explain how arguments bind on function calls and demonstrate that argument names are only visible inside of the function body.

  * The function **call** (or execution).

* Ask if there are any questions, and then proceed to Slack out the file so students can use it as an example for the next activity.

### 19. Partners Do: My First Functions (20 mins) (Critical)

* This next exercise requires students to build simple functions for performing mathematical and string operations.

* Slack out the following file and instructions.

  * **File**

    * `my-first-functions-unsolved.html` in `27-MyFirstFunctions/Unsolved`

  * **Instructions**

    * Working in pairs and using the starter file sent to you via Slack, fill in the missing functions and function calls.

    * Note: Try to finish all four functions if you can, but don’t be distressed if you only get one or two. The important thing is that you get at least one function fully done.

    * Hint: Look back to the previous example if you need help.

### 20. Instructor Do: Review Activity (15 mins)

* Review [my-first-functions-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/27-MyFirstFunctions/Solved/my-first-functions-solved.html) in `27-MyFirstFunctions/Solved`, pointing out that each of the functions takes on a similar structure.

  * Emphasize that each function requires the **definition** and **call** (execution).

    * Explain that the _things_ we _give_ the function to work on are called **arguments**.

  * Finally, point out that functions can _hand back_ values with `return` statements.

    * Change the implementations of `adder` and `multiplier` to `return` their results rather than log them.

    * Demonstrate that we can store these `return` values in a `var`, just as we can store the `return` values of functions like `prompt` and `confirm`.


* Oftentimes you will find that students forget to call functions after defining them or that they mistakenly assume the execution has the definition logic. Encourage them to cement these two parts as they will be using functions repeatedly as developers.

    ![Images/3-MyFirstFunctions_1.png](Images/3-MyFirstFunctions_1.png)

    ![Images/3-MyFirstFunctions_2.png](Images/3-MyFirstFunctions_2.png)

### 21. Group Do: Homework (40 mins)

* Use the remaining time to complete this unit's homework assignment.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=02.02)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=02.02)
