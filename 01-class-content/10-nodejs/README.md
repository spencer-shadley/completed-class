# Unit 10: Intro To Node.js

## Overview
We now arrive at another important milestone in our journey as we make the transition from the client to the server. The JavaScript you wrote for your first project was executed entirely on the client-side, though it made use of third-party server-side APIs. In this, and following units, we will learn how to write our own server-side applications to handle requests and ultimately build our own APIs.

In a previous era, this is the point in our full-stack journey where we would begin learning a second programming language, such as PHP, to write server-side code. Lucky for us, Node.js was released in 2009. Node.js is an implementation of the V8 JavaScript engine _without_ Chrome, allowing us to write server-side code using JavaScript. Additionally, we no longer need a browser to run JavaScript. We can (and will) do so from the command line. 

In this unit, you will learn how to initialize a Node.js project, install third-party dependencies, and create interactive command line applications. Node.js ships with what is referred to as a standard library. The standard library contains a number of modules that allow us to extend the functionality of Node.js, such as `fs`, which we will use to read and write files. There is also a large and robust ecosystem of third-party modules available to us. You will learn how to add these modules to an application to extend its functionality. 

## Key Topics
* Node.js
* process.argv
* Client-server model
* Request-response pattern
* Axios
* fs
* Inquirer

## Comprehension Check
You will be employer-ready if you can answer the following questions:
1. Why is Node.js a revelation for full-stack web developers? 
2. What is npm? 
3. What is the purpose of package.json?

## Learning Objectives
You will be employer-competitive if you are able to:
* Initialize a Node.js project from the command line
* Explain, import and utilize modules from the Node standard library
* Install and import third-party dependencies in a Node.js application
* Read, write and append files using the `fs` package
* Write command line applications that process arguments input by users
* Execute server-side HTTP requests to third-party APIs using Axios

## Homework: Liri Bot
* In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Helpful Links
* [Wikipedia: Node.js](https://en.wikipedia.org/wiki/Node.js)
* [Wikipedia: V8](https://en.wikipedia.org/wiki/Chrome_V8)
* [Wikipedia: Server](https://en.wikipedia.org/wiki/Server_(computing))
* [fs Documentation](https://node.readthedocs.io/en/latest/api/fs/)
* [InquirerJS](https://www.npmjs.com/package/inquirer/v/0.2.3)
