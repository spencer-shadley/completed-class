## Node

### 1

1. Web workflow - `vocab` `client` `server`

   ❓ The **_ is the physical hardware or software that takes requests from the _** and gives something back or completes a process.

   - client, server
   - server, client ✔️
   - API, client
   - client, API

### 2

1. More web workflow - `vocab` `client` `server`

   ❓ Asking for something or some process to happen is called the **_ while what is returned as a result of it is called the _**.

   - request, response ✔️
   - AJAX, web page
   - response, request
   - request, API

### 3

1. Server side development - `vocab` `Node`

   ❓ \_\_\_ allows us to run JavaScript outside of the browser, and on the server instead.

   - HTTP
   - AJAX
   - Node ✔️
   - NPM

### 4

1. Node server advantages - `vocab` `Node`

   ❓ The advantage of using Node as a server is:

   - Easy extendability with plugins
   - Fast implementation with few lines of code
   - JavaScript use so frontend JavaScript devs can code backend too
   - all of the above ✔️

### 5

1. Node server model - `asynchronous` `vocab`

   ❓ Node uses \_\_\_ threading which allows the server to handle all requests using a single thread through event-based callbacks.

   - perpendicular
   - synchronous
   - multi
   - asynchronous ✔️

### 6

1. Executing JS files outside the browser - `syntax` `Node`

   ❓ We can use Node to run a JavaScript file outside of the browser from bash/terminal with the command \_\_\_.

   - `node filename.js` ✔️
   - `run filename.js`
   - `filename.js execute`
   - You cannot - it must be run from the browser

### 7

1. Console logging from Node - `Node` `tech-knowledge`

   ❓ The file hello.js includes the code shown below. Where would the output be seen if hello.js was run using node from a bash/terminal window?

   ```JavaScript
   console.log('hello');
   ```

   - the browser window
   - the bash/terminal window ✔️
   - the browser's developer tools console
   - no output would be seen

### 8

1. Purpose of process.argv - `process.argv` `vocab`

   ❓ The process.argv property can be used to get all the \_\_\_.

   - files in the folder
   - active Node threads
   - command line arguments ✔️
   - bash/terminal process history

### 9

1. Adding with process.argv - `process.argv` `tech-knowledge` `syntax`

   ❓ The file runMe.js contains the code shown below. What will be the output of executing the command `node runMe.js 5 5`?

   ```JavaScript
   console.log(process.argv[2] + process.argv[3]);
   ```

   - 5
   - 10
   - 23
   - 55 ✔️

### 10

1. parseFloat and parseInt - `parseFloat` `parseInt` `vocab`

   ❓ The parseFloat and parseInt JavaScript functions can be used to parse an argument into \_\_\_.

   - a number ✔️
   - a string
   - an array
   - a query

### 11

1. Basics of modularization - `require` `vocab`

   ❓ When writing JavaScript files that use Node, we can bring in code exported from another file using the \_\_\_ keyword.

   - imports
   - module.imports
   - require ✔️
   - require.imports

### 12

1. Modularization example - `require` `syntax` `dot-notation`

   ❓ The file foods.js contains the code shown below. How would snickers be referenced in another file that had imported foods.js into the variable foods?

   ```JavaScript
   var yummies = {
       candy: "snickers",
       soda: "pepsi",
       chips: "lays"
   }

   module.exports = {
       yummies: yummies
   }
   ```

   - foods.yummies.candy ✔️
   - yummies.candy
   - foods.candy
   - foods.yummies

### 13

1. Node FS package - `fs` `Node` `vocab`

   ❓ The internal Node package `fs` is used for \_\_\_.

   - creating NPM packages
   - making AJAX requests
   - interacting with files ✔️
   - DOM updates

### 14

1. Reading file data - `fs` `data.split` `syntax`

   ❓ The contents of the file data.txt are `i,love,coding` What will be the output of the code below?

   ```JavaScript
   var fs = require("fs");
   fs.readFile("data.txt", "utf8", function(err, data) {
       var output = data.split(",");
       console.log(output);
   });
   ```

   - `i love coding`
   - `i,love,coding`
   - `['i', 'love', 'coding']` ✔️
   - `{data: "i, love, coding"}`

### 15

1. Adding to files - `fs` `tech-knowledge`

   ❓ The \_\_\_ method of the Node `fs` package is used to add content to an existing file.

   - appendToFile
   - writeFile
   - continueFile
   - appendFile ✔️

### 16

1. Adding pre-made code to Node apps - `npm` `vocab`

   ❓ \_\_\_ allows us to quickly incorporate pre-made code snippets into Node applications.

   - The Node Package Manager ✔️
   - An API
   - GitHub
   - Web scraping

### 17

1. Installing external packages - `npm` `syntax`

   ❓ External packages needed by your Node app can be added with the command:

   - node install \<packagename\>
   - npm add \<packagename\>
   - node add \<packagename\>
   - npm install \<packagename\> ✔️

### 18

1. Using the axios NPM package - `axios` `syntax`

   ❓ The code below shows an example of using the axios NPM package to make a call to an API. Assume no API key is required. The useful data will be contained in the **_ variable as _**.

   ```JavaScript
   var axios = require("axios");
   axios.get("http://www.omdbapi.com/?t=avatar")
     .then(function (response) {
       //do something
     })
     .catch(function (error) {
       //do something
     });
   ```

   - body, a JSON object
   - response, an object ✔️
   - err, an integer
   - body, a string

### 19

1. Purpose of JSON.parse - `JSON.parse` `vocab`

   ❓ The JSON.parse() method parses a JSON \_\_\_, constructing the JavaScript object it describes.

   - object
   - array
   - string ✔️
   - module

### 20

1. Package management - `npm` `syntax` `package.json`

   ❓ Any NPM packages that an application is dependent on should be listed in \_\_\_.

   - the package.json file ✔️
   - a readme file
   - the GitHub repository
   - a separate text file

### 21

1. Adding dependencies - `npm` `syntax` `package.json`

   ❓ What command is used to create a package.json file?

   - npm add package.json
   - npm init ✔️
   - node package.json --save
   - node create --add --save

### 22

1. Installing dependencies - `npm` `syntax` `package.json`

   ❓ When a Node application with correctly listed dependencies is shared, the subsequent developer can run the command \_\_\_ to re-download all the required NPM packages.

   - node install -all
   - npm add -all
   - npm install ✔️
   - node add dependencies
