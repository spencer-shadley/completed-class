## 2.3 Lesson Plan - JavaScript Juggernauts (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

### Slideshow

* This lesson's slides are available on Google Drive here: [02-3 JavaScript Juggernauts](https://docs.google.com/presentation/d/1xpLa9Oih1piAcxiw-XL8Gxg-IMrHaaU2bqNS-u9FfpM/edit?usp=sharing)

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

`Summary: Complete activities 28-35 in Unit 03`

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

### 5. Instructor Do: Gandalf The Grey Objects (10 mins) (Critical)

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

### 6. Instructor Do: Gandalf The Grey Visualized (Slides) (5 mins) (Critical)

* Proceed with the slides that visually lay out the structure of JavaScript objects.

* Talk through them as you go, and encourage questions frequently. The more readily students understand objects the better.

### 7. Instructor Do: Gandalf The Grey (Repeat) (10 mins) (Critical)

* Once again go over the same Gandalf The Grey Objects example. Explain the concepts once more. This time, highlight how object properties can also be _other_ objects. We can access those sub-objects simply by chaining dot or bracket notation: `gandalf.favoriteSong.artist`.

* Feel free to create add-on examples of your own:

  * Consider adding new properties.

  * Ask students how they would retrieve specific properties.

  * Go over how you could utilize properties in combination with one another.

* Make sure students understand the gist, and then Slack out the file to them.

### 8. Partners Do: Basic Objects (10 mins) (Critical)

* Slack out the following file and instructions:

  * **File**

    * `car-object-unsolved.html` in `31-MyFirstObject/Unsolved`

  * **Instructions**

    * With a partner, spend the next few moments studying the code just Slacked to you.

    * Then write code below each comment to log the relevant information about the provided `car` object.

    * Bonus: If you finish early, create a brand new object of your own. Slack out a snippet of the code to the class when you are done. Be creative!


### 9. Instructor Do: Review Activity (10 mins) (Critical)

* Walk students through [car-object-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/32-CarGame/Solved/car-game-solved.html) in `31-MyFirstObject/Solved`. In essence, you just need to show students how to retrieve various properties from the car object and how to execute various methods associated with the car object. In your discussion of the previous activity be sure to mention the following:

  * Objects like the `car` object can have properties as strings, numbers, and booleans as well as **methods** that are functions associated with the object.

  * Be sure to explain briefly that a method is simply a function associated with a specific object.

  * Point out the use of the word `this`. In your discussion of the keyword `this` explain that it is simply a way to reference the object itself.

  * You can explain that in later portions of the class we will effectively be creating many instances of the same object, in which case the `this` keyword lets us know which instance of the object we are referencing.

* See if there are any questions before proceeding to Slack out the solution.

### 10. Instructor Do: Car Game Solved (Browser) (5 mins)

* Open up [car-game-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/32-CarGame/Solved/car-game-solved.html) in `32-CarGame/Solution` in your browser, and demo how the game works for the class. Make sure to go over how the page is taking in user inputs from the `prompt` to run methods stored within the `car` object.

* Point out that the game can be played indefinitely until the user clicks the Cancel button.

### 11. Students Do: Run that Car (15 mins)

* Slack out the following files and instructions. It's up to you whether students work individually or whether they work in pairs.

  * **File**

    * `car-game-unsolved.html` in `32-CarGame/Unsolved`

  * **Instructions**

    * Using the unsolved code as a starting point, create a complete application that meets the following specifications:

      * Users can enter keyboard input (letters).

      * Each of the car's methods are assigned to a key.

      * When the user presses a key, it calls the appropriate function.

      * These letters also trigger a global function called `reWriteStats()` that logs the car's make, model, color, mileage, and `isWorking` status to the console.

    * **HINT:** A "while loop" is already set up for you that will continue to ask the user for input as long as they don't press Cancel. Your logic will go inside this loop.

    * **BONUS:** Prevent the user from being able to drive the car if it needs a tune-up.

### 12. Instructor Do: Review Activity (10 mins)

* Open [car-game-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/32-CarGame/Solved/car-game-solved.html) in `32-CarGame/Solution` in both the browser and in your editor.

* First, show students how the application works once more.

* Then walk students through the solution.

  * In demonstrating the solution, first point out how the code is organized.

  * Talk about how the code is effectively organized into a section for variables, a section for functions, and a section for function calls. Let them know that this is a helpful organization pattern for their upcoming homework assignment.

  * Walk students through how the `while loop` works. Unlike a `for loop`, which has a pre-defined end, this will continue to run until the condition (`letter !== null`) is no longer true.

  * This is how we can let the user play the game for as long as they want. As soon as they click Cancel, however, the `letter` variable will be set to `null`. Thus, our condition is no longer true.

  * If the user presses OK, however, the selected letter is stored into a variable and is then checked using `if` statements against the letters `h, d, w, t`.

  * If any of these letters are pressed, then the appropriate methods on the car are triggered.

  * Then proceed to explain how these key presses also trigger the `reWriteStats()` function to run as well.

  * Scroll up to the function's definition, and then point out how the function effectively just prints all of the updated car object data into the console.

* Ask if there are any questions, answer them, and then proceed to Slack out the solution.

  ```js
    while (letter !== null) {
      // Prompt user to input a letter
      letter = prompt('Type "h" to honk, "d" to drive to work, "w" to drive around the world, or "t" to get a tuneup.');

      // If the letter is h, run the following functions/methods.
      if (letter === "h") {
        car.honk();
        reWriteStats();
      }
      // If the letter is d, run the following functions/methods.
      else if (letter === "d" && car.isWorking) {
        car.driveToWork();
        reWriteStats();
      }
      // If the letter is w, run the following functions/methods.
      else if (letter === "w" && car.isWorking) {
        car.driveAroundWorld();
        reWriteStats();
      }
      // If the letter is t, run the following functions/methods.
      else if (letter === "t") {
        car.getTuneUp();
        reWriteStats();
      }
    }
  ```

- - -

### 13. LUNCH BREAK (30 mins)

- - -

### 14. Students Do: Question Game (Optional) (30 mins)

* _Only do this activity if you have time. The window/scope and mini-project sections are much more important for students to do._

* Slack out the following instructions:

  * **Instructions**

    * Starting from a blank HTML file, create an array with 10 question objects. Each object in the array should be structured as follows: 

      `{ q: "QUESTION", a: "ANSWER" }`

    * Then create code that will ask the user questions, one by one. The user must answer by hitting OK (for true) or Cancel (for false).

    * Check the user's answer against the correct answer, and provide them with an alert telling them if they are right or wrong.

    * **BONUS:** Keep track of the user's score.

### 15. Everyone Do: Window Object & Scope (15 mins) (High)

* Open and Slack out [window-object.html](../../../../01-Class-Content/03-javascript/01-Activities/34-WindowObject/window-object.html) in `34-WindowObject`.

* Recap that objects are useful for storing related data and methods (or functions). We can make our own objects in JavaScript and access built-in objects. One such built-in object is the `window` object.

* In `window-object.html`, show that we are console.logging `window`. Inspect it in the browser and see if students recognize anything. Hopefully someone points out the `alert` method. Explain that `alert` actually belongs to the window object, we just don't have to write `window.alert()` (even though that still works).

* The window object contains a lot of other helpful information and methods for us to use, including the user's screen width and the URL they are currently visiting:

  ```js
    console.log(window.screen.width);
    console.log(window.location.href);
  ```

* Explain that the `window` object is a **global variable**. A global variable is a variable that can be seen _everywhere_. Scroll down to the first function and point out that `window` is still available inside this function:

  ```js
    function firstFunction() {
      console.log(window.screen.width);
    }

    firstFunction();
  ```

* In the next example, though, we added a parameter to the function, which we named "window." So what will be console.logged here?

  ```js
    function secondFunction(window) {
      console.log(window);
    }

    secondFunction("Hello");
  ```

* Explain that variables we create in a function take priority over global variables, if they have the same name. This is one rule of **scope** we should be aware of.

* Explain that **scope** is an important concept in JavaScript and something we will continue to practice throughout the course. High-level, it has to do with where variables are created and which functions have access to those variables.

* Scroll down to the third example:

  ```js
    var food = "Pizza";
    var drink = "Water";

    function thirdFunction(drink) {
      console.log(food);

      console.log(drink);
    }

    thirdFunction("Orange Juice");
  ```

* Explain that variables `food` and `drink` are global variables, because we defined them outside of any functions. That means `thirdFunction` can access and console.log them. Ask students what the line `console.log(drink)` will print, though.

* Because we named our parameter the same name as a global variable, the parameter takes priority. Suggest that maybe we should use unique names to avoid this problem in the future!

### 16. Instructor Do: Introduce Workbook (5 mins)

* Congratulate students on how much information they've just taken in in the past few days.

* Introduce the JavaScript Workbook:

  * "For those of you who are new to coding, the last few lessons probably felt overwhelming. It can be tempting to spend lots of time outside of class reviewing lectures and watching youtube videos on JavaScript, but the best way to learn to code is through practice"

  * "We've put together a workbook for you to help you practice the things we've learned this unit. It's quite long, but don't worry, you don't need to read it or work through it from front to back. Instead, you should use it as a reference throughout the class. Spend some time this week reading and practicing the topics that you've struggled with and refer back to it whenever you need."

* Slack out the workbook link `https://javascript-workbook.netlify.com/`

### 17. Students Do: Mini-Project (60 mins) (Critical)

* Explain that, for the remainder of class, we're going to build something from scratch that utilizes a lot of what they've learned.

* Warn students that some of the requirements for this "mini project" we haven't necessarily gone over in class, but with a bit of Googling and asking their peers, you're confident they'll figure it out.

* Slack out the following instructions:

  * **Instructions**

    * From scratch, create a small application that will do two things:

      1. Check which OS the user is on and alert a message that says, _"Welcome, Windows user!"_ or, _"Welcome, Mac user!"_

      2. Then check their **geolocation** and redirect them to a new page depending on if they are located on the east coast or west coast.

    * You'll need to do some research on how to gather some of this information, but here's a hint: it's going to be part of the `window` object we just looked at.

### 18. Instructor Do: Review Project (15 mins)

* If possible, live-code the solution yourself. Otherwise, open the solution file [index.html](../../../../01-Class-Content/03-javascript/01-Activities/35-LocationRedirect/Solved/index.html) in `35-LocationRedirect`.

* Start at the bottom, highlighting how we're using `navigator.userAgent` (or `window.navigator.userAgent`) to gather information about the user's machine and `indexOf` to check for OS-specific words.

  ```js
    // See if user is on Windows
    if (navigator.userAgent.indexOf("Windows") !== -1) {
      alert ("Welcome, Windows user!");
      getLocation();
    } 
    // Then check for macOS
    else if (navigator.userAgent.indexOf("Mac") !== -1) {
      alert("Welcome, Mac user!");
      getLocation();
    }
    // I give up
    else {
      alert("I don't know what you're using...");
    }
  ```

* If the user is on Windows or Mac, we'll call our `getLocation()` function:

  ```js
    function getLocation() {
      // Make sure browser supports this feature
      if (navigator.geolocation) {
        // Provide our showPosition() function to getCurrentPosition
        navigator.geolocation.getCurrentPosition(showPosition);
      } 
      else {
        alert("Geolocation is not supported by this browser.");
      }
    }
  ```

* Explain that not every browser supports geolocation, so we first need to check if that property exists on `navigator`. If it does, then we can call the `getCurrentPosition` method. This is an interesting method, though, because the thing we're supposed to pass it is _another_ function, which we've called `showPosition`.

* Don't go too deep into callbacks yet. Just explain that `getCurrentPosition` will call our `showPosition` function once it has data for us.

* Finally, go over the `showPosition` function:

  ```js
    function showPosition(position) {
      // Grab coordinates from the given object
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);

      // Call our next function, passing on the coordinates
      redirect(lat, lon);
    }

    function redirect(lat, lon) {
      // Compare latitude and longitude values
      if (lat >= 30 && lon >= 90) {
        // Redirect to a new page
        window.location.href = "westcoast.html";
      } 
      else {
        window.location.href = "eastcoast.html";
      }
    }
  ```

* Mention that we looked at `window.location.href` before when we wanted to _get_ the current URL. But we can also use the same property to _change_ the URL and take the user to another page or HTML document.

### 19. Groups Do: Homework (20 mins)

* Use the remaining class time to work on this unit's homework or answer any lingering questions.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=02.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=02.03)
