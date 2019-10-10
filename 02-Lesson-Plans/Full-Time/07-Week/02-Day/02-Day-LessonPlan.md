# 7.2 Lesson Plan: Bringing it from front to back (10:00 AM)

## Overview

Today's course will be building upon the lessons your students have learned the past couple of weeks as they bring all of their front-end and back-end knowledge together to create a fully-functional Node application.

`Summary: Complete activities 7-14 in Unit 13`

## Learning Objectives

* To use HTML/jQuery GET, POST, PUT, and DELETE commands appropriately

* To create full-stack web applications that will Create, Read, Update, and Delete data from a MySQL database

* Students will use use Express.js, MySQL and Handlebars together to create a dynamic application

## Slides

* N/A

## Time Tracker

[7.2 Time Tracker](https://drive.google.com/a/trilogyed.com/file/d/1o0kMAeHCM330hksJozYj7rE5ZRopT03F/view?usp=sharing)

- - -

### Class Instruction

### 1. Instructor Do: Using HTTP Requests (15 mins)

* Welcome students to class and let students know about the topic for today. Building a full stack application using `Express.js`, `MySQL`, and `Handlebars`.

* Demonstrate the application stored within the `07-TaskSaver` folder with GET and POST commands in front of students.

* Make sure to copy `07-TaskSaver/schema.sql` into MySQL Workbench and run the code so as to set up the database you will be reading/affecting.

* Also make sure to run `npm install` within the terminal.

* Point out how lines 1–33 in `07-TaskSaver/server.js` is boilerplate code meant to set up the application which we will be able to copy and paste into future applications.

* Explain the routes within `07-TaskSaver/server.js`, being sure to point out how data is being collected and added from our MySQL database.

* Explain how the form's method inside of `07-TaskSaver/views/index.handlebars` is POST and the action of `'/'` points to the following part of the `server.js` file: `app.post('/', function(req, res)`.

* By making it so that the form's method is POST, we are essentially telling our server that we are going to be posting data to our database. It is extremely similar to using a `jQuery.post()` command.

* Explain that you need the `express.json` and `express.urlEncoded` middleware to be able to use `req.body.task` in `07-TaskSaver/server.js` within the `app.post('/', function(req, res)` section.

  * Check to make sure students remember the concept of middleware:

    * Middleware is a function we can run before the browser's request reaches our routes. 
    
    * The `express.json` and `express.urlEncoded` middleware transforms the request so that we can read the data that was sent on `req.body`.
    
    * Middleware can be defined using the `app.use` method.

* Explain what `{{#each tasks}}` is doing in the `07-TaskSaver/views/index.handlebars` file.

* Explain the following line from the `07-TaskSaver/views/index.handlebars` file: `<textarea type="text" name="task"></textarea>`.

* When data is sent from the front-end to the back-end using the POST method, the key which a specific set of data is contained within is determined by the "name" of the HTML element.

### 2. Partners Do: Understanding TaskSaver (15 mins)

* Before answering any questions regarding the previous section, slack out `07-TaskSaver` to your class and have them set up the application on their computers.

* Have your students go through the code line-by-line with the person sitting next to them as they work to solidify the lessons learned up above.

### 3. Students Do: Wishes Application (20 mins)

* After answering whatever questions your students may have regarding the previous activity, open up the `08-Wishes/Solved` application and demonstrate what your students will be building over the next 20 minutes.

* Slack out the following instructions:

  * **Instructions**

    * Create an app with Express, MySQL and Handlebars.

      * HINT: this app will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.

    * Create a `schema.sql` file and create the following inside of that file:

      1. Make a database called "wishes_db"

      2. Inside of that database, make a table called "wishes" which will have a wish column and an id column. The id will be automatically incremented while also being the primary key.

      3. Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.

    * In your `server.js` file, you will have to create two routes: a get route for `'/'` and a post route for `'/'`.

      * Render all of the wishes from the wishes table when the `'/'` get route is hit. Additionally show the form that the user can use to create a new wish. The form will POST to the `'/'` route.

      * The `'/'` post route will insert the wish from the form into the wishes table and will redirect the user back to the `'/'` get route.

### 4. Instructor Do: Wishes Application Summary (10 mins)

* Open up the `08-Wishes` folder and its files within your editor, and go over the code line-by-line with your class, making sure to explain what is happening within your code to the best of your ability.

### 5. Instructor Do: Putting and Deleting (20 mins)

* Open up the `09-DayPlanner` folder within your editor and within your terminal, running `npm install` before running `server.js` and opening up the application within your browser to demonstrate how the application works.

* Point out how we create PUT and DELETE routes with Express.

* Point out how to use jQuery to send PUT and DELETE requests (and that there are no shorthand methods available like for GET and POST).

### 6. Partners Do: Going Over the Day Planner (15 mins)

* Slack out `09-DayPlanner` to your students, have them run the application on their computers, and then have them explain the code to their partners line-by-line.

### 7. Everyone Do: Watch List (25 mins)

* Once everyone seems to have finished picking their way through the code and you have answered whatever questions your students may have had, slack out the following instructions found in `10-WatchList/README.md` file.

  * **Instructions**

    * Create a full-stack application with Express, MySQL and Handlebars.

      * HINT: this web application will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.

    * Create a `schema.sql` file. Inside of that file, do the following:

      1. Make a database called moviePlannerDB

      2. Inside of that database make a movies table which will contain a movie column and an id column. The id will be automatically incremented while also being the primary key.

      3. Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.

    * In your server.js file, you will create four routes: `get`, `post`, `put`, and `delete`.

      * Render the main `index.handlebars` when the `'/'` get route is hit with all of the movies from the movies table.

      * Your application should have a set of routes on `'/movies'` for create, update, and delete operations on the movies table.

      * Show a delete button next to each movie. When one of the delete buttons is clicked, the code should send a DELETE request to  delete the associated movie from your database.

      * Additionally, show the form that the user can use to add a movie to be watched.  When the submit button is clicked, the code will post to the `'/movies'` route, which will insert the movie from the form into the movies table and return the ID of the new movie.

      * Have another form that will update a movie in the movies table. The form will include two inputs: an id input and a movie title input. Remember to leverage a PUT method.

      * Remember: best practices for REST include:
        * Put your REST API on it's own URL (e.g. `'/todos'`).
        * A POST that creates an item should return the ID of the item it created.
        * PUT and DELETE should specify the ID of the item they're intended to affect in the URL (e.g. `'/todos/123'`).
        * If the ID for the item specified in a PUT or DELETE couldn't be found, return a 404.
        * If an error occurs in the server, return an error code (e.g. 500).

### 8. Instructor Do: WatchList Review (10 mins)

* Open up the `10-WatchList/Solved` folder and its files within your editor, and go over the code line-by-line with your class, making sure to explain what is happening within your code to the best of your ability.

- - -

### 9. Break (30 mins)

- - -

### 10. Students Do: Quotes App (20 mins)

* Open up the `11-QuotesApp/Solved` folder within git bash and run the `schema.sql` and `seeds.sql` files to set up our database before running `npm install` and `node server.js` so as to demonstrate how the Quotes application they will be making is going to work.

  * Keep your working application open so that it may serve as a reminder to your students on what kind of application they are making during the following activity.

* Answer any and all questions regarding this application before slacking out the following:

  * **Files**

    * `11-QuotesApp/Unsolved`

  * **Instructions**

    * Using Express, MySQL, Handlebars, and the starter code which was slacked out to you as a jumping-off point, you will be creating a simple web application which allows users to create, read, update, and delete popular quotes.

    * Your application will have two pages:

      * One will show all of the quotes within a database and will allow users to create a new quote or delete an existing one. A button next to each, labeled "Update This Quote," will take users to the other page which shows the quote selected and will allow them to update it with new information.

    * Make sure to run the code contained within the `schema.sql` and `seeds.sql` files beforehand so that you have a database with which to work.

### 11. Everyone Do: Quotes App Review (10 mins)

* Open up `11-QuotesApp/Solved/server.js`, `11-QuotesApp/Solved/views/index.handlebars`, and `11-QuotesApp/Solved/views/single-quote.handlebars` within your editor, and go through the code line-by-line with your students, calling upon individuals to explain what the code does before clearing up any lingering confusion by going over it yourself as well.

* Explain briefly the `express.static` middleware when you get to it. In short, it is express code that will automatically respond with static files when requests are made that match the path in the defined folder (in this case the `public` folder).
  * For example, if someone (e.g. the browser) makes a `GET` request for `/assets/css/style.css`, your express app will automatically send back the `CSS` file without you having to write any extra route handlers (or doing any `res.send`s).
  * Tell students that it's not critical that they understand exactly how this works for now. They can treat it like their other route handling, but the takeaway is that requests for static files (any paths that matching a path in the defined folder) will be handled by `express.static` BEFORE any of the other code they've written is hit.
    * A common pitfall here is that students may try to have an `index.html` file in the `public` folder and also try to handle the `/` route for GET requests in their `server.js` - warn them that `express.static` will swallow those requests if you put it first!

### 12. Instructor Do: Introducing the ORM (20 mins)

* One of the major annoyances of dealing with databases through Node has been how much code we are having to write/rewrite in order to accomplish tasks that are remarkably similar from one activity to the next. In fact, there have even been times where we were having to rewrite repetitive MySQL queries within the very same application. This is far less than ideal code since, as we have discussed in the past, programmers like being able to reuse similar code, time and time again, wherever possible, to simplify/speed-up their apps.

* In the past, we have done this by creating basic functions which take in variables to accomplish similar-but-different tasks. What if I told you that there was a way to do this with MySQL queries as well? That would speed things up and would make working with databases quite a bit simpler, wouldn't it? Thankfully... Object-Relational Mappers (or ORMs) serve just such a purpose, and that is what we are going to be going over in detail today.

* Open up `12-OrmExample` within your folder system, run `12-OrmExample/db/schema.sql` and `12-OrmExample/db/seeds.sql` files within MySQL Workbench, and then open up `12-OrmExample/server.js`, `12-OrmExample/config/connection.js`, and `12-OrmExample/config/orm.js` within your editor to show your students the code it contains. Ask your students if they can spot what is new here...

  * All of our database-connection code is contained within `connection.js`, which is then required in `orm.js`, which is then required in `server.js`.

  * `orm.js` contains ALL of our MySQL queries inside of it as methods within an object referred to as "orm."

  * These methods take in variables which are then used to alter the properties of our queries. In other words, we can now make similar queries to different MySQL tables, columns, and rows without having to write out entirely new MySQL commands every time. Instead, all we have to do is change around the variables we pass into the method we are calling upon.

* Demonstrate the power of ORMs by running `npm install` and `node server.js` within your terminal.

  * Feel free to change around the variables passed into your ORM to show how adaptable it is.

* Emphasize time and time again the reasons why writing an ORM is considered helpful: efficiency, legibility, and reusability.

### 13. Partners Do: Discussion of ORMs (10 mins)

* Have students talk to each other about the pros of ORM, and see if they can come up with specific situations in which an ORM would be considered valuable.

* Call students back together after five minutes or so to share their thoughts regarding the usefulness of ORMs.

### 14. Students Do: Party Database App (20 mins)

* Once you have answered any and all questions regarding ORMs and how they are used, Slack out the following:

  * **Files**

    * `13-PartyDatabase/Unsolved`

  * **Instructions**

    * You will be creating a holiday party planner application. We want to help create parties for our clients whilst also keeping track of all the events that we are host. In MySQL, create a database called `party_db` with two tables structured like the tables below. Utilize the provided `schema.sql` and `seeds.sql` file in order to build the tables and seed initial values.

      | id | party_name              | party_type | party_cost | client_id |
      | -- | ----------------------- | ---------- | ---------- | --------- |
      | 1  | Everybody Loves Raymond | tv         | 500        | 1         |
      | 2  | Big Bang Theory         | tv         | 900        | 1         |
      | 3  | Top Gun                 | movie      | 200        | 2         |
      | 4  | Whiskey                 | grown-up   | 300        | 2         |
      | 5  | Cigar                   | grown-up   | 250        | 3         |

      | id | client_name |
      | -- | ----------- |
      | 1  | Bilal       |
      | 2  | Brianne     |
      | 3  | Vincent     |

    * Create a Node MySQL application with an ORM that executes once the server is launched.

    * You will not need Express or Handlebars for this assignment. Use `console.log` to print the data collected to the console.

    * Create a MySQL database with the tables and data which were slacked out to you.

    * Create a Node app and connect it to MySQL with a `config` folder and with a `connection.js` file inside of that folder.

    * Create an `orm.js` file, and make an ORM that will do the following:

      * Console log all the party names.
      * Console log all the client names.
      * Console log all the parties that have a party-type of grown-up.
      * Console log all the clients and their parties.

    * BONUS: create a function within your ORM that will let the user add more clients and parties to the database.

### 15. Everyone Do: Party Database App Review (10 mins)

* Open up `13-PartyDatabase`, run `13-PartyDatabase/Solved/db/schema.sql` and `13-PartyDatabase/Solved/db/seeds.sql` within MySQL Workbench, and then open up `13-PartyDatabase/Solved/server.js`, `13-PartyDatabase/Solved/config/connection.js`, and `13-PartyDatabase/Solved/config/orm.js` within your editor before going over the code line-by-line with your students.

  * Keep `13-PartyDatabase/Solved/server.js` and `13-PartyDatabase/Solved/config/orm.js` open alongside one another so that they can see how the two files are working together.

* Call upon random students within the class, and have them attempt to explain what each line does first before diving into the code and explaining it in more detail.

  * Open up `13-PartyDatabase` inside of your terminal, run `npm install` and then—after each new ORM function has been discussed—run `node server.js` in order to show your class visually what each ORM function does.

### 16. Instructor Do: The Asynchronous Problem (10 mins)

* Open up `14-TheAsynchProblem` within your terminal, run `14-TheAsynchProblem/db/schema.sql` and `14-TheAsynchProblem/db/seeds.sql` inside of MySQL Workbench, and then open up `14-TheAsynchProblem/server.js` and `14-TheAsynchProblem/config/orm.js` within your editor alongside one another.

  * Ask your students what they think is going to happen when `node server.js` is run inside of your terminal.

  * Most of your class will likely think that your code will return data from the database. This is not the case, but let them think that for the time being nonetheless.

* Run `npm install` and then `node server.js` within your terminal only to find that your code has returned "undefined" of all things without any error popping up on the screen. Prompt your students to see if any of them know the reason this occurred.

  * The query to our MySQL database is asynchronous to the rest of our JavaScript code, and as such, our server is not waiting for a response from the database before running our `console.log` command. This, as you might imagine, is a big problem and we are going to need to come up with some way to fix it.

### 17. Partners Do: Solving the Asynchronous Problem (10 mins)

* Prompt your class to work in pairs to see if they can come up with the reason why our code is console.logging "undefined" despite no errors being recorded.

* Also prompt them to see if they can come up with a possible solution to this problem.

  * Let them know that they are free to search the web for potential causes/solutions to this issue, as it is a problem that many new coders have faced and that they will continue to face for years and years to come.

  * Feel free to Slack out the code contained within `14-TheAsynchProblem` to your students to run, test, and mess with on their own. This could help them to discover a solution and should build up their debugging skills.

* Call the class back together after a solid amount of time to see if anyone knows what the problem is and how we might go about solving it.

  * PROBLEM: Our query and the rest of our code are asynchronous and thus no data is being returned before the `console.log` is being executed.

  * SOLUTION: Provide our ORM with a callback function which serves to tell the server to wait until the data has been returned before moving on.

### 18. END (0 mins)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)