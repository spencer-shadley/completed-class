# 02.3 Lesson Plan - JavaScript Juggernauts (10:00 AM) 

## Overview

In this class, we will be introducing students to the concept of JavaScript Objects.

`Summary: Complete activities 28-35 in Unit 03 and activities 1-5 in Unit 04`

## Instructor Notes 

* This is a critical unit as it introduces real-world use cases for the programming concepts students learned in the previous unit (JavaScript) and will set them up for success when transitioning to front-end frameworks (React) at the end of the course.

* JavaScript is what ties together HTML and CSS and brings the user experience to life. Let students know that the work they are doing with JavaScript now will pay off heavily as the course proceeds.

* Students will be working with JavaScript throughout the whole course, be sure to remind them often that these are the building blocks for success.

* That said, the activities are designed to encourage independent exploration and experimentation as there are dozens of DOM methods available to developers and we will only scratch the surface here with those most commonly used. So have fun!

## Class Objectives

* By the end of class students will be able to....

  * Understand the use of JavaScript Functions and Objects.

  * To begin utilizing the basic JavaScript learned so far to build simple JavaScript games.

  * Use the console to inspect the `window` object via `this`.

  * Use various web APIs to traverse the DOM.

  * Query the DOM for elements by their selector.

  * Use `setAttribute()` to add styles to specific elements.

  * Create an entire HTML page using only JavaScript.

## Slides

* [2.3 The DOM](https://docs.google.com/presentation/d/10VJ5KHiEK_G4P2-av7h2zNhDDlTRm20kztov2fAT-0s/edit?usp=sharing)

## Time Tracker

* [2.3 Time Tracker](https://drive.google.com/open?id=1Y3Fa1NTc3oTe1C6bRXDeTYTJZPfV4e_eN8_WyGT0mRM)

- - -

### 1. Instructor Do: Good Array (5 mins)

* Open `good-array.html` in `28-GoodArray`.

* The purpose of this activity is to show students that arrays are useful for looping through lists of numbers.

* This example will then be contrasted by the next example, in which we have two arrays that are related to one another, thus requiring the use of an object pattern instead.

### 2. Instructor Do: Joan of Arc (Bad Arrays) (10 mins)

* Open `joan-of-arc-arrays-unsolved.js` in `29-JoanOfArcArrays/Unsolved` in your editor.

* Take a moment to explain this pattern. The first array has various labels and the second array has the descriptions associated with these labels for our Joan of Arc character.

* This is a perfect example of the limitations of arrays—namely, that they are not useful for describing associations across arrays.

* Have students think for a few moments about how they would link these two arrays so that they could easily determine what Joan of Arc's "Real Name" is or what "Scars" she has.

* Point out that any array combination strategy is going to be overly complex and that there is a much simpler solution to this problem.

* Show how the relationship would be with `joan-of-arc-arrays-solved.js` in `29-JoanOfArcArrays/Solved`.

### 3. Instructor Do: Gandalf The Grey Objects (10 mins)

* Now open `gandalf-the-grey-objects.html` in `30-GandalfTheGreyObjects`.

  * Point out how the `gandalf` object takes on a different form where each property matches up with its value.

  * Also, point out how we can access the values for each property using either square bracket notation (`object["property"]`) or dot notation (`object.property`).

  * Based on the current code, ask students: Why would we need to use bracket notation over dot notation?

    * Bracket notation is required when the property we want to access is a string with spaces. e.g. the code `object["multi-word property"]` would work, but `object.multi-word property` or `object."multi-word property"` would not.

    * We also need to use bracket notation whenever we want to pass a variable to be interpreted as an object property. The gandalf-the-grey-objects example demonstrates this:

      ```js
      var ageProperty = "age (est)";
      var years = gandalf[ageProperty];
      alert("My 401k has been gathering interest for " + years + " years!")
      ```

    * Had we just written `gandalf.ageProperty`, it would have returned `undefined`, since the `gandalf` object has no property literally named `ageProperty`.

  * Also point out how these objects are very useful for storing related data and how we will be using them more often later when it comes to APIs and to data recall.

  * Let them know that objects are EXTREMELY important.

### 4. Instructor Do: Gandalf The Grey (Slides) (5 mins)

* Proceed with the slides that visually lay out the structure of JavaScript objects.

* Talk through them as you go, and encourage questions frequently. The more readily students understand objects the better.

### 5. Instructor Do: Gandalf The Grey Objects (Repeat) (5 mins)

* Once again go over the same Gandalf The Grey Objects example. Explain the concepts once more. This time, highlight how object properties can also be _other_ objects. We can access those sub-objects simply by chaining dot or bracket notation: `gandalf.favoriteSong.artist`.

* Feel free to create add-on examples of your own:

  * Consider adding new properties.

  * Ask students how they would retrieve specific properties.

  * Go over how you could utilize properties in combination with one another.

* Make sure students understand the gist, and then Slack out the file to them.

### 6. Partners Do: Basic Objects (10 mins)

* Slack out the following file and instructions:

  * **File**

    * `car-object-unsolved.html` in `31-MyFirstObject/Unsolved`

  * **Instructions**

    * With a partner, spend the next few moments studying the code just Slacked to you.

    * Then write code below each comment to log the relevant information about the provided `car` object.

    * Bonus: If you finish early, create a brand new object of your own. Slack out a snippet of the code to the class when you are done. Be creative!

### 7. Instructor Do: Review Activity (10 mins)

* Walk students through `car-object-solved.html` in `31-MyFirstObject/Solved`. In essence, you just need to show students how to retrieve various properties from the car object and how to execute various methods associated with the car object. In your discussion of the previous activity be sure to mention the following:

  * Objects like the `car` object can have properties as strings, numbers, and booleans as well as **methods** that are functions associated with the object.

  * Be sure to explain briefly that a method is simply a function associated with a specific object.

  * Point out the use of the word `this`. In your discussion of the keyword `this` explain that it is simply a way to reference the object itself.

  * You can explain that in later portions of the class we will effectively be creating many instances of the same object, in which case the `this` keyword let's us know which instance of the object we are referencing.

* See if there are any questions before proceeding to Slack out the solution.

### 8. Instructor Do: Car Game Solved (5 mins)

* Open up [car-game-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/32-CarGame/Solved/car-game-solved.html) in `32-CarGame/Solution` in your browser, and demo how the game works for the class. Make sure to go over how the page is taking in user inputs from the `prompt` to run methods stored within the `car` object.

* Point out that the game can be played indefinitely until the user clicks the Cancel button.

### 9. Students Do: Run that Car (15 mins)

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

### 10. Instructor Do: Review Activity (10 mins)

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

### 11. Everyone Do: Window Object & Scope (15 mins)

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

* Because we named our parameter the same name as a global variable, the parameter takes priority. Suggest that maybe we should use unique names to avoid this problem in the future.

### 12. Students Do: Mini-Project (55 mins)

* Explain that, for the remainder of class, we're going to build something from scratch that utilizes a lot of what they've learned.

* Warn students that some of the requirements for this "mini project" we haven't necessarily gone over in class, but with a bit of Googling and asking their peers, you're confident they'll figure it out.

* Slack out the following instructions:

  * **Instructions**

    * From scratch, create a small application that will do two things:

      1. Check which OS the user is on and alert a message that says, _"Welcome, Windows user!"_ or, _"Welcome, Mac user!"_

      2. Then check their **geolocation** and redirect them to a new page depending on if they are located on the east coast or west coast.

    * You'll need to do some research on how to gather some of this information, but here's a hint: it's going to be part of the `window` object we just looked at.

### 13. Instructor Do: Review Project (10 mins)

* Time permitting (or if you want to cut the project short), review the solution with the students.

* If possible, live-code the solution yourself. Otherwise, open the [index.html](../../../../01-Class-Content/03-javascript/01-Activities/35-LocationRedirect/Solved/index.html) in `35-LocationRedirect`.

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

- - - 

### 14. BREAK (30 mins)

- - -

### 15. Instructor Do: Intro Web APIs (10 mins)

* Open the slide deck [2.3 The DOM](https://docs.google.com/presentation/d/10VJ5KHiEK_G4P2-av7h2zNhDDlTRm20kztov2fAT-0s/edit?usp=sharing) and start on the Web APIs slide. Follow these prompts on their corresponding slides:

  * **Web APIs (Title)**: Today will be an introduction to the DOM.

  *  **What are the three building blocks of the web?**: What are the 3 main components of the web?

  *  **Building Blocks of the Web**: The building blocks of the web are HTML, CSS, and JS.

  *  **How (or where) do we connect all three?**: How do all three of these building blocks come together?

  * **They are connected in the web browser**: The browser brings together HTML, CSS and JavaScript to create interactive webpages and applications.

  * **What is a web browser?**: What exactly is a web browser?

  * **Web Browser**: A web browser, or browser, is a program used to access information on the World Wide Web. Each individual webpage, image, or video can be accessed via a specific Unified Resource Link(URL)

  * **What is an AP?**: What is an API?

  * **Application Programming Interface (API)**: An API (Application Programming Interface) is a set of features and rules that exist inside an application enabling interaction with the it through software. This is opposed to having interaction happen solely through user interaction. 

  * **What are web APIs?**: What are web APIs?

  * **Web APIs**: Web APIs are built into your web browser and contains methods that allow us to manipulate a web page via JavaScript.

* Call on one or two students to provide an answer, then proceed to the first activity of the day.

### 16. Student Do: this Window (10 mins)

* Direct students to the first activity, found in [01-Stu_This-Window](../../../../01-Class-Content/04-web-apis/01-Activities/01-Stu_This-Window)

```md
# This, The Window, and the DOM

In this activity you will `console.log(this)` and dig around inside the returned object, answering some questions along the way.

## Instructions

* First open the provided `index.html` in the browser and navigate to the console.

* What is logged?

  * The `window` object. In this use case, `this` refers to the window. The `window` is an object representation of an open window in a browser.

* Click into the `window` object and begin looking at the numerous properties and methods that it contains.

* Make your way down to `document` and click into it.

* Spend some time looking through the properties and methods contained within `window.document`.
```

### 17. Instructor Do: Review this Window and introduce the DOM (10 mins)

* Return to [slide deck](https://docs.google.com/presentation/d/10VJ5KHiEK_G4P2-av7h2zNhDDlTRm20kztov2fAT-0s/edit?usp=sharing) and follow the remaining prompts corresponding to the slides.

  * **What is window.document?**: What is `window.document`?

  * **The Document Object Model (DOM)**: The DOM is an Object-oriented representation of HTML. It allows us to use JavaScript to interact with the document.  

  * **What is the node tree of this HTML?**: What would the node tree of this HTML look like?

  * **What are the parent, child, and sibling nodes?**: What are the parent, child, and sibling nodes of this node tree?

  * **Node Relationships: Parent, Child, Sibling**: Cover the solution with students and explain the relationships and node tree as a whole.

  * **What is traversing the DOM?**: What is traversing the dom?

* Call on one or two students to provide an answer, then proceed to demoing DOM Traversal.

### 19. Instructor Do: Traverse The DOM (5 mins)

* Navigate to the MDN Docs on [The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) and and ask the class the following question(s):

* What is our root element?

  * The document (#document) 

* Where is the HTML node?

  * document.documentElement (html)

* Where is the head of an HTML page?

  * document.head (head)

* Where is the body of an HTML page?

  * document.body (body)

* We can use these as starting points to begin moving our way down the DOM tree.

* Open the Chrome Dev Tools and enter the following commands one by one.

  ```js
  console.log(document.body);

  console.log(document.body.children);

  console.log(document.body.children[3]);

  console.log(document.body.children[3].childNodes[7]);

  console.log(document.body.children[3].childNodes[7].style.fontSize = "20px");
  ```

  * When using the style method, properties with two words such as font-size become a single word and camelCased. Font-size becomes fontSize.

* Point out the following:

  * `.children` is returned as an Array and to move forward with it, we must specify the index. It returns all children *elements*.

  * `.childNodes` is also returned as an Array and to move forward also requires an index to be given. It returns all children *nodes*.

  * When using the `style` method, properties with two words such as `font-size` become a single word and camelCased. `font-size` becomes `fontSize`.

  * Here is one more example of `.style`.

  ```js
  console.log(document.body.children[3].childNodes[7].parentElement.style.color = "red");
  ```

* For the final slide and demo, return to the slide deck [2.3 The DOM](https://docs.google.com/presentation/d/10VJ5KHiEK_G4P2-av7h2zNhDDlTRm20kztov2fAT-0s/edit?usp=sharing) and follow these prompts on their corresponding slides:

* 19. **Our Goal Today**: The goal of the day is to build a speed reading application. We will receive an input of how many words per millisecond a user would like to read at, and then display one word at a time to our user at the specified speed.

* Ask the class the following question(s):

  * What do we not (yet) know to build this application?

  * What do we think the steps are to build this application?

* Use student answers to transition to the next activity.

### 18. Student Do: Traverse That DOM (10 mins)

* Direct students to the next activity, found in [03-Stu_Traverse-That-DOM](../../../../01-Class-Content/04-web-apis/01-Activities/03-Stu_Traverse-That-DOM/Unsolved)

```md
# Traverse That DOM

In this activity you are going to use the Chrome Dev Console and `.style.property` to change the styling of elements on our page.

## Instructions

* Create an `script`

* Using the provided `index.html`, complete the following

  * Target the div with the ID of `articles`.

    * Change its font size to `50px`.

    * Change its first childs, last child to have a font color of `blue`.

    * Change its previous sibling to have a background color of `black`.

  * Target the div with the ID of `main`.

    * Change its second child node so the text is `underlined`.

    * Change its last child element to have a font size of `50px`.

    * Change its first child element to have a font color of `orange`.
    
    * Change its last child elements parent to have a font size of `40px`.

## Bonus

* Change 3 other elements styles that we did not ask for above.
```

### 19. Instructor Do: Review Traverse That DOM (5 mins)

* Open [03-Stu_Traverse-That-DOM Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/03-Stu_Traverse-That-DOM/Solved) in your IDE and point out the following points to students:

  * We first gather our two main divs into variables for easy access.

  ```js
  var artDiv = document.getElementById("articles");
  var mainDiv = document.getElementById("main");
  ```

  * For each of the following lines, ask a student to explain what the line of code achieves.

  ```js
  artDiv.children[0].lastElementChild.style.color = "white";
  artDiv.children[0].style.fontSize = "50px";
  artDiv.previousElementSibling.style.background = "black";

  mainDiv.childNodes[1].style.textDecoration = "underline";
  mainDiv.lastElementChild.style.fontSize = "50px";
  mainDiv.firstElementChild.style.color = "white";
  ```

* Ask the class, "What other properties or attributes can be set using JS?". 

  * We can change any attribute or property using only JavaScript.

* Ask the class, "How would we do that?". Call on one or two students and then proceed to the next demo.

### 20. Instructor Do: Setting Attributes (10 mins)

* Navigate to [04-Ins_Setting-Attributes index.html](../../../../01-Class-Content/04-web-apis/01-Activities/04-Ins_Setting-Attributes/index.html) and open it in your browser.

* Ask the class, "How do we feel about this style?"

* We can traverse the DOM and set styles via the `.style` method, now we are going to learn about `.setAttribute`.

* `setAttribute` is a DOM method that allows us to add any attribute to an element. We can use it to add styles, hrefs, img srcs, and any other attribute you would like to add.

* If the attribute already exists, the value will be updated. If there is no attribute, a new attribute is added with the specified name and value.

* Navigate to [03-Ins_Setting-Attribute script.js](../../../../01-Class-Content/04-web-apis/01-Activities/03-Ins_Setting-Attributes/script.js) in your IDE.

  * When we uncomment this code and navigate back to the page styles will have been changed and an image added, all via JavaScript.

* Here we used `querySelector` and `querySelectorAll` to gather our elements into variables rather than using the more specific document methods. 

  * We used `querySelector` because it allows us to select an element by tag, class name, or ID. This makes it more flexible than using `getElementById` or `getElementByClassName`.

  * We used `querySelectorAll` because it allows us to select all elements of the same tag, class name, or ID. This is much more useful than `getElementsByTagName` or other group selectors.

  * These two methods are the most useful and versatile because they can be used to target any element we would ever like to target.

* Ask the class, "How was all of the styling done if there is no CSS?"

  * All the styling done to the page uses the method, `.setAttribute`.

  * The `setAttribute` method takes in two arguments, first is the name of the attribute, and the second is its value. i.e., `setAttribute("style", "color:white;");

  * The major difference between setting styles with `.setAttribute` vs the `.style` methods is that when using `setAttribute` we enter the CSS properties and values like we would in a normal external stylesheet or inline styling.

* Answer any questions students may have and let them know its their turn to work with `setAttribute()`.

### 21. Student Do: Setting Attributes (10 mins)

* Direct students to the next activity, found in [05-Stu_Setting-Attributes](../../../../01-Class-Content/04-web-apis/01-Activities/05-Stu_Setting-Attributes/Unsolved).

```md
# Setting Attributes

In this activity you are going to use JavaScript to add `hrefs` to `a` tags, `src` to `img` tags, along with some styles all while traversing the DOM.

## Instructions

* Open `index.html` and familiarize yourself with the structure of the HTML.

* Inside of your provided `script` complete the following: 

  * Give a `src` and `alt` attribute to the 3 provided `img` tags.

  * Give a `href` attribute to the 3 provided `a` tags.`

  * Add styles via `setAttribute` to make the page look decent. Recommended: margins and padding.

* **Hint**: You may need a for loop!
```

### 22. Instructor Do: Review Setting Attributes (5 mins)

* Navigate to [05-Stu_Setting-Attributes script.js](../../../../01-Class-Content/04-web-apis/01-Activities/05-Stu_Setting-Attributes/Solved/script.js) and open it in your IDE, point out the following to students:

  * We first gather all of our elements we would like to target.

  ```js
  var main = document.getElementById("main");
  var sitesEl = document.querySelectorAll("sites");
  var site1El = document.querySelector(".site1");
  var site2El = document.querySelector(".site2");
  var site3El = document.querySelector(".site3");
  var siteTitles = document.querySelectorAll("h4");
  ```

  * We can then use the array returned by `.children` to navigate and setAttributes to elements.

  ```js
  site1El.children[1].setAttribute("href", "https://google.com");
  ```

  * Whenever we use `setAttribute` it takes two arguments. The first being the name of the attribute and the second its value.

  ```js
  site1El.children[1].children[0].setAttribute("src", "http://placekitten.com/200/200");
  site1El.children[1].children[0].setAttribute("style", "padding:10px;");
  ```

* Answer any questions that remain and then dismiss the class for their break.



### 23. END (0 mins)

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=02.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=02.03)
