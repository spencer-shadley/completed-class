## 03-Day Lesson Plan - JavaScript Juggernauts <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

### Slideshow

* This lesson's slides are available on Google Drive here: [02-3 JavaScript Juggernauts](https://docs.google.com/presentation/d/125gRzxzcksXeUqDrjQMEfJf31XM2PC5aDTK3sN9VtxA/edit?usp=sharing)

* To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Add the slide PDF file to your class repository along with other necessary files.

* **Note:** Editing access is not available for this document. If you wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

- - -

### Pre-class Drills

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
 What is a self-closing tag? Provide 3 examples. Why are these tags self-closing? What differentiates these elements from others? 
```
 
* Encourage students to practice their critical thinking rather than their Googling skills here. 

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students to share their answers.

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

* Provide your own answer or the one below:

> "Self-closing tags are tags that don't require a closing tag. Examples include `br`, `hr`, `img` tags. Self-closing tags do not require a closing `/` inside the tag but it can be preferable to add it, as some frameworks require it."
> "Self-closing tags are used for what are called void elements like horizontal rules and line breaks. These are called void elements because they inherently cannot have content. There is no way to add text to a line break, so there is no need for an opening and closing set of tags. Similarly, you can't add text to a horizontal rule, so there is no need for an opening and closing set of tags. In general, any tag that can't hold text can be self-closing."

### Overview

In this class, we will be introducing students to the concept of JavaScript Objects.

`Summary: Complete activities 28-34 in Unit 03`

##### Instructor Priorities

* Students should understand what an object is and what its syntax conveys (properties and values).
* Students should understand how the `30-GandalfTheGreyObjects` example works.

##### Instructor Notes

* This class is relatively light in terms of activities and content. Feel free to sprinkle in examples when you feel it will be helpful. Towards the end of class, there is a trivia example that might be very helpful to students homework-wise.

* As usual, have your TAs reference [03-Day-TimeTracker](03-Day-TimeTracker.xlsx) to help keep track of time during class.

### Sample Class Video (Highly Recommended)

* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=585e0c30-0ced-b6e0-062e-45adf61b3627)

- - -

### Class Objectives

* To gain an understanding of JavaScript Functions and Objects.
* To begin utilizing the basic JavaScript learned so far to build simple JavaScript games.

- - -

### 1. Instructor Do - Welcome Students (1 min)

* Welcome students and open the slide deck for the day.

### 2. Instructor Do: Today's Class    (1 min)

* Introduce students to the day's objectives.

### 3. Instructor Do: Good Array (10 mins)

* Open [good-array.html](../../../../01-Class-Content/03-javascript/01-Activities/28-GoodArray/good-array.html) in `28-GoodArray`.

* The purpose of this activity is to show students that arrays are useful for looping through lists of numbers.

* This example will then be contrasted by the next example, in which we have two arrays that are related to one another, thus requiring the use of an object pattern instead.

### 4. Instructor Do: Joan of Arc (Bad Arrays) (10 mins)

* Open [joan-of-arc-arrays-unsolved.js](../../../../01-Class-Content/03-javascript/01-Activities/29-JoanOfArcArrays/Unsolved/joan-of-arc-arrays-unsolved.js) in `29-JoanOfArcArrays/Unsolved` in your editor.

* Take a moment to explain this pattern. The first array has various labels and the second array has the descriptions associated with these labels for our Joan of Arc character.

* This is a perfect example of the limitations of arrays—namely, that they are not useful for describing associations across arrays.

* Have students think for a few moments about how they would link these two arrays so that they could easily determine what Joan of Arc's "Real Name" is or what "Scars" she has.

* Point out that any array combination strategy is going to be overly complex and that there is a much simpler solution to this problem.

* Show how the relationship would be with [joan-of-arc-arrays-solved.js](../../../../01-Class-Content/03-javascript/01-Activities/29-JoanOfArcArrays/Solved/joan-of-arc-arrays-solved.js) in `29-JoanOfArcArrays/Solved`.

### 5. Instructor Do: Gandalf The Grey Objects (10 mins)

* Now open [gandalf-the-grey-objects.html](../../../../01-Class-Content/03-javascript/01-Activities/30-GandalfTheGreyObjects/gandalf-the-grey-objects.html) in `30-GandalfTheGreyObjects`.

  * Point out how the `gandalf` object takes on a different form where each property matches up with its value.

  * Also, point out how we can access the values for each property using either square bracket notation (`object["property"]`) or dot notation (`object.property`).

  * Based on the current code, ask students: Why would we need to use bracket notation over dot notation?

    * Bracket notation is required when the property we want to access is a string with spaces. e.g. the code `object["multi-word property"]` would work, but `object.multi-word property` or `object." multi-word property"` would not.

    * We also need to use bracket notation whenever we want to pass a variable to be interpreted as an object property. The gandalf-the-grey-objects example demonstrates this:

      ```js
      var ageProperty = "age (est)";
      var years = gandalf[ageProperty];
      alert("My 401k has been gathering interest for " + years + " years!")
      ```

    * Had we just written `gandalf.ageProperty`, it would have returned `undefined`, since the `gandalf` object has no property literally named `ageProperty`.

  * Also point out how these objects are very useful for storing related data and how we will be using them more often later when it comes to APIs and to data recall.

  * Let them know that objects are EXTREMELY important.

### 6. Instructor Do: Gandalf The Grey Visualized (Slides) (10 mins)

* Proceed with the slides that visually lay out the structure of JavaScript objects.

* Talk through them as you go, and encourage questions frequently. The more readily students understand objects the better.

### 7. Instructor Do: Gandalf The Grey (Repeat) (10 mins)

* Once again go over the same Gandalf The Grey Objects example. Explain the concepts once more. This time feel free to create add-on examples of your own:

  * Consider adding new properties.

  * Ask students how they would retrieve specific properties.

  * Go over how you could utilize properties in combination with one another.

* Make sure students understand the gist, and then Slack out the file to them.

### 8. Partners Do: Basic Objects (15 mins)

* Slack out the following file and instructions:

  * **File**

    * `car-object-unsolved.html` in `31-MyFirstObject/Unsolved`

  * **Instructions**

    * With a partner, spend the next few moments studying the code just Slacked to you.

    * Then write code below each comment to log the relevant information about the provided `car` object.

    * Bonus: If you finish early, create a brand new object of your own. Slack out a snippet of the code to the class when you are done. Be creative!


### 9. Instructor Do: Review Activity (10 mins)

* Walk students through [car-object-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/32-CarGame/Solved/car-game-solved.html) in `31-MyFirstObject/Solved`. In essence, you just need to show students how to retrieve various properties from the car object and how to execute various methods associated with the car object. In your discussion of the previous activity be sure to mention the following:

  * Objects like the `car` object can have properties as strings, numbers, and booleans as well as **methods** that are functions associated with the object.

  * Be sure to explain briefly that a method is simply a function associated with a specific object.

  * Point out the use of the word `this`. In your discussion of the keyword `this` explain that it is simply a way to reference the object itself.

  * You can explain that in later portions of the class we will effectively be creating many instances of the same object, in which case the `this` keyword lets us know which instance of the object we are referencing.

* See if there are any questions before proceeding to Slack out the solution.

### 10. Instructor Do: Car Game Solved (Browser) (8 mins)

* Open up [car-game-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/32-CarGame/Solved/car-game-solved.html) in `32-CarGame/Solution` in your browser, and demo how the game works for the class. Make sure to go over how the page is taking in user inputs directly from the keyboard (without the use of `prompt`) to run methods stored within the `car` object.

    ![/Images/8-RunCarGame_1.png](Images/8-RunCarGame_1.png)

### 11. Students Do: Run that Car (30 mins)

* Slack out the following files and instructions. It's up to you whether students work individually or whether they work in pairs.

  * **Instructions**

    * Using the code from the previous activity as a starting point, create a complete application that meets the following specifications:

      * Users can enter keyboard input (letters).

      * Each of the car's methods is assigned to a key.

      * When the user presses a key it calls the appropriate function.

      * These letters also trigger a global function called `reWriteStats()` that logs the car’s make, model, color, mileage, and `isWorking` status to the console.

    * HINT: You will need to use the `document.onkeyup()` function to collect input from the user's keyboard.

### 12. Instructor Do: Review Activity (15 mins)

* Open [car-game-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/32-CarGame/Solved/car-game-solved.html) in `32-CarGame/Solution` in both the browser and in your editor.

* First, show students how the application works once more.

    ![/Images/8-RunCarGame_1.png](Images/8-RunCarGame_1.png)

* Then walk students through the solution.

  * In demonstrating the solution, first point out how the code is organized.

  * Talk about how the code is effectively organized into a section for variables, a section for functions, and a section for function calls. Let them know that this is a helpful organization pattern for their upcoming homework assignment.

  * Walk students through how the keyboard input section works. Be sure to point out how the `document.onkeyup` function is being used to capture key presses and how all letters are converted to lower case.

  * From here, point out how the selected letter is stored into a variable and is then checked using `if` statements against the letters `h, d, w, t`.

  * If any of these letters are pressed, then the appropriate methods on the car are triggered.

  * Then proceed to explain how these key presses also trigger the `reWriteStats()` function to run as well.

  * Scroll up to the function's definition, and then point out how the function effectively just prints all of the updated car object data into the console.

* Ask if there are any questions, answer them, and then proceed to Slack out the solution.

    ![/Images/9-CarGameSolved.png](Images/9-CarGameSolved.png)

* Slack out the [video review](https://www.youtube.com/watch?v=jtU6YrNPv7E&feature=youtu.be) for this activity.

- - -

### 13. LUNCH BREAK (30 mins)

- - -

### 14. Everyone Do: Scope & Callbacks (20 mins)

* Open and Slack out [scope-examples.html](../../../../01-Class-Content/03-javascript/01-Activities/33-Scope/scope-examples.html) in `33-Scope`.

* Explain that JavaScript has rules for where we can use the variables we define.

  * Explain that there are some variables we can see *everywhere*. These are called **global variables**.

    * Explain that variables we define inside of `<script>` tags are global.

  * Explain that there are some variables we can only see in *certain sections* of our code.

    * Explain that variables inside of functions are *only* visible inside of the function body.

    * Explain that variables *outside* of the function are still visible.

    * Use `console.log` to illustrate this point.

  * Explain that this concept is called **scope**.

    * Explain that a system like this helps to ensure that the names we use always refer to what we want them to refer to.

* Open and Slack out [scope-unsolved.html](../../../../01-Class-Content/03-javascript/01-Activities/33-Scope/Unsolved/scope-unsolved.html) in `33-Scope/Unsolved`.

  * Have students walk you through each step of the activity.

  * Emphasize the fact that we can assign functions to variables.

    * Create a function expression in the browser console to drive home the point.

  * When you reach the `forEach` statement, demonstrate it before discussing it.

    * Emphasize that this example is mostly for exposure. Students don't need to remember all the details of this discussion—they just need to be aware of these ideas.

  * Then explain the following points:

    * `forEach` is a method on arrays that looks at each element of an array without our having to write a `for` loop.

    * Explain that this means we don't have to write as much "boilerplate" to loop over arrays that already contain elements.

      * Point out that we also don't have to index into the array. Rather, we get the element on each iteration directly.

    * Remind students that we can assign functions to variables.

      * Explain that while `forEach` will automatically loop through an array for us, we still have to tell it what to do with each element.

      * Explain that to do this, we pass it a variable that refers to a function.

        * Demonstrate that we can alternatively define the function inline.

    * Take this opportunity to explain the notion of a callback.

      * Remind students that `forEach` is a function.

      * Remind students that we pass `forEach` *another* function.

      * Explain that the second function is called a **callback**.

        * A useful analogy goes as follows: "When a client wants a website for their business, they tell a designer to make something that looks good, and they give them their favorite developer's phone number. When the designer finishes the site mock-ups, they have to **call the developer**, who uses the design to build the site."

        * Explain that our code is a similar "pipeline."

          * We're the client, and we call `forEach` to do the job of looping through all the elements. We also give it the "number" of "someone" who can do what we want with each element.

          * `forEach` is the designer, and it does its job of looping through the array.

          * Along the way, it calls the "developer," who does other work for us.

* Slack out [scope-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/33-Scope/Solved/scope-solved.html) in `33-Scope/Solved` before moving on.

### 15. Students Do: Question Game (45 mins)

* Do one last activity. (If limited on time, feel free to skip this activity or just go straight to the solution.)

* Slack out the following instructions:

  * **Instructions**

    * Starting from a blank HTML file, create an array with 10 question objects. Each object in the array should be structured as follows: 

      `{ q: "QUESTION", a: "ANSWER" }`

    * Then create code that will ask the user questions, one by one. The user must answer by hitting t (for true) or f (for false).

    * Check the user's answer against the correct answer, and provide them with an alert telling them if they are right or wrong.

    * Bonus: Keep track of the user's score.

    * Hint: Don’t worry about having DRY code to start with. Just focus on getting working code first.

### 16. Instructor Do: Review Activity and Introduce Workbook (10 mins)

* Review [question-game-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/34-QuestionGame/Solved/question-game-solved.html) in `34-QuestionGame` with the class.

* Encourage students to go through the solution themselves at home.

* Introduce the JavaScript Workbook:

  * "For those of you who are new to coding, the last few lessons probably felt overwhelming. It can be tempting to spend lots of time outside of class reviewing lectures and watching youtube videos on JavaScript, but the best way to learn to code is through practice"

  * "We've put together a workbook for you to help you practice the things we've learned this unit. It's quite long, but don't worry, you don't need to read it or work through it from front to back. Instead, you should use it as a reference throughout the class. Spend some time this week reading and practicing the topics that you've struggled with and refer back to it whenever you need."

* Slack out the workbook link `https://javascript-workbook.netlify.com/`

### 17. Group Do: Homework Time (40 min)

* Use the remaining time for students to finish this units first homework. This should be enough time to complete the assignment.

* If students seemed to struggle today, you can use this time to review difficult topics or spend more time on one of the class activities rather than on homework.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=02.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=02.03)
