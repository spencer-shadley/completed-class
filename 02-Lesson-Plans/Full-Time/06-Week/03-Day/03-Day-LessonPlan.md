## 6.3 - Intro to MySQL (10:00 AM)

## Overview

Today, in the process of building today's assignment, students will reinforce their understanding of Express Servers, Routing, and the utility AJAX for front-end interaction. 

MySQL, while extremely useful and powerful, is unlike any other programming language your students have encountered thus far and will undoubtedly lead to some confusion. As if that were not enough, MySQL brings with it its own unique set of stumbling blocks that can blindside you and trip your class up if you are not prepared for them. Do not worry though, as we are here to help guide you through this opening to one of the web's most powerful server-side storage tools.

## Instructor Notes

* `Summary: Complete activity 15 in Unit 11 and 1-2 in Unit 12`

* Towards the end of class, let all students know that there is a thorough video outlining the solution to this activity that you will Slack out. (See Recap + Closing Thoughts) 

* Throughout today's class, constantly encourage students to look back at the previous activity from class on the Star Wars Express application. 

* The lesson after the break is most likely not going to be an easy one. As mentioned in the overview above, there are a lot of hurdles which can both intimidate and block students from wanting to dive into and mess around with MySQL. It does not help that, unlike Visual Studio Code, MySQL Workbench does not have the friendliest of designs and seems somewhat cluttered. Make sure to keep your class calm and reassure them that all of this will make more sense as they spend more time with the language and MySQL Workbench.

* Since MySQL has the potential to bring about a lot of errors on its inaugural setup, we have set aside portions of time for the critical assignments for you and your TA's to assist the class as necessary over the course of today's assignments. If some students finish the assignments without issue, then have them also go around and assist those who are still facing problems. Do your best to keep everyone in the class on the same page so that no one is left behind.

* **A few days before this class, tell everyone in your class over Slack to download MySQL Workbench so that everyone is using the same program when they get to class!**

* **Disable Safe Mode Before Class!** In order to demonstrate the importance of unique identifiers and primary keys, we will be deleting rows using where statements that don't use a key column. To demonstrate this successfully, you must disable safe mode by toggling the option in Preferences -> SQL Editor and then reconnecting or by running the command `SET SQL_SAFE_UPDATES = 0;` in workbench.


## Learning Objectives

* To create a real-world application for handling reservations using Node/Express

* To have MySQL Workbench or Sequel Pro installed and running on everyone's computers

* To create a localhost connection to a MySQL server and have everyone successfully connect to it

## Slides

* N/A

## Time Tracker

[Unit 11-Express Day 3 Time Tracker](https://docs.google.com/spreadsheets/d/1HaQZhIABW3us3z_EtTpz5oj0h888YxWW/edit#gid=1519417688)

- - -

## Class Instruction


### 1. Partners Do: Continue Phase IV - Backend Logic + AJAX (60 mins)

* Proceed with the fourth phase.

  * Phase IV: For this fourth phase, aim to complete the following:

    * Backend Team: 

      * Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).

      * You should be using Postman to do all your testing at this point.

    * Frontend Team:

      * Begin to do serious research on AJAX. Specifically, focus your attention on how AJAX can be used to do both GET and POST requests. 

      * Then create the necessary code on your `tables.html` page such that it can retrieve data from the Backend Team's API. In essence you will be creating an AJAX GET request to retrieve the data.

      * Then create the necessary code on your `reserve.html` page such that it can send data to the Backend Team's API. In essence you will be creating an AJAX POST request to send the data. 

    * All: This is the most challenging part of today's activity. Be persistent! You can do this!

### 2. Partners Do: Phase V - De-bugging + Bonus (20 mins)

* Proceed with the final phase. Slack out the following instructions to help guide them:

  * Phase V: For the fifth and final phase, aim to complete the following:

    * All: 

      * Complete any remaining functionality from the previous phase if you need more time. 

      * Then, thoroughly test your application for bugs. Check if there are any obvious ways to crash the application. 

      * Then, if you have more time -- begin to tackle any bonus of your choice. 

### 3. Instructor Do: Recap (5 mins)

* Take the stage again. Let students know that this was a hard activity but an incredibly realistic one. 

* Encourage them by informing them that they've reached a highly significant point in their coding careers. Being able to build front-end and back-end applications like this one will allow them to build any number of applications. 

* Slack out the [video solution](https://youtu.be/G7RvQMW2DOg?list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr) and HIGHLY HIGHLY encourage them to review it on their own. Let them know that the accompanying code has been thoroughly commented and that they should consider working in groups to dissect it. 

### 4. Review Mini Project + Unit 11 (35 mins)

* Take a moment to answer lingering questions from the mini project at a high level, then proceed to lead a review on the topics learned in Unit 11.

- - -

### 5. Break (30 mins)

- - -

### 6. Instructor Do: Introduction to SQL and MySQL (5 mins)

* Warn them that this part of the lesson will be going over something entirely new, and that it may take them some time to pick up this new language since it is almost entirely unlike any of the other programs they have learned up to this point.

* Tell them not to worry though as, despite the difficulties many may face over the course of the class, there will be ample time given to make sure everyone is on the same page.

* Before diving into any of this lesson's demos or even having the students install MySQL Workbench or Sequel Pro on their devices, take some time to go over the purpose SQL and MySQL.

* SQL (often pronounced "Sequel") stands for "Structured Query Language" and is a powerful programming tool that was specifically designed to allow programmers with the ability to create, populate, manipulate, and access databases so as to provide them with an easy method to deal with server-side storage.

* MySQL (often pronounced "My Sequel") is a popular type of open source software that can be placed on a server so as to allow SQL commands to affect the data stored on the server.

* Data using SQL is stored in tables on the server much like those you would create in Microsoft Excel or in Google Sheets, making the data easy to visualize and search through.

### 7. Everyone Do: Install MySQL Workbench (5 mins)

* Let students know that debugging installs is a skill they will need as as developer, and to use this as a learning experience at troubleshooting installations and configuring software on their machines. If their install is easy, tell them to help someone who might be having some trouble!

* Announce to the class that, in order to code in MySQL, they will require a coding environment other than that of Visual Studio Code.

* Slack out the link to [MySQL Workbench](https://www.mysql.com/products/workbench/) and tell your class to download this new program. MacOS users are asked in their pre-work to download Sequel Pro for stability reasons, but may use this program instead if you want all students using the same interface.

* Make sure that everyone has MySQL Workbench or Sequel Pro installed and booted up before continuing the lesson.

### 8. Instructor Do: Creating a Localhost Connection Demo (10 mins)

* Explain to the class how, since we do not have a defined server for them to connect to, we are going to set up something called a "localhost connection" for them to use.

  * This type of connection allows us to create locally stored data on our computers as if they were an external server.

  * This is a much better alternative to spending hundreds to thousands of dollars on buying a server itself for the purposes of practicing on.

* Open up MySQL Workbench and click the (+) symbol next to the text which reads "MySQL Connections"

  * Enter "Local Instance MySQL" as your connection name

  * Make sure your connection is set to "Standard (TCP/IP)"

  * Enter "localhost" as the Hostname

  * Enter "3306" as the port for your connection. You can leave this part out of the connection and it could still work.

  * Enter your MySQL username into the Username section (Default is "root")

  * Click on the **Store In Vault...** button beside the Password option and enter in your MySQL password (Default is empty)

    * Mac users will see **Store in Keychain**.

  * Leave the Default Schema field empty

    ![New Connection](Images/New_Connection.png)

* Click on the "Test Connection" button so as to ensure that you have properly connected to your new localhost connection. If successful, hit okay and your new connection should appear on the main page.

  * It is imperative that the server be started for Workbench to be able to connect to the database.

* Now double-click on that connection, enter your password if necessary, and the SQL editor will appear.

* Check to see if there are any questions and answer them to the best of your ability.

### 9. Students Do: Creating a Localhost Connection (25 mins)

* Let the class know that MySQL Workbench or Sequel Pro can sometimes seem a little hard to comprehend when loaded up for the first time and that confusion is perfectly normal.

* Also let them know that there are some errors that are likely to pop up over the course of this assignment but that you and the TA's will be walking around to help them with whatever issues make themselves known.

  * Students who have successfully created a localhost connection should be encouraged to help those who seem to be struggling as well, especially if they happened upon the same kind of error that the struggling student is having.

  * If they feel they cannot help their fellow students, have them start reading up on how databases are created and used in MySQL.

* Slack out the following instructions...

* **Instructions**

  * Now it is your turn to set up a localhost connection! This may seem as if it will be an easy task, but there are some common errors and hurdles that might stand in your way as you work to create your first ever MySQL connection.

  * Start out by opening up MySQL Workbench and hitting the (+) button next to the text which reads "MySQL Connections". Sequel Pro will also have a (+) on the bottom left for new connections.

  * Enter the following credentials into the on-screen prompt...

    * Connection Name: Local Instance MySQL

    * Connection Method: Standard (TCP/IP)

    * Hostname: localhost

    * Port: 3306

    * Username: &lt;Your MySQL Username> (Defaults to "root")

    * Password: &lt;Your MySQL Password> (Defaults to empty)

    * Keep the Default Schema field empty

  * Hit "Test Connection" and, if the connection is successful, hit okay and double-click on the newly created field under the "MySQL Connections" text on the home page

    * If the connection fails, raise your hand and one of us will come around to help you out. Until we come by, however, take this time to go online and see if there is anything online which might tell you what went wrong. Do not worry if you cannot find anything though, we will make sure to figure this out.

  * If your connection was successful and you have nothing else to do, feel free to help those around you in creating their connections.

  * BONUS: Look into how you can create and use databases using SQL commands

  * BONUS: Look into the reasons why MySQL uses port 3306 as its default

### 10. Instructor Do: Connections Vs. Databases (5 mins)

* Now that everyone has created a connection to the localhost and is comfortably inside the SQL editor, ask your students whether or not this means that they have created a database as well.

* The answer is that they have not... Yet.

  * Point out how the "SCHEMAS" section on the left side of their page is pretty much empty other than including the built-in sys, sakila, and world databases. These databases would not appear on external servers.

    ![Schemas](Images/Schemas.png)

* Connecting to a server does not mean that you have created a database on that server. This means that, even if we wanted to, we could not yet populate our localhost connection with data until we create a database to house the data.

* The connection is a road which leads to an empty lot. Before we can populate the area, we first need to lay the foundations for houses (create a database), and build the houses (create a table).

### 11. Instructor Do: Creating a MySQL Database (5 mins)

* Within the MySQL Workbench editor, type `CREATE DATABASE animals_db;`

  * Explain to the class how this line of code will, when executed, create a MySQL database on the server they are connected to.

  * Also make certain to point out the semicolon at the end of the statement

* Next, find the lightning-bolt symbol just above the editor and click on it to execute your code.

  ![SQL Bar](Images/SQL_Bar.png)

* Point out how, on the bottom of the screen, there is a confirmation stating that the database has successfully been created.

  ![Confirmation](Images/Confirmation.png)

* Something seems off though... See if anyone in the class can figure it out and give them a few seconds to think it through before answering.

  * The database never appeared in the navigator on the left side of the page! Does that mean that our code actually failed?

  * Nope! We just need to reload our connection and the "animals_db" database will now appear within the navigator. We have just successfully created our first-ever database!

### 12. Instructor Do: Creating a Table (10 mins)

* Now that we have got a database, we start digging into the real meat of MySQL and start creating tables within our new database!

* On the line underneath `CREATE DATABASE animals_db;` type the following lines of code (explaining as you type, see below)

  ```sql
  USE animals_db;

  CREATE TABLE people (
    name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age INTEGER(10)
  );
  ```

* As you type, explain what each line does. Make sure to touch upon the syntax as well.

  * `USE animals_db;` tells MySQL that all of the code that follows will be affecting the data stored within the `animals_db` database.
  * `CREATE TABLE people (<COLUMNS>);` creates a table called `people` with the columns listed within the parentheses.
  * `name VARCHAR(30) NOT NULL` creates a column of `name` which can hold character strings within it of up to 30 characters and will not allow null fields.
  * `has_pet BOOLEAN NOT NULL` creates a column of `has_pet` which can hold either true or false within it and will not allow null fields.
  * `pet_name VARCHAR(30)` creates a column of `pet_name` which can hold character strings within it of up to 30 characters and will allow null fields.
  * `pet_age INTEGER(10)` creates a column of `pet_age` which can hold whole numbers with precision up to 11 places.

* After going through the code, hit the lightning-bolt button and make note of the error which appears at the bottom of the screen saying that "animals_db" already exists.

  * MySQL data is persistent and therefore is not deleted or overwritten when identical commands are run unless specifically commanded to. This means that when we create a database or table with an identical name to one which already exists, an error will occur telling you that the database/table already exists.

  * Ask your students what they could do to avoid these kinds of errors. They will most likely come up with the fact that you could simply delete that line of code and then run the commands again - which would work - but point out how deleting working code is not something you want to get into the habit of doing.

  * Instead, show them how you can actually highlight the lines of code you wish to be run and then click the lightning-bolt symbol to only run the selected portion. This is a much better method of running SQL code than deleting past code.

    ![Highlight](Images/Highlighting.png)

* Highlight the above code and then hit the lightning-bolt symbol for MySQL Workbench or 'run selection' for Sequel Pro to run it. Reload your connection to the server and, using the navigator, point out how there is now a table called "people" in our database.

### 13. Students Do: Setting Up FavoriteDB (10 mins)

* Slack out the following file and instructions

* **File**:

  * `favorite_db_unsolved.sql` in `02-FavoriteDB-NoData/Unsolved`

* **Instructions**:

  * For the table favorite_foods...

    * Create the column "food" which can take in a 50 character string and cannot be NULL
    * Create the column "score" which can take in an integer

  * For the table favorite_songs...

    * Create the column "song" which can take in a 100 character string and cannot be NULL
    * Create the column "artist" which can take in a 50 character string
    * Create the column "score" which can take in an integer

  * For the table favorite_movies...

    * Create the column "movie" which can take in a string and cannot be NULL
    * Create the column "five_times" which can take in a boolean
    * create the column "score" which can take in an integer

  * BONUS: Go online and look into how one might go about adding data into a table.

### 14. Everyone Do: Go Over FavoriteDB (15 mins)

* Copy and paste the data inside of `favoriteDB.SQL` in `02-FavoriteDB-NoData/Solved` into MySQL Workbench or Sequel Pro to go over what each line of code does once more.

* Especially make sure to point out how `DEFAULT` works in this example, as this will help with the homework and make SQL easier to handle.
  * `DEFAULT` is used to insert a default value into a column. In this case, it is used to set the default `BOOLEAN` value for the `five_time` column to `false`.

### 15. Adding and Updating Data In Tables (15 mins)

* Once everyone is back from break, ask the class whether or not there is any data in our tables yet?

  * The answer is, of course, that there is still no data stored within the server. Unlike before, however, we are now all set to start adding data into our tables!

* Open up "animals_db" once more within MySQL Workbench and type `SELECT * FROM people;` into the editor before highlighting this line of code and running it. Explain this to your students as you type in the code.

* This will bring up a visual of the table we have created and students should note that there is nothing stored within the table just yet. We will be changing this now.

  ![Table View](Images/Table_View.png)

* Moving back into the editor, type the following code into it while explaining what it does.

  ```sql
  INSERT INTO people (name, has_pet, pet_name, pet_age)
  VALUES ("Ahmed", true, "Rockington", 100);

  SELECT * FROM people;
  ```

* This code does pretty much what it says on the tin, it inserts data into the "people" table and then specifies what columns that data will be entered into. Values then places the data contained in the parentheses into the corresponding columns listed after the INSERT INTO statement.

* Enter the following code into the editor above the select statement and below the previous statement. Before running the three statements, however, ask the class what they think will happen to the table.

  ```sql
  INSERT INTO people (name, has_pet, pet_name, pet_age)
  VALUES ("Jacob", true, "Misty", 10);
  ```

* The code WILL run, but as you can see, the data from the first insert statement has been duplicated. This is because, unlike tables and databases, there can be identical data stored within a table. As such, students should make sure to be careful when adding insert statements into their code.

* Write the following lines of code into the editor underneath the last insert statement and ask the class what they think will happen to the table

  ```sql
  INSERT INTO people (name, has_pet)
  VALUES ("Peter", false);
  ```

* Highlight this line of code and the select statement to show how data has been added to only the "name" and "has_pet" columns of the table while the rest of the row has null values. This is because we filled only those columns that required data while those that did not require data were automatically filled with null values.

  * If we were to try to create a new row in our table without filling those columns requiring data, the code would return an error and would not be able to run.

* Oh! It looks like Peter actually DOES have a pet and we should probably change the data in our table to reflect this! Write the following statement and then see if anyone can figure out what it would do.

  ```sql
  UPDATE people
  SET has_pet = true
  WHERE name = "Peter";
  ```

* This code updates the data stored in the columns specified in the SET statement in the row where the data in the "name" column is equal to "Peter"

  * If we did not include that WHERE statement, then our UPDATE would have set the values for all columns instead of those of a specific row. That would have been a pretty major error and is why the WHERE statement is so important.

### 16. Students Do: Adding Data to FavoriteDB (10 Mins)

* Slack out the following instructions

* **Instructions**

  * It is time to add some data into FavoriteDB! The data that you add should be unique to you and you should try to test your skills in not only adding new data, but also attempt to update old data as well!

  * Try to add at least three rows of data to each table.

  * BONUS: Look into how you you might go about creating a column that can hold a default value within it and how default values work when creating new rows.

  * BONUS: Look into how you might go about creating a column with a default value that automatically go up with each new row

  * BONUS: Look into the concept of making a column the "primary key"

  * ULTRA BONUS: Try to create a column called "id" in one of your tables that can contain an integer, is the primary key for the table, cannot be NULL, and automatically increments with each new row added.

### 17. Instructor Do: The Value of Unique Values (5 mins)

* You know, that duplicate data in our table is starting to become something of an eyesore... Let's change that! Type in the following line of code which should remove the rows that contain the string "Ahmed" within the "name" column.

  ```sql
  DELETE FROM people
  WHERE name = "Ahmed";
  ```

* Well... It deleted the duplicate! Too bad it also deleted the original row as well. That's a little annoying. See if the class understands why this happened.

  * Because the name "Ahmed" appears twice within the table, SQL assumes that we want to delete every column that contains that name and does not understand that we are simply trying to delete the duplicate.

* To prevent this kind of thing from occurring, programmers will oftentimes want to create a column that automatically populates each new row with unique data. This allows them to select and affect that row more easily.

* Open up `animalsDBWithID.sql` in `03-animals_dbWithID` and copy the code into MySQL Workbench before running it.

  * Be sure to note how we have now replaced our old update statement with one in which the WHERE statement now uses the id column to select the row we want to affect.

    * Explain that a **primary key** uniquely identifies a row.

      * `AUTO_INCREMENT` generates a new value for each inserted record in the table. By default, the starting value for `AUTO_INCREMENT` is 1, and it will increment by 1 for each new record. We're using this with our unique `PRIMARY KEY` so we automatically get unique, incrementing values for each table row.

      * Point out that, because it auto-increments, each row's ID is guaranteed to be unique. This ensures that we don't identify and update the wrong row when we execute CRUD statements.

      * Point out that our insert statements have not changed, as we do not need to insert data specifically into the id column. MySQL automatically provides a value for this column, fulfilling the uniqueness constraint by automatically incrementing the last value used as an ID.

* We purposefully included the same kind of error that we had within the other code where there are two identical rows. Thanks to the auto-incrementing primary key of id, however, we can now more easily remove the duplicate through using the following code.

  ```sql
  DELETE FROM people
  WHERE id = 2;
  ```

* This does precisely what we wanted it to: Delete the duplicate, and preserve the original.

- - -

### End

- - -

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
