# 03-Day Lesson Plan - JavaScript Juggernauts <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

## Overview

In this class, we will be introducing students to the concept of JavaScript Objects.

`Summary: Complete activities 28-34 in Unit 03 and activities 1 and 2 from Unit 04`

##### Instructor Notes

* This is a critical unit as it introduces real-world use cases for the programming concepts students learned in the previous unit (JavaScript) and will set them up for success when transitioning to front-end frameworks (React) at the end of the course.

* JavaScript is what ties together HTML and CSS and brings the user experience to life. Let students know that the work they are doing with JavaScript now will pay off heavily as the course proceeds.

* Students will be working with JavaScript throughout the whole course, be sure to remind them often that these are the building blocks for success.

* That said, the activities are designed to encourage independent exploration and experimentation as there are dozens of DOM methods available to developers and we will only scratch the surface here with those most commonly used. So have fun!

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

### 11. Students Do: Run that Car (35 mins)

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

### 14. Everyone Do: Scope & Callbacks (25 mins)

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

### 15. Instructor Do: Welcome Students (10 mins)

* Welcome students to class

* Open the slide deck [2.3 Web API SlideShow](https://docs.google.com/presentation/d/1TprKO9KQMBEhIC6f0UNvcQkY38lS0XOmZIt6zwzjWdE/edit#slide=id.g5bb6559bdb_0_10) and follow these prompts on their corresponding slides:

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

* Return to [slide deck](https://docs.google.com/presentation/d/1TprKO9KQMBEhIC6f0UNvcQkY38lS0XOmZIt6zwzjWdE/edit#slide=id.g5bb6559bdb_0_10) and follow the remaining prompts corresponding to the slides.

  * **What is window.document?**: What is `window.document`?

  * **The Document Object Model (DOM)**: The DOM is an Object-oriented representation of HTML. It allows us to use JavaScript to interact with the document.  

  * **What is the node tree of this HTML?**: What would the node tree of this HTML look like?

  * **What are the parent, child, and sibling nodes?**: What are the parent, child, and sibling nodes of this node tree?

  * **Node Relationships: Parent, Child, Sibling**: Cover the solution with students and explain the relationships and node tree as a whole.

  * **What is traversing the DOM?**: What is traversing the dom?

* Call on one or two students to provide an answer, then proceed to demoing DOM Traversal.

### 18. Instructor Do: Traverse The DOM (10 mins)

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

* For the final slide and demo, return to the slide deck [4.1 SlideShow](https://docs.google.com/presentation/d/1TprKO9KQMBEhIC6f0UNvcQkY38lS0XOmZIt6zwzjWdE/edit#slide=id.g5bb6559bdb_0_10) and follow these prompts on their corresponding slides:

* 19. **Our Goal Today**: The goal of the day is to build a speed reading application. We will receive an input of how many words per millisecond a user would like to read at, and then display one word at a time to our user at the specified speed.

* Ask the class the following question(s):

  * What do we not (yet) know to build this application?

  * What do we think the steps are to build this application?

* Use student answers to transition to the next activity.

### 19. Student Do: Traverse That DOM (10 mins)

* Direct students to the next activity, found in [02-Stu_Traverse-That-DOM](../../../../01-Class-Content/04-web-apis/01-Activities/02-Stu_Traverse-That-DOM/Unsolved)

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

### 20. Instructor Do: Review Traverse That DOM (5 mins)

* Open [02-Stu_Traverse-That-DOM Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/02-Stu_Traverse-That-DOM/Solved) in your IDE and point out the following points to students:

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

### 21. Instructor Do: Setting Attributes (10 mins)

* Navigate to [03-Ins_Setting-Attribute index.html](../../../../01-Class-Content/04-web-apis/01-Activities/03-Ins_Setting-Attribute/index.html) and open it in your browser.

* Ask the class, "How do we feel about this style?"

* We can traverse the DOM and set styles via the `.style` method, now we are going to learn about `.setAttribute`.

* `setAttribute` is a DOM method that allows us to add any attribute to an element. We can use it to add styles, hrefs, img srcs, and any other attribute you would like to add.

* If the attribute already exists, the value will be updated. If there is no attribute, a new attribute is added with the specified name and value.

* Navigate to [03-Ins_Setting-Attribute script.js](../../../../01-Class-Content/04-web-apis/01-Activities/03-Ins_Setting-Attribute/script.js) in your IDE.

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

### 22. Student Do: Setting Attributes (10 mins)

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

### 23. Instructor Do: Review Setting Attributes (5 mins)

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

### 24. END (0 mins)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
