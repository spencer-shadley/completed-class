## 05-Day Lesson Plan - jQuery Calculator <!--links--> &nbsp; [⬅️](../04-Day/04-Day-LessonPlan.md) &nbsp; [➡️](../../03-Week/01-Day/01-Day-LessonPlan.md)

## Overview

In this class, we will further students' understanding of DOM Manipulation using events. We will create an activity that dynamically creates modals for each item in a list, and will work with client side storage.

## Instructor Notes

* `Summary: Complete activities 10-25 in Unit 04`

* Today's class is focused on providing students with additional exposure to the DOM, this time focusing on events. The primary focus of today should be to ensure that students feel comfortable setting up click listeners and using their callbacks to manipulate the DOM.

* This is students first exposure to persistence in their web applications. Its going to be very exciting so use that energy to your advantage. Get students interested in the fact that they can now take their applications to the next level with persistent data.

* The code associated with local and session storage may seem simple, but the concepts and their use cases may be confusing for students seeing these things for the first time.

* Students will be pseudocoding the ToDo List application at the beginning of class. Familiarize yourself with the code and functionality to more easily help students through this process.

## Class Objectives

* By the end of class students will be able to:

  * Use event listeners such as click, keydown, and change.

  * Stop the propagation of events.

  * Dynamically generate DOM elements whose events are delegated.

  * Use local storage and session storage.

  * Describe the differences between the two.

  * Identify when client side storage is the right solution.

  * Use all of the units concepts to build a persistent ToDo list as well as a Work Timer.

## Slides

N/A

## Time Tracker


- - -

### 1. Instructor Do: Intro to event.preventDefault (10 min)

* We will be spending some more time with forms. We will be learning about how to prevent some of the default form behavior so that we can manipulate data before sending it to a server.

* Ask the class the following question(s):

  * "What do you remember about forms?"

  * There are several type of inputs including check boxes, text fields, radio buttons, and select.

  * Forms also have default behaviors that occur on submission.

* Explain that if a button inside a `<form>` element is clicked, the information in all texts fields within the page is cleared out. This is default behavior that the browser enforces with all buttons within the form.

* Ask the students why this may be a problem.

  * We may want to retain that information on the page after the form has been submitted.

  * We could have other buttons within the form that should not submit the results.

* To avoid this default behavior, we use method called prevent default. 

* Open [12-Ins_Preventing_Default_Events/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/12-Ins_Preventing_Default_Events/script.js) in your IDE.

  * We pass the callback to `addEventListener`, which has a parameter that represents the event object.

  ```js
  submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    console.log(event);
    
    var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
    submissionResponseEl.textContent = response;
  });
  ```

* Open [12-Ins_Preventing_Default_Events/index.js](../../../../01-Class-Content/04-web-apis/01-Activities/12-Ins_Preventing_Default_Events/index.html) in your browser and open the dev tools. 

  * Enter values into the input fields and click on the submit button.

  * Demonstrate that the entire click object appears in the console.

  * In the console, expand the `event` object and let students know that the event object is a large object that contains lots of data about the mouse event.

* Ask the class the following question(s):

  * What are these properties are used for?"

  * `ctrlKey` and `altKey` are booleans used to describe whether or not the user was holding down the key while they clicked.

  * If students ask about properties that you're unsure about, demonstrate that we can find out how they work by searching the [Mouse Event section of Mozilla's Documentation](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent).

* The event object contains metadata about a users interaction with the webpage. While the event we just observed is a mouse event, there are also keyboard events, mouse scroll events, and more.

* Return to [12-Ins_Preventing_Default_Events/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/12-Ins_Preventing_Default_Events/script.js) in your IDE and comment out the `event.preventDefault()` line. 

* With the console open submit values again.

  * We click the button and we submit the form. 
  
  * When this happens, the event object appears in the console for a brief moment and all inputs are cleared. 
  
  * This is the default behavior for form submissions. In order to prevent this default behavior, we use the `event.preventDefault` method.

* Answer any questions before moving onto the next activity.

### 2. Student Do: Tip Calculator (15 min)

* Direct students to the next activity, found in[13-Stu_Preventing_Default_Events/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/13-Stu_Preventing_Default_Events/Unsolved)

```md
# Preventing Default Events

In this activity, we are going to create a form that calculates a suggested tip amount based off of the total of the bill.

## Instructions

* In a file called `index.html`, create a form with the following elements:

1. An input for the total price of the meal

2. An input for the tip percentage

3. A button to calculate the tip

* In a file called `script.js`, create an event listener that utilizes the values from the input fields to calculate the reccommended tip and the new total of the bill with tip included.

* Once these values are calculated, display them on the page.

## Bonus 

* Add a feature that gives users the option to evenly split the total between any number of people. Make sure to add code to ensure that the split total will be rounded to two decimal places. 

## Hint

* In JavaScript, we have a function that rounds a number to a given point called `toFixed()`. For more information, visit the docs at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
```

### 3. Instructor Do: Review Tip Calculator (5 min)

* Navigate to [13-Stu_Preventing_Default_Events/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/13-Stu_Preventing_Default_Events/Solved/index.html) and open it in your browser.

* Enter a total into the input field and click the `Calculate Tip` button. 

* Click the `I'm feeling lucky` button and point out that the tip changes with every click.

* Split the tip between any number of people and point out that the input field has increment and decrement buttons built in.

  * The built in buttons are due to the attribute `type=number`. The input field also has the attribute `min=0` which prevents the user from decrementing once they reach zero.

* Open [13-Stu_Preventing_Default_Events/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/13-Stu_Preventing_Default_Events/Solved/script.js) in your IDE and point out the following:

  * No functions are actually executed until the bottom of the file. 

* Some students may have chosen to write the callback function inline. This is completely fine. 

* Ask the class the following question(s):

  * "Why might it be helpful to write a separate function for that code?

  * Writing a named function helps separate the logic from the event listener.

  * Creating a named function also allows the function to be reused throughout the program. Any other function could call `addTip` if needed.

  ```js
  submitEl.addEventListener("click", addTip);
  ```

  * We still have access to the click event inside `addTip` since it is being called as a callback in the `addEventListener` function.

  ```js
  function addTip() {
  event.preventDefault();
  ```

  * We get the values from the total and tip percentage input fields, then call `calculateTip`. Remind the students that the value from input fields of `type=text` are always strings.
  
  ```js
  var tipPercentage = tipEl.value;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  ```

  * `toFixed(n)` is a number prototype method that returns a number and rounds it to the *nth* decimal place. Here, `n` is a variable that we use to describe an unspecified number in a series of numbers. We use this method because we want our total to be rounded to the nearest cent.

  * Even though `total` and `tipPercentage` are strings, we can still multiply them. This is because in JavaScript, the `*` operator coerces both arguments from strings into numbers before multiplying them. This is also the case for all arithmetic operators *except* for addition.

  ```js
  function calculateTip(total, tipPercentage) {
    var roundedResult = (total * tipPercentage).toFixed(2);
    return roundedResult;
  }
  ```

  * Since both `total` and `tipAmount` are strings, we need to convert them into numbers before adding them. Remind students that the `+` operator concatenates strings.

  * To do this, we use a global method called `parseFloat()` which takes a string as an argument and returns a decimal number, or floating point number. 
  
  * If any student asks what a floating point number is, simply explain that it is a number that contains a fraction. We use the term `float` to differentiate from the other type of number, `Integer`.

  ```js
  function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
  }
  ```

  * Next point out that the bonus can be achieved by taking the text content of the `total` element and dividing it by the value from a field that describes how many people to split the bill between.

  * Lastly, `toFixed` should be used to ensure that the split amount only contains two decimal places.

  * Remind the students that they must use `event.preventDefault` to stop the form from automatically attempting to submit when the `split` button is clicked.

  ```js
  function splitTotal() {
    event.preventDefault();

    var total = document.querySelector("#new-total").textContent;
    var numPeople = document.querySelector("#num-people").value;
    
    var newTotal = (total / numPeople).toFixed(2);
    document.querySelector("#split-total").textContent = newTotal;
  }
  ```

* Briefly open [13-Stu_Preventing_Default_Events/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/13-Stu_Preventing_Default_Events/Solved/index.html) in your browser and point out the following.
  
  * We query the elements `num-people`, `split`, and `split-total` in our JavaScript file.

  * We can add the attributes `type="number"` and `min="0"`. This means that the value from the input field will now be a number and will increment by whole numbers if the user uses the small arrow buttons to increase or decrease the value.

  * 🗒 Note that this does not replace validation and will not prevent users from manually entering a number smaller than zero.

  ```html
  <h2>
    Bonus:
  </h2>
  <h4>
    Split between <input id="num-people" type="number" min="0" /> people
  </h4>
  <button id="split" >
    Split
  </button>
  <h2>Each person will pay: <span id="split-total"></span></h2>
  ```

### 4. Instructor Do: Demo key events (5 min)

* Open [14-Ins_Other_Events/index.html](../../../../01-Class-Content/04-Web-APIs/01-Activities/14-Ins_Other_Events/index.html) in your browser.

* Demonstrate that the application works as intended by switching the typeface.

  * Select serif, then go back to sans-serif. 

  * Type some random text in the textarea.

* Open `index.html` and point out the following:

  * The form element only needs `<select>`, a `<textarea>`, and a `<button>` to clear the text.

```html
<form>
  <select id="typeface">
    <option value="serif">
      serif
    </option>
    <option value="sans-serif">
      sans-serif
    </option>
  </select>
  <div style="margin-top: 50px;">
    <textarea id="textarea" placeholder="Your input" ></textarea>
    <div>
      <button id="clear">Clear</button>
    </div>
  </div>
</form>
```

* Open [14-Ins_Other_Events/script.js](../../../../01-Class-Content/04-Web-APIs/01-Activities/14-Ins_Other_Events/script.js) and point out the following: 

  * We use `querySelector` to gather all of the elements we would like to target into variables.

  ```js
  var typefaceEl = document.querySelector("#typeface");
  var clearEl = document.querySelector("#clear");
  var h1El = document.querySelector("#h1");
  var h2El = document.querySelector("#h2");
  var h3El = document.querySelector("#h3");
  var pEl = document.querySelector("#p");
  var textAreaEl = document.querySelector("#textarea");
  ```
  * We create an array of elements so that we can later loop over them.
  
  ```js
  var elements = [
    h1El, h2El, h3El, pEl
  ];
  ```

  * We add a listener to the typeface `<select>` element. A *change* listener will execute its callback every time the value of the `<select>` element is changed. This is how we get our desired behavior of updating the CSS every time the font typeface is changed.

  ```js
  var typeface;

  typefaceEl.addEventListener("change", function(event) {
    event.preventDefault();
    typeface = typefaceEl.value;
    document.querySelector(".container").style.fontFamily = typeface;
  });
  ```

  * In our textarea, we've added an event listener to the keydown event. First we use a conditional to make sure that the key is a letter, number, or space. We use the `key` property since `keyCode` and `charCode` have been deprecated.

  * We create an array of all alphanumeric characters, then we use `Array.includes` to make sure that the key pressed is alphanumeric. 

  * Once we've determined that the key being pressed is a valid choice, we append the string to each element in our `elements` array.

  ```js
  textAreaEl.addEventListener("keydown", function(event) {
    event.preventDefault();
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    if (alphabetNumericCharacters.includes(key)) {
      elements.forEach(function(element) {
        element.textContent += event.key;
      });
    }
  });
  ```

  * Lastly, we add a `clear` function that will clear out the `textContent` of each element when its button is pressed.

  ```js
  clearEl.addEventListener("click", function(event) {
    event.preventDefault();
    textAreaEl.value = "";
    elements.forEach(function(element) {
      element.textContent = "";
    });
  });
  ```

### 5. Student Do: Listening For Other Events (15 min)

* Direct students to the next activity, found in [15-Stu_Other_Events/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/15-Stu_Other_Events/Unsolved)

```md
# Listening For Other Events

## Instructions

* In this activity, we are going to create a webpage that will allow us to view some meta data about different kinds of events.

* Open the `index.html` file in your browser and take a moment to study the application.

* Take a moment to study the code in `index.html` then add the following functionality to the application:

  1. The select element should trigger the `toggleDisplay` function in `script.js`.

  2. If `key` is selected, the event's code, key, and status (keydown or keyup) should be displayed in the `#key-events` div when the user presses a key anywhere on the document.

  3. If `click` is selected, the text content of the event's target, and the cursor's x and y coordinates should be displayed in the `#click-events` div when the user clicks the anywhere on document.

## Bonus

* If time permits, take a moment to research some other JavaScript events.
```

### 6. Instructor Do: Review Other Events (5 min)

* Open [15-Stu_Other_Events/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/15-Stu_Other_Events/Solved/index.html) in your browser.

* Demonstrate that the application works by holding down a key for a couple of seconds, then releasing it.

* Select the *click events* option and click on an html element or two.

  * Point out that if we click the on a spot that doesn't have an html element, the `textContent` from each element on the page is appending to the `target` span.

* Ask students why clicking on a blank spot on the page adds the entire page to `target`.

  * This is because the `textContent` property returns **all** text content from the DOM node and its children.

* Next open [15-Stu_Other_Events/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/15-Stu_Other_Events/Solved/script.js) and go over the solution.

  * We grab the `key` and `code` properties and append them to their respective span elements on the page.

  * Since this function is only ran if the keydown activity, we can explicitly set the status text content to be `KEYDOWN Event`.

  * Remind students that although we did not write this function inline with the event listener, we still have access to its  

  ```js
  function keydown(event) {
    var keyPress = event.key;
    var keyCode = event.code;
    document.querySelector("#key").textContent = keyPress;
    document.querySelector("#code").textContent = code;
    var status = document.querySelector("#status");
    status.textContent = "KEYDOWN Event";
  }
  ```

* Ask the class the following question(s):

  * 'What other types of user interactions might we want to capture?'

  * Hover/mouseover events

  * onChange events

  * onLoad events

* Answer any remaining questions and let students out for break.

- - -

### 7. Everyone Do: BREAK (30 min)

- - -

### 8. Instructor Do: Demo Event Bubbling and Propagation (10 min)

* Open [16-Ins_Event_Bubbling/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/16-Ins_Event_Bubbling/index.html) in your IDE and point out the following: 

  * Each `div` has an event listener set up that will change its background color to the color specified. 

* Ask the class the following question(s):

  * "What will happen when the innermost button is clicked?"

  * We will see that every `div` changes colors

* Refresh the page and click the middle `div`. Point out the following: 

  * We only see the two outer divs change colors.

* Ask the class the following question(s):

  * "Why are we seeing this behavior."

  * Many students may think that this behavior happens because a parent event triggers the same event on all of its children.

  * We have instantiated an event listener on a div that has parent elements which also have event listeners. 

  * When an event occurs on an element with an event listener, it **bubbles** up through each of its parent DOM nodes until it reaches the top. We can prevent this behavior by using a method called `event.stopPropagation`.

* Open [16-Ins_Event_Bubbling/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/16-Ins_Event_Bubbling/script.js) and give the students a minute to observe the code. 

* Then uncomment every `stopPropagation()` function call and click each button in the same order as previously demonstrated.

  * This is a good moment to reiterate that `stopPropagation` is taking the click event and preventing it from bubbling *up*.

  * If students are having a tough time grasping this concept, try commenting out every `stopPropagation` call except for the second from outermost call. Then open the page in your browser and click on the innermost button.

### 9. Student Do: Event Bubbling (20 min)

* Direct students to the next activity, found in [17-Stu_Event_Bubbling/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/17-Stu_Event_Bubbling/Unsolved)

```md
# Event Bubbling

In this activity, we are going to create an image carousel that allows us to cycle through images. 

## Instructions

* In a file called `index.html`, create a div that contains two buttons: `previous` and `next`. The carousel should support the following features: 

  1. When the `next` button is clicked, the image should change to the next image in the array. If the image has reached the end of the array, the image should start over at the start of the array.

  2. When the `previous` button is clicked, the image should change to the previous image in the array. If the image has reached the start of the array, the image should start over at the end of the array.

  3. When the user clicks on an image, they will be navigated to the url that hosts that image.
```

### 10. Instructor Do: Review Event Bubbling (5 min)

* Open [17-Stu_Event_Bubbling/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/17-Stu_Event_Bubbling/Solved/index.html) in the browser.

* Demonstrate that the application works by clicking through the images four times, then clicking on an image.

  * Point out that the user is only navigated away if they click on the image.

* Open [17-Stu_Event_Bubbling/Solved/script](../../../../01-Class-Content/04-web-apis/01-Activities/17-Stu_Event_Bubbling/Solved/script.js) in your IDE

  * First, we initialize our element variables and create an array to hold the links to the images. We also initialize our background image.

  ```js
  box.style.backgroundImage = "url('https://picsum.photos/300/200')";
  var index = 0;
  var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
  ];
  ```

  * When the image container is clicked, we use `window.location.href` to navigate the browser to the url that hosts the image.

  ```js
  box.onclick = function(event) {
    window.location.href = images[index];
  };
  ```

  * Next, we set up the `navigate` function, which handles click events on both the `previous` and `next` buttons. Alternatively, students may have created two separate functions to handle each button click.

  ```js
  function navigate(direction) {
    index = index + direction;
    if (direction === -1 && 
        index < 0) { 
      index = length - 1; 
    }
    if (direction === 1 && 
        !images[index]) { 
      index = 0;
    }
    current = "url('" + images[index] + "')";
    box.style.backgroundImage = current;
  }
  ```

  * We add an event listener to each button, calling `event.stopPropagation();` to prevent the click event from bubbling up to our image container.

  * If students are still struggling to grasp the importance of `event.stopPropagation()`, comment it out in both callbacks. Then click on the `next` button and explain that without `event.stopPropagation()`, the click event from the button bubbles up and triggers the click event on `box`.

  ```js
  next.addEventListener("click", function(event){
    event.stopPropagation();
    navigate(1);
  });
  prev.addEventListener("click", function(event) {
    event.stopPropagation();
    navigate(-1);
  });
  navigate(0);
  ```

### 11 Instructor Do: Event Delegation Demo (10 min)

* So far we've been manually assigning click listeners to each individual element. Prompt the students with the following question: 

  * What if we need to assign event listeners to several objects on the page? Is there a way that we can easily handle all of these events without duplicating code?

  * Students may reply with a `for` loop. This would work, but it still requires us to create several event listeners.

* Show the students the code in `index.html` but do not open `script.js` yet.

* Then, open `index.html` in the browser and add a couple of items to the shopping cart.

  * Ask the students what JavaScript code they think is necessary for this behavior. Specifically, ask them where they would set up the event listeners.

  * Students may suggest that the event listener is added to each button. 

* Open `script.js` and direct students to the `addEventListener` line. 

  * Note that the event listener was added to the entire list. Then, within the callback, we determine whether or not the clicked item was a button or not by using `event.target.nodeName`. This technique is known as **event delegation**. 

  * Instead of writing a for loop and adding event listeners to every button element, we added an event listener to its parent element. Not only does this simplify our code, but in some cases, it reduces the need for `event.stopPropagation`. Ex: If click events from a child element is triggering the event on its parent, we can set up a conditional that identifies the `target`, then executes a callback accordingly.

  * 🗒 Be sure to mention that event delegation is the technique of listening for events on a parent element, then **delegating** those events differently, depending on the target.

  ```js
  var listEl = document.querySelector("#grocery-list");
  var shoppingCartEl = document.querySelector("#shopping-cart");
  var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

  listEl.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
      var item = document.createElement("div");
      item.textContent = groceries[parseFloat(event.target.parentElement.id)];
      shoppingCartEl.append(item);
    }
  });
  ```

### 12. Student Do: Event Delegation (20 min)

* Direct students to the next activity, found in [19-Stu_Event_Delegation/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/19-Stu_Event_Delegation/Unsolved)

```md
# Event Delegation

## Instructions

* In this activity, we are going to create a friends list that allows us to edit information about that friend in a modal.

* Take a moment to study the code in `index.html`. You will not need to add any additional code to this file. Additionally, all of the CSS has been provided.

* In `script.js`, add support the following features: 

  1. When the `Add Person` button is clicked, the person should be added to both the people array and the list elements.

  2. If `edit` is clicked, event delegation should be used to handle the click event.

  3. When the user clicks on edit, the modal should appear with the modal header property already populated with the person's name. If a description exists, the textarea should be populated with the person's description. If not, the description should be left blank.

  4. When the `save` button is clicked, the description of the current person should be updated in the people array.

## Bonus

* Use event delegation to make the modal close if the user clicks away from the modal.
```

### 13. Instructor Do: Review Event Delegation (10 min)

* Take a moment to demonstrate the app, just as you did in the beginning of class.

  * Open [19-Stu_Event_Delegation/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/19-Stu_Event_Delegation/Solved/index.html) in your browser.

  * Add a person to the list, this time note that doing so adds a person to an array in our JavaScript file, then appends a new HTML element, `li`, to the page.

  * Save the data, then edit a different person. 

  * Return to the person you first editted, and mention that the data is still there.

* Open [19-Stu_Event_Delegation/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/19-Stu_Event_Delegation/Solved/script.js) and explain the following functions:

  * In `handleClick`, we check to see if the element clicked is a `span`. This is sufficient because this is the only span element on the page at this time.

  * Then we set up variables for the name and description of the person that we clicked on.

  * The `textContent` of the modal header is set to the name and the value of the description textarea is set to any existing description. The logical OR operator ensures that the description is set to an empty string if the value in our array is undefined. 

  ```js
  function handleClick(event) {
    if (event.target.matches("span")) {
      modalEl.style.display = "block";
      currentId = parseInt(event.target.parentElement.id);
      var name = people[currentId].name;
      var description = people[currentId].description;
      modalNameEl.textContent = name;
      descriptionEl.value = description || "";
    }
  }
  ```

  * Remind students that `save` isn't actually persisting the data in a database. We are simply updating the description property of the current person in our people array. This data will remain until we close the browser or reload the page.

  ```js
  saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    people[currentId].description = descriptionEl.value;
    close();
  });
  ```

  * To setup the behavior to close when the modal is clicked away from, we add an event listener to the document object. We use event delegation to check if the element clicked is the modal container. If so, we close the modal.

  ```js
  document.addEventListener("click", function(event) {
    if (event.target === modalEl) {
      close();
    }
  });
  ```

  ### 14. Instructor Do: Preview Client Side Storage (5 mins)

* Welcome students to class.

* Open the deployed [ToDo list](https://coding-boot-camp.github.io/fs-ground-04-web-APIs-todo-demo/index.html) in your browser and point out the following to students:

  * We can add items to our todo list.

  * We can complete items on our todo list.

  * When we close the browser tab and reopen the application, we see that our todos are still there. Magic!

* Ask the class the following question(s):

  * When we submit an item to our todo list, where does it go?

  * Our items are stored in the browser. So far none of the applications we've worked on have had any kind of persistent data. When an application was refreshed in the browser, all of its state was reset. 

 * How would we build this application?

  * We would need some kind of storage to hold our data and be able to manipulate that storage via JavaScript.

  * What would allow that?

 * A web API. Specifically client side storage.
 
* Use student answers to transition to the first activity of the day.

### 15. Instructor Do: Todo Local Storage Pseudocode (10 mins)

* Open a new (blank) file in your IDE and lead students in outlining the steps to build the ToDo List application in pseudocode.

* Ask the class the following question(s): 

  * What is the first thing our app needs so a user can submit a new todo?

  * A form and an event listener that listens for new todo submissions when enter is pressed.

  * When a user adds a todo to the HTML form and hits enter, what happens next?
    
  * We dynamically create a new list item, append a "complete" button and append that new list item to the main todo list. Our app also adds the new todo to local storage.

  * What needs to happen when a user clicks the "complete" button?

  * We listen for clicks on the complete button, remove the todo from the page and local storage, then reload the page with the current data.

* Now walk students through the complete pseudocode plan step by step. We need to:

  1. Create an HTML page with a form and an unordered list that holds our list items.

  2. Create an event listener on our form that listens for new submissions.

  3. On submit create a new list item, append a "complete" button and append that new list item to the main todo list.

  4. Save the data to local storage.

  5. Render the current data to the page.

  6. Listen for clicks on the complete button, remove the todo from the page and local storage, then reload the page with the current data.

* Ask the class, "What is the concept we need to learn to build this application?"

  * We do not currently know how to store our data so that it stays in our applications even on close.

* Use students answers regarding storage to transition to the next demo.

### 16. Instructor Do: Demo Local Storage (5 mins)

* Open [20-Ins_Local-Storage-Counter](../../../../01-Class-Content/04-web-apis/01-Activities/20-Ins_Local-Storage-Counter/index.html) in your browser and demo the functionality of the application:

  * When we click either the increment and decrement buttons the number of "hours spent coding" increases or decreases.

* Open your Chrome developer tools, navigate to `Application`, then `Local Storage`, and point out the following: 

  * We are storing our "clicks" with Key/Value pairs.

  ![Timetracker](Images/demo-local-storage.png)

* Ask the class the following question(s):

  * Is this a database?

  * No, this is **client-side storage**. Data is stored in the client or browser, while a database would require a server.

  * What kind of information would you expect to see stored on the client as opposed to the server?

  * Personal preferences. 
  
  * Shopping cart data. 
  
  * Login session data. Even though user account credentials and information are stored on a server, the client needs to keep track of the fact that the user is still logged in across page refreshes and browser sessions.

  * What would you **not** want to store in the client?

  * Sensitive information, such as credit card numbers, social security numbers and passwords.

* Open [20-Ins_Local-Storage-Counter/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/20-Ins_Local-Storage-Counter/script.js) in your IDE and explain the following: 

  * First we select our counter, add, and subtract buttons and assign them to variables.

    ```js
    var counter = document.querySelector("#counter");
    var addButton = document.querySelector("#add");
    var subtractButton = document.querySelector("#subtract");
    ```
  
  * 🔑 Next set a `count` variable to the current count with the built in local storage method `getItem`. 

    ```js
    var count = localStorage.getItem("count");
    ```

  * The following line of code is what renders the actual count to our webpage. We call `textContent` on our `counter` element and set it equal to `count` from above.

    ```js
    counter.textContent = count;
    ```

  * 🔑 The last piece is to create two event listeners on our `addButton` and `subtractButton` elements. Here we are listening for a click event and calling `count++` or `count--`, which in turn calls our `count` function. We then use the built in local storage `setItem` method to reset our storage with the current data.

    ```js
    addButton.addEventListener("click", function() {
      count++;
      counter.textContent = count;
      
      localStorage.setItem("count", count);
    });

    subtractButton.addEventListener("click", function() {
      count--;
      counter.textContent = count;

      localStorage.setItem("count", count);
    });
    ```

* Ask the class the following question(s): 
  
  * How do we retrieve an item from localStorage?
  
  * `localStorage.getItem()`

  * How do we add an item to localStorage?
  
  * `localStorage.setItem()`
  
* Answer any questions before proceeding to the next activity. 

### 17. Student Do: Local Storage (15 mins)

* Direct students to the next activity, found in [21-Stu_Local-Storage-User/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/21-Stu_Local-Storage-User/Unsolved/script.js)

```md
# Local Storage

* You have been provided with a sign up form that successfully submits an email and password. You're job is to write code that saves the email and password to local storage and renders the last submission to the page.

## Instructions

* In your `signUpButton` event listener you will need to:

  * Save the user to localStorage.

* In the `renderLastRegistered()` function you will need to:

  * Fill in code here to retrieve the last registered credentials from local storage.
  
  * If the last registered is null, return early from this function.
  
  * Else set the text of the `userEmailSpan`, `userPasswordSpan` to their corresponding values from local storage.
  
## Hints

* Make sure you call `renderLastRegistered()` after you set your `localStorage`.
```

### 18. Instructor Do: Review Local Storage Activity (5 mins)

* Open [21-Stu_Local-Storage-User/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/21-Stu_Local-Storage-User/Solved/script.js) and explain the following: 

*  The first thing we need to do is save the form data with:

  ```js
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  ```

  * Now that we are persisting data to `localStorage`, let's set and return our last user's data inside our `renderLastRegistered()` function.

  * We access our local storage data and set the email and password to a variable. We then check if the email and password is null and if so, return early.

    ```js
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    if (email && password === null) {
      return;
    }
    ```

  * If our data is not null, we set the text of the `userEmailSpan` and`userPasswordSpan` to their corresponding values from local storage.

  ```js
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
  ```

  * With our `renderLastRegistered()` function complete, we can now call it inside our `signUpButton` event listener after we set our `localStorage` when a form is submitted.

  ```js
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  renderLastRegistered();
  ```

* Answer any questions before proceeding to the next activity.

### 19. Instructor Do: Local Storage with Uh-oh (5 min)

* Open [22-Ins_Local-Storage-Uh-oh/index.html](../../../../01-Class-Content/04-Web-APIs/01-Activities/22-Ins_Local-Storage-Uh-oh/index.html) in your browser and explain the following: 

  * When we submit our form data, we receive a success response.
  
  * But! When we inspect Local Storage, we see that the value of `user` is `[Object object]`.
 
* Ask the class the following question(s): 

  * What do we think is causing this error? 
  
  * 🔑 We are attempting to store an object in Local Storage. Local storage can only store strings.

![Auth Form Objects](Images/demo-auth-form-objects.gif)

* Let's take a look at our code.

* Open [22-Ins_Local-Storage-Uh-oh/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/22-Ins_Local-Storage-Uh-oh/Unsolved/script.js) in your IDE and point out the following: 

  * We are creating our object with the following code:

  ```js
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };
  ```
  * We are then setting this object into local storage.

  ```js
  localStorage.setItem("user", user);
  ```

* Ask the class the following question(s):

  * In what format does `localStorage` store data?
 
  * LocalStorage only stores string values.
 
  * What do you think we need to do to solve this problem? 

  * We need to convert our object to a string.

* Use student answers to transition to the next activity. 

### 20. Student Do: Local Storage With Objects (15 mins)

* Direct students to [23-Stu_Local-Storage-Objects/Unsolved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/23-Stu_Local-Storage-Objects/Unsolved/script.js).

```md
# Local Storage

* You have been provided with a sign up form that successfully submits user data and creates an object containing the data. Your job is to save this data to local storage and render the last submission to the page.

## Instructions

* Navigate to the MDN Docs on [JSON Stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). 

* Use the information there to convert your object to a string format.

* You will be working only inside of your `script.js` file.

* Inside your event listener modify `localStorage.setItem("user", user);` and `localStorage.getItem("user");` so they save and render the data.
```

### 22. Instructor Do: Review Local Storage With Objects (5 mins)

* Open [23-Stu_Local-Storage-Objects/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/23-Stu_Local-Storage-Objects/Solved/script.js) and point out the following: 

 * We can use `JSON.stringify` to convert an object to a JSON string. We simply pass our object into the `JSON.stringify` method.

  ```js
  localStorage.setItem("user", JSON.stringify(user));
  ```

 * When we retrieve our data from `localStorage`, we use `JSON.parse`. This method parses our JSON string and converts it into an object.

 * We pass our call to `localStorage.getItem` into the `JSON.Parse` method, storing the value as a variable.

  ```js
  var lastUser = JSON.parse(localStorage.getItem("user"));
  ```

  * Now that the string has been converted back into an object, we can use simple dot notation to access the key/value pairs.

  ```js
  userFirstNameSpan.textContent = lastUser.firstName;
  userLastNameSpan.textContent = lastUser.lastName;
  userEmailSpan.textContent = lastUser.email;
  userPasswordSpan.textContent = lastUser.password;
  ```

* Ask the class, "What is JSON?"

  * JSON is JavaScript Object Notation. JSON is text, and any JavaScript object can be converted to JSON.

  * Because its text, we are able to store it into `localstorage` as the string that is required.

### 23. Instructor Do: Demo Data-Attributes (5 mins)

* Open [24-Ins_Data-Attributes/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/24-Ins_Data-Attributes/index.html) in your browser and demo the functionality of the application:

  * When we click on a gif, their `state` changes from "animated" to "still".

* Open Chrome developer tools to demonstrate how the URLs are changing when we click.

![Gif Demo](Images/gif-player.gif)

* Open [24-Ins_Data-Attributes/script.js](../../../../01-Class-Content/04-Web-APIs/24-Ins-Data-Attributes/script.js) in your IDE and point out the followingL:

 * First we select our image container element.

  ```js
  var imageContainer = document.querySelector(".img-container");
  ```

 * We then listen for click on the container. 
 
  ```js
  imageContainer.addEventListener("click", function(event) {
    var element = event.target;
  ```

 * If an image is clicked, we get the `data-state` attribute value. 
 
    ```js
    if (element.matches("img")) {
      var state = element.getAttribute("data-state");
    ```

 * If the state is `still`, we then change it to `animate` and update the src url to an animated gif. 
 
  ```js
  if (state === "still") {
    element.setAttribute("data-state", "animate");
    element.setAttribute("src", element.getAttribute("data-animate"));
  ```

 * If the state is `animated`, we then change it to `still` and update the src attribute to a still image.

  ```js
      } else if (state === "animate") {
        element.setAttribute("data-state", "still");
        element.setAttribute("src", element.getAttribute("data-still"));
      }
    }
  });
  ```

* Ask the class, 'How can we access and update the different attributes of our application?'
 
  * With `getAttribute` and `setAttribute`.

* Answer any questions before proceeding to the next activity.

### 24. Students Do: Render Todos (10 mins)

* Direct students to the next activity, found in [25-Stu_Render-Todos/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/25-Stu_Render-Todos/Unsolved).

```md
# Render Todos

In this activity you will be writing code to render an array of todo items to the list.

## Instructions

* Open the `script.js` file provided to you. You have been provided the necessary variable declarations as well as an array of todo items.

* Your goal is to create a function that will render our todos into a list in the browser.

  * Initially set the text content of the todoList to an empty string.
  
  * todoCountSpan should show the total count of todos on the page.
  
* Inside of your render function you will also need a for loop.

  * It should loop over the `todos` array creating an `li` element for each index of the array.
  
  * It should set the content of the created `li` element to the value of the current array index.
  
  * Finally the new `li` should be appended to the `ul` provided.
```

### 25. Instructor Do: Review Render Todos (5 mins)

* Open [25-Stu_Render-Todos/Solved](../../../../01-Class-Content/04-web-apis/01-Activities/25-Stu_Render-Todos/Solved) and point out the following: 

  * First we create our `renderTodos()` function. 

    ```js
    function renderTodos() {

      // ...
    }
    ```

  * Next inside our function we set the `innerHTML` of our `todoList` element to be a blank string. 

    ```js
    function renderTodos() {
      todoList.innerHTML = "";
    ```

  * We then set the `todoCountSpan` text content to the length of our `todos` array.
  
  ```js
    todoCountSpan.textContent = todos.length;
  }
  ```

  * Next we create a for loop that sets the value of the todos array at each index to a variable todo. 
  
  ```js
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
  ```
  
  * We then creates a new `li` element and set the `textContent` of the newly created `li` to the variable we created at the beginning of our loop. 
          
  ```js
  var li = document.createElement("li");
  li.textContent = todo;
  ```

  *Finally, we append our new list item to our existing `todoList` as a child.

  ```js
  todoList.appendChild(li);
  ```

  * Now that we have created a function that will render our todos, we can invoke it after our array variable declaration.

  ```js
  var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
  renderTodos();
  ```

### END (0  mins)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
