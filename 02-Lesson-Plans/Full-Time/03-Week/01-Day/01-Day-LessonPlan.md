# 01-Day Lesson Plan - Events continued & Intro to Timing Events (10:00 AM) <!--links--> &nbsp; [⬅️](../../02-Week/05-Day/05-Day-LessonPlan.md) &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)

## Overview

In this class students will finish working on their ToDo application. They will then spend the remainder of the class working on a Timer Application.

## Instructor Notes

`Summary: Review JavaScript and jQuery & Complete activities 04-08 in Unit 04`
* The code associated with local and session storage may seem simple, but the concepts and their use cases may be confusing for students seeing these things for the first time. 

* Students will be pseudocoding the ToDo List application at the beginning of class. Familiarize yourself with the code and functionality to more easily help students through this process.

- - -

## Learning Objectives

* By the end of class students will be able to:

  * Use local storage and session storage.

  * Describe the differences between the two.

  * Identify when client side storage is the right solution.

  * Use all of the units concepts to build a persistent ToDo list as well as a Work Timer.

- - -

### Instructor Do: Welcome Students and refresher (10 mins)

* Welcome students to class

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

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ So how do we go about adding todos?

  * 🙋 Use the discussion to transition to the first activity.

### 2. Students Do: Add ToDos (10 mins)

* Direct students to the first ac activity, found in [26-Stu_Add-Todos/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/26-Stu_Add-Todos/Unsolved)

```md
# Add ToDo's

In this activity, we will be continuing to build on our Todo activity. This time, we'll be adding the `add` functionality.

## Instructions

* Add an event listener so that when a user hits enter, the value from the todo input field is pushed to our todo array.

* Make sure that empty values are not pushed to the array.

* Once the value has been added to the array, clear the input field and re-render the todo list.
```

### 2. Instructor Do: Review Add Todos (5 mins)

* Open [26-Stu_Add-Todos/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/26-Stu_Add-Todos/Solved/index.html) in your browser and briefly demonstrate the new functionality by adding new items to the todo list.

* Next navigate to [26-Stu_Add-Todos/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/26-Stu_Add-Todos/Solved/script.js) in your IDE and point out the following:

  * We're listening for the `submit` event. Note that it would also be acceptable to add a keydown listener and check if the key pressed is enter. Mention that instead listening for `submit`, requires less code. Additionally, the callback function doesn't need to be ran needlessly every time the user presses a key.

  ```js
  todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  ```

  * 🗒 It's worth noting that there are two form behaviors that most commonly cause the `submit` event. The `return` key is pressed within a text input field or a submit button is clicked. This could be desired behavior, but remind students that there are situations where this behavior is not desired.

  * The `.trim()` method removes whitespace from before and after the input.

  ```js
  var todoText = todoInput.value.trim();
  ```

  * If the todoText is empty, return. This will prevent us from pushing empty strings to the todos array.

  ```js
  if (todoText === "") {
    return;
  }
  ```

  * Lastly, we push the `todoText` to the todos array, reset its value, and render the todos again.

  ```js
  todos.push(todoText);
  todoInput.value = "";

  renderTodos();
  });
  ```

* Answer any questions before moving to the next activity.

### 3. Students Do: Complete Todos (15 mins)

* Direct students towards the next activity located in [27-Stu_Complete-Todos/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/27-Stu_Complete-Todos/Unsolved).

```md
# Complete Todos

In this activity, we will create a "complete" button that successfully removes a todo item from the list when clicked.

## Instructions

* Modify your `renderTodos()` function:

  * When a new todo is created, add a `data-index` for each `li`.

  * Generate a button that says "complete" and append it to your `li`.

* Add an event listener so that when a user clicks the complete button, it accesses the `data-index` value and removes that todo element from the list.

## Hint

* You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.
```

### 4. Instructor Do: Review Complete Todos (10 mins)

* Open [27-Stu_Complete-Todos/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/27-Stu_Complete-Todos/Solved) in your IDE and point out the following:

  * First show students the unsolved `renderTodos()` function for context.

  ```js
  function renderTodos() {

    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];

      var li = document.createElement("li");
      li.textContent = todo;
      todoList.appendChild(li);
    }
  }
  ```

  * In order to track which todo we are going to mark as complete, we need set a `data-index` that points to each todo's index, `i` from our for loop.

  ```js
  li.setAttribute("data-index", i);
  ```

  * Next we can create a "Complete" button for each item and set it's text to "Complete".

  ```js
  var button = document.createElement("button");
      button.textContent = "Complete";
  ```

  * Finally we append our newly updated button to our `li`.

  ```js
  li.appendChild(button);
  ```

  * Now that our todo can be marked as complete, we have to create an event listener for our button that removes it from the list when clicked.

  ```js
  todoList.addEventListener("click", function(event) {
  ```
  * Next we set a variable for `event.target`. When an element is clicked, we check if it was a button and if so, grab the `data-index` of that element.

  ```js
  var element = event.target;
  ```

  * We then use `.splice` to remove the element with that index and rerender or todos by calling `renderTodos()`. The `.splice` method allows us to change the contents of an array. We can use it to remove, replace, or add new elements. 

  ```js
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    renderTodos();
  ```

* Check for understanding and answer any lingering questions before moving on.

### 5. Students Do: Local Storage Todos (10 mins)

* Direct students towards their next activity located in [28-Stu_Local-Storage-Todos/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/28-Stu_Local-Storage-Todos/Unsolved).

  ```md
  # Local Storage Todo's

  In this activity, we will work on storing our todos in `localStorage`. 

  ## Instructions

  * Inside the `init()` function:

    * Set a variable called `storedTodos` that retrieves the todos from `localStorage` and parses the JSON string to an object.

    * Check if the todos were retrieved from `localStorage` and if so, set a `todos` variable with the `storedTodos`.

    * Lastly, render the todos to the DOM.

  * Inside the `storeTodos()` function:

    * Stringify and set the "todos" key in `localStorage` to the `todos` array.

  ## Hint

  * You will need to use `JSON.stringify` and `JSON.parse`.
  ```

### 6. Instructor Do: Review Local Storage Todos (5 mins)

* Open [28-Stu_Local-Storage-Todos/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/28-Stu_Local-Storage-Todos/Solved/script.js) in your IDE and walk students through the solved code.

* Inside the `init()` function we set a variable called `storedTodos` that retrieves the todos from `localStorage` and parses the JSON string to an object.

  ```js
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  ```

* We then check if the todos were retrieved from `localStorage` and if so, set a `todos` variable with the `storedTodos` and the render the todos to the DOM.

  ```js
  if (storedTodos !== null) {
      todos = storedTodos;
    }

  renderTodos();
  ```

* Inside our `storeTodos()` function we stringify and set the "todos" key in `localStorage` to the `todos` array.

  ```js
  localStorage.setItem("todos", JSON.stringify(todos));
  ```

* Answer any questions before letting students out for break.

- - -

### 7. Everyone Do: BREAK (40 mins)

- - -

### 8. Students Do: Timer App (90 mins)

* Direct students to their final activity of the day located in [29-Stu_Timer-App/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/29-Stu_Timer-App/Unsolved)

```md
# Tomato Timer

## Instructions

* In this activity, we will be creating a "tomato" timer that allows the user to set a timer with working and resting periods. We will also store the length of each period in local storage so that the user's preferences persist, even if the browser is closed.

* You have been provided with all of the HTML and CSS that you'll need. 

* Begin by opening `index.html` in your browser. Take a moment to identify different elements on the page that will need functionality:

  * Time left display

  * Start button

  * Pause button

  * Stop button

  * Status toggle

* **Part One** Create functions in `script.js` to add support for the following features:

  1. Create a function that initializes the timer by taking the minutes input from the user and setting the `tototalSeconds` variable. Since we'll be using this function to reset as well, clear any existing intervals.

  2. When the timer starts, update the DOM every second to reflect the time left. It is recommended that you create separate functions to properly format the minutes and seconds.

  3. When the timer is finished, alert the user that it is time to take a break.

* **Part Two**: Add functionality to the pause and stop buttons.

  1. The pause button should temporarily stop the timer. This means that if play is pressed again, the timer will continue where it left off.

  2. The stop button should reset the timer. If play is pressed again, the timer should start over.

* **Part Three**: Add the ability to switch back and forth between working time and resting time.

  1. Set up a variable to keep track of which mode the timer is in.

  2. If the timer is in working mode, then it should alert the user "Time for a break!" upon completion.

  3. If the timer is in resting mode, it should alert the user "Time to get back to work!" upon completion.

  4. Whenever the switch is clicked, the DOM should update with the current status, and the timer should reset.

  5. Make sure that the timer is using minutes of work in work mode and minutes of rest, respectively. 

* **Part Four**: Add localStorage to the application

  1. Every time the user starts a timer, the minutes of work and minutes of rest should be saved to localStorage.

  2. Upon page load, the minutes of work and minutes of rest input fields should be initialized to their previously stored values.
```

### 9. Instructor Do: Review Timer App (20 mins)

* Open [29-Stu_Timer-App/Solved](../../../../01-Class-Content/04-web-apis/01-Activities/29-Stu_Timer-App/Solved/script.js) in your IDE and point out the following key aspects:

  * We create a function called `starTimer`. We will use it to call our `setTime` function.
  
  ```js
  function startTimer() {
    setTime();
  ```
  
  * We create a `setInterval` function and store it inside a variable called interval.

  ```js
    interval = setInterval(function() {
      secondsElapsed++;
      renderTime();
    }, 1000);
  }
  ```

  * Ask the class, "Why do we store our setInterval into a variable?"

  * So we can clear it later.

  * We create a function call `pauseTimer` which will clear our interval and call our `renderTime` function.

  ```js
  function pauseTimer() {
    clearInterval(interval);
    renderTime();
  }
  ```

  * We create a function called `stopTimer`. When this function is invoked we set our secondsElapsed to `0`, and call our `setTime` and `renderTime` functions.

  ```js
  function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
  }
  ```

  * We create a `setTimePreferences` function. We use `localStorage.setItem`, naming the key `preferences` and stringifying our work minutes and rest minutes so they can be added into localstorage.

  ```js
  function setTimePreferences() {
    localStorage.setItem(
      "preferences",
      JSON.stringify({
        workMinutes: workMinutesInput.value.trim(),
        restMinutes: restMinutesInput.value.trim()
      })
    );
   ```

  * We create a `getTimePreferences` function. Next we `JSON.Parse` the getting of our `preferences` localstorage item to turn our stringified object back into an object

  ```js
  function getTimePreferences() {
    var preferences = JSON.parse(localStorage.getItem("preferences"));
  ```

* If preferences exists in localstorage and has a key/value pair of `workMinutes` we set our `workMinutesInput.value` to be equal to our preference objects `workMinutes` value.

  ```js
  if (preferences) {
    if (preferences.workMinutes) {
      workMinutesInput.value = preferences.workMinutes;
    }
  ```
  
  * If preferences instead has no `workMinutes` but has `restMinutes` then we set our `restMinutesInput.value` to be equal to our preference objects `restMinutes` value.

  ```js
    if (preferences.restMinutes) {
      restMinutesInput.value = preferences.restMinutes;
    }
  }
  ```

* Answer any remaining questions students may have and end class for the day.

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
