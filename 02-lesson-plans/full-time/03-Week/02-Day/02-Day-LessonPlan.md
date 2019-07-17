## 3.2 Lesson Plan - Interview Blitz (10:00 AM) <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

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

In this class, after a quick review of intervals and timers, you will teach students how to tackle tech interview questions, including conceptual problems. This lecture will be based on a series of exercises rather than a goal to teach students new material – we have to show students the virtue of thinking about solving programming problems at a high level before they type even a single line of code.

`Summary: Complete activities 09-25 in Unit 05`

##### Instructor Priorities

* Try to get students to volunteer and participate in going over today's exercises. Fostering an environment where students are comfortable sharing and talking about code is paramount!

* Make sure everyone is working with partners in small groups. It's important students get used to talking about and working on code with other developers. This is valuable experience with real world application!

* Reinforce good coding habits! Clean code with proper variable names and indentation!

* After the visualization section just before break, students should realize the importance of visualizing conceptual problems to find some adequate solutions. Even if they can’t solve a particular question with total certainty, they should know how to come up with a conceptual answer informed by thoughtful visualization.

* Students should understand that the later questions in this exercise will challenge them, but that it’s more important to visualize the problem then it is to find a correct answer. After all, if they do not think their exercises through and come up with a pseudocoded solution, they probably won’t find any adequate answers today.

* Students should come out of this class feeling more prepared for the interview experience, especially by the time they finish the last question. If anyone appears discouraged, reassure them and find out how you can help by engaging in 1:1 talks after class.

##### Instructor Notes

* Before this class starts, suggest your students to bring a pen and a notebook if possible &mdash; they'll need it to pseudocode their work. Sure, they can do so on their computers, but having a separate medium to record their thought process will amplify the importance of high-level thinking.

* **Absolutely** go over the interview questions listed in this lesson plan. You need to be an expert on these exercises since they're going to stump a lot of your class. Make sure they don’t stump you, too!

* Expect that students will not be able to solve every problem. This is fine: it’s much more important that they at least attempt to solve it with visualization and pseudocode: how they would program a solution to the exercise if they had the time and know-how.

* Once again, make sure your students know they can reach out to you or a TA for help after class on the concepts you teach them.

* **Extra Resources:** Send out the following link during class and encourage students to practice with the [Whiteboarding Overview and Questions](https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/). This was given with the course pre-work but now is the time where a lot of it will start clicking for students since learning JavaScript.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4d6d20ab-28db-4f11-b2b1-d7d6e35d02b2)

- - -

### Class Objectives

* Students will reinforce their knowledge of JavaScript & jQuery.
* Students will revisit understand JavaScript Timing Events including `setTimeout`, `clearTimeout`, & `setInterval`.
* Prepare students to answer conceptual problems with visualization.
* Reinforce visualization and pseudocoding as necessary tools for any web developer -- they’re essential for taking on any complex project as well as the tough questions they’ll attempt today (and during tech interviews).
* Give students experience working on, and talking about code with other developers.
* Implement complex logical conditions to meet an objective.

- - -

### 1. Instructor Do: Welcome & Housekeeping (5 mins)

* Welcome students to class and give an introduction to the day's topics.

* Remind students that homework is due today! Even if they haven't fully completed it they should submit it anyway. Career Services and Academic Support monitor homework and it helps us to know where everyone is in the class.

### 2. Partners Do: Intervals Recap (5 mins)

* Slack out [09-Interval/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/09-Interval/Unsolved/) to the class.

* Have students partner up and explain to each other what is happening in this file.

### 3. Instructor Do: Interval Recap (5 mins)

* Open [09-Interval/Solved](../../../../01-Class-Content/05-timers/01-Activities/09-Interval/Solved/interval-solved.html) in your editor.

* Go through the code line by line, choosing groups to help explain what's happening.

* Answer any questions about anything we've covered so far.

### 4. Students Do: Stopwatch (20 mins)

* Open [10-Stopwatch/Solved/stopwatch-solution.html](../../../../01-Class-Content/05-timers/01-Activities/10-Stopwatch/Solved/stopwatch-solution.html) in your web browser and demonstrate the stopwatch to the class.

* Leave it running while they work.

* Zip and slack out the following instructions and files to the class:

* Instructions:

  * Unzip the attached file.
  * Open stopwatch.js and follow the instructions in the file.
  * You will not not need to edit the HTML file we give you.
  * Use jQuery and the timing events you learned today to create a stopwatch with Start, Stop and Reset buttons.
  * **Bonus**: Add a lap timer.
  * **Bonus**: Use CSS to style the timer

* **Folder**: [10-Stopwatch/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/10-Stopwatch/Unsolved)

### 5. Everyone Do: Stopwatch Review (15 mins)

* Open the solution to the previous activity, [10-Stopwatch/Solved](../../../../01-Class-Content/05-timers/01-Activities/10-Stopwatch/Solved) in your editor.

* Go over the exercise, illustrating key concepts and answering any questions students may have.

* Avoid showing demonstrating the CSS, the focus for this activity is JavaScript.

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=EGhF4iJSnl0) for the activity.

### 6. Students Do: Slideshow (20 mins)

* Open [11-Slideshow/Solved/slideshow.html](../../../../01-Class-Content/05-timers/01-Activities/11-Slideshow/Solved/slideshow.html) in your web browser and show students what they will be making.

* Zip and slack the following instructions and files to the class:

* **Instructions**:

  * Unzip the attached file.
  * Create a slideshow using jQuery and JavaScript Timing Events.
  * Select a few images and make a slideshow.
  * Display the "loading.gif" image in between each picture for one second.
  * **Bonus**: Add CSS styling.

* **Folder**: [11-Slideshow/Unsolved/slideshow.html](../../../../01-Class-Content/05-timers/01-Activities/11-Slideshow/Unsolved/slideshow.html)

### 7. Everyone Do: Slideshow Recap (10 mins)

* Open the solution to the previous activity, [11-Slideshow/Unsolved/slideshow.html](../../../../01-Class-Content/05-timers/01-Activities/11-Slideshow/Unsolved/slideshow.html) and go over the exercise.

* Make sure to cover key concepts and answer any questions students may have.

### 8. Partners Do: The Virtues of Visualizing Problems (10 mins)

* Tell your students that this part of class will run in a different format than before.

  * "Now, you're all going to take on a slew of activities based on the kinds of questions you might face in job interviews for developer positions."

* Add in that before any of that, they'll need to review the concept of visualizing problems.

* Have them partner up into groups of two to answer this question: What's the highest selling product in Walmart?
  * Tell them that they can't just come up with a random item and consider their response acceptable. They'll likely be flat-out wrong -- Walmart has sold millions of items over the past 50 years.
  * No Googling, either!
  * Instead, they should imagine that their life depended on giving an adequate response.
  * Offer this tip: "Visualize yourself walking past those sliding doors and into this store. If you were making your weekly trip to Walmart, which item near the entrance would you gravitate toward? If it helps, the produce section is the first you'll see when walking into most Walmarts."

### 9. Instructor Do: Explain Visualizations (10 mins)

* Before pooling responses from each group of partners, open up your word processor of choice and increase the size of your font to 48 points. Ask five groups for their answers and type them for the rest of the class to see.

  * Also ask these groups how they came up with their solutions. How did visualization help them decide?

* After you type their responses, tell them the answer: bananas.

  * "Again, visualize yourself going into Walmart (or any supermarket). You see the produce section first and then you wonder: what's the cheapest thing in the produce section? What's the easiest thing to eat?"
  * " This is the thought process your interviewee will likely care most about. Even if you didn't answer 'bananas,' it’s more important that you **visualized** the problem and responded with something close or at least informed."

* Explain how job candidates in all fields often encounter so-called **conceptual problems**, questions that offer no certain means to find answers. "Your only recourse is to think high-level and visualize a solution. If you conceive the situation, you'll tend to find a close answer. You must visualize the problem, provide your solution and explain your thought process if you want to impress your interviewers."

### 10. Partners Do: Missing Cards (15 mins)

* Tell your class to find their partners from the last activity. Together they'll attempt to solve this next problem.

* Slack out these instructions:

  * I give you an array of 51 cards. Each card contains two properties: the suite, and the title (a string of either a number or a ranking: king, ace, so on).

  * Fifty-two cards form a deck. But I gave you 51. One is missing! How do you find it?
  * Try to come up with the most efficient steps to solve this.
    * **Hint**: Using a for loop against an array of values is not the most efficient solution--what if the cards aren't sorted?

* Remind your class to visualize the problem and to think up a solution in steps. Have them write those steps out. They can even code it out in JavaScript if there's time.

### 11. Instructor Do: Go Over Missing Cards (5 mins)

* Unlike the other exercises of today's lecture, we won't discuss an actual solution to this problem. The 51-card activity should spur your students to problem solve--that's more important than coming up with a real answer.

* Ask some of your students to explain their pseudocoded solutions. After three or so respond, debrief them--we don't care about finding an actual correct answer.
  * This is another type of interview question that students should prepare for. The interviewer won't even care about finding a "real" solution--maybe there is none! They just want to measure the candidate's aptitude for thinking about the problems they'll encounter during work.
    * Will they consider the whole issue before trying to find a solution, or will they rush into the problem and come up with a flimsy response.
    * If they encounter a major snag on one path to a possible solution, will they give up, stay on the same doubtful train of thought, or think about what other possible answers might exist.
    * That's why it's important to nail down visualization to conceptualize your problems.

### 12: Instructor Do: Explain The Interview Process (10 mins)

* Spend a few minutes talking about the interview experience, but don't go too in-depth about the process (that's Career Services’ forte).

  * Tell the class that the interview experience will differ depending on the organization and the position. That said, students should expect multiple interviews--some culture based, others tech based.
    * Culture: A conversation focused on the candidate's personality and whether they'd make a suitable fit for the company's atmosphere.
    * Tech: Gauging the candidate's sophistication with technologies relevant to the job.
      * An example: If a company's looking for a front-end dev, they'll want to test their candidates for HTML/CSS, JavaScript, jQuery and the works.

* If you have any interesting and/or enlightening interview experiences, then, by all means, share them with the class. What should they know about interviews that you wish you’d known beforehand?

  * Have some of the TAs chime in if they have any relevant interview experiences and advice.

* Tell your students that the rest of the class will be devoted to exercises based on the kind of questions they might expect in a tech interview.

* Don't forget to also slack out the [Whiteboarding](https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/) if you haven't already for students to practice.

- - -

### 13. LUNCH BREAK (30 mins)

- - -

### 14. Students Do: Bash Exercise (5 mins)

* Slack out the following questions to your students. Explain that sometimes, the interviewer will want to make sure that the candidate knows basics like this before proceeding any further with more technical questions.

**Bash Questions**:

1. What is the command to create a file?

2. What is the command to create a folder?

3. What is the command to delete a file?

4. What is the command to delete a folder?

5. What is the command to move a file?

6. What is the command to copy a file?

7. What is the command to go up one directory?

8. What is the command to list the files in a directory?

9. What is the command to see what directory you are currently in?

10. What would typing `history` do?

### 15. Everyone Do: Go Over Bash Questions (3 mins)

* Call on particular students to answer the Bash questions one at a time.

**For your reference, here are the solutions**:

1. What is the command to create a file?

   > `touch <filename>`

2. What is a command to create a folder?

   > `mkdir <filename>`

3. What is the command to delete a file?

   > `rm <filename>`

4. What is the command to delete a folder?

   > `rm -R <folder`

5. What is the command to move a file?

   > `mv <filename> <destination>`

6. What is the command to copy a file?

   > `cp <filename> <name of new file>`

7. What is the command to go up one directory?

   > `cd ..` or `cd ../`

8. What is the command to list the files in a directory?

   > `ls`

9. What is the command to see what directory you are currently in?

   > `pwd`

10. What would typing `history` do?
    > It would list the commands that the user recently executed.

### 16. Students Do: FizzBuzz (20 mins)

* Tell students that they're now going to code out a very common programming activity: Fizz Buzz. Explain how the developer must write a script that cycles through a series of numbers and prints them out. Add in that there are a few caveats:

  * If the number is a multiple of three, the program will print Fizz instead of the number.
  * Likewise, if the number is a multiple of five, the program will print Buzz.
  * What if a number is a multiple of both three and five? Then the script will spit out "FizzBuzz."

* "Did you get all that? If not, no worries; just check out your Slack channel." This is your cue to send out the instructions.

  * Remind students not to start coding until they've thought about how to accomplish this task at a high-level--pseudocode it out! It might not seem necessary for this activity, but interviewers will expect them to think their problems out at a high level before coding a solution.

* Here are the instructions:

**FizzBuzz**

* Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.

### 17. Instructor Do: Go Over FizzBuzz (5 mins)

* Ask one of the students in the class to Slack you their solution. Run the code they gave you and test it out. Debug with the student if any issue pops up.

* Ask another student to answer the problem, and test and debug just like before. Chances are this answer will vary in some manner from the other students -- explain how programmers often solve the same problem in myriad different ways.

  * Add in that they should still be mindful of how they tackle a problem, though--if their potential code lacks elegance or repeats itself when DRY is possible, then they might want to think a bit longer to come up with another solution.

* Slack out the solution and [video review](https://www.youtube.com/watch?v=oTart7fFefI) for the activity.

### 18. Students Do: Prime Checker (20 mins)

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

### 19. Instructor Do: Go Over Prime Number activity (5 mins)

* Ask a student to explain their pseudocoding process for this exercise. Ask them about these concepts in particular:

  * How long did you spend pseudocoding?
  * What properties of the prime number did you base your code around?
    * This will likely be that a prime number cannot be divisible by any numbers other than 1 and itself.

* Ask that student to give you the code they came up with line by line, and to tell you what each line does.
  * Test out the code to check its validity. If there's a bug, debug it with the student.

### 20. Students Do: File Sorter (25 mins)

* Tell the class that they'll have a bit more time to finish the next assignment and that they should spend about 10 minutes pseudocoding. In this case, ask students to look up JavaScript methods that would let them work with the specific characters in a string.

  * Slack out this link, too: <http://www.w3schools.com/jsref/jsref_obj_string.asp>
  * Explain that while most in-person interviews won't allow for researching a language mid-question, they can still do this for online questionnaires, so long as they have enough time.

* Send your students `sort_by_file_extension.md` inside `15-file_extension`, which also includes their instructions. They're copied here for your convenience:

**Sort by File Extensions**

* You have an array of filenames with extensions. Sort the files into arrays based on whether they're videos or images.

### 21. Instructor Do: Go Over File Sorter (5 mins)

* Ask the class how they did. Remind them that this question is a tough one with that used a method we hadn't spent much time on in class. They shouldn't feel any doubt about their abilities as developers if they couldn't solve it in time.

* It’s more important that they offer the interviewee a high-level description of how they would solve it: "basically, always pseudocode before attempting any tough interview question."

  * Ask if a student who couldn't code out a solution would like to explain at a high level how they would have made a file-sorting program?

* Also ask if anyone in the class coded a solution in time.
  * If anyone responds, have the student give you the answer line by line. Ask the student how each line works. Run the code and debug any errors you may encounter.
  * If no one answers, type out the solution and explain how it works: `15-file_extension`.

### 22. Group Do: Homework Time (22 mins)

* Students should be given the remaining time to get a head start on the homework for this unit.

* Make sure to keep an eye out for questions regarding the assignment and guide anyone who may have de-railed back on track.

* If students seemed to struggle today, you can use this time to review difficult topics or spend more time on one of the class activities rather than on homework. 

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=03.02)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=03.02)
