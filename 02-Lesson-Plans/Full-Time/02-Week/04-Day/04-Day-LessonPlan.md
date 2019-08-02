# 4.1 Lesson Plan - Intro to Web APIs (10:00 AM) <!--links--> &nbsp; [⬅️]() &nbsp; [➡️]()

## Overview

Todays class will be students first introduction to the DOM. We are going to use web APIs to get elements, set attributes, create elements, append elements, and even work with timers.

## Instructor Notes

`Complete activities 1-11  in 04-web-apis`

* This is a critical unit as it introduces real-world use cases for the programming concepts students learned in the previous unit (JavaScript) and will set them up for success when transitioning to front-end frameworks (React) at the end of the course.

* JavaScript is what ties together HTML and CSS and brings the user experience to life. Let students know that the work they are doing with JavaScript now will pay off heavily as the course proceeds.

* Students will be working with JavaScript throughout the whole course, be sure to remind them often that these are the building blocks for success.

* That said, the activities are designed to encourage independent exploration and experimentation as there are dozens of DOM methods available to developers and we will only scratch the surface here with those most commonly used. So have fun!

## Class Objectives

* By the end of class students will be able to:

  * Use the console to inspect the `window` object via `this`.

  * Use various web APIs to traverse the DOM.

  * Query the DOM for elements by their selector.

  * Use `setAttribute()` to add styles to specific elements.

  * Create an entire HTML page using only JavaScript.

  * Use timers/intervals to execute code based on some amount of time passing.

  * To use event listeners such as click, keydown, and change.

### 1. Instructor Do: Welcome Students (10 mins)

* Welcome students to class

* Open the slide deck [4.1 SlideShow](https://docs.google.com/presentation/d/1TprKO9KQMBEhIC6f0UNvcQkY38lS0XOmZIt6zwzjWdE/edit#slide=id.g5bb6559bdb_0_10) and follow these prompts on their corresponding slides:

  * **Web APIs (Title)**: Today will be an introduction to the DOM.

  * **What are the three building blocks of the web?**: What are the 3 main components of the web?

  * **Building Blocks of the Web**: The building blocks of the web are HTML, CSS, and JS.

  * **How (or where) do we connect all three?**: How do all three of these building blocks come together?

  * **They are connected in the web browser**: The browser brings together HTML, CSS and JavaScript to create interactive webpages and applications.

  * **What is a web browser?**: What exactly is a web browser?

  * **Web Browser**: A web browser, or browser, is a program used to access information on the World Wide Web. Each individual webpage, image, or video can be accessed via a specific Unified Resource Link(URL)

  * **What is an AP?**: What is an API?

  * **Application Programming Interface (API)**: An API (Application Programming Interface) is a set of features and rules that exist inside an application enabling interaction with the it through software. This is opposed to having interaction happen solely through user interaction. 

  * **What are web APIs?**: What are web APIs?

  * **Web APIs**: Web APIs are built into your web browser and contains methods that allow us to manipulate a web page via JavaScript.

* Call on one or two students to provide an answer, then proceed to the first activity of the day.

### 2. Student Do: this Window (10 mins)

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

### 3. Instructor Do: Review this Window and introduce the DOM (10 mins)

* Return to [slide deck](https://docs.google.com/presentation/d/1TprKO9KQMBEhIC6f0UNvcQkY38lS0XOmZIt6zwzjWdE/edit#slide=id.g5bb6559bdb_0_10) and follow the remaining prompts corresponding to the slides.

  * **What is window.document?**: What is `window.document`?

  * **The Document Object Model (DOM)**: The DOM is an Object-oriented representation of HTML. It allows us to use JavaScript to interact with the document.  

  * **What is the node tree of this HTML?**: What would the node tree of this HTML look like?

  * **What are the parent, child, and sibling nodes?**: What are the parent, child, and sibling nodes of this node tree?

  * **Node Relationships: Parent, Child, Sibling**: Cover the solution with students and explain the relationships and node tree as a whole.

  * **What is traversing the DOM?**: What is traversing the dom?

* Call on one or two students to provide an answer, then proceed to demoing DOM Traversal.

### 4. Instructor Do: Traverse The DOM (10 mins)

* Navigate to the MDN Docs on [The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) and ask the class the following question(s):

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

### 5. Student Do: Traverse That DOM (10 mins)

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

### 6. Instructor Do: Review Traverse That DOM (5 mins)

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

### 7. Instructor Do: Setting Attributes (10 mins)

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

### 8. Student Do: Setting Attributes (10 mins)

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

### 9. Instructor Do: Review Setting Attributes (5 mins)

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

### 10. BREAK (45 mins)

### 11. Instructor Do: Create and Append (10 mins)

* Welcome students back from break and get right into our next topic, creating HTML elements and appending them to the DOM via JavaScript.

* Navigate to [06-Ins_Create-Append/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/06-Ins_Create-Append/Solved/index.html) in your browser and demo its functionality.

  * It will ask for a tag to create using prompts, and append the given element to the page.
  
  * If a proper tag name is not given it will let the user know and not create the element.

* Ask the class, "How was this functionality achieved?"

  * This is done using the DOM methods `.createElement` and `.appendChild`.

  * When using `.createElement` we pass in the name of the tag we would like to create and store it as a variable so we can later add it to the DOM.

  ```js
  var newDiv = document.createElement("div");
  ```

  * For us to show our newly created div on the page, we need to append it to the DOM via an existing element.

  ```js
  document.body.appendChild(newDiv);
  ```

  * The above code would `append` newDiv to the body as a child element.

* Answer any questions before proceeding to the next activity.

### 12. Student Do: Look Ma! No HTML! (30 mins)

* Direct students to the next activity, found in [07-Stu_LookMaNoHTML](../../../../01-Class-Content/04-web-apis/01-Activities/07-Stu_LookMaNoHTML/Unsolved).

```md
# Look Ma! No HTML

In this activity you are going to use DOM methods to create an entire HTML page.

## Instructions

* You have been provided a standard HTML document. 

* You may only work inside your `script`.

* Inside `script` and using only DOM methods, create an entire HTML page. It should include:

  * A centered h1 with a centered h2 under it.

  * A centered image, with a center caption under it.

  * A list of your favorite foods (or some other list of favorites).

  * Some extra styling to all elements.
```

### 13. Instructor Do: Review Look Ma No HTML! (5 mins)

* Navigate to [07-Stu_LookMaNoHTML/Solved](../../../../01-Class-Content/04-web-apis/01-Activities/07-Stu_LookMaNoHTML/Solved)and open the solved `script.js` file in your IDE.

* The solution is split into 4 sections, go through each section with the class.

  * The first portion contains all of our references to existing elements, as well as all of our `.createElement` calls.

  * The next portion sets all of the `textContent` of our created elements.

  * Next we begin the process of appending all of our created elements with the newly modified text content.

  * Finally we go through all of our elements and use `.setAttribute` to change the styles and set image sources.

* Answer any questions students have about the solution and move onto our final topic of the day, timers.

### 14. Instructor Do: Timers and Intervals (10 mins)

* Executing code on a timer or interval allows us to set some amount of time to pass between functionality.

* Ask the class, "Where are timers used in applications?"

  * Countdowns

  * Calendars

  * Games

* Navigate to [08-Ins_Timers-Intervals](../../../../01-Class-Content/04-web-apis/01-Activities/08-Ins_Timers-Intervals) and open the `index.html` in your browser. Demo the application to students and point out the following:

  * After the countdown completes, an image is loaded to the browser all without user interaction.

* Ask the class, "What allowed us to do this?"

  * The `setInterval` function allows us to complete code after a specific amount of time has passed.

* Navigate to [08-Ins_Timers-Intervals script.js](../../../../01-Class-Content/04-web-apis/01-Activities/08-Ins_Timers-Intervals/script.js) and open it in your IDE. Explain the following points to students:

  * First we declare our `setInterval` function and assign it to a variable. We will get to why we store it in a variable at the end.

  ```js
  var timerInterval = setInterval(function() {
  ```

  * Next, we decrement our `secondsLeft` variable that we initially set to `10`.

  ```js
  secondsLeft--;
  ```

  * As each second passes we set the textContent of our `timeEl` to display the `secondsLeft` variable concatenated with a string. If our `secondsLeft` is 0, we then `clearInterval` and execute our `sendMessage` function.

  ```js
  timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    sendMessage();
  }
  ```

* Sometimes programmers want functionality to happen after a set period of time, and not all right away. We use timers to achieve this result.

* `setTimeout` and `setInterval` are two methods that allow for us to execute code based on time.

  * These two methods are actually above the `document` object and are attached directly to the `window`.

* When using either of these timer methods, The first parameter is a function to be executed. The second parameter indicates the amount of time in milliseconds before execution.

  ```js
  setTimeout(function(){
    console.log("complete");
  }, 1000);

  setInterval(function(){
    console.log("this will show every second");
  }, 1000)
  ```

* `setTimeout` will execute the body of the function one time, once the allotted amount of time has passed.

  * `setInterval` will execute the body of the function every X amount of milliseconds as specified in the second argument to the `setInterval` function.

* Ask the class why they think we might need to clear an interval that we started.

  * If we do not `clearInterval`, the interval would continue to run indefinitely. We stored our `setInterval` function in a variable so we could pass that instance into our `clearInterval`, stopping execution.

  * `setTimeout` has its own method for stopping execution, `clearTimeout`.

* Answer any questions students may have about the demo. 

### 15. Student Do: Speed Reader (20 mins)

* Direct students to the final activity of class, in [09-Stu_SpeedReader](../../../../01-Class-Content/04-web-apis/01-Activities/09-Stu_SpeedReader/Unsolved).

```md
# Speed Reader 

In this activity you are going to create a speed reading application. It will input a single word on the screen at a time, changing to the next word after 1 second. This equates to reading at 60 Words Per Minute (WPM).

## Instructions

* The app should countdown from 5, and when the countdown is finished it should print one word to the screen every second. Each word replaces the other.

* Open `index.html` and create the necessary HTML. You will need at least 3 elements.

* Open `script`.

  * The two function names have been created for you, as well as a poem to speed read.

* Fill out the necessary code that would create a countdown timer. When that timer completes, it should dissapear and speed reading should begin.
```

### 16. Instructor Do: Review Speed Reader (10 mins)

* Navigate to [09-Stu_SpeedReader/Solved](../../../../01-Class-Content/04-web-apis/01-Activities/09-Stu_SpeedReader/Solved)

* Open the solved `script` file and show students the completed solution.

* Point out these main points to students:

  * In our `prepareRead` function we store our interval in a variable so we can clear it later.

  ```js
  var timeInterval = setInterval(function() {
  ```

  * When the timer has run out, we empty the `textContent` of the `timerEl` and then execute our `speedRead` function.

  ```js
  if (timeLeft === 0) {
    timerEl.textContent = " ";
    speedRead();
    clearInterval(timeInterval);
  }
  ```

  * We used a prompt to ask the user to enter the speed at which they would like to read, we passed that response in as the second argument of our `speedRead` setInterval.

  ```js
  }, speed);
  ```

  * As opposed to a fixed value, i.e.,

   ```js
   }, 1000);
   ```

  * In the beginning of our `speedRead` function we append our `bodyEl`, generated via `createElement`, to the `mainEl` of our HTML page.

  ```js
  mainEl.append(bodyEl);
  ```

  * We use an `if` statement to check whether the piece we are reading is over. When `words[i]` begins to evaluate to undefined and not a word, we terminate the interval via `clearInterval`. As long as `words[i]` evaluates to a word from our array, we make the content of our `mainEl` reflect that.

  ```js
  if (words[i] === undefined) {
    clearInterval(poemInterval);
  } else {
    mainEl.textContent = words[i];
    i++;
  }
  ```

### 17. Instructor Do: Demo Events (10 mins)

* Open [fs-ground-04-web-APIs-event-demo](https://coding-boot-camp.github.io/fs-ground-04-web-APIs-event-demo/) and demonstrate the application functionality:

  * We can add people to the list.
  
  * Clicking `edit` next to any name opens a modal.

  * We can add details about the person and `save` the data.

  * We can return to any person on the list, and see that the details are still there. 

  * 📝 Our form is not routing us to a new page! How?

* Ask the class the following question(s):

  * "How would we build this application?"

  * Use student answers to transition to the next activity.

### 18. Instructor Do: Pseudocode Modal Demo (10 min)

* Open a new (blank) file in your IDE and lead students in outlining the steps to build the modal activity in pseudocode. Refer to the following pseudocode example. There is no one *right* solution. The purpose of this activity is to reinforce problem solving strategies and prepare students for technical interview questions.

* Ask the class the following question(s):

  * "What is the first thing our app needs so a user can add another user to the list?"

  * We need an input field for `name`.

  * We need some way to gather the data from `name` when `Add Person` is pressed.

* Ask the class the following question(s):

  * "When a user adds a new user to the HTML form and clicks `Add Person`, what happens next?"

  * We need to dynamically create a new list item.

  * We append an `edit` button to that new list item.

  * Then we append the new list item to the main people list.

* Ask the class the following question(s):

  * "What needs to happen when a user clicks the "edit" button?"

  * The modal needs to display on the page, and the contents of the modal should populate with details about the person that we clicked.

* Ask the class the following question(s):

  * "What needs to happen when a user clicks the `save` button?"

  * The modal needs to disappear.

  * We need some way of keeping track of which person has which description.

* Ask the class the following question(s):

  * 'How can we make our web applications more interactive?'

* Use student answers to transition to the next demo.

### 17.  Instructor Do: On Click Demo  (5 min)

* Open [10-Ins_Onclick/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/10-Ins_Onclick/index.html) in the browser and demonstrate its functionality:

  * When we click on the toggle switch, the background color of the navigation and the footer both change colors.

* Open [10-Ins_Onclick/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/10-Ins_Onclick/script.js) in your IDE and point out the following:

  * We assign each queried element to a variable so that we can reuse it.

  ```js
  var themeSwitcher = document.querySelector("#theme-switcher");
  var container = document.querySelector(".container");
  ```

  * `addEventListener` is the DOM method responsible for listening to events on an element.

  * `addEventListener` has 2 required parameters: The type of event to listen for and a callback function to execute when that event is triggered.

  ```js
  themeSwitcher.addEventListener("click", function() {
    if (mode === "dark") {
      mode = "light";
      container.setAttribute("class", "light");
    } else {
      mode = "dark";
      container.setAttribute("class", "dark");
    }
  });
  ```

### 18.  Students Do: addEventListener (15 min)

* Direct students to the next activity, found in [11-Stu_Onclick/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/11-Stu_Onclick/Unsolved)

```md
# addEventListener On Click

In this activity, we are going to create a button that increments a counter when clicked.

## Instructions

* In a file called `index.html`, create a button containing the string "Increment".

* In a file called `script.js`, create an event listener with a callback that increments the counter and displays the updated count on the webpage.

* Add a button that decrements the counter when clicked.

## Bonus

* Add some code to ensure that the count never gets below 0.
```

### 19. Instructor Do: Review OnClick (5 min)

* Open the file [11-Stu_Onclick/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/11-Stu_Onclick/Solved/index.html) in the browser.

  * Clicking on the increment or decrement buttons raises or lowers our number dependant on which button we click.

  * The count in the middle gets updated every time the button gets pressed.

  * The count never falls below 0.

* Open [11-Stu_Onclick/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/11-Stu_Onclick/Solved/script.js) in your IDE.

  * We initialize global variables for `count` variable, `incrementEl`, and the `decrementEl` elements in DOM.

  ```js
  var count = 0;
  var incrementEl = document.querySelector("#increment");
  var decrementEl = document.querySelector("#decrement");
  ```

  * The second argument of `addEventListener` is an anonymous callback function. This function will execute the body of the callback each time the event is triggered.

  ```js
  incrementEl.addEventListener("click", function() {
    count++;
    setCounterText();
  });
  ```

  * 🗒 Note that many students may have appended the count to the page inline instead of breaking it out into its own function.

  * To complete the bonus we need a conditional that ensures that the count only decrements if the current value is greater than 0.

  ```js
  decrementEl.addEventListener("click", function() {
    if(count > 0) {
      count--;
      setCounterText();
    }
  });
  ```

### 20. END (0 min)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
