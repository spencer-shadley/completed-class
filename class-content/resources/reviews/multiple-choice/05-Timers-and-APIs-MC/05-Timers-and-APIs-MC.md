## Timers and APIs

### 1

1. setTimeout method - `setTimeout` `javascript` `vocab`

   ❓ What JavaScript method runs a function after a specified amount of time?

   - setRerun
   - setItAgain
   - setRepeat
   - setTimeout ✔️

### 2

1. Timed repeated code - `javascript` `setInterval` `vocab`

   ❓ The \_\_\_\_ JavaScript method can be used to run a function every specified amount of time.

   - setRerun
   - setInterval ✔️
   - setRepeat
   - setTimeout

### 3

1. Ending timers - `javascript` `vocab` `clearTimeout`

   ❓ To end a timer that was previously set, we can use the \_\_\_\_ JavaScript method.

   - resetTimeout
   - stopInterval
   - resetInterval
   - clearTimeout ✔️

### 4

1. setInterval method - `javascript` `setInterval`

   ❓ What will be the result of running the following code:

   ```JavaScript
   var windowTimeout = setInterval(function() {
       console.log("hi!");
   }, 2000);
   ```

   - The program will stop running after two seconds
   - The word "hi!" will be logged to the console every two seconds ✔️
   - The browser will logged to the console the word "hi!" 2000 times in a row
   - The word "hi!" will be logged to the console every two minutes

### 5

1. setTimeout and setInterval functions - `javascript` `callback` `vocab`

   ❓ The functions passed to setTimeout and setInterval are examples of \_\_\_\_ functions.

   - callback ✔️
   - standard
   - inner
   - outer

### 6

1. Steps a computer can take - `vocab` `algorithm`

   ❓ A set of steps that a computer can take to solve a particular problem is known as \_\_\_\_.

   - software
   - a database
   - an algorithm ✔️
   - a website

### 7

1. API acronym - `API` `vocab`

   ❓ API is an acronym for \_\_\_.

   - Available Program Ideas
   - Absolute Protocol Interface
   - Algorithm Parsed Illustration
   - Application Programming Interface ✔️

### 8

1. AJAX acronym - `vocab` `AJAX`

   ❓ AJAX is an acronym for \_\_\_.

   - Asynchronous JavaScript and XML ✔️
   - Approximate JavaScript Available XML
   - Application JavaScript API XML
   - Algorithm JavaScript as eXchange

### 9

1. AJAX requests - `AJAX` `syntax`

   ❓ What two properties can be used in the jQuery AJAX method to retrieve data from from a url?

   - API key and response
   - url and method ✔️
   - request and post object
   - parse and method

### 10

1. JSON acronym - `JSON` `vocab`

   ❓ JSON is an acronym for \_\_\_.

   - JavaScript Only Navigation
   - Jumbled Size Operator Narrowing
   - JavaScript Object Notation ✔️
   - None of the above

### 11

1. API purpose - `API` `vocab`

   ❓ APIs can be used for:

   - retrieving data from someone else's database
   - utilizing someone else's more complex functionality
   - controlling other hardware and software
   - all of the above ✔️

### 12

1. API usage - `API` `vocab`

   ❓ The total count of APIs in existence is \_\_\_.

   - under 100
   - approximately 100 to 1,000
   - approximately 1,000 to 100,000
   - over 1,000,000 ✔️

### 13

1. Data between APIs - `JSON` `vocab` `API`

   ❓ \_\_\_\_ is the common format for sending data between APIs.

   - FTP
   - JSON ✔️
   - Array
   - Function

### 14

1. Building API URLs - `parameter` `API` `vocab`

   ❓ In the URL, \_\_\_ can be included in order to filter the results from an API.

   - query parameters ✔️
   - files
   - repos
   - authorizations

### 15

1. Correctly building API URLs - `API` `vocab` `API documentation`

   ❓ What is the best resource to properly use a specific API?

   - JavaScript syntax guides
   - The API's official documentation ✔️
   - W3Schools
   - TeamTreehouse

### 16

1. API data - `API` `AJAX` `response` `syntax`

   ❓ In the code below, where is all the data from the API being returned to after the AJAX call is made?

   ```JavaScript
   $.ajax({
       url: queryURL;
       method: "GET"
   }).done(function(res) {
       console.log("completed");
   });
   ```

   - within queryURL
   - within the res variable ✔️
   - within the GET method
   - it is not stored

### 17

1. .done function purpose - `.done` `vocab`

   ❓ In the code below, what will be logged to the console?

   ```JavaScript
   $.ajax({
       url: queryURL;
       method: "GET"
   }).done(function(res) {
       console.log("A");
   });
   console.log("B");
   ```

   - A then B
   - B then A ✔️
   - Only A
   - Only B

### 18

1. Nature of JavaScript - `JavaScript` `synchronous` `vocab`

   ❓ JavaScript is \_\_\_ by nature.

   - synchronous ✔️
   - strongly typed
   - asynchronous
   - unscripted

### 19

1. Callback functions and promises - `callback` `promise` `vocab` `asynchronous`

   ❓ Say that we execute process A and then continue with the execution of other processes while process A is still executing. Process A is then resolved after some time passes and the callback function within process A executes the code. Process A is an example of \_\_\_\_.

   - syntactic sugar
   - synchronous programming
   - event handling
   - asynchronous programming ✔️
