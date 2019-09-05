# 3.2 Lesson Plan - Interview Blitz (10:00 AM) <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

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

[05.2: jQuery Jubilee](https://docs.google.com/presentation/d/1OWXiM3iGOFjB_ThjNEPvRLQpRPymP-K6vx953rd8AtU/edit?usp=sharing)

## Time Tracker

* Have your TAs reference [02-Day-TimeTracker](02-Day-TimeTracker.xlsx) to help keep track of time during class.

- - -

### 1. Instructor Do: Welcome & Housekeeping (5 mins)

* Welcome students to class and give an introduction to the day's topics.

* Remind students that homework is due today! Even if they haven't fully completed it they should submit it anyway. Career Services and Academic Support monitor homework and it helps us to know where everyone is in the class.

### 2. Students Do: Fridge Game (25 min)

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

### 3. Instructor Do: Review Fridge Game (15 min)

* Spend the time necessary to ensure that the majority of students have a conceptual understanding of how the Fridge Game's code works. In explaining the solution, point out the following:

  * The creation of an array that holds all of the letters;

  * The for loop used to take letters from the array, associate each with a data-attribute and text, and then append them onto the page. Students will be confused about the concepts of `.addClass`, `.attr`, and `.text`. Spend the time necessary to explain each.

    ![image-2](Images/2-fridge-1.png)

  * The on-click event needed to capture button clicks. Be sure to point out how we use the data-attribute (via the `.attr` method) to know which letter was clicked. This is a **KEY POINT**.

    ![image-3](Images/2-fridge-2.png)

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=gC529k3KzmE) for the activity.

### 4. Instructor Do: Crystal Example (10 min)

* Next, open the files found in the folder `12-CrystalExample`. These files closely match the students' homework assignment.

* They are included in the day's lesson primarily so students can refer back to them while working on their homework assignment. Use your discretion as to how much extra help your students need to complete their homework. If you feel students need a lot of help, feel free to spend time in class going over these examples. Otherwise, simply explain to students that the code is available, and offer a very high level explanation of how they can use the code provided.

### 5. Instructor Do: Intro Lexical Scope (10 min)

* Proceed to the Lexical Scope slides. Warn students that this section is pretty heavy on theory.

* Proceed with basic definitions of scope, using analogies to boxes or other simple concepts when possible. Mention the concept of nested functions -- before moving to the first code dissection. (Students will be dissecting the code example shown in the slides).

### 6. Students Do: Lexical Scope 1 (10 min)

* File(s): `13-ScopeOne/Unsolved/index.html`

* Instructions

  * Open `Unsolved/index.html` in a browser and then open the console.

  * With your neighbor, compare the results in the console to the JavaScript in `index.html` and answer the questions in the comments.

  * **HINT**: Read the [MDN docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### 7. Instructor Do: Review Lexical Scope 1 (5 min)

* Open `13-ScopeOne/Unsolved/index.html` and ask students to answer the questions posed in the comments. The key concept to address is *closures*. Explain the following points:

  * When the return value of `outside()` is assigned to `insideOut`, a closure is created.

  * A closure is an object that contains both a returned function and the environment in which that function was created.

  * The environment consists of any local variables that were available to that function when and where it was declared.

  * When we call `insideOut()`, it returns the values stored in `x` and `y` even though those were declared outside `inside()`.

* If students have further questions, refer them to the [MDN docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).  

### 8. Students Do: Lexical Scope 2 (5 min)

* Proceed with the next activity.

* **File:**

  * `lexical-scope-2-unsolved.html` in `14-ScopeTwo`

* **Instructions:**

* Take a few moments to dissect the code just sent to you.

* Try to predict what will be printed in each of the examples.

* Be prepared to share!

* Note: Pay attention to the unusual use of the keyword: ‘this”

### 9. Instructor Do: Review Lexical Scope 2 (5 min)

* Proceed with the review. This example may have been more challenging to students, as we introduced the concept of `this` without explanation.

* The key takeaway here is that using the keyword `this` will only print content related to the object directly above it, **not** from the grandparent.

  ![image-5](Images/3-scope-2.png)

### 10. Students Do: Lexical Scope 3 (10 min)

* Proceed with the next activity.

* **Files:**

  * `lexical-scope-3-unsolved.html` in `15-ScopeThree/Unsolved`

* **Instructions:**

* Take a few moments to dissect the code just sent to you.

* Try to predict what will be printed in each of the examples.

* Be prepared to share!

* Note: Pay attention to the unusual use of the keyword: ‘this”

### 11. Instructor Do: Review Lexical Scope 3 (5 min)

* Try to have students explain the solutions to the last activity back to you.

* If no student can, try to explain it yourself using the solution provided. It's okay if you stumble as you explain -- that shows students that this stuff isn't obvious, and that you can be a great developer, even if these nested functions confuse you.

* Remind students that these are not easy activities. The key is simply for them to become familiar with the fact that JavaScript's handling of parent and nested functions isn't always intuitive, and that errors can arise if you aren't careful.

* Make sure they realize that studying these examples **is not** overly necessary.

### 12. Everyone Do: Brain Teaser (15 min)

* If you have additional time available in class, proceed with this activity [16-ColorCorrector](../../../../01-Class-Content/05-third-party-apis/01-Activities/16-ColorCorrector).

* It's challenging, and will likely take over 40 minutes to complete.  It is not necessary that students finish it.  At best, they may be able to get *started* in class, but will likely need to spend additional time at home if they are interested in completing it.

* Play it by ear if you'd like to walk through the solution.

- - -

### 13. BREAK (30 min)

- - -

### 14. Partners Do: The Virtues of Visualizing Problems (10 mins) (High)

* Now, we're going to take on a slew of activities based on the kinds of questions you might face in job interviews for developer positions.

* Add in that before any of that, they'll need to review the concept of visualizing problems.

* Have them partner up into groups of two to answer this question: What's the highest selling product in Walmart?

  * Tell them that they can't just come up with a random item and consider their response acceptable. They'll likely be flat-out wrong -- Walmart has sold millions of items over the past 50 years.

  * No Googling, either!

  * Instead, they should imagine that their life depended on giving an adequate response.

  * Offer this tip: "Visualize yourself walking past those sliding doors and into this store. If you were making your weekly trip to Walmart, which item near the entrance would you gravitate toward? If it helps, the produce section is the first you'll see when walking into most Walmarts."

### 15. Instructor Do: Explain Visualizations (10 mins) (Critical)

* Before pooling responses from each group of partners, open up your word processor of choice and increase the size of your font to 48 points. Ask five groups for their answers and type them for the rest of the class to see.

  * Also ask these groups how they came up with their solutions. How did visualization help them decide?

* After you type their responses, tell them the answer: bananas.

  * "Again, visualize yourself going into Walmart (or any supermarket). You see the produce section first and then you wonder: what's the cheapest thing in the produce section? What's the easiest thing to eat?"
  * " This is the thought process your interviewee will likely care most about. Even if you didn't answer 'bananas,' it’s more important that you **visualized** the problem and responded with something close or at least informed."

* Explain how job candidates in all fields often encounter so-called **conceptual problems**, questions that offer no certain means to find answers. "Your only recourse is to think high-level and visualize a solution. If you conceive the situation, you'll tend to find a close answer. You must visualize the problem, provide your solution and explain your thought process if you want to impress your interviewers."

### 16. Partners Do: Missing Cards (15 mins) (High)

* Tell your class to find their partners from the last activity. Together they'll attempt to solve this next problem.

* Slack out these instructions:

  * I give you an array of 51 cards. Each card contains two properties: the suit, and the title (a string of either a number or a ranking: king, ace, so on).

  * Fifty-two cards form a deck. But I gave you 51. One is missing! How do you find it?
  * Try to come up with the most efficient steps to solve this.
    * **Hint**: Using a for loop against an array of values is not the most efficient solution--what if the cards aren't sorted?

* Remind your class to visualize the problem and to think up a solution in steps. Have them write those steps out. They can even code it out in JavaScript if there's time.

### 17. Instructor Do: Go Over Missing Cards (5 mins) (High)

* Unlike the other exercises of today's lecture, we won't discuss an actual solution to this problem. The 51-card activity should spur your students to problem solve--that's more important than coming up with a real answer.

* Ask some of your students to explain their pseudocoded solutions. After three or so respond, debrief them--we don't care about finding an actual correct answer.
  * This is another type of interview question that students should prepare for. The interviewer won't even care about finding a "real" solution--maybe there is none! They just want to measure the candidate's aptitude for thinking about the problems they'll encounter during work.
    * Will they consider the whole issue before trying to find a solution, or will they rush into the problem and come up with a flimsy response.
    * If they encounter a major snag on one path to a possible solution, will they give up, stay on the same doubtful train of thought, or think about what other possible answers might exist.
    * That's why it's important to nail down visualization to conceptualize your problems.

### 18. Instructor Do: Explain The Interview Process (10 mins) (High)

* Spend a few minutes talking about the interview experience, but don't go too in-depth about the process (that's Career Services’ forte).

  * Tell the class that the interview experience will differ depending on the organization and the position. That said, students should expect multiple interviews--some behavior based, others tech based.
    * Behavioral: A conversation focused on the candidate's personality and whether they'd make a suitable fit for the company's atmosphere.
    * Tech: Gauging the candidate's sophistication with technologies relevant to the job.
      * An example: If a company's looking for a front-end dev, they'll want to test their candidates for HTML/CSS, JavaScript, jQuery and the works.

* If you have any interesting and/or enlightening interview experiences, then, by all means, share them with the class. What should they know about interviews that you wish you’d known beforehand?

  * Have some of the TAs chime in if they have any relevant interview experiences and advice.

* Tell your students that the rest of the class will be devoted to exercises based on the kind of questions they might expect in a tech interview.

### 19. Students Do: FizzBuzz (20 mins)

* Tell students that they're now going to code out a very common programming activity: Fizz Buzz. Explain how the developer must write a script that cycles through a series of numbers and prints them out. Add in that there are a few caveats:

  * If the number is a multiple of three, the program will print Fizz instead of the number.
  * Likewise, if the number is a multiple of five, the program will print Buzz.
  * What if a number is a multiple of both three and five? Then the script will spit out "FizzBuzz."

* "Did you get all that? If not, no worries; just check out your Slack channel." This is your cue to send out the instructions.

  * Remind students not to start coding until they've thought about how to accomplish this task at a high-level--pseudocode it out! It might not seem necessary for this activity, but interviewers will expect them to think their problems out at a high level before coding a solution.

* Here are the instructions:

**FizzBuzz**

* Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.

### 20. Instructor Do: Go Over FizzBuzz (5 mins)

* Ask one of the students in the class to Slack you their solution. Run the code they gave you and test it out. Debug with the student if any issue pops up.

* Ask another student to answer the problem, and test and debug just like before. Chances are this answer will vary in some manner from the other students -- explain how programmers often solve the same problem in myriad different ways.

  * Add in that they should still be mindful of how they tackle a problem, though--if their potential code lacks elegance or repeats itself when DRY is possible, then they might want to think a bit longer to come up with another solution.

* Slack out the solution and [video review](https://www.youtube.com/watch?v=oTart7fFefI) for the activity.

### 21. Students Do: Prime Checker (20 mins) (High)

* Tell students that the next assignment will be much more challenging than the last two. Implore them to spend at least 5 minutes away from their editors to pseudocode their work.

  * When five minutes passes during the next activity, announce to the class that they may start writing actual code.

* Here are the instructions:

**Prime Checker**:

* Write a function that checks to see if a number is a prime number or not. Have it return `true` if it is, or `false` if it's not.

* More Info:

  * More info on Prime numbers: <https://www.mathsisfun.com/prime_numbers.html>

* **INSTRUCTOR (do not slack this out)**: You may notice that your students have finished earlier than the allotted time. There aren't really many lines of code to get the prime number function working, but it does require a knowledge of a prime number's inherent properties (that's why we included the link in the instructions).
  * This is more a challenge of conceptualizing the problem then it is a coding skill.
  * If you do notice that the class has finished early, you should cut the time short and go over the answer.

### 22. Instructor Do: Go Over Prime Number activity (5 mins) (High)

* Ask a student to explain their pseudocoding process for this exercise. Ask them about these concepts in particular:

  * How long did you spend pseudocoding?
  * What properties of the prime number did you base your code around?
    * This will likely be that a prime number cannot be divisible by any numbers other than 1 and itself.

* Ask that student to give you the code they came up with line by line, and to tell you what each line does.
  * Test out the code to check its validity. If there's a bug, debug it with the student.

### 23. Students Do: File Sorter (30 mins)

* Tell the class that they'll have a bit more time to finish the next assignment and that they should spend about 10 minutes pseudocoding. In this case, ask students to look up JavaScript methods that would let them work with the specific characters in a string.

  * Slack out this link, too: <http://www.w3schools.com/jsref/jsref_obj_string.asp>
  * Explain that while most in-person interviews won't allow for researching a language mid-question, they can still do this for online questionnaires, so long as they have enough time.

* Send your students `sort_by_file_extension.md` inside `15-file_extension`, which also includes their instructions. They're copied here for your convenience:

**Sort by File Extensions**

* You have an array of filenames with extensions. Sort the files into arrays based on whether they're videos or images.

### 24. Instructor Do: Go Over File Sorter (10 mins)

* Ask the class how they did. Remind them that this question is a tough one with that used a method we hadn't spent much time on in class. They shouldn't feel any doubt about their abilities as developers if they couldn't solve it in time.

* It’s more important that they offer the interviewee a high-level description of how they would solve it: "basically, always pseudocode before attempting any tough interview question."

  * Ask if a student who couldn't code out a solution would like to explain at a high level how they would have made a file-sorting program?

* Also ask if anyone in the class coded a solution in time.
  * If anyone responds, have the student give you the answer line by line. Ask the student how each line works. Run the code and debug any errors you may encounter.
  * If no one answers, type out the solution and explain how it works: `15-file_extension`.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=03.02)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=03.02)
