# 7.3 - ORM And Intro to Sequelize (10:00 AM)

## Overview

Today we will be introducing students to the basics of Object-Relational Mapping, a system which allows programmers to more easily collect and to manipulate data from databases using reusable methods.

`Summary: Complete activities 14-17 in Unit 13 and 0-6 in Unit 14`

## Instructor Notes

* There are A LOT of topics that we will be covering over the course of today's lesson plan, but it is especially important for your students to understand how ORMs function. Make sure to take your time when covering this topic since it is crucial for the homework.

* If you have not yet covered callbacks, then make certain to go over them in moderate detail today. We have included a "mini-module" on callbacks within this lesson plan as well so that students will come out of this class confident in their ability to use this vital tool.

* The MVC Pattern is not wholly commonplace in HTML/JavaScript web development, but it is widely used within other fields of programming. Let your students know that their comprehension of this framework will assist them in picking up other languages in the future.

* When going over ORMs with your class, it is important that you keep the `server.js` files and the `orm.js` files open at the same time. Being able to see both files at the same time should help your students to understand how the code within these files functions alongside each another.

* At the end of class, make sure you direct students to `MySQLHerokuDeploymentProcess.pdf`. The guide provides step-by-step instructions to setting up a remote MySQL database; your students won't be able to deploy their apps without it.

* Let students know Sequelize is a popular and powerful Node ORM. However, it may be important to note that this week is largely an exercise in learning a new library. Students will have to read documentation, go through tutorials, search and post on StackOverflow in order to find specific answers once they've identified specific problems as they're working through projects.

* You should check out the solutions to this week's homework before starting this class, especially if you haven't used Sequelize before. This will give you a brief rundown of how the ORM works.

  * Be sure to check the answers to the quiz in `02-SequelizeQuestions/solution` before starting the class. You should be an expert on these concepts, so that if students ask you about the answers after the quiz, you can give them a thorough explanation.

## Learning Objectives

* To create, change, and use a basic ORM to perform CRUD commands on a local MySQL database so as to reduce manual database queries

* To create an Express Application utilizing the MVC design pattern. The app will be structured in the way Ruby On Rails is

* To strengthen students' understanding of callbacks so that they will know how to use them in association with an ORM

* To introduce Sequelize as a complex tool that simplifies MySQL.

## Slides

* N/A

## Time Tracker

[7.3 Time Tracker](https://docs.google.com/spreadsheets/d/1IHQg3XLQeSlLU-XpC-Jfi0DlUKsKVOMvcLTaGZ22cbU/edit?usp=sharing)

- - -

### 1. Instructor Do: Welcome and The Asynchronous Solution (20 mins)

* Welcome students to class and remind them of the conversation the class ended with yesterday.

* Open up `14-TheAsynchProblem/Solved` within your terminal before opening up `14-TheAsynchProblem/Solved/server.js` and `14-TheAsynchProblem/Solved/config/orm.js` within your editor alongside one another.

* Go over the differences between this code and the last, making certain to point out all of the following:

  1. We added in a `cb` argument to the `selectWhere` function's arguments list. We also executed `cb` (because we're expecting it to be a function) and passed it the data returned from the MySQL query.

  2. In `server.js`, the 4th argument of `orm.selectWhere` is an anonymous function with `res` passed into it as an argument. That function gets sent to `orm.selectWhere` along with `parties`, `party_type`, and `grown-up`.

  3. There are a number of important things occurring in the ORM object:

     * The `selectWhere` method inside `orm.js` builds the query which is then stored within the `queryString` variable.

     * `queryString` gets passed to `connection.query` as well as `[valOfCol]`, which gets placed inside the question mark part of the `queryString`.

     * After we get the data back from `connection.query`, we pass result to `cb` and execute it as `cb(result)`. Recall that `cb` is the anonymous function from `server.js`.

     * The variable `res` now equals `result` and `res` gets console logged within `server.js`.

* Your students are VERY likely to be confused by this since the logic involved is a little abstract. This confusion will be all the worse if your students have never covered callbacks before. In order to stave off this confusion as best you can, however, feel free to open up the files contained within the `15-CallbackReview` folder and go over them with your class. We have also provided you with a "mini-module" taken from the 03, week 11 lesson plan which you can use to review callbacks with your class in even greater detail during the break, after class, or during class if truly necessary.

* It is VERY important that your students understand why the code within `14-TheAsynchProblem/Solved` works, since we can assure you that the asynchronous problem will come up in this week's homework. Because of this, feel free to take extra time to go over the code multiple times and to review callbacks in more depth. The MVC Pattern is important, but it can be covered in lesser detail or at a later date.

### 2. Partners Do: Reviewing the Asynch Solution (20 mins)

* Have students work together to understand how the code contained within `14-TheAsynchProblem/Solved` works.

* Feel free to Slack out the code contained within `14-TheAsynchProblem/Solved` to your students to run, test, and mess with on their own.

* After a solid amount of time has passed, call your class back together to have them explain what is happening within the code that makes it function properly.

### 3. Instructor Do: Introduction to the MVC Pattern (10 mins)

* Once everyone has returned from break, discuss the MVC Pattern with your class and discuss how it is laid out to create a folder/file-system that is both easy to navigate and easy to understand. Feel free to tell your students how this framework is most commonly used in other programming languages like Ruby on Rails and how understanding it will assist them in picking up new languages in the future.

* MVC is a framework for building web applications using a MVC (Model View Controller) design:

  * The Model represents the application core (for instance a list of database records).
  * The View displays the data (the database records).
  * The Controller handles the input (to the database records).

* Open up `16-MvcExample` within your file-system to show your students what the MVC Pattern looks like and answer whatever questions they may have regarding its usage and functionality.

### 4. Partners Do: Discussing MVC (15 mins)

* Have students work together to find examples of an MVC Pattern, and discuss what an MVC Pattern actually is.

### 5. Instructor Do: Handlebars #If and #Unless Statements (15 mins)

* Explain the use of `{{#if}}` in Handlebars.

  * The `{{#if}}` helper does just what you would expect it to do. It allows you to implement an `if` block into your Handlebars code. The `{{#if}}` helper outputs the block that it contains if the value given to it is truthy. The tricky bit here is that you cannot use conditionals within these statements. In other words, you are checking to see whether or not a specific variable exists or whether it contains a value inside of it.

* Explain the use of `{{#unless}}` in Handlebars.

  * The `{{#unless}}` statement is pretty much the exact opposite of the `{{#if}}` statement since it will run the block of code contained inside of it if the given expression is false.

### 6. Students Do: Cats Application (30 mins)

* Once you have answered any and all questions your class may have regarding the previous section, Slack out the following:

  * **Files**

    * `17-CatsApp/Unsolved`

  * **Instructions**

    * Add a delete button into the `index.handlebars` file next to each cat.

    * Add on to the following:

      * The `cats.js` file to add a jQuery event handler for the delete button.
      * The ORM to include a delete key and function
      * The cat model to include a delete key and function that uses the ORM
      * The `catsController.js` file to have a `/api/cats/:id` delete route, to call the delete key of the cat model, and to pass in arguments as necessary

### 7. Instructor Do: Cats App Review (10 mins)

* Open `17-CatsApp/Solved` and explain the solution to your students.

* Slack out the `MySQLHerokuDeploymentProcess.pdf`. Tell them that just setting up the remote database for the first time will take a good hour or so; advise them to carve out that time from their schedules so they can submit their homework.

* Tell students that if they have trouble setting up the database, they can always contact you or any of the TAs for support.

* Let students out for break.

- - -

### 8. Break (30 mins)

- - -

### 9. Instructor Do: Quick ORM Refresher (10 min)

* You're going to be going over the concepts of MVC. Open up the PDF inside `00-MVCDiagram`, and ask students which components belong to the model, the view and the controller (the solution is represented in the image below).

  ![1-MVC](Images/1-MVC.jpg)

  * Remember:
    * The Model represents the application core (our database and it's hook to our back-end).
    * The View displays the data (our HTML routes and the public files).
    * The Controller handles the input to our database (accepting input from the view, sending it to the model, taking a response from the model, and sending it back to the view.)

- - -

### 10. Students Do: Review Chirpy and MySQL (20 min)

* Before we get into new material, we are going to do a quick review of MySQL concepts by building a simple app. We will revisit this example later on with the Sequelize ORM, but for now we are only going to use the MySQL package.

![Chirpy](Images/chirp.PNG)

* Open up the completed Chirpy activity and demonstrate its functionality. It is a simple twitter-like app that allows you to write new Chirps (tweets), and view all of your previous Chirps.

* NOTE: Make sure you have used the schema.sql file to create the Chirpy database and the table that will be used to hold our Chirp data. If you haven't done this the app won't work. You can do it before class or do it live as a review for the students.

* Slack out the `01-Chirpy-mySQL` folder and the following instructions:

  * Using the app skeleton provided to you:
    * Create a MySQL database named `'chirpy'` with a `'chirps'` table to hold your data.
    * Your `'chirp'` table should include a field for id, author, chirp, and time created.
    * Modify the connection.js file to create a connection to your database.
    * Modify the api-routes.js file so that there is a route for adding a new chirp, as well as retrieving all chirps.
    * Modify the chirps.js file so that the page interacts with the database.

* If students finish early, have them work on routes for editing and deleting chirps.

- - -

### 11. Instructor Do: Review Chirpy (10 min)

* Review the main parts of the Chirpy application:
  * Creation of the database and the table in mySQL Workbench (or your choice of GUI).
  * Use of mysql npm package to connect to the database as well as configuration of `connection.js` file.
  * API routes and mySQL queries that were used to retrieve data from the DB.
  * Making our AJAX calls and displaying data on the front-end.

- - -

### 12. Instructor Do: Introduce Sequelize Before a Quiz (5 min)

* Tell your class while the Chirpy app is functional, there's a way to make it work with our database with a lot less hassle. It might take time to learn, and this week will be a tough one, but this tool is going to take your students from beginners to truly adept MySQL coders.

* Load up the Sequelize site on your screen and slack out the website to your students. (<http://docs.sequelizejs.com/en/latest/>). Tell the class that Sequelize is a premade ORM that simplifies database queries in Node applications, allowing us to do complex data management with simple JavaScript methods.

* Inform your class that today will focus on getting Sequelize set up on their machines and how to navigate a Sequelize project. You'll be doing this by converting the Chirpy app from the last assignment into a Sequelize app.

- - -

### 13. Partners Do: Sequelize Quiz (15 min)

* Slack out the unsolved portion of `02-SequelizeQuestions`.

* Have your students partner up into two-person teams. Each team will need to come up with answers to the questions in the quiz. Check out the answers in the solved portion in the meantime.

* Tell them they should use the Sequelize documentation, as well as any info they may find on the usual sites (stack overflow, quora, etc.) to answer these questions.

- - -

### 14. Everyone Do: Go over Answers (10 min)

* "Times up! Let's see how everyone did."

* Open the unanswered version of `02-SequelizeQuestions` and display it. Go down the list and ask your students to give you their answers. If everyone is stumped, refer to the answers in the solved version, then ask the students if this makes sense. If not, offer more of an explanation.

* Ask your class the same question you asked on week 1: "How would you define full-stack development?" At this point students should be much more savvy than they were on Week 1, so expect solid answers.

- - -

### 15. Instructor Do: Chirpy with Sequelize (15 min)

* Open the Sequelize version of the Chirpy app and show it off again. This time inform students that this new version of Chirpy is using the Sequelize ORM we just learned about. Slack out the completed Chirpy-Sequelize app `03-Chirpy-Sequelize` and encourage students to follow along as you work through the code.

* Open up the Chirpy code in your editor and illustrate the key differences between using Sequelize and stock MySQL.

  * In the connection.js file we require the Sequelize package, and use it to create a connection to our database. This is very similar to how we use the MySQL package.
  * One of the biggest changes is the addition of a models folder with our new `chirp.js` file.

    ![ChirpModel](Images/ChirpModel.png)

    * Note how we first require the Sequelize library, and then the connection that we will use to connect to the database (Sequelize with a little "s").
    * Reiterate the key aspects of Sequelize models. A model represents a table in the database. Here we are defining the different columns that will be in our table, as well as assigning them a data type. In addition, we sync our model with the database. Sequelize will create a table in our database for each model if it does not already exist. Point out that we don't need to define an id column in our Sequelize models. By default, we're given a NOT NULL, auto-incrementing id of type INTEGER to serve as the primary key. We can explicitly define an id column if we wanted to give it a different configuration, but we can just omit this most of the time.

      ![TableCreation](Images/TableCreation.png)

  * In api-routes.js we first require the Chirp model, then we use sequelize query methods to query our database. In our example we are using `Model.findAll()` and `Model.create()` but there are many more! Illustrate how instead of having to write out an entire mySQL query string, we can use predefined query methods defined by Sequelize. This allows us to greatly simplify how we retrieve data from our database!

    ![GetAllChirps](Images/GetAllChirps.png)
  
  * **Note**: If we were to `console.log` the `result` object returned from a sequelize query, we'd see that it is a large object with many nested keys and methods. It contains a `dataValues` property that contains the record data we're looking for.

  * When we send the large `result` object back to the client using `res.json`, only the `dataValues` property is sent back.

  * This is worth knowing since it may come up when debugging students code.

- - -

### 16. Students Do: Star Wars MySQL to Sequelize (25 min)

* Now it's the students' turn to get their hands dirty with Sequelize. They will be taking an app that currently uses the MySQL package, and updating it to use the Sequelize ORM.

* Open the Star Wars app `04-StarWars` and demonstrate its functionality. Inform students that they will be taking this fully functioning app and converting it to use Sequelize!

* Slack them the Star Wars skeleton folder `04-StarWars` along with the following instructions:
  * Using the instructions in server.js, reconfigure the Star Wars app to use the Sequelize ORM.
  * If you need help, refer to the previous example for guidance.

* Note that a question mark will appear in certain `get` routes. This `?` character indicates an _optional parameter_—these routes will load even if the parameter wrapped in `:?` is absent from the request.
  * _A question mark in an Express route indicates an optional parameter._
    ![A question mark in an Express route indicates an optional parameter.](Images/OptionalParameters.png)

### 17. Instructor Do: Review Star Wars Example (10 min)

* Review the Star Wars app with the class, touching once again on the major differences and advantages of using the Sequelize ORM.

* Dismiss the class for a break if all checks out.

### 18. End (0 mins)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
