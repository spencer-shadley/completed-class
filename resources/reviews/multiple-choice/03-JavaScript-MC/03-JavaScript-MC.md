## JavaScript

### 1

1. Declaring - `javascript` `var` `vocab`

   ❓ Variables can be declared in JavaScript using the \_\_\_\_ keyword.

   - var ✔️
   - value
   - val
   - variable

### 2

1. Variable Types - `javascript` `var` `boolean` `string` `number` `vocab`

   ❓ Commonly used data types DO NOT include:

   - strings
   - booleans
   - alerts ✔️
   - numbers

### 3

1. Strings - `javascript` `string` `vocab`

   ❓ String values must be enclosed within \_\_\_\_ when being assigned to variables.

   - commas
   - curly brackets
   - quotes ✔️
   - parentheses

### 4

1. Debugging - `javascript` `console.log` `vocab`

   ❓ A very useful tool used during development and debugging for printing content to the debugger is:

   - JavaScript
   - terminal / bash
   - for loops
   - console.log ✔️

### 5

1. Adding variables - `javascript` `var` `adding`

   ❓ What is the value of c in the following code?

   ```JavaScript
   var a = 3;
   var b = '3';
   var c = a + b;
   ```

   - 6
   - '33' ✔️
   - ab
   - This will cause an error

### 6

1. User Input - `javascript` `prompt` `vocab`

   ❓ We can ask a user for their name by using \_\_\_\_ popup box in the browser.

   - a confirm
   - an alert
   - an ask
   - a prompt ✔️

### 7

1. Writing to a Page - `javascript` `vocab` `document.write`

   ❓ We can use JavaScript to directly write to the HTML page itself by using:

   - console.log
   - document.write ✔️
   - variables
   - This is not possible with JavaScript

### 8

1. If / Else Statements - `if/else` `javascript` `vocab`

   ❓ If / Else statements are best suited for \_\_\_\_.

   - making decisions ✔️
   - setting up arrays
   - interacting with users
   - performing calculations

### 9

1. If / Else Syntax - `if/else` `javascript` `syntax`

   ❓ The condition in an if / else statement is enclosed within \_\_\_\_.

   - quotes
   - curly brackets
   - parentheses ✔️
   - square brackets

### 10

1. Arrays - `javascript` `arrays` `vocab`

   ❓ Arrays in JavaScript can be used to store \_\_\_\_.

   - numbers and strings
   - other arrays
   - booleans
   - all of the above ✔️

### 11

1. Array elements - `javascript` `arrays` `index` `vocab`

   ❓ The specific element stored within an array can be targeted using the element \_\_\_\_.

   - value
   - index ✔️
   - location
   - length

### 12

1. Getting Arrray Values - `javascript` `arrays` `index` `syntax`

   ❓ What is the value of myValue in the code below?

   ```JavaScript
       var myArray = ["dog", "cat", "mouse"];
       var myValue = myArray[1];
   ```

   - 1
   - dog
   - cat ✔️
   - mouse

### 13

1. Total Array Elements - `javascript` `arrays` `array.length` `vocab`

   ❓ We can get the number of elements in an array using the \_\_\_\_ property.

   - count
   - size
   - variable
   - length ✔️

### 14

1. Repeating Code - `javascript` `for loops` `vocab`

   ❓ We can run repeated blocks of code using \_\_\_\_.

   - for loops ✔️
   - if / else statements
   - arrays
   - browser refresh

### 15

1. Comparing Variables - `javascript` `comparison` `vocab`

   ❓ We can check to see if two values are equal using \_\_\_\_.

   - ?==
   - !==
   - === ✔️
   - =

### 16

1. For Loop Counter Variables - `javascript` `for loops` `iterators` `vocab`

   ❓ The counter variable in a for loop is also known as the \_\_\_\_.

   - iterator ✔️
   - condition
   - return
   - block

### 17

1. Looping Through Arrays - `javascript` `arrays` `for loops` `array.length` `index`

   ❓ What is the value of myValue after running the code below?

   ```JavaScript
       var myValue = 0;
       var myArray = [1, 2, 3, 4];
       for (var i = 1; i < myArray.length; i++) {
           myValue += myArray[i];
       }
   ```

   - 5
   - 6
   - 9 ✔️
   - 10

### 18

1. Hooking onto Events - `javascript` `vocab` `document.onkeyup`

   ❓ We can hook onto the event of a user pressing and releasing a key by referring to \_\_\_\_.

   - browser.event
   - page.hit
   - event.key
   - document.onkeyup ✔️

### 19

1. Getting Key Presses - `javascript` `vocab` `event.key`

   ❓ We can get the key a user has pressed by referencing \_\_\_\_.

   - document.onkeyup
   - letter.pressed
   - keyboard.event
   - event.key ✔️

### 20

1. ID Element Targetting - `javascript` `document.getElementByID` `vocab`

   ❓ We can find a single element on the page that has an ID by using \_\_\_\_.

   - browser.findAllElements
   - document.getElementById ✔️
   - clicked.getHTMLById
   - document.ElementsByClass

### 21

1. Adding to Arrays - `javascript` `vocab` `arrays` `push`

   ❓ Elements can be added to an array by using the \_\_\_\_ method.

   - push ✔️
   - add
   - concatenate
   - attach

### 22

1. Bundling Repetitive Code - `javascript` `vocab` `functions`

   ❓ Repetitive lines of code should be bundled together as \_\_\_\_ and then executed as needed.

   - arrays
   - functions ✔️
   - snippets
   - conditions

### 23

1. Variables Passed to Functions - `javascript` `vocab` `functions` `arguments`

   ❓ A function's \_\_\_\_ are only visible inside the function body.

   - arguments ✔️
   - arrays
   - strings
   - definitions

### 24

1. String Manipulation - `javascript` `vocab` `syntax` `charAt`

   ❓ To grab the first letter of a string we can use the \_\_\_\_ method.

   - stringItem(0)
   - itemIs(1)
   - charAt(0) ✔️
   - indexOf(1)

### 25

1. Building Arrays - `javascript` `arrays` `push` `modulus`

   ❓ What will the following code log to the console?

   ```JavaScript
       var myArray = [];

       for (var i = 0; i < 10; i++) {
           if (i % 2 == 0) {
               myArray.push(i);
           }
       }

       console.log(myArray);
   ```

   - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   - [2, 4, 6, 8, 10]
   - [1, 3, 5, 7, 9]
   - [0, 2, 4, 6, 8] ✔️

### 26

1. Executing Functions - `javascript` `vocab` `functions`

   ❓ In order to actually execute a function we have written, we have to \_\_\_\_ it.

   - run
   - call ✔️
   - maximize
   - mark

### 27

1. Converting Strings - `javascript` `vocab` `toLowerCase()`

   ❓ We can convert "HELLO" to "hello" using the \_\_\_\_ method.

   - reduceString()
   - toLowerCase() ✔️
   - allLower()
   - minimizeIt()

### 28

1. Random Number Generation - `javascript` `vocab` `Math.floor` `Math.random`

   ❓ In the code below, the possible values of x are:

   ```JavaScript
       function randomValue() {
           var value = Math.floor(Math.random() * 5);
           return value;
       }

       var x = randomValue();
   ```

   - 0, 1, 2, 3, 4 ✔️
   - 0, 1, 2, 3, 4, 5
   - 1, 2, 3, 4
   - 1, 2, 3, 4, 5

### 29

1. Function Scope 1 - `javascript` `functions` `scope`

   ❓ What will be logged to the console with the following code:

   ```JavaScript
       var value = 33;

       function myFunction() {
           value = 66;
       }

       myFunction();

       console.log(value);
   ```

   - 33
   - 66 ✔️
   - 99
   - None of the above - this will cause an error

### 30

1. Function Scope 2 - `javascript` `functions` `scope`

   ❓ What will be logged to the console with the following code:

   ```JavaScript
       var value = 33;

       function myFunction() {
           var value = 66;
       }

       myFunction();

       console.log(value);
   ```

   - 33 ✔️
   - 66
   - 99
   - None of the above - this will cause an error
