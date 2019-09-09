# 02.3 Lesson Plan - JavaScript Juggernauts (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

## Overview

In this class, we will be introducing students to the concept of JavaScript Objects.

`Summary: Complete activities 28-34 in Unit 03 and activities 1-7 in Unit 04`

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

* [2.3 JavaScript Juggernauts](https://docs.google.com/presentation/d/1FNWk2sW-UI3f18ndhHOF3GIpCrjxgWA_T3wbzsaGYj4/edit?usp=sharing)

## Time Tracker

* [2.3 Time Tracker](https://drive.google.com/open?id=1ARtFPnNAd5awL3v5yFaj6t2ytrIbQos0)

- - -

### 1. Everyone Do: Window Object & Scope (25 mins)

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

### 2. Instructor Do: Introduce Workbook (10 mins)

* Congratulate students on how much information they've just taken in in the past few days.

* Introduce the JavaScript Workbook:

  * "For those of you who are new to coding, the last few lessons probably felt overwhelming. It can be tempting to spend lots of time outside of class reviewing lectures and watching youtube videos on JavaScript, but the best way to learn to code is through practice"

  * "We've put together a workbook for you to help you practice the things we've learned this unit. It's quite long, but don't worry, you don't need to read it or work through it from front to back. Instead, you should use it as a reference throughout the class. Spend some time this week reading and practicing the topics that you've struggled with and refer back to it whenever you need."

* Slack out the workbook link `https://javascript-workbook.netlify.com/`

### 3. Students Do: Mini-Project (60 mins) (Critical)

* Explain that, for the remainder of class, we're going to build something from scratch that utilizes a lot of what they've learned.

* Warn students that some of the requirements for this "mini project" we haven't necessarily gone over in class, but with a bit of Googling and asking their peers, you're confident they'll figure it out.

* Slack out the following instructions:

  * **Instructions**

    * From scratch, create a small application that will do two things:

      1. Check which OS the user is on and alert a message that says, _"Welcome, Windows user!"_ or, _"Welcome, Mac user!"_

      2. Then check their **geolocation** and redirect them to a new page depending on if they are located on the east coast or west coast.

    * You'll need to do some research on how to gather some of this information, but here's a hint: it's going to be part of the `window` object we just looked at.

### 4. Instructor Do: Review Project (20 mins)

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

### 5. Instructor Do: Homework (5 min)

* At this point, TAs should introduce students to the homework. This typically just means opening the homework solution in the browser and showing students what the final product looks like or showing the video and talking over it.

- - - 

### 6. BREAK (30 mins)

- - -

### 7. Instructor Do: Intro Web APIs (10 mins)

* Open the slide deck [4.1 SlideShow](https://docs.google.com/presentation/d/1TprKO9KQMBEhIC6f0UNvcQkY38lS0XOmZIt6zwzjWdE/edit#slide=id.g5bb6559bdb_0_10) and follow these prompts on their corresponding slides:

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

### 8. Student Do: this Window (10 mins)

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

### 9. Instructor Do: Review this Window and introduce the DOM (10 mins)

* Return to [slide deck](https://docs.google.com/presentation/d/1FNWk2sW-UI3f18ndhHOF3GIpCrjxgWA_T3wbzsaGYj4/edit?usp=sharing) and follow the remaining prompts corresponding to the slides.

  * **What is window.document?**: What is `window.document`?

  * **The Document Object Model (DOM)**: The DOM is an Object-oriented representation of HTML. It allows us to use JavaScript to interact with the document.  

  * **What is the node tree of this HTML?**: What would the node tree of this HTML look like?

  * **What are the parent, child, and sibling nodes?**: What are the parent, child, and sibling nodes of this node tree?

  * **Node Relationships: Parent, Child, Sibling**: Cover the solution with students and explain the relationships and node tree as a whole.

  * **What is traversing the DOM?**: What is traversing the dom?

* Call on one or two students to provide an answer, then proceed to demoing DOM Traversal.

### 10. Instructor Do: Traverse The DOM (10 mins)

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

### 11. Student Do: Traverse That DOM (10 mins)

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

### 12. Instructor Do: Review Traverse That DOM (5 mins)

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

### 13. Instructor Do: Setting Attributes (10 mins)

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

### 14. Student Do: Setting Attributes (10 mins)

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

### 15. Instructor Do: Review Setting Attributes (5 mins)

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

### 16. Instructor Do: Create and Append (10 mins)

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

### 17. Student Do: Look Ma! No HTML! (25 mins)

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

### 18. Instructor Do: Review Look Ma No HTML! (5 mins)

* Navigate to [07-Stu_LookMaNoHTML/Solved](../../../../01-Class-Content/04-web-apis/01-Activities/07-Stu_LookMaNoHTML/Solved)and open the solved `script.js` file in your IDE.

* The solution is split into 4 sections, go through each section with the class.

  * The first portion contains all of our references to existing elements, as well as all of our `.createElement` calls.

  * The next portion sets all of the `textContent` of our created elements.

  * Next we begin the process of appending all of our created elements with the newly modified text content.

  * Finally we go through all of our elements and use `.setAttribute` to change the styles and set image sources.

* Answer any questions students have about the solution and move onto our final topic of the day, timers.

### 19. END (0 mins)

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=02.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=02.03)
