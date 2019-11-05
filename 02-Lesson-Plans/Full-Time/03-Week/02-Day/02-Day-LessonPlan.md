# 03.2 Lesson Plan - jQuery Jubilee (10:00 AM) <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

## Overview

In this class, we will further students' understanding of DOM Manipulation using jQuery. Towards the end of class, we will also introduce them to the concept of lexical scope.

`Summary: Complete activities 10-15 in Unit 05`

## Instructor Notes

* Today's class is focused on providing students with additional exposure to jQuery for DOM manipulation. As an instructor, your primary focus is to ensure students understand the `10-CaptainPlanetGame` and the `11-FridgeGame`. If you are able to cover lexical scope in depth, consider that a significant bonus. Scope is important, but don't leave people in the dust when it comes to DOM manipulation.

* Also, as a heads-up, next week there will be an entire class allotted for reviewing JavaScript. So if you're students seem winded -- give them a heads-up as well.

## Learning Objectives

* To use jQuery DOM manipulation to create simple games.

* To gain an initial understanding of lexical scope in JavaScript.

## Slides

[3.2 jQuery Jubilee](https://docs.google.com/presentation/d/1OLol2xQemLl4uhvtKg7J3qx6hL4v59UTT9uRxlvfHNs/edit?usp=sharing)

## Time Tracker

[3.2 Time Tracker](https://drive.google.com/open?id=1z5r_tPe7Vpszs15neF8i6FJhUR5b70LT)

- - -

### 1. Students Do: Fridge Game (30 min)

* Open the solution file `11-FridgeGame` in `11-FridgeGame/Solved`, and show students how the application works. In short, the application allows users to click on letters from a menu and have those letters appear on the fridge.

* Then, slack out the below folder and instructions.

* **Folder:**

  * `Unsolved` in `11-FridgeGame/Unsolved`

* **Instructions:**

  * Working in groups of 3, complete the code for the fridge activity such that:

    1. JavaScript dynamically generates buttons for each of the letters on the screen.

    2. Clicking any of the buttons leads the SAME letter to be displayed on the screen.

    3. Hitting the clear button erases all of the letters from the fridge.

  * Note: This is a challenging exercise. You may want one person to type, while the other two watch over to catch bugs and/or research necessary snippets.

### 2. Instructor Do: Review Fridge Game (15 min)

* Spend the time necessary to ensure that the majority of students have a conceptual understanding of how the Fridge Game's code works. In explaining the solution, point out the following:

  * The creation of an array that holds all of the letters;

  * The for loop used to take letters from the array, associate each with a data-attribute and text, and then append them onto the page. Students will be confused about the concepts of `.addClass`, `.attr`, and `.text`. Spend the time necessary to explain each.

    ![image-2](Images/2-fridge-1.png)

  * The on-click event needed to capture button clicks. Be sure to point out how we use the data-attribute (via the `.attr` method) to know which letter was clicked. This is a **KEY POINT**.

    ![image-3](Images/2-fridge-2.png)

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=gC529k3KzmE) for the activity.

### 3. Instructor Do: Intro Lexical Scope (10 min)

* Proceed to the [Lexical Scope slide deck](https://docs.google.com/presentation/d/1OLol2xQemLl4uhvtKg7J3qx6hL4v59UTT9uRxlvfHNs/edit?usp=sharing). Warn students that this section is pretty heavy on theory.

* Proceed with basic definitions of scope, using analogies to boxes or other simple concepts when possible. Mention the concept of nested functions -- before moving to the first code dissection. (Students will be dissecting the code example shown in the slides).

### 4. Students Do: Lexical Scope 1 (10 min)

* File(s): `13-ScopeOne/Unsolved/index.html`

* Instructions

  * Open `Unsolved/index.html` in a browser and then open the console.

  * With your neighbor, compare the results in the console to the JavaScript in `index.html` and answer the questions in the comments.

  * **HINT**: Read the [MDN docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### 5. Instructor Do: Review Lexical Scope 1 (5 min)

* Open `13-ScopeOne/Unsolved/index.html` and ask students to answer the questions posed in the comments. The key concept to address is *closures*. Explain the following points:

  * When the return value of `outside()` is assigned to `insideOut`, a closure is created.

  * A closure is an object that contains both a returned function and the environment in which that function was created.

  * The environment consists of any local variables that were available to that function when and where it was declared.

  * When we call `insideOut()`, it returns the values stored in `x` and `y` even though those were declared outside `inside()`.

* If students have further questions, refer them to the [MDN docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).  

### 6. Students Do: Lexical Scope 2 (5 min)

* Proceed with the next activity.

* **File:**

  * `lexical-scope-2-unsolved.html` in `14-ScopeTwo`

* **Instructions:**

* Take a few moments to dissect the code just sent to you.

* Try to predict what will be printed in each of the examples.

* Be prepared to share!

* Note: Pay attention to the unusual use of the keyword: ‘this”

### 7. Instructor Do: Review Lexical Scope 2 (5 min)

* Proceed with the review. This example may have been more challenging to students, as we introduced the concept of `this` without explanation.

* The key takeaway here is that using the keyword `this` will only print content related to the object directly above it, **not** from the grandparent.

  ![image-5](Images/3-scope-2.png)

### 8. Students Do: Lexical Scope 3 (10 min)

* Proceed with the next activity.

* **Files:**

  * `lexical-scope-3-unsolved.html` in `15-ScopeThree/Unsolved`

* **Instructions:**

* Take a few moments to dissect the code just sent to you.

* Try to predict what will be printed in each of the examples.

* Be prepared to share!

* Note: Pay attention to the unusual use of the keyword: ‘this”

### 9. Instructor Do: Review Lexical Scope 3 (5 min)

* Try to have students explain the solutions to the last activity back to you.

* If no student can, try to explain it yourself using the solution provided. It's okay if you stumble as you explain -- that shows students that this stuff isn't obvious, and that you can be a great developer, even if these nested functions confuse you.

* Remind students that these are not easy activities. The key is simply for them to become familiar with the fact that JavaScript's handling of parent and nested functions isn't always intuitive, and that errors can arise if you aren't careful.

* Make sure they realize that studying these examples **is not** overly necessary.

### 10. Everyone Do: Brain Teaser (15 min)

* If you have additional time available in class, proceed with this activity [16-ColorCorrector](../../../../01-Class-Content/05-Third-Party-APIs/01-Activities/16-ColorCorrector).

* It's challenging, and will likely take over 40 minutes to complete.  It is not necessary that students finish it.  At best, they may be able to get *started* in class, but will likely need to spend additional time at home if they are interested in completing it.

* Play it by ear if you'd like to walk through the solution.

- - -

### 11. BREAK (30 min)

- - -


### 12. Instructor Do: Motivation + Pulse Check (10 mins) (High)

* Then, get a gauge of students current understanding by doing a Fist to Five.

  * Students will raise their hands and show either a fist (don't understand at all) or five fingers (fully understand).

* Then, take a few moments to either respond to the pulse-check -- or simply giving your students a pep talk. It may be a good time to offer students perspective on how quickly they are progressing or the fact that as first-time developers -- they don't need to know "everything". Be creative here. But don't skip this pep talk. Many of your students are likely still feeling pretty defeated because of JavaScript.

* **Important Note:** This would also be a good time to let students know that an entire class day next week will be devoted to reviewing old JavaScript activities thoroughly.

* Let students know that the first half of the class will be a series of activities that build on their working knowledge of JavaScript scope. The second half (the more important one) will be focused on building a calculator using jQuery.

### 13. Partners Do: Scope Quiz (10 mins)

* The first activity is intended to point out a common error students make in working with variables. Often, during the first few weeks of class, students instantiate multiple instances of the same variable. This creates unexpected behaviors as JavaScript handles each variable declaration as its own "local instance".

* Slack out the following file and instructions:

* **File:**

  * `17-ScopeQuiz` in `17-ScopeQuiz/Unsolved`

* **Instructions:**

  * Spend a few moments studying the codefile with the person sitting next to you.

  * Then run the program in the browser.

  * Once you run the program, you'll find that Code Block 1 leads to different alerts than Code Block 2.

  * Ask your partner which Code Block is behaving the way you would expect.

  * Then work with your partner to try and identify the specific difference that is causing the issue with the faulty block.

  * Once you spot the issue, try to explain to your partner why JavaScript is handling these Code Blocks differently.

### 14. Instructor Do: Review Scope Quiz (5 mins)

* After giving students a few moments to dissect the code, point out the issue at hand. Specifically, Code Block 2 re-declares the `myVar2` variable inside of the function `a2`.

* This creates an issue where JavaScript creates a "local instance" of the variable `myVar2`. This local instance is only observable by the function `a2`. This means the function `b2` does not see the changes being made to the variable. Instead, `b2` refers back to the first declaration of `myVar2` and still thinks the value is equal to 1.

* Let students know that these scope issues are common sources of bugs for new developers.

### 15. Partners Do: This Example (10 mins) (High)

* Then proceed to the next example. Slack out the following file and example

* **File:**

  * `18-ThisExample` in `18-ThisExample`

* **Instructions:**

  * Using the comments in the guide answer each of the questions asked in the file.

  * Focus your attention on trying to wrap your mind around the concept of "this" and the unique role it can play in code.

  * Then try to explain to your partner how "this" works, focus on the first three examples.

### 16. Instructor Do: Review This Example (10 mins) (low)

* Go over the solution to this example by explaining the answers to each of the questions `this-solved.html`.

* Don't worry about the bonuses. These may confuse the bulk of your students. The key thing to explain is that the keyword `this` refers to the object it falls inside of. Most of the time, `this` is a good way to be self-referencing. (You can leave it at that. Your more advanced students will dig deeper, but don't overwhelm your average student).

### 17. Students Do: Cobwebs (10 mins) (low)

* Proceed with the next example.

* This example, simply asks students to become more familiar with deeply nested JavaScript Objects, which they will be immersed in during Week 6.

* For some of your students, this will be an enlightening exercise. For others, this will be very basic.

* For the students in need of an extra challenge, a very difficult bonus is included. The solution is included; students will likely need to continue working on this bonus for days after class.

* Slack out the following file and instructions.

* **File:**

  * `cobweb-starter.html` in `19-Cobweb`

* **Instructions:**

* Create the missing the code such that you can retrieve the requested item from the `theCobWeb` object.

* Note: This exercise is actually very relevant to work as a web developer, as data is often relayed across websites in the form of deeply nested JavaScript objects like this one.

* Bonus: If you finish early, begin pondering the bonus item. This is a **very** challenging exercise. It's impossible to complete in the allotted time. If you're feeling valiant - complete it outside of class and come back to instructors/TAs to go over it. This will arm you for difficult interview questions in the future.

### 18. Instructor Do: Review Cobwebs (10 mins)

* Go over the solution. In this case, feel encouraged to have students come up to the front and type out the code themselves.

* The solution involves referencing each parent object.

* Don't go over the bonus! It's too much. Do it after class during office hours.

### 19. Instructor Do: Intro Calculator + Group Formation (10 mins) (High)

* At this point, proceed to form groups for the calculator activity.

* In this case, have students form groups of 3-4 of their own choosing, but ensure that each group includes at least one member from the other section.

* Once students are in their groups, open the file: `jQueryCalculator.html` in the browser. Show students how the application works by pressing various buttons and computing the results.

* Point out that this is a challenging exercise that will require the entire group to work together.

* Encourage students to work in pairs

* Once all students are situated, slack out the following file and instructions.

* **File:**
  * `jquery-calculator.html` in `20-jQueryCalculator/Unsolved`

* **Instructions:**
  * Create the JavaScript logic necessary to add functionality to the jQuery Calculator.

  * Your calculator should be able to handle basic mathematical operations like addition, subtraction, multiplication, etc.

  * You should be making use of the existing buttons.

  * You should be making use of the existing placeholders for entering content (i.e. "firstNumber", "operator", "secondNumber", "result").

  * You should have fun and push yourselves! This is a challenge activity—which means, if you get it done, you are a King of jQuery. If you don't, no sweat. The important thing is that you learned at least a FEW things along the way.

* **Instructor/TAs:** At this time, you may want to let students know about the 1:1 option available during the exercise. Describe these "catch-up" sessions as being "crash-courses" intended to help students go over the basics. Alternatively, if you already have a good idea of which students need the catch-up sessions, avoid making the announcement completely, and simply invite those students to take advantage of the time.

### 20. Everyone Do: Phase 1: Getting Situated + Pseudocoding Stage (20 mins)

* Throughout the activity, you will be offering minimal suggestions about how students should be proceeding and focusing their time.

* Slack the below objectives:

* **Phase I Objectives**

  * For this first 20 minutes, your goals should be to:

    * Become familiar with the various elements of the HTML page as it is written now. (Identify the classes and IDs that matter!)

    * Create a general strategy for how you will accomplish the task:

      * How will you capture button clicks?
      * What will you do with the numbers clicked?
      * What will you do when the operator is clicked?
      * How will you differentiate numbers from operators?
      * How will you know the "value" of a number clicked?
      * How will you know when a user is done entering the first number?
      * Etc.

    * Create a few test "on-click" events. These could just trigger Alert messages for now. If you get further along, then have these buttons alert their "value".

### 21. Everyone Do: Phase 2: Begin Logic (35 mins)

* Slack the below objectives:

* **Phase II Objectives**

  * For the next 30 minutes, your goals should be to:

    * Begin creating sets of variables that you think you will need. As a few suggestions:

      * firstNumber, secondNumber, operator, result

    * Create code that captures the numbers from button clicks, and then displays them on the HTML.

    * Create code that captures an operator click, then immediately tells your code to begin recording the second number. (Example: If a user clicks the "plus" button, you know they are done typing the first number).

    * Create code that checks which operator the user has clicked, then saves this operator for later use in a conditional statement. (Example: If a user clicks the "plus" button, you know you will need to be adding two numbers. If a user clicks the "minus" button, you will need to be subtracting two numbers. Think: if-else statements!)

### 22. End

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
