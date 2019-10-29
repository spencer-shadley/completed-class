# 02.1 Lesson Plan - Joys of JavaScript (10:00 AM)

## Overview

Today's class is focused on providing students with the very basics of JavaScript. For many, this will be their first foray into JavaScript as a programming language.

## Instructor Notes

* `Summary: Complete Activities 1-13 in Unit 03`

* Welcome to Week 3! In this class you will be giving students their first primer on JavaScript as a programming language. Many of your students will have little clue what JavaScript is, let alone how to use it. Be prepared for the simplest bugs, from missing quotation marks to utter confusion in setting a variable. Today will be all about the fundamentals.

* Today's class also aims to cover a lot of ground very quickly. For perspective, today's class will cover the following: Variables, Conditionals, Console Logging / Alerts, and Arrays. The homework activity is also fairly challenging, and it will really require students to keep up. Try to move through the material as quickly as you can without sacrificing comprehension from the baseline student.

* In every case for today, pre-coded instructor demos are provided for you. However, because of the simplicity of today's class, feel free to code your own examples on the fly. Part of the reason we have pre-coded versions is for when we share the directory with students since it becomes easy to copy over into the in-class repo. Don't let that limit your imagination though! 

* After each activity, be sure to add the complete solution to the student repo so students can use them during the next activity.

* You may want to Slack a PDF of the slide deck out to students in advance as well. Your choice!

![1-SlackDownload](Images/1-SlackDownload.png)

### Algorithms

Starting with Unit 3, students are provided with common problems they will see in interviews. They can find these problems in each unit's folder. Recommend that students try to solve one or two before class during office hours. Help students with any questions they might have about these problems and work through the solutions.

## Class Objectives

* To gain a preliminary grasp of JavaScript definitions and of basic syntax.

* To utilize variables, logging, arrays, and if/else statements to create simple JavaScript applications.

## Slides

* [02.1 The Joys of JavaScript](https://docs.google.com/presentation/d/1ccabN1AZ3SmYtLSo7HeadSrvfRK-5ty_X8p4ovCXVlE/edit?usp=sharing)

## Time Tracker

* [2.1 Time Tracker](https://drive.google.com/open?id=1TXphd6IzAbm8pISaGQZOkbvyAL0D9LvCkC5DhKzwFeQ)

- - -

### 1. Instructor Do: How to Learn JavaScript (5 mins)

* Open the slide deck [2-1 The Joys of JavaScript](https://docs.google.com/presentation/d/1ccabN1AZ3SmYtLSo7HeadSrvfRK-5ty_X8p4ovCXVlE/edit?usp=sharing) and begin going through the slides.

* Take a moment to let students know the agenda for today.

* Students may be unnerved by the fact that they are learning JavaScript. Help them know how to learn it correctly.

* You can use the following verbiage as a guide to how to talk about each slide:
  * **Your Brain on JavaScript:** Learning JavaScript will require having a lot of "little pieces" of code in your mind floating around. The key is in knowing how these pieces fit together to build useful things.
  * **Take Notes:** Self-explanatory, but basically students should likely be taking a few notes here and there; primarily on your explanations of why some JavaScript piece matters and/or of how to use it.
  * **Keep Organized:** Many students around this time start to have files in literally every location possible. It gets incredibly confusing trying to help them when everything is so scattered. Let them know that a little folder organization can go a long way in creating easy-to-read applications.
  * **Overall Tips:** Just read these. Self-explanatory. Key point&mdash;encourage students to REDO coding exercises on their own. Many students just go home and re-flip through slides or read through code without actually trying to do it themselves. Hands on experience is a lot better than looking code over secondhand.

### 2. Partners Do: Code Dissection (5 mins)

* Let students know that a big part of JavaScript learning requires you to "learn on the fly".

* Then Slack out the following file and instructions to students:

  * **File**

    * `js-dissect.html` (01-CodeDissection)

  * **Instructions**

    * Download the file sent to you via Slack.

    * IMPORTANT: When downloading any code going forward, be sure to hit "Download". **If you copy and paste directly from Slack, your code will not work!**

    * Open the file in Chrome, and observe what happens.

    * With a partner, try to explain how the code connects to the events that happen on the page.

    * Note: We haven't covered JavaScript before, but a big part of being a developer is learning on the fly!

* **Instructor / TA Note:** Do not go over this activity after the time is done. Just move onto the next activity. Students will come back to this later after they've learned more.  

### 3. Instructor Do: Variables Slides + Demo (5 mins)

* Go through the preliminary slides on Variables. Wait for the "Instructor Demo" slide before live-coding.

* At this point students should just understand that variables can be strings, numbers, and booleans (leave out the bit about functions, objects, etc. for the time being since this could confuse them).

* When doing the demo, feel free to create your own example on the fly. Otherwise, there is an example inside `02-BasicVariablesDemo`.

* Make sure students know that strings require quotation marks but that numbers and booleans do not.

### 4. Students Do: Variable Activity (10 mins)

* Slack out the following files and instructions to students.

  * **Files**

    * `pizza-variables.html` in `03-PizzaVariables/Unsolved`

  * **Instructions**

    * Using the instructions in the file sent to you, fill in the missing JavaScript code to create variables.

    * When you are done, open the file in Chrome and check the output.

    * If you successfully completed the activity, you should see a series of pop-up windows with text inside.

    * Finally, look at the rest of the code and try to figure out why the text displayed the way it did.

### 5. Instructor Do: Review Variable Activity (5 mins)

* Spend a few moments reviewing the activity `03-PizzaVariables/Solved`. In discussing the solution, explain both the variable assignment and the way strings are combined in the alerts.

    ![3-Variable_1](Images/3-Variable_1.png)

    ![3-Variable_2](Images/3-Variable_2.png)

### 6. Instructor Demo: Console Log (5 mins)

* Proceed with the slides and the console log demo. You can either open the solution found in `04-ConsoleLogDemo` or create your own example to show what console log does.

* Be sure to point out how you can console.log either strings or variable values.

    ![4-ConsoleLog_1](Images/4-ConsoleLog_1.png)

* Also show students where in Google Inspector the line `console.log` outputs to.

    ![4-ConsoleLog_2](Images/4-ConsoleLog_2.png)

* Briefly explain the concept of a function as "code that does a thing and lives somewhere else."

  * Explain that `console.log` is a function that prints a message and that "lives" in the JavaScript engine.

  * Explain that we can often give functions "things to work with." In this case, we give `console.log` a _message_ to print.

  * Explain that later on, student will write their own functions, which they'll use the same way.

  * Refrain from a more detailed discussion of arguments, etc. This explanation is simply to provide context for entities such as `alert`, `console.log`, etc.

### 7. Instructor Do: Console Log Slides (5 mins)

* Start to go through the slides on console log.

* Make certain to show students how the `console.log` statement can be used to display text, variables, or a combination of the two.

### 8. Students Do: Console Log Activity (10 mins)

* Slack out the following files and instructions:

  * **Files**

    * `pizza-variables-2.html` in `05-PizzaConsole/Unsolved`

  * **Instructions**

    * Using the file sent to you as a guide, modify the code so that it uses `console.log` instead of alerts to display messages.

    * With a partner, discuss the difference between using `console.log` and `alert`.

### 9. Instructor Do: Review Console.log Activity (10 mins)

* Have students offer their answers to the assignment, and have them explain their changes.

* Also ask students why they might use one form of output versus another.

### 10. Instructor Demo: Alerts, Prompts, Confirms (5 mins)

* Use the file inside `06-PromptDemo`, and walk students through the code.

* Be sure to point out the differences between `confirm`, `alert`, and `prompt`.

* **Important:** Be sure to point out how `prompt` and `confirm` create data that can be stored in a variable directly.

  * Remind students that `alert`, `prompt`, and `confirm` are _functions_.

  * Explain that functions that "give you something back" are said to _return_ something.

  * Explain that `prompt` and `confirm` _return_ whatever the user enters in the text prompt.

      ![5-PromptDemo](Images/5-PromptDemo.png)

### 11. Instructor Do: Alerts, Prompts, Confirms Slides (5 mins)

* Go over the remaining slides on this section. Create engagement by having students remind you of the differences between the three functions.

### 12. Students Do: Alert Activity (15 min)

* At this point, Slack out the following files and instructions.

  * **Files**
    * `prompt-sushi.html` in `07-PromptSushi/Unsolved`

  * **Instructions**
    * Write JavaScript code that does the following:
      * Using a confirm, ask the user, "Do you like \_?" Store their response in a variable.
      * Using a prompt, ask the user, "What kind of \_ do you like?" Store their response in a variable.
      * Alert both variables to the screen.

### 13. Instructor Do: Review Alert Activity (5 mins)

* Go over the previous activity using `prompt-sushi.html` in `07-PromptSushi/Solved`.

### 14. Instructor Note: Document.write (5 min)

* We have saved all DOM-related tasks for the next unit, so don't mention `document.write` at this point. If students ask how to print information on the screen instead of in alerts, let them know that we'll be going over that soon (but not today!).

### 15. Instructor Demo: If/Else Statement (10 mins)

* Proceed with the slides to the demo of conditionals. Use the file inside `08-ConditionalDemo` as a starting point. Walk students through the fact that the confirm prompt is used to grab a boolean.

    ```js
      // Here we create our prompt and confirm variables which will store user input.
      var confirmSushi = confirm("Do you like sushi?");
      var confirmGingerTea = confirm("Do you like Ginger Tea?");
      var sushiType = prompt("What kind of sushi do you like?");

      // If the user likes sushi (confirmSushi === true), we run the following block of code.
      if (confirmSushi) {
        alert("You like " + sushiType + "!");
      }
      // If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.
      else if (confirmGingerTea) {
        alert("You like ginger tea!!");
      }
      // If neither of the previous condition were true, we run the following block of code.
      else {
        alert("You don't like sushi or ginger tea.");
      }
    ```

### 16. Instructor Slides: If/Else Statement (5 mins)

* Proceed through the instructor slides on conditionals.

### 17. Partners Do: If/Else Activity #1 (10 mins)

* Slack out the instructions below.

  * **Files**

    * None

  * **Instructions**

    * Create a website (from scratch) that asks users if they eat steak.

    * If they respond with "yes", alert the following to the page: "Here’s a Steak Sandwich!"

    * If they respond with "no", alert the following to the page: "Here’s a Tofu Stir-Fry!"

    * Bonus: Ask what the user’s birth year is. If they are under 21, alert the following: "No Sake for you!"

### 18. Instructor Do: Review If/Else Activity #1 (10 mins)

* Review the solution found in `09-ConditionalActivity`. Point out the uses of conditionals. For the bonus, run the program with various ages, and show students how each elicits a different output.

    ![7-Sake](Images/7-Sake.png)

* Slack out the video review for this activity which can be found [here](https://www.youtube.com/watch?v=rlhhRVO5EOg).

### 19. Everyone Do: If/Else Activity #2 (10 mins)

* Show the following file on screen: `conditional-demo-2.html` in `10-ConditionalActivity2`.

* Then, as a class, go through `if` statements and try to predict which of the alerts will get triggered.

* Then run the program to see if your expectation matched how it functioned.

    ![8-Conditionals](Images/8-Conditionals.png)

- - -

### 20. BREAK (30 mins)

* Check in with TAs regarding time.

- - -

### 21. Instructor Do: Arrays Slides (5 mins)

* Run through the Array example in the slides. Describe arrays as being like "lists" or "collections" of variables. Each variable has its own index ID (sort of like the "pen" number for our Zoo example).

* We can retrieve any value in the array by referencing its index.

* Indexes start at 0.

### 22. Instructor Do: Array Demo (5 mins)

* Open the file `arrays-demo.html` in `11-ArraysDemo`. Show students how this example matches the one in the slides.

* Point out how the index system works (i.e. starts at 0 and ends one before the length).

### 23. Everyone Do: Class Code Dissection (10 mins)

* Slack out the following file and instructions to students.

  * **File:**

    * `arrays-activity.html` in `12-ArraysActivity/Unsolved`

  * **Instructions:**

    * With a partner, take a few moments to look over the following code.

    * Above each `console.log()` write a comment "predicting" what you think the output will be.

    * HINT: Comments are the grayed lines that begin with `//`. These lines are ignored by JavaScript, and they allow you to explain your code. Commenting your code is an extremely useful habit to get into as it allows other developers to more easily read your code. It will also help you better understand your own applications when you look back at them.

* **Instructor / TAs:** Review with the class when complete.

### 24. Instructor Do: Questions (5 mins)

* If time remains and there isn't sufficient time for the challenges, spend the remainder of the class answering questions.

* If no time remains for the challenges, then encourage students to work on them at home.

### 25. Everyone Do: Basics Recap (10 mins)

* Spend a few moments helping students to remember what was covered during the last class. Try to move swiftly through these slides. Ideally this should take you less than 10 minutes.

* Always call on individual students as you go through the slides.

### 26. Everyone Do: Basic JS Dissection (5 mins)

* Slack out the following file from yesterday and have students re-examine it.

* Give them a few minutes to examine it, and immediately have a few students explain it to the class.

  * **File**

    * `js-dissect-unsolved.html`in `14-JSDissect/Unsolved/`

  * **Instructions**

    * Take a few minutes to quickly look through the attached file. With a partner, discuss what you expect to happen when the code is run.

    * Prepare to share your thoughts with the class.

* After you go over the activity, if there are still questions, Slack out the fully commented file `js-dissect-solved.html` in `14-JSDissect/Solved`.

### 27. Everyone Do: Array Logging (5 mins)

* Slack out the file and the instructions below.

* Read the instructions aloud, and call on students to help you live-code the activity.

  * **File**

    * `array-logs-unsolved.html` in `15-CoolPeopleArray/Unsolved`

  * **Instructions**

    * Follow the instructions provided in the file to `console.log` each of the names in the `coolPeople` variable.

    * Hint: You should be repeating the same line 6 times.

* Slack out `array-logs-solved.html` in `15-CoolPeopleArray/Solved`	 when finished.

### 28. Everyone Do: Array Setting (10 mins)

* Slack out the file and the instructions below.

* Read the instructions aloud, and call on students to help you live-code the activity.

  * **File**

    * `array-setting-unsolved.html` in `16-ArraySetting/Unsolved`

  * **Instructions**

    * Follow the instructions in the file provided to convert each item in the array to lower case.

    * Make sure to only add in lines of code where instructed.

    * Hint: You will need to use the `.toLowerCase()` method. Research if you don’t remember how to use it.

    * Be prepared to share when time is up.

* Slack out [`array-setting-solved.html`in `16-ArraySetting/Solved` when finished.

### 29. Instructor Do: For Loops (10 mins)

* Go through the slides introducing the concept of `for` loops. Re-use the example of the Zoo Array as shown on the slides.

### 30. Students Do: For Loop Dissection (5 mins)

* Slack out the file and the instructions below.

  * **File**

    * `my-first-loop.html` in `17-MyFirstLoop/`

  * **Instructions**

    * With a partner, spend a few moments trying to dissect the code sent to you.

    * Try to explain to one another what is happening with each line of code.

    * Feel free to do research if you are stumped. As a hint, look into the phrase “for loop.”

### 31. Instructor Do: For Loops Cont. (10 mins)

* Continue through the slides and demonstrate how the previous example worked.

* Point out that the iteration index, `i`, continually increments to it until it reaches the value `array.length - 1`.

  * Point out how the selected vegetable changes on each loop iteration.

### 32. Students Do: For Loop Zoo (15 mins)

* Slack out the file and the instructions below.

  * **File**

    * `zoo-loop-unsolved.html` in `18-ZooLoop/Unsolved`

  * **Instructions**

    * Use `for` loops  to rewrite the file sent to you via Slack.

    * If you need help, use the code from the previous example as a guide.

    * Once you think your code is functioning properly, share it with the person sitting next to you.  

### 33. Instructor Do: Review Activity (5 mins)

* Review `zoo-loop-solved.html` in `18-ZooLoop/Solved`.

    ![Images/5-ZooLoop.png](Images/5-ZooLoop.png)

* Then Slack the solution out to students.

* Slack out the [video review for this activity](https://www.youtube.com/watch?v=zJO9g7S2_Xo) as well.

### 34. END (0 mins)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
