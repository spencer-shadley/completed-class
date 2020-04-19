## Express

### 1

1.  Request handling and responding - `back-end` `vocab`

    ❓ The machine and code that handle requests and respond to them are collectively called the \_\_\_.

    - server ✔️
    - client
    - CPU
    - router

### 2

1. Making requests - `client` `vocab`

   ❓ The machine and code that make a request and then await the response are called the \_\_\_.

   - server
   - client ✔️
   - CPU
   - router

### 3

1. Server Data and Logic - `back-end` `vocab`

   ❓ The data and logic stored on the server are referred to as \_\_\_.

   - the request
   - AJAX
   - the Front-End
   - the Back-End ✔️

### 4

1. Communication flow - `request` `response` `vocab`

   ❓ A server typically generates a \_**\_ , after receiving a \_\_**.

   - request, response
   - web page, command
   - response, request ✔️
   - high-five, kudos

### 5

1. Server functions - `back-end` `tech-knowledge`

   ❓ Server side functions can include:

   - Visiting a URL and then being given an HTML page
   - Clicking on an invoice and being given a PDF report
   - Google providing results relevant to searches
   - All of the above ✔️

### 6

1. Client-Server communication - `client` `back-end` `http`

   ❓ Clients and Servers communicate using a series of understood communications defined by \_\_\_.

   - JSON
   - HTTP/HTTPs ✔️
   - Google
   - Microsoft

### 7

1. Server code parts - `back-end` `tech-knowledge`

   ❓ The code developers write for a server often includes:

   - Listeners
   - Route handling
   - Authentication
   - All of the above ✔️

### 8

1. Communication portal - `port` `vocab`

   ❓ A \_\_\_ is like a portal through which servers and clients communicate.

   - port ✔️
   - window
   - terminal
   - modal

### 9

1. Request types - `get` `vocab`

   ❓ HTTP \_\_\_ requests supply data from the client to the server within the URL itself.

   - JUMP
   - GET ✔️
   - JSON
   - POST

### 10

1. More request types - `post` `vocab`

   ❓ HTTP \_\_\_ requests supply data from the client to the server within the message body.

   - JUMP
   - GET
   - JSON
   - POST ✔️

### 11

1. Creating a server - `express` `vocab`

   ❓ \_\_\_ is a web framework for Node to make creating code for a server much simpler.

   - SQL
   - JavaScript
   - Express ✔️
   - NPM

### 12

1. Including Express - `express` `npm-package`

   ❓ Express can be included in your project by first installing it as \_\_\_.

   - an NPM package ✔️
   - a JSON object
   - a stylesheet
   - a browser plugin

### 13

1. Using Express - `express` `require` `syntax`

   ❓ To use the installed Express framework, it can be brought into the application with the code:

   - `var express = require('express');` ✔️
   - `var express = include('express');`
   - `var express = node('express');`
   - `var express = node('server.js');`

### 14

1. Express app object creation - `express` `app` `vocab`

   ❓ The app object used to denote the Express application is created by calling the \_\_\_ function of the Express module.

   - createServer()
   - express() ✔️
   - initialize()
   - listen()

### 15

1. Express app methods - `listen` `vocab`

   ❓ The \_\_\_ method can be used on the Express app object to have the server respond to requests on a specified port.

   - server()
   - request()
   - listen() ✔️
   - response()

### 16

1. Express routing - `app.get` `syntax`

   ❓ For a server running locally on port 3000, at what URL will the code below cause a console message?

   ```JavaScript
   app.get('/route', function() {
       console.log('wow');
   });
   ```

   - http://localhost:3000/wow
   - http://localhost:3000/route ✔️
   - http://localhost:3000
   - http://localhost:3000/console

### 17

1. Route to browser display - `res.send` `syntax`

   ❓ To have the browser display "Hello world!", \_\_\_ must be added to the space in the route definition below.

   ```JavaScript
   app.get('/', function(req, res) {
       ____ ('Hello world!');
   }
   ```

   - req.json
   - res.end
   - req.send
   - res.send ✔️

### 18

1. Parsing the URL - `req.params` `vocab`

   ❓ For a server running on port 3000, fill in the blank in the code below to log out "hellohello" when the user navigates to localhost:3000/route/hellohello

   ```JavaScript
   app.get('/route/:word', function(req, res) {
       var thisWord = ___ ;
       console.log(thisWord);
   });
   ```

   - req.word
   - req.word.params
   - req.params.word ✔️
   - res.params.word

### 19

1. Parameter modification - `parameters` `syntax`

   ❓ A route is defined as `/route/:word?`. The parameter, word, in this case is \_\_\_.

   - required
   - lower case
   - upper case
   - optional ✔️

### 20

1. body-parser - `body-parser` `vocab`

   ❓ body-parser is an example of \_\_\_ that transforms the request from the browser into a readable object.

   - middleware ✔️
   - a database
   - a server
   - a compiler

### 21

1. Directory path - `__directory` `vocab`

   ❓ The \_\_\_ keyword is built into Node and evaluates to the absolute path of the current directory.

   - `__dirname` ✔️
   - `__path`
   - `$PATH`
   - `_currentPath`

### 22

1. POST with jQuery - `post` `vocab`

   ❓ The \_\_\_ jQuery method can be used to load data from the server using a HTTP POST request.

   - \$.post ✔️
   - \$.load
   - \$.send
   - \$.onLoad
