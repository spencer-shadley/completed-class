## 5.1 Lesson Plan - Introduction to Node.js (10:00 AM) 

### Instructors and TAs: Please take the Mid-Course Instructional Staff Survey

Trilogy as a company values transparency and data-driven change quite highly. As we grow, we know there will be areas that need improvement. It’s hard for us to know what these areas are unless we’re asking questions. Your candid input truly matters to us, as you are vital members of the Trilogy team. In addition to the individual feedback at the end of lesson plans
we would appreciate your feedback at the following link:
[https://docs.google.com/forms/d/e/1FAIpQLSdWXdBydy047_Ys1wm6D5iJY_J-0Mo0BqCjfGc4Er2Bz9jo5g/viewform](https://docs.google.com/forms/d/e/1FAIpQLSdWXdBydy047_Ys1wm6D5iJY_J-0Mo0BqCjfGc4Er2Bz9jo5g/viewform)

## Overview

This lesson introduces Node.js and the concepts of standard library, modules, npm, and package.json. Students will build an interactive command line application that outputs .json files using `fs` and `Inquirer`.

## Instructor Notes

* Complete activities `01-Ins_Node-Demo` through `15-Stu_Inquirer-Users`

* Ensure that students have [downloaded and installed the LTS version of Node](https://nodejs.org/en/). The version number does not matter, just that it is the LTS version.

* The transition from client-side development to Node.js can be challenging for students. This lesson plan is a gentle introduction to the fundamentals.

* If students continually question why they are learning Node.js, emphasize the client-server model.


## Learning Objectives

* Explain the client-server model

* Run Node.js applications from the command line with arguments

* Import standard library packages

* Initialize projects and install third-party packages using npm

* Build interactive CLI applications with Inquirer


## Slides

[05.1: Introduction to Node.js](https://docs.google.com/presentation/d/1hXNcmzYqwlhgM-C78vNFKwX10PhW_iwIo0guwzHO48c/edit?usp=sharing)


## Time Tracker

[05.1 Time Tracker](https://docs.google.com/spreadsheets/d/1JHdOY1f_aS8Sub1HFytPaUAx_QcoVVcyaIaSN-9kbKM/edit?usp=sharing)

- - -

## Class Instruction

### 1. Instructor Do: Introduction to Node.js (10 mins)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/1hXNcmzYqwlhgM-C78vNFKwX10PhW_iwIo0guwzHO48c/edit?usp=sharing) and follow these prompts with their corresponding slides:

  * **Introduction to Node.js (Title)**: Today's class is a miletsone as we make the transition from writing client-side code to server-side code using Node.js. 

  * **What is Full Stack Web Development?**: What does it mean to be a full stack web developer?  
  
  * **Full Stack Web Development**: Full stack web development is understanding the suite of tools required to build both the front _and_ back ends of a web application. 

  * **How much of the stack do we know?**: What have we learned up to this point? 
  
  * **Client-side**: The three primary components of client-side code are HTML, CSS & JavaScript. 

  * **What is a client?**: Where do HTML, CSS and JavaScript come together?

  * **Definition of Web Client**: A client is both computer hardware and software that makes requests to a server. 

  * **What is GitHub Pages doing?**: What happens when we _deploy_ our projects to GitHub Pages?'

  * **Awesome Project Deployed to GitHub Pages**: GitHub Pages is _serving_ content to clients.

  * **What is a server?**: What does it mean to "server" content? 

  * **Server Definition**: Depending on the context, a server is both the physical hardware _and_ software that hears requests from users and returns something, such as an HTML or image file, or completes a process. 

  * **What is the Client-Server Model?**: How do clients and servers interact?

  * **The Client-Server Model**: In modern web applications, there is constant back-and-forth communication between the visuals displayed on the user’s browser (the front-end) and the data and logic stored on the server (the back-end). Clients make requests, servers respond.

  * **What is Node.js?**: How do we program a server?

  * **Node.js**: Node allows us to run JavaScript _outside_ the browser as well as on a server. Since Node is purely JavaScript, a front-end JavaScript developer can also work on server side code without having to learn a new programming language.


### 2. Instructor Do: Node Check (5 mins)

* Ask students to open a command line prompt.

* Confirm that each student has Node installed by entering `node` at the command line and pressing return. Then ask them to enter `1+1` and hit return.

* If any students encounter errors, ask them to raise their hand so a TA can assist them in installing Node.

* Instruct students to press `ctrl+c` to exit the Node prompt. (Important as many students will not do this.)

### 3. Instructor Do: Node Demo (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ The `node` command is used to run JavaScript applications from the command line

* Navigate to [01-Ins_Node-Demo](../../../../01-Class-Content/09-NodeJS/01-Activities/01-Ins_Node-Demo) from the command line, run: `node index.js` and explain the following point(s):

  * 🔑 We run a Node.js application using the command `node` and the name of the file we want to run.

  * This program printed the string "JavaScript outside the browser?!" in the command window.

* Ask the students the following question(s):

  * ☝️ If our application returns a string, what do we think the code looks like?

  * 🙋 The code is probably a JavaScript `console.log` returning the string.

* Open `01-Ins_Node-Check/index.js` in your IDE and explain the following point(s):

  * As expected, our application is simply a `console.log` returning a string.

  ```js
  console.log("JavaScript outside the browser?!")
  ```

* Answer any questions before proceeding to the next activity.


### 4. Students Do: Hello Node (5 mins)

* Direct students to the activity instructions in [02-Stu_Hello-Node](../../../../01-Class-Content/09-NodeJS/01-Activities/02-Stu_Hello-Node):

```md
  # Hello Node.js

  In this activity, you will write and run your first Node.js application.

  ## Instructions

  * Create a file, `index.js`, in your working directory.

  * Write JavaScript to log the string, "Hellooo, Node!".

  * Then run the program using Node from the command line.

  * Confirm that it logged the text as you would expect.

  ## Hint(s)

  * It's just JavaScript.

  ## Bonus

  * What happens when you log `window`?
```

### 5. Instructor Do: Review Hello Node (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ `console.log` returns its values to the command line rather than the browser

  * ✔️ While we're still writing JavaScript in node, some objects and methods such as `window`, `prompt`, `alert`, and `confirm` will throw an exception when referenced because they doesn't exist in node

* Open [02-Stu_Hello-Node/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/02-Stu_Hello-Node/Solved/index.js) in your IDE and explain the following point(s):

  * We simply use `console.log` to return the string, as previously demonstrated.

  ```js
  console.log("Hellooo, Node!");
  ```

  * 🔑 Unlike client-side JavaScript, we _do not_ need to open dev tools in the browser. Because our run-time environment is now the command line, our application returns its results there.

* Ask the class the following question(s):

  * ☝️ Did anyone experiment with anything _beyond_ `console.log`? If so, what?

  * 🙋 Node.js is _just_ JavaScript. With some exceptions, any JavaScript we can run in the browser can also run in the command line.

  * ☝️ What happens when we log `window` to the console?

  * 🙋 We get an error, `window` is not defined in node.

* Edit [02-Stu_Hello-Node/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/02-Stu_Hello-Node/index.js) to reflect the following: 

  ```js
  console.log(window);
  ```

* Run `node index.js` and point out the following: 

  * 🔑 We get the error, `ReferenceError: window is not defined`, when we try to print `window` to the console. This means that while we're still writing JavaScript code inside node, there are a few differences.

* Ask the class the following question(s):

  * ☝️ What kinds of things do we think are possible in the browser, but not possible in node?

  * 🙋 We can't use prompts, confirms or alerts, because we don't have a browser window.

* Edit [02-Stu_Hello-Node/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/02-Stu_Hello-Node/index.js) to reflect the following: 

  ```js
  prompt("Hello World!");
  ```

  * 🔑 Attempting to use `prompt` in node also results in a reference error because `prompt` is not defined in node.

  * 🔑 There are a few things we can do in the browser that we can't do in node, but we'll soon see that there are things we can do in node that we can't do in the browser.

* Answer any questions before proceeding to the next demo.

### 6. Instructor Do: process.argv Demo (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ Values passed to a Node application from the command line are stored in an object property, `process.argv`

  * ✔️ `process.argv` is an array which allows us to access values by index

* Run [03-Ins_process.argv/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/03-Ins_process.argv/index.js) from the command line with `node`. The results will be similar to the following:

```sh
[
  '/usr/bin/node',
  '/home/jarednielsen/FullStack-Ground/01-Class-Content/09-nodejs/01-day/03-Ins_process.argv/index.js'
]
```

* Ask the class the following question(s): 

  * ☝️ What is returned by this application?

  * 🙋 Running the application returns an array.

  * ☝️ What are the items in the array?'

  * 🙋 The first item in the array is the installation location of Node itself. The second item in the array is the **absolute path** to the application.

* Run the following commands from the command line:

  * `node index.js Hello`

  * `node index.js Hello World!`

  * `node index.js "Hello World!"`

* Ask the class the following question(s):

  * ☝️ How does the command line input relate to the output?

  * 🙋 Arguments entered at the command line are added to the returned array as individual elements.

  * ☝️ What is happening when we wrap quotes around multiple words?

  * 🙋 Wrapping several words in quotes returns them as one element in the array, rather than individual elements.

  * ☝️ Are there any tools we currently use that are similar?

  * 🙋 `git` is an example of a tool that is similar to the demonstration

* Open [03-Ins_process.argv/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/03-Ins_process.argv/index.js) in your IDE and explain the following point(s):

  * 🔑 We store command line arguments in an object property, `process.argv`.

  ```js
  console.log(process.argv);
  ```

  * We can think of `process.argv` as the _argument values_ passed to the execution _process_ at runtime.

  * 🔑 Because it is an array, we can access individual arguments via index.

  ```js
  // console.log(process.argv[2]);
  ```

  * 📖 If we want to learn more, we can read the documentation for [process.argv](https://nodejs.org/api/process.html#process_process_argv)

* Ask the class the following question(s): 

  * ☝️ What does it mean for us if we can pass arguments to our Node application?

  * 🙋 We can work with those values to create dynamic, interactive applications.

* Use student answers to transition to the next activity.

### 7. Students Do: Parameter Check Activity (10 mins)

* Direct students to the activity instructions in [03-Stu_Parameter-Check](../../../../01-Class-Content/09-NodeJS/01-Activities/04-Stu_Parameter-Check):

```md
  # Parameter Check

  In this activity, you will write a Node.js command line application that accepts two arguments and returns true if the two values are equal and false if they are not.

  ## Instructions

  * Create a file, `index.js`, in your working directory.

  * Write a script using `process.argv` to accept two command line arguments and compare their values.

  ## Hint(s)

  * Start by simply logging the value of each argument to console.

  * There's more than one way to solve this problem!

  ## Bonus

  * How many ways can you solve this problem?
```

### 8. Instructor Do: Review Parameter Check Activity (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ Values stored in `process.argv` are accessed by array index

  * ✔️ There are multiple solutiosn for any problem

* Navigate to [04-Stu_Parameter-Check/Solved](../../../../01-Class-Content/09-NodeJS/01-Activities/04-Stu_Parameter-Check/Solved/index.js) and run the following commands to demonstrate functionality of the application:

  * `node index.js 3 4`

  * `node index.js 7 7`

* Open [04-Stu_Parameter-Check/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/04-Stu_Parameter-Check/Solved/index.js) and explain the following:  

  * 🔑 We store the argument values stored in the process object in two variables:

  ```js
  var a = process.argv[2];
  var b = process.argv[3];
  ```

  * 🔑 We check the parameters using four different methods:

  ```js
  // using a conditional statement
  if (a === b) {
    console.log(true);
  } else {
    console.log(false);
  }

  //using a ternary operator
  console.log(a === b ? true : false)

  // comparing variables
  console.log(a === b);

  // comparing argument values directly
  console.log(process.argv[2] === process.argv[3]);
  ```

* Answer any questions before proceeding to the next demo.

### 09. Instructor Do: Reading Files (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ Importing modules using `require`

  * ✔️ Reading files with `fs`

* Open [05-Ins_readFile/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/05-Ins_readFile/index.js) and explain the following points:

  * When we installed Node.js, we also installed its **standard library**. The standard library includes dozens of **modules** that extend the basic functionality of Node.

  * 🔑 In order to use a modules, we need to _import_ it into our application using `require`:

  ```js
  var fs = require("fs");
  ```

  * We import the `fs`, or **file system** module using require and store it in a variable, `fs`.

  * 📝 The convention is to name variables after the module.

* Ask the class the following question(s):

  * ☝️ What do you think this application does?

  * 🙋 This application will _read a file_, `data.csv`, and will log the results stored in a variable, `data`.

  * 🔑 The `fs` method `readFile` accepts three arguments: 1. the file we want to read, the encoding format we want to use to read the file, and a callback.

  ```js
  fs.readFile("data.csv", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

  });
  ```

  * `"utf8"` is an encoding format that converts raw data into human-readable text. 
  
  * 📖 If we want to learn more about `utf8`, we can read the [Node documentation for readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) and the [Wikipedia article on character encoding](https://en.wikipedia.org/wiki/Character_encoding).

* Ask the class the following question(s):

  * ☝️ Why do you think we need to import modules if they are built-in to Node to begin with?

  * 🙋 We import modules into our application so that we are only loading exactly what we need. This will speed up the performance of our applications.

* Run [05-Ins_readFile](../../../../01-Class-Content/09-NodeJS/01-Activities/06-Ins_writeFile/index.js) from the command line and run `node index.js`. The results will be similar to:

```sh
10,123,76,5003,9,0.127,40,-1,2^4
```

* Edit `data.csv` to demonstrate that Node is in fact reading the file.

* Ask the class the following question(s):

  * ☝️ If we can _read_ files with Node, what else do you think we can do?

* Use student answers to transition to the next demo.

### 10. Instructor Do: Writing Files (5 min)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ The `fs.writeFile` method will generate non-existent files

  * ✔️ The `fs.writeFile` method will overwrite a file

* Open [06-Ins_writeFile](../../../../01-Class-Content/09-NodeJS/01-Activities/06-Ins_writeFile/index.js) in your IDE and explain the following:

  * We again import file system from our standard library.

  ```js
  var fs = require("fs");

  ```

  * Our code is similar, but different from the previous demo:

  ```js
  fs.writeFile("log.txt", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

  });
  ```

  * 📝 There is no `.txt` file in the `06-Ins_writeFile` directory.

* Ask the class the following question(s):

  * ☝️ What is different about this example?

  * 🙋 Rather than `readFile`, we are using the `fs` method `writeFile`. Rather than specifying an encoding format, our second argument is `process.argv[2]`.

* Run the following command from the command line:

```sh
node index.js Hello
```

* Open the newly created `log.txt` and point out the following: 

  * 🔑 Running our application created a new file, and wrote the text 'Hello' to it. 

* Run the following command: 

```sh
node index.js World!
```

* Open `log.txt` and point out the following: 

  * 🔑 Running our application wrote the text 'World!' to `log.txt`. 

* Ask the class the following question(s): 

  * ☝️ What happens when we run our application multiple times?

  * 🙋 `writeFile` overwrites existing files.

  * ☝️ How do we think we can resolve this issue?

  * 🙋 We need a method that can _append_ text to files.

### 11.	Students Do: Appending Files (10 min)

* Direct students to the activity instructions found in [07-Stu_appendFile](../../../../01-Class-Content/09-NodeJS/01-Activities/07-Stu_appendFile).

```md
  # appendFile

  In this activity, you will create a "commit logger" that records commit messages (for poetic purposes) using `fs`.

  ## Instructions

  * In your working directory, create a Node application, `index.js`, that accepts a command line argument, and, each time it is run, will write the argument to file _without_ overwriting the existing text.

  * You may need to consult the Node.js `fs` documentation for the appropriate method and its usage.

  ## Hint(s)

  * If `fs.readFile` reads a file and `fs.writeFile` writes, but _overwrites_, a file, what method do you think will allow you to _append_ text to a file?

  ## Bonus

  * How would you add arguments on new lines? 
```

### 12.	Instructor Do: Review Appending Files	(5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ `appendFile` appends text to file rather than overwriting the file

* Run [07-Stu_appendFile/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/07-Stu_appendFile/Solved/index.js) from the command line to demonstrate the application functionality, entering commands similar to the following:

```sh
node index.js "first"
node index.js "commit early and often"
node index.js "everyone wants a log"
```

* Open `07-Stu_appendFile/log.txt` and point out the following: 

  * Our application is now adding text to our file rather than overwriting the file. 

* Open [07-Stu_appendFile/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/07-Stu_appendFile/Solved/index.js) and explain the following:

  * 🔑 Our application is very similar to the previous demo, but here we have refactored it to use `appendFile` rather than `writeFile`:

  ```js
  fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Commit logged!");
    }

  });
  ```

  * 📝 We concatenate a new line character, `\n`, to the value stored in `process.argv[2]`.

* Ask the class the following question(s):

  * ☝️ How did you find the solution to this activity?"

  * 🙋 The solution can be easily found by searching for, and reading, the [Node.js documentation for the File System module](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback).

### 13. Instructor Do: Modularization Using Require/Exports (05 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ The Node.js standard library modules are _also_ written in JavaScript

  * ✔️ `module.exports`

* Navigate to the [Node.js source code for `fs`](https://github.com/nodejs/node/blob/master/lib/fs.js) in your browser. Find (CTRL + F) `appendFile` and point out the following: 

  * 🔑 `appendFile` is a function written in JavaScript. It even uses `fs.writeFile`! 

  ```js
  function appendFile(path, data, options, callback) {
    callback = maybeCallback(callback || options);
    options = getOptions(options, { encoding: 'utf8', mode: 0o666, flag: 'a' });

    // Don't make changes directly on options object
    options = copyObject(options);

    // Force append behavior when using a supplied file descriptor
    if (!options.flag || isFd(path))
      options.flag = 'a';

    fs.writeFile(path, data, options, callback);
  }
  ```

* Ask the class the following question(s):

  * ☝️ How would we extend the functionality of Node?'

  * 🙋 We could write our own modules!

* Run [08-Ins_Modularization/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/08-Ins_Modularization/index.js) from the command line. The output will be the following:

```sh
apple
1
```

* Open [08-Ins_Modularization/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/08-Ins_Modularization/index.js) in your IDE and explain the following:

  * We are importing a dependency, `badmath`, and logging the results of `badmath.pie` and `badmath.predictable`. 

  ```js
  var badmath = require("./badmath.js");

  console.log(badmath.pie);

  console.log(badmath.predictable());
  ```

* Open [08-Ins_Modularization/badmath.js](../../../../01-Class-Content/09-NodeJS/01-Activities/08-Ins_Modularization/badmath.js) and explain the following: 

  * We declare a `pie` and `predictable` variables:

  ```js
  var pie = "apple";

  var predictable = function(){
    return 1;
  }
  ```

  * 🔑 We _export_ our `pie` and `predictable` variables as an object stored in `module.exports`:

  ```js
  module.exports = {
    pie: pie,
    predictable: predictable
  };
  ```
  * 📖 If we want to learn more, we can read about it in the [module.exports documentation](https://nodejs.org/api/modules.html#modules_module_exports)

* Ask the class the following question(s): 

  * ☝️ What is referenced by the keyword **module**?'

  * 🙋 Our file, `badmath.js`. 

### 14. Students Do: Modularization (10 mins)

* Direct students to the activity instructions found in [09-Stu_maths-Module](../../../../01-Class-Content/09-NodeJS/01-Activities/09-Stu_maths-Module)

```md
  # Maths Module

  The JavaScript `Math` library contains many useful properties and methods. But it's missing a few of the basics. In this activity, you will create your own `maths` module then import it into a Node application to access its properties and methods.

  Running `node index.js sum 3 4` will return 7.

  ## Instructions

  * Create two files, `index.js` and `maths.js`, then import `maths.js` into `index.js`.

  * Write four methods for the results of the four basic mathematical operations in `maths.js`: `sum`, `difference`, `product`, and `quotient`; and then export them.

  * In `index.js`, create variables to capture the values passed from the command line in `process.argv`: `operation`, `numOne` and `numTwo`.

  * Next, write a `switch` statement that accepts an `operation` parameter.

  * Within each `case` of the `switch`, use the corresponding `maths` methods to perform the operation on the numbers taken from the command line using `process.argv`.

  ## Hint(s)

  * You will need to use `parseInt()`. But why?

  ## Bonus

  * You can also export your functions directly. How? 
```

### 15. BREAK (15 mins)

### 16. Instructor Do: Review Modularization (05 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ Direct export of a module

* Run [09-Stu_maths-Module/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/09-Stu_maths-Module/Solved/index.js) from the command line to demonstrate the application functionality, entering commands similar to the following:

```sh
node index.js sum 3 4
node index.js difference 3 4
node index.js product 3 4
node index.js quotient 3 4
```

* Open [09-Stu_maths-Module/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/09-Stu_maths-Module/Solved/index.js) in your IDE and explain the following: 

  * We import our `maths` module and declare three variables, `operation`, `numOne` and `numTwo` to store the values passed to `process.argv` from the command line:

  ```js
  var maths = require('./maths');

  var operation = process.argv[2];

  var numOne = parseInt(process.argv[3]);
  var numTwo = parseInt(process.argv[4]);
  ```

  * 📝 We use `parseInt()` to cast the values from strings to numbers.

  * We use a `switch` statement to evaluate the `operation` case and call the corresponding method from our `maths` module:

  ```js
  switch(operation) {
    case 'sum':
      console.log(maths.sum(numOne, numTwo));
      break;
    case 'difference':
      console.log(maths.difference(numOne, numTwo));
      break;
    case 'product':
      console.log(maths.product(numOne, numTwo));
      break;
    case 'quotient':
      console.log(maths.quotient(numOne, numTwo));
      break;
    default:
      console.log("Check your maths!");
  }
  ```

* Open [09-Stu_maths-Module/Solved/maths.js](../../../../01-Class-Content/09-NodeJS/01-Activities/09-Stu_maths-Module/Solved/index.js) and explain the following: 

  * 🔑 We export our maths methods directly by declaring them within the `exports` object: 

  ```js
  module.exports = {
    sum: function(a, b){
      return a + b;
    },
    difference: function(a, b){
      return a - b;
    },
    product: function(a, b){
      return a * b;
    },
    quotient: function(a, b){
      return a / b;
    }
  };
  ```

  * Each method accepts two parameters and returns the corresponding value.

* Answer any questions before proceeding to the next demo.

### 17. Instructor Do: npm (10 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ npmjs.com

  * ✔️ `npm install <package-name>`

  * ✔️ `node_modules`

  * ✔️ `package.json`

* Ask the class the following question(s):

  * ☝️ What if we wanted to share our module with other developers?

  * 🙋 We _could_  host our module on GitHub, JSFiddle or Codepen. We could also compress and share our files via email or Slack. 

  * ☝️ What would be the downside to these approaches?

  * 🙋 It would be difficult for other developers to find our module and would require them to clone the GitHub repository, or copy/paste the source code, or keep track of the compressed file. If one developer updates the module, then everyone elses' code go out of sync and requires a transfer of files again.

* Run [10-Ins_npm/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/10-Ins_npm/index.js) from the command line and point out the following: 

  * Our application throws an error when we run it. 

  ```sh
  Error: Cannot find module 'badmath'
  ```

* Ask the class the following question(s): 

  * ☝️ Why is this application throwing an error?

  * 🙋 Our `badmath` module is missing! 😮

* Navigate to [npmjs.com](https://www.npmjs.com) and search for "badmath", then navigate to the [badmath package registry](https://www.npmjs.com/package/badmath).

* Ask the class the following question(s): 

  * ☝️ Do we see a solution to our missing module problem?

  * 🙋 Our `badmath` module is hosted on [npmjs.com](https://www.npmjs.com). We see from the documentation that we can install the module by running the following command: 

  ```sh
  npm i badmath
  ```

  * ☝️ What is **npm**?

  * 🙋 `npm` is short for **Node Package Manager**. It is both a command line utility _and_ a databse of packages. We can learn more about npm on the [npm About page](https://docs.npmjs.com/about-npm/).

  * ☝️ What is the `i` in `npm i badmath`?

  * 🙋 The `i` is short for install. When we run `npm i badmath` from the command line, we install the `badmath` module in our application. We can also use the full word, `install`, so, for example: `npm install badmath`. 

* Run `npm i badmath` from the command line and explain the following: 

  * 🔑 We see a progress meter when we install packages, a few warnings, and a successful install message:

  ```sh
  + badmath@1.0.1
  added 1 package from 1 contributor and audited 1 package in 0.346s
  found 0 vulnerabilities
  ```

  * 📝 We must be in the working directory to install modules.

* Run [10-Ins_npm/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/10-Ins_npm/index.js) from the command line and point out the following: 

  * Our application now logs the expected values:

  ```sh
  apple
  1
  ```

* Open the [10-Ins_npm](../../../../01-Class-Content/09-NodeJS/01-Activities/10-Ins_npm) directory and point out the following: 

  * 🔑 Running `npm i badmath` created a `package-lock.json` file and a `node_modules` directory. 

  * The `package-lock.json` file is for keeping track of precise versions of all third-party libraries used in a project. This will be generated and updated for us automatically and we can ignore it for the most part.

* Ask the class the following question(s):

  * ☝️ What do we think we will find in the `node_modules` directory?

  * 🙋 When we open the `node_modules` directory we find a `badmath` directory. If we open the `badmath` directory, we find `index.js`.

  * ☝️ What do expect to find in `index.js`? 

  * 🙋 Our bad math!

* Open your generated `package.json` file in [10-Ins_npm](../../../../01-Class-Content/09-NodeJS/01-Activities/10-Ins_npm) in your IDE and explain the following: 

  * 🔑 The `package.json` file contains metadata about our module. These files serve as manifests (or guides) that completely articulate simple things like the name of the project, its description, and most importantly the packages that are being used in the project.

* Ask the class, 'How might a `package.json` file be useful in our own applications?' 

* Use student answers to transition to the next activity. 

### 18. Student Do: package.json (5 min)

* Direct students to the activity instructions in [11-Stu_package.json](../../../../01-Class-Content/09-NodeJS/01-Activities/11-Stu_package.json).

```md
# package.json

In this activity, you will install the `inquirer` package using `npm`. 

## Instructions

* Run `npm install`. 

    * 🎗 This needs to be your working directory. 

* What happens? How did `npm` know you wanted to install `inquirer`? Where did those additional packages come from?

## Bonus

* How would we create our own `package.json` files? 

```

### 19. Instructor Do: package.json Review (5 min)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ `npm install`

  * ✔️ Dependency dependencies

* Navigate to [11-Stu_package.json](../../../../01-Class-Content/09-NodeJS/01-Activities/11-Stu_package.json) and run the following command:

```bash
npm install
```

* Open the [11-Stu_package.json](../../../../01-Class-Content/09-NodeJS/01-Activities/11-Stu_package.json) directory and point out the following: 

  * Running `npm install` created a `node_modules` directory.

  * If we open the `node_modules` directory, we see that several packages were installed. 

* Ask the class the following question(s): 

  * ☝️ Where did all of these packages come from?

  * 🙋 When we run `npm install`, `npm` "reads" our `package.json` file and installs our application dependencies.

* Open [11-Stu_package.json](../../../../01-Class-Content/09-NodeJS/01-Activities/11-Stu_package.json) and point out the following: 

  * 🔑 `inquirer` is listed under `"dependencies"` in our `package.json` file.

* Open the generated `node_modules` folder inside of [11-Stu_package.json](../../../../01-Class-Content/09-NodeJS/01-Activities/11-Stu_package.json) and point out the following: 

  * Our `inquirer` package was installed as well as a several others. 

* Ask the class the following question(s): 

  * ☝️ Why did `npm` install more than just `inquirer`?

  * 🙋 The additional packages are dependencies of `inquirer`.

* Open the generated `node_modules/inquirer/package.json` file inside of [11-Stu_package.json](../../../../01-Class-Content/09-NodeJS/01-Activities/11-Stu_package.json) and point out the following: 

  * 🔑 Our dependency `inquirer` has quite a few of its own dependencies!

  ```js
  "dependencies": {
    "ansi-escapes": "^3.2.0",
    "chalk": "^2.4.2",
    "cli-cursor": "^2.1.0",
    "cli-width": "^2.0.0",
    "external-editor": "^3.0.3",
    "figures": "^2.0.0",
    "lodash": "^4.17.12",
    "mute-stream": "0.0.7",
    "run-async": "^2.2.0",
    "rxjs": "^6.4.0",
    "string-width": "^2.1.0",
    "strip-ansi": "^5.1.0",
    "through": "^2.3.6"
  },
  ```

* Ask the class the following question(s): 

  * ☝️ How would we create our own `package.json` files? 

  * 🙋 We _could_ write our own manually, but there's an easier way!

### 20. Instructor Do: npm init (5 min)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ `npm init`

  * ✔️ `npm install --save <package-name>`

* Open [12-Ins_npm-init](../../../../01-Class-Content/09-NodeJS/01-Activities/12-Ins_npm-init) and point out the following: 

  * This is the same 'application' from earlier demo, importing `badmath` and logging two values.

  ```js
  var badmath = require('badmath');

  console.log(badmath.pie);

  console.log(badmath.predictable());
  ```

* Navigate to [12-Ins_npm-init](../../../../01-Class-Content/09-NodeJS/01-Activities/12-Ins_npm-init) from the command line and run the following command: 

```sh
npm init
```

* Ask the class the following question(s):

  * ☝️ What is `init` short for?

  * 🙋 `npm init` is the command we use to _initialize_ a Node.js project

* Use the command prompts to generate a `package.json` file and explain the following: 

  * 🔑 `npm init` initializes a Node.js project with a `package.json` file

  * We first provide a package name. `npm` _reads_ the directory name and suggests it as the default value. We can select the default value by pressing Enter. 

  ```sh
  This utility will walk you through creating a package.json file.
  It only covers the most common items, and tries to guess sensible defaults.

  See `npm help json` for definitive documentation on these fields
  and exactly what they do.

  Use `npm install <pkg>` afterwards to install a package and
  save it as a dependency in the package.json file.

  Press ^C at any time to quit.
  package name: (12-ins_npm-init)
  ```

  * `npm` will next prompt us for a version number. We'll accept the default value. 

  ```sh
  version: (1.0.0) 
  ```

  * `npm` will next prompt us for a description. We want to be detailed with our description to help our collaborators (and future selves!) understand the application.

  ```sh
  description: Demonstration of initializing a Node.js application with npm.
  ```

  * `npm` will next prompt us for an entry point. `npm` will first look for an `index.js` file, which is the default and standard for Node applications. If it doesn't find one, it will suggest another file.

  ```sh
  entry point: (index.js) 
  ```

  * `npm` will next prompt us for a test command. We'll learn more about this later, so we'll leave it blank for the time being. 

  ```sh
  test command: 
  ```

  * `npm` will next prompt us for a the URL to the GitHub repository where this application will be hosted:

  ```sh
  git repository: https://github.com/nielsenjared/badmath
  ```

  * `npm` will next prompt us for keywords. Keywords help other developers find our module on GitHub and npmjs.com:

  ```sh
  keywords: 
  ```

  * `npm` will next prompt us for an author. 

  ```sh
  author: Dr. Seuss
  ```

  * `npm` will prompt us for a license. The default value is `ISC`, an open source, "as is" license. 
  
  ```sh
  license: (ISC)
  ```
  
  * 📖 If we want to learn more about ISC, we can read about it at the [Open Source Initiative](https://opensource.org/licenses/ISC). We can specifiy any license we want. If we want to learn more about software licenses, we can review our options on the [GitHub Help page for Licensing a repository](https://help.github.com/en/articles/licensing-a-repository)
  
  * Lastly, `npm` will display the results of our input and prompt us with the following: 

  ```sh
  About to write to /home/jarednielsen/apps/FullStack-Ground/01-Class-Content/09-NodeJS/01-Activities/12-Ins_npm-init/package.json:

  {
    "name": "12-ins_npm-init",
    "version": "1.0.0",
    "description": "Demonstration of initializing a Node.js application with npm.",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/nielsenjared/badmath.git"
    },
    "keywords": [
      "npm",
      "demo"
    ],
    "author": "Dr. Seuss",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/nielsenjared/badmath/issues"
    },
    "homepage": "https://github.com/nielsenjared/badmath#readme"
  }

  Is this OK? (yes) 
  ```

  * When we press Enter and accept the default, `(yes)`, our `package.json` file is created. 

  * 📝 `npm` automatically generated a "bugs" property and the "url" points to the Issues associated with our GitHub repository.
  
  * 📝 `npm` automatically generated a "homepage" property and the value is the README of our GitHub repository.

  * 📖 If we want to learn more about `npm init`, we can read the [npmjs.com documentation on creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)

* Ask the class the following question(s): 

  * ☝️ But how do we add dependencies to our `package.json` file?

  * 🙋 We _could_ edit the `package.json` file manually. Or we could use a **flag** to instruct `npm` to add it for us.

* Run the following command from the command line: 

```sh
npm install badmath --save
```

* Open [12-Ins_npm-init/package.json](../../../../01-Class-Content/09-NodeJS/01-Activities/12-Ins_npm-init/package.json) and point out the following: 

  * 🔑 Using the `--save` flag when installing a module _saves_ it to our `package.json` file as a dependency.

  ```js
  "dependencies": {
    "badmath": "^1.0.1"
  },
  "devDependencies": {},
  ```

* Answer any questions before proceeding to the next activity.


### 21. Students Do: npm init (5 min)

* Direct students to the instructions in [13-Stu_npm-init]:

```md
  # npm init

  In this activity, you will initialize your first Node project using `npm` and install (and save) the `inquirer` package.


  ## Instructions

  * From the command line, run `npm init`. 

      * 🎗 Remember to run the command from within your working directory. 

  * Follow the prompts and enter relevant information.

  * Once your `package.json` file is created, run `npm install inquirer --save` to install our dependency.  


  ## Bonus

  * What does the `-y` flag do when running `npm init`? 

  * What does the `-g` flag do when running `npm install`? 
      
      * 🎗️ With great power comes great responsibility.
```

### 22. Instructor Do: npm init Review (5 min)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ `npm init -y` generates a `package.json` file with default values

  * ✔️ `npm install --save` installs a module as a dependency in our `package.json` file

  * ✔️ `npm install --save-dev <package-name>` installs a module as a development dependency in our `package.json` file
  
  * ✔️ `npm install -g <package-name>` installs a module globally

  * ✔️ `npm uninstall` uninstalls a module. It can be combined with `-g`, `--save` and `--save-dev`.

* Ask the class the following question(s): 

  * ☝️ What does `npm init -y` do?

  * 🙋 Using the `-y`, or "yes", flag with `npm init` accepts all default options and leaves optional fields blank. 

* Run `npm init -y` from the command line and point out the following: 

  * 🔑 `npm init -y` accepts the default options and automagically generates a `package.json` file for us.

  * 📝 `npm` does _not_ prompt us for details about our module. 

* Ask the class the following question(s): 

  * ☝️ How do we add dependencies, such as `inquirer`, to our `package.json`?

  * 🙋 We use the `--save` flag with `npm install`, so, `npm install --save inquirer`

  * ☝️ What does `--save-dev` do? 

  * 🙋 `--save-dev` installs a package as a development dependency. This is for packages that are only used locally, but won't be required when the application is deployed.

  * ☝️ What does the `-g` flag do when running `npm install`?

  * 🙋 The `-g`, or global, flag installs an npm package _globally_, meaning we can use it from any directory on our computer. By default, npm installs _locally_, or within the working directory where the command is run.

  * ☝️ Why would we _not_ want to install our dependencies globally by default?

  * 🙋 To ensure that our applications are using the correct version of a package.
  
  * ☝️ What are examples of packages we _would_ want to install globally?

  * 🙋 Developer tools that are not dependencies in our application code base.

* Run `npm install -g jshint` from the command line and explain the following: 

  * We installed `jshint` globally using the `-g` flag, meaning we can use this package in any Node application. 

* Ask the class the following question(s):

  * ☝️ How would we _uninstall_ a package?

  * 🙋 We use the command `npm uninstall` with the package name and how we want to uninstall it, i.e: a dependency (`--save`), a dev dependency (`--save-dev`) or globally (`-g`).

* Run `npm uninstall -g jshint` from the command line and explain the following: 

  * 🔑 We uninstalled the `jshint` package globally using `npm uninstall -g`

* Answer any questions before proceeding to the next demo.
  
  * 📖 If we want to learn more about the options available to us, we can read about them in the [`npm-install` documentation](https://docs.npmjs.com/cli/install).

### 23. Instructor Do: Inquirer Intro (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ The `inquirer.prompt` method accepts an array of objects, each with `type`, `name` and `message` properties.

  * ✔️ The results of the `prompt` method are passed in an object as the callback parameter, `response`, in the Promise chain

* Ask the class:

  * ☝️ What do we think this `inquirer` package does?

  * 🙋 Based on the dictionary definition of _inquire_, it might be used to ask for information from someone, that someone being the user of our application.

* Navigate to [14-Ins_Inquirer-Demo](../../../../01-Class-Content/09-NodeJS/01-Activities/14-Ins_Inquirer-Demo) and install dependencies using:

  * `npm install`

* Run [14-Ins_Inquirer-Demo/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/14-Ins_Inquirer-Demo/index.js) from the command line and explain the following: 

  * Our application prompts us for a user name, a password and a confirmation. 

  * If the passwords match, the application logs "Success!".

* Open [14-Ins_Inquirer-Demo](../../../../01-Class-Content/09-NodeJS/01-Activities/14-Ins_Inquirer-Demo/index.js) in your IDE and explain the following: 

  * We require our `inquirer` dependency.

  ```js
  var inquirer = require("inquirer");
  ```

  * 🔑 We use the `prompt` method to _prompt_ users for input.

  ```js
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your user name?",
        name: "username"
      },
      {
        type: "password",
        message: "What is your password?",
        name: "password"
      },
      {
        type: "password",
        message: "Re-enter password to confirm:",
        name: "confirm"
      }
    ])
  ```

  * 📝 Our prompts are an array of objects with `type`, `message` and `name` properties. The input of each prompt will be stored in an object property that corresponds to the `name` value. The `type` values are built in to `inquirer` and what allows us to enter _secure_ passwords.
  
  * 📝 The `message` property in each object corresponds with the prompt we saw at the command line.

  * 🔑 Once all of the prompts are answered, we can _then_ work with the user `response`. Here, the `response` parameter in the `.then` callback corresponds with the user input, which `inquirer` store in an object. 

  ```js
    .then(function(response) {

      if (response.confirm === response.password) {
        console.log("Success!");
      }
      else {
        console.log("You forgot your password already?!");
      }
    });
  ```

  * 📝 We _validate_ the users' password with a conditional statement, checking if `response.confirm` if equal to `response.password`. If so, we return "Success!". If not, "You forgot your password already?"

* Answer any questions before proceeding to the next activity.

  * 📖 If we want to learn more, we can read the [`inquirer` documentation](https://www.npmjs.com/package/inquirer)

### 24. Students Do: Inquirer User (20 mins)

* Run [15-Stu_Inquirer-Users/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/15-Stu_Inquirer-Users/Solved/index.js) from the command line to demonstrate the application functionality and point out the following: 

  * We are prompted for our name.

  * We are then prompted for the langauges we know. Using the space bar, we can select multiple options. 

  * We are prompted for our preferred method of communication. Unlike the previous prompt, we can only select one option. 

  * After all prompts are entered, a `json` file is created from the name we entered at the prompt, for example: `adalovelace.json`

* Direct students to the activity instructions in [15-Stu_Inquirer-Users](../../../../01-Class-Content/09-NodeJS/01-Activities/15-Stu_Inquirer-Users):

```md
  # Inquirer Users

  In this activity, you will build a simple command line application that accepts user input and writes it to a `.json` file. 

  ## Instructions

  * Initialize your repository and install the `inquirer` dependency.

      * Is there another dependency you will need? 

  * Prompt your user with the following questions:

      * "What is your name?"

      * "What languages do you know?"

      * What is your preferred method of communciation?"

  * Then write the user response to a file. 

  ## Hint(s)

  * You will need to use `JSON.stringify()`.

  * You will need to consult the `inquirer` documentation on how to prompt users for checkboxes and lists.


  ## Bonus

  * How would you format your JSON?

  * Can you generate the name of your user file from their input?
```

### 25. Instructor Do: Review Inquirer User Activity (10 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔️ Our application requires two dependencies, one third-party (`inquirer`) the other standard library (`fs`).

  * ✔️ We use two new `type` properties to prompt our user for a `"checkbox"` and a `"list"`, both of which require a `choices` property and a corresponding array of options.

  * ✔️ We use the `JSON.stringify` optional `replacer` (`null`) and `space` (`\t`) parameters to format our `data` object with pretty-print appearance. 

* Open [15-Stu_Inquirer-Users/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/15-Stu_Inquirer-Users/index.js) in your IDE and explain the following: 

  * 🔑 Our application requires two dependencies, one third-party (`inquirer`) the other standard library (`fs`).

  ```js
  var inquirer = require("inquirer");
  var fs = require('fs');
  ```

  * 🔑 We use two new `type` properties to prompt our user for a `"checkbox"` and a `"list"`, both of which require a `choices` property and a corresponding array of options.

  ```js
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "MySQL"
      ]
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: [
        "email",
        "phone",
        "telekinesis"
      ]
    }
  ])
  ```

  * We pass the output of the `prompt` method to our Promise callback as `data`.
  
  ```js
  ]).then(function(data) {
  ```

  * 📝 We named this parameter `response` in the demo, but we can call it anything, as long as it follows best-practices and is descriptive.

  * 🤓 We create a `filename` variable by converting the value in `data.name` to lowercase, removing any spaces using `split(' ')` and then joining the split values back together without spaces using `.join('')`. We concatenate this value with `".json"` to add a file extension.

  ```js
    var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  ```

  * 🔑 We use the `fs.writeFile` method to create a new file using our `filename` variable. We use the `JSON.stringify` optional `replacer` (`null`) and `space` (`\t`) parameters to format our `data` object with pretty-print appearance.

  ```js
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

      if (err) {
        return console.log(err);
      }

      console.log("Success!");

    });
  });
  ```

  * Answer any questions before class end.

    * 📖 If we want to learn more about JSON.stringify, we can read the [MDN documentation for JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

### 1. Instructor Do: Arrow Function Demo (10 mins)

* In this demonstration you will give students and overview of arrow functions, including syntax differences, when to use them, and when to avoid them.

* Explain to the class that ES6 introduces a newer shorter syntax for writing functions. Consider the following example found in [01-syntax.js](../../../../01-Class-Content/09-nodejs/02-day/01-Ins_ArrowFunction/01-syntax.js).

* Walk the students through each function below. See if they can point out the differences in syntax.

  ```js
  // ES5 function
  var createGreeting = function(message, name) {
    return message + ", " + name + "!";
  };

  // ES6 arrow function
  var createGreeting = (message, name) => {
    return message + ", " + name + "!";
  };

  // ES6 arrow function with one expression
  var createGreeting = (message, name) => message + ", " + name + "!";

  // ES6 arrow function with one parameter
  var greet = greeting => console.log(greeting);

  // Calling an arrow function
  var greeting = createGreeting("Hello", "Angie");

  // Logs "Hello, Angie!";
  greet(greeting);
  ```

* Take a few moments to answer any questions about the arrow function syntax before moving on to some behavioral differences between arrow functions and regular functions.

* Now walk through the first part of the code in [02-context.js](../../../../01-Class-Content/09-nodejs/02-day/01-Ins_ArrowFunction/02-context.js).

  ```js
  // Depending on the environment `setTimeout` is called in, it may refer to one of two objects
  // In the browser, `setTimeout` is a property of the `window` object
  // In node, it belongs to a special "Timeout" object

  var person = {
    name: "Hodor",
    saySomething: function() {
      console.log(this.name + " is thinking...");
      setTimeout(function() {
        console.log(this.name + "!");
      }, 100);
    }
  };

  person.saySomething(); // prints "Hodor is thinking..."
  // prints "undefined!" 100ms later

  // Arrow functions bind the `this` keyword to the object it's created inside of
  // i.e. whatever `this` is where it's created
  var person = {
    name: "Hodor",
    saySomething: function() {
      console.log(this.name + " is thinking...");
      setTimeout(() => console.log(this.name + "!"), 100);
    }
  };

  person.saySomething(); // "Prints Hodor is thinking..."
  // prints `Hodor!` 100ms later
  ```

  * Students may still not feel completely comfortable with the `this` keyword in JavaScript yet, inform them that many experienced developers still aren't as it's a tricky topic.

  * When run in the browser `this` inside of the `setTimeout` method refers to the `window`, when run inside of node, it refers to a newly created `Timeout` object. In both cases, `setTimeout` changes `this` to no longer be the `person` object.

  * Explain that we could resolve this issue by using `.bind(this)` as we've done before, but ES6 introduces arrow functions, a shorter more concise syntax for doing just this.

  * Point out how this code works as intended. Explain that this is because an arrow function automatically binds to the context or object it's created inside of, even if it is not a direct property of that object. The arrow function is created when `saySomething` is run, inside of `person` right before the `setTimeout` is run.

* Explain that this may seem great, but we can experience unexpected results if we were to write an object's method as an arrow function. 

* Demonstrate [03-arrow-property-methods.js](../../../../01-Class-Content/09-nodejs/02-day/01-Ins_ArrowFunction/03-property-methods.js).

  ```js
  // Avoid using arrow functions for object methods
  var dog = {
    name: "Lassie",
    sound: "Woof!",
    makeSound: () => console.log(this.sound),
    readTag: () => console.log("The dog's tag reads: " + this.name + ".")
  };

  // Prints `undefined`
  dog.makeSound();

  // Prints `The dog's tag reads: undefined.`
  dog.readTag();

  // In the makeSound and readTag methods, `this` doesn't refer to `dog`
  // If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
  // If this code was run in the browser, `this` would refer to the window
  ```

  * Explain that when working with objects, we typically want to avoid using arrow functions for its methods. In these cases, the arrow function will bind to the context it's created inside of (probably the `window` or `module.exports` object).

  * We can replace regular functions with arrow functions _most_ of the time, but they aren't meant to replace regular functions altogether for reasons like this. Additionally (native, non-transpiled) arrow functions can't be used as constructor functions and also don't have access to Function prototype methods such as `bind`, `call`, and `apply`.

  * Students will become more comfortable with when to use and not use arrow functions as they practice using them. For now, they should understand that they can use them most of the time, but they should avoid using them as object methods.

* At a minimum, arrow functions give us slightly shorter syntax for writing functions.

* Take a moment to answer any lingering questions.

### 2. Student Do: Arrow Function Practice (10 mins)

* In this activity students will convert a file with pre-written code over to use arrow functions where suitable.

* Students won't need to fully understand how all the code in this activity works, just the rules we've established about when arrow functions should and shouldn't be used.

* **File:** [Arrow Function Practice](../../../../01-Class-Content/09-nodejs/02-day/02-Stu_ArrowFunctionPractice/Unsolved/index.js)

* **Instructions**: 

  * Open [Unsolved/index.js](../../../../01-Class-Content/09-nodejs/02-day/02-Stu_ArrowFunctionPractice/Unsolved/index.js) in your editor and run the code. Take a few moments to study the values logged to the console, but don't worry about understanding every part of the code. For this activity you only need to remember the rules established about when arrow functions should and shouldn't be used.

  * Update this example to use arrow functions **where suitable**. If successful, the code should still work the exact same way.

  * Remember the case from the last example in which we should _not_ be using arrow functions.

  * **Bonus**

  * After you've converted all of the functions to arrow functions where possible, look for opportunities to shorten the arrow function syntax even further by removing parentheses and curly braces where allowed.

  * Instructional staff should be circulating the room checking in on students progress and making themselves available for assistance.

### 3. Instructor Do: Review Arrow Function Practice (5 mins)

* Open [Arrow Function Practice](../../../../01-Class-Content/09-nodejs/02-day/02-Stu_ArrowFunctionPractice/Solved/index.js) in your editor and run the code. 

* Point out that even though we've converted a few of the examples over to use arrow functions, the code works exactly the same as it did before.

  ```js
  var funnyCase = string => {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
      if (i % 2 === 0) newString += string[i].toLowerCase();
      else newString += string[i].toUpperCase();
    }
    return newString;
  };
  ```

* Point out again how we can omit the parentheses around the arrow function parameters if there is only one. This **does not** work if the arrow function has multiple or no parameters. This is optional, assure students that they don't need to do this, but may see code written this way.

  ```js
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var doubled = map(numbers, element => element * 2);
  ```
  * Point out again how we can also omit an arrow function's curly braces if the arrow function body only contains one expression. The single expression is automatically returned from the function when we use this shorter syntax. Students may see code written in this way, but this is also optional, if students prefer, they may continue to use curly braces and the `return` keyword.

* Finally point out the `netflixQueue` object. Ask the class: Why didn't we convert the functions here to arrow functions?

  ```js
  var netflixQueue = {
    queue: [
      "Mr. Nobody",
      "The Matrix",
      "Eternal Sunshine of the Spotless Mind",
      "Fight Club"
    ],
    watchMovie: function() {
      this.queue.pop();
    },
    addMovie: function(movie) {
      this.queue.unshift(movie);
    },
    printQueue: function() {
      var list = "";
      for (var i = this.queue.length - 1; i >= 0; i--) {
        var currentMovie = this.queue[i];
        list += (this.queue.length - i) + ". " + currentMovie + "\n";
      }
      console.log(list);
    }
  };
  ```
  * Whenever we're working with objects, we usually don't want to write its methods as arrow functions since `this` inside of the arrow function will refer to whatever object the one we're defining is inside of (usually the `window` in the browser or `module.exports` in node).

* Inform the class that the key takeaways for now are:

  * In most cases, we can replace regular functions with arrow functions.

  * Arrow functions shouldn’t be object methods.

### 4. Instructor Do: Let and Block Scope (10 mins)

* In this example we will demonstrate the new `let` keyword and how block scoping works.

* Explain to the class that by now they should be familiar with function scope. Have a volunteer offer up their explanation for what this means.

* With function scope, variables defined inside of a function body are only available inside of that function, as well as functions defined inside of that function.

* Explain that ES6 offers us a new way to define variables using `let`. Unlike `var`, `let` is block scoped.

* Inform the class that a "block" is created whenever we have a pair of curly braces. This includes loops and conditional statements as well as function bodies. Since `let` is block scoped, any variables we define using `let` inside of a block are only available inside of that block.

* This can help us avoid a few silly mistakes in our code. 

* Point out the first example in [Let Block Scope](../../../../01-Class-Content/09-nodejs/02-day/03-Ins_LetAndBlockScope/index.js).

  ```js
  // 1. When using var, our counter exists after a for-loop is done

  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i); // Prints 5


  // When using let, our counter is not defined outside of the for-loop block

  let x = 42;

  for (let j = 0; j < 5; j++) {
    console.log(j);
    console.log(x);
  }

  console.log(j); // ReferenceError: j is not defined

  let j = 42;
  console.log(j); // prints 42
  ```

  * Point out how our for-loop counter continues to exist after the for-loop has ended. We don’t need it anymore. This could potentially cause issues if we wanted to refer to a different variable with the same name as the counter later.

  * Even though the `let` declaration is not technically inside of the curly braces, it's considered to be part of the block anyway in this case.

  * Point out how the counter no longer exists after the loop is done when we use `let`.

  ```js
  // 4. When writing conditionals, values defined inside the conditional block exist outside of it

  if (true) {
    var favoriteColor = "red";
  }

  console.log(favoriteColor); // Prints `red`

  // When using let, values defined inside of a conditional block don't exist outside

  let favoriteFood;

  if (true) {
    favoriteFood = "pizza";
  }

  // This works since favoriteColor is not defined inside of a block
  console.log(favoriteFood);
  // Prints `pizza`

  ```

* Point out how when using `let`, any values defined inside of a conditional block no longer exist outside of the conditional.

* If you need to use a variable both inside and outside of  a block, you’d define it outside of the block. Example:

  ```js
  let favoriteFood;

  if (true) {
    favoriteFood = "pizza";
  }

  // This works since favoriteFood is not defined inside of a block
  console.log(favoriteFood);
  // Prints `pizza`
  ```

* This helps express intent because it tells others more information about where or how we’ll be using the value.

* Inform the class that going forward, we will no longer be using `var`. 

* Unlike arrow functions and regular functions, we can completely replace `var` with `let`.

* Take a moment to answer any questions, but avoid getting too off track! We'll go over `const` next!

### 5. Instructor Do: Constant Reference (10 mins)

* In this demonstration we will cover the new `const` keyword for defining variables and when it should be used.

* Explain to the class that while we can replace all the `var`s in all of our code with `let`, we also have one more new option for declaring variables: `const`.

* Ask the class: Can anyone tell me what they think `const` is used for in JavaScript?

  * Odds are, if any students have been exposed to another programming language, someone will answer that `const` is like `let`, except that it's for variables which can't be changed. This is _mostly_ true.

* Explain that `const` has the same rules as `let` for block scoping. There is, however, one one key difference between `const` and `let`: a variable declared with `const` cannot be _reassigned_.

* Inform the class that using `const` can help prevent us from accidentally reassigning values we don't mean to, and also helps express intent, helping us document important values in our code for other developers, or for our future selves when we forget how the code works.

* Open [Constant Reference](../../../../01-Class-Content/09-nodejs/02-day/04-Ins_ConstantReference/index.js) and go through each example.

  ```js
  // const can be used for values which we will not reassign

  const age = 25;

  age++; // TypeError: Assignment to constant variable.

  // ==========================================================================

  // const name = "";


  // name = "Cherie"; // TypeError: Assignment to constant variable.
  ```

* Point out that whenever we try to reassign a variable declared with `const`, we get an error in the console. 
  
* Whenever we're working with primitive types such as strings or numbers, even modifying the value e.g. `age++`, is considered to be reassigning it. 

* This is because primitive types such as numbers and strings are "passed by value", i.e. a new value is created and referred to in memory anytime we modify variable containing a primitive type.

  ```js
  // const doesn't mean `constant value`, instead means `constant reference`

  // Unlike primitive data types, objects and arrays are passed by reference, rather than passed by value
  const beatles = ["John", "Paul", "Ringo"];
  beatles.push("George");

  // This works because by updating an array's contents, we aren't changing the reference to the underlying array
  console.log(beatles); // Prints `["John", "Paul", "Ringo", "George"]`

  console.log(beatles);

  const person = { name: "Brianna", age: 11 };
  person.age++;
  person.favoriteMovie = "Spider-Man";
  person.name = "Carla";

  // console.log(person); // Prints `{ name: 'Carla', age: 12, favoriteMovie: 'Spider-Man' }`
  ```

* Point out how in the second example, we can update the array and object as long as we aren't reassigning them completely, i.e. using the `=` operator to assign the variables a new values.

* Explain that `const` in JavaScript doesn't mean "constant value", but rather "constant reference". Because arrays and objects are non-primitive values, they are "passed by reference", i.e. modifying an array or object doesn't create a new object or array in memory. This is why we can push to the array or update the object's properties.

  ```js
  // While we can MODIFY arrays and objects that are using `const`, we can't reassign them

  const item = {
    id: 23,
    title: "Underwater Basket-Weaving DVD",
    price: "$17.99"
  };

  item.price = "$1.99";

  console.log(item);

  const item = {
    id: 11,
    title: "Underwater Basket-Weaving Shoes",
    price: "$101.43"
  }; // TypeError: Assignment to constant variable.

  const ninjaTurtles = [];

  // The same rules apply to arrays, we can MODIFY them, but not completely reassign them

  ninjaTurtles = [
    "Michaelangelo",
    "Leonardo",
    "Raphael",
    "Donatello"
  ]; // TypeError: Assignment to constant variable.
  ```
  * To check for understanding, ask the class: `Why isn't this last example allowed?`

    * While we can modify arrays and objects declared with `const`, we still can't reassign them completely.

* Key takeaways for this demonstration:

  * Both `const` and `let` are block scoped.

  * Use `let` whenever a value will need to be reassigned.

  * Use `const` whenever a value won't need to be reassigned.

### 6. Student Do: Convert Const Let Arrow (10 mins)

* In this activity students will convert a prebuilt Crystal Guessing Game to use the new ES6 syntax covered so far.

* Stress that students don't need to completely understand all of the code in the activity. They just need to remember what we just overed about `const`, `let`, and arrow functions.

* **File:** [Convert Const Let Arrow](../../../../01-Class-Content/09-nodejs/02-day/05-Stu_ConvertConstLetArrow/Unsolved/index.html)

* **Instructions**: 

  * Open [Unsolved/index.html](../../../../01-Class-Content/09-nodejs/02-day/05-Stu_ConvertConstLetArrow/Unsolved/index.html) in your web browser and take a moment to understand the application's functionality.

  * Now open [Unsolved/index.js](../../../../01-Class-Content/09-nodejs/02-day/05-Stu_ConvertConstLetArrow/Unsolved/index.js) in your code editor and convert the existing code over to use the ES6 syntax we've learned about in the previous examples.

  * Make sure to do the following:

    1. Convert all `var` identifiers to use `const` or `let` &mdash; whichever is more appropriate.

    2. Convert functions to arrow functions **where suitable** &mdash; remember, arrow functions are not right for every situation.

  **IMPORTANT**: After each change, run the the code in your web browser to make sure that everything still works as expected. If completed successfully, there should be no difference in the way the app runs in the browser before and after the changes.

  * Remember to use `let` where values are expected to be reassigned, use `const` for when they are not.

  * Remember that arrow functions can't be used as constructor functions, and they are not suitable for object methods.

### 7. Instructor Do: Review Convert Const Let Arrow (5 mins)

* Open [Solved/index.js](../../../../01-Class-Content/09-nodejs/02-day/05-Stu_ConvertConstLetArrow/Solved/index.js) in your code editor and walk through the code with the class.

* For every `let`, ask the class: "Why it isn't a `const` instead?"

  * Because the value is reassigned somewhere.

* For every `function` keyword: ask the class, "Why isn't an arrow function isn't used instead?"

  * In this activity, constructor functions and functions that are object methods using the `this` keyword are kept as regular functions.

  * For object methods, arrow functions will prevent `this` from binding to the object.

  * Arrow function's can't be used as constructor functions.

* Run the application in the browser and demonstrate that it works the same as it did before.

* Answer any remaining questions about the solution.


### 8. Instructor Do: Functional Loops (10 mins) 

* In this demonstration students will be introduced to new Array methods `forEach`, `filter`, and `map`.

* Explain that `filter` and `map` are used heavily in React when rendering elements from array data. Students have probably seen `forEach` already, but it's a good stepping stone for understanding `filter` and `map`.

* Go through each example in [index.js](../../../../01-Class-Content/09-nodejs/02-day/06-Ins_FunctionalLoops/index.js) one at a time to demonstrate the utility of `forEach`, `filter`, and `map`.

```js
const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

moviePatrons.forEach(patron => console.log(patron.age));

const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age > 17;
});

console.log(canWatchRatedR);

const cardedMoviePatrons = moviePatrons.map(patron => {
  if (patron.age >= 17) {
    patron.canWatchRatedR = true;
  } else {
    patron.canWatchRatedR = false;
  }
  return patron;
});

console.log("Carded Movie Patrons: ");
console.log(cardedMoviePatrons);
```

  * Explain how each of the array methods:

    * Works on an array

    * Runs a callback function once for each element in the array

    * Passes the each element into the callback as an argument

  * Then work on explaining the differences between each of these methods:

    * `forEach` is the simplest. It runs the callback for each element in the array

    * `fitler` is similar to `forEach`, but it returns a brand new array using elements in the original array. If an element's callback function returns a truthy value, it is added to the newly returned array, otherwise it is _filtered_ out and doesn't get added to the new array.

    * `map` is similar in that it also returns a brand new array using elements in the original array. Unlike `filter`, the new array created with `map` is always the same length as the original array. Whatever is returned by the callback on each iteration is what goes into the new array. We can use this to create a new array of modified elements, or elements computed from values in the original array.

* Run each example one at a time and demonstrate the logged output for students.

* If helpful, demonstrate how each piece of functionality can be achieved (with more code) using for-loops.

### 9. Student Do: Functional Loops (10 mins)

* In this activity students will use the `map` and `filter` methods to solve problems they previously would have used for-loops for.

* Consider live-coding each problem piece by piece over the duration of the activity.

* **Files**: [Functional Loops Unsolved](../../../../01-Class-Content/09-nodejs/02-day/07-Stu_FunctionalLoops/Unsolved)

* **Instructions**

  * Open [Functional Loops Unsolved](../../../../01-Class-Content/09-nodejs/02-day/07-Stu_FunctionalLoops/Unsolved) and examine the `map.js` and `filter.js` files. 

  * Study the examples provided and complete the problems outlined in the comments.

### Bonus

* Use arrow functions as callbacks here.

### 10. Instructor Do: Review Functional Loops (5 mins)

* Once time's up, open the [activity solution](../../../../01-Class-Content/09-nodejs/02-day/07-Stu_FunctionalLoops/Solved) and go over the code.

* Start by demonstrating the `map` example.

  ```js
  const originalArray = [1, 3, 2, 5, 10];

  const doubledArray = originalArray.map(function(data) {
    return data * 2;
  });

  console.log(doubledArray);
  console.log(originalArray);

  const tripledArray = originalArray.map(data => data * 3);
  const oddOrEven = originalArray.map(num => (num % 2 === 0 ? "even" : "odd"));
  ```

  * Remind the class that the callback is run once for each element in the array. Whatever it returns is what goes into the corresponding index of the new array.

  * If the arrow function syntax is still confusing, refactor the solutions to use regular functions instead.

* Then move on to the `filter` example.

  ```js
  const originalArray = [1, 3, 2, 5, 10];

  const evenNumbers = originalArray.filter(function(data) {
    if (data % 2 === 0) {
      return true;
    }
  });

  console.log(evenNumbers);
  console.log(originalArray);

  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };


  numbers (`primeArray`)
  const primeArray = originalArray.filter(isPrime);

  larger than 5(`moreThan5Array`)

  const moreThan5Array = originalArray.filter(num => num > 5);
  ```

  * Point out that we don't need to pass an anonymous function into the `map` and `filter` methods &mdash; we can write a named function and use that instead, as is the case for `isPrime`.

  * Remind the class that if the function returns something truthy, that array element is copied to the new array, otherwise it is skipped.

    * The first example should contain an array of only prime numbers, the second should only contain numbers larger than `5`.

  * Once again, refactor the solution to regular functions if arrow functions are still a point of confusion.

* Check for understanding by asking questions such as:

  * "When's a time in real life when you need to _filter_ through something?"

    * When looking for a word in the dictionary, you're _filtering_ out all the words that don't contain the same letters as the one you're looking for.

    * When shopping for pants, you're _filtering_ out all the ones on the rack that aren't your size.

    * When you're looking for your friend in a crowd, you're _filtering_ out everyone that doesn't look like them.

  * "When's a time in real life when you need to _map_ over something?"

    * When you're _mapping_ through your todolist and marking off all the things you've completed for the day.

    * When you're _mapping_ through your laundry pile, categorizing your clothes so you can put them into the correct drawers.

* Explain that just like how we need to map and filter over things in real life, we often need to in code as well.

* Take a moment to answer any remaining questions before the next demonstration.

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
