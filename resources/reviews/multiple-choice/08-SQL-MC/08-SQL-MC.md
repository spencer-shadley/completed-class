## MySQL

### 1

1. SQL acronym - `sql` `vocab`

   ❓ What does SQL stand for?

   - Stored Query List
   - Structured Query Language ✔️
   - Strict Qualified Language
   - Stripe Quality Lambda

### 2

1. MySQL and MySQL Workbench / Sequel Pro relationship - `mysql` `mysql-workbench` `sequel-pro` `vocab`

   ❓ MySQL is to **_, as MySQL Workbench and Sequel Pro are to _**.

   - server, client ✔️
   - Node, JavaScript
   - JavaScript, SQL
   - Windows, Mac

### 3

1. Creating databases - `sql` `create-database` `syntax`

   ❓ A new database called friends_db can be created using the following SQL code:

   - MAKE DATABASE NEW friends_db;
   - START friends_db DATABASE;
   - CREATE DATABASE friends_db; ✔️
   - INIT friends_db DATABASE;

### 4

1. SQL Data Storage - `sql` `tables` `columns` `vocab`

   ❓ Databases store data in one or more **_ comprised of multiple _**.

   - arrays, variables
   - variables, strings
   - tables, columns ✔️
   - containers, rows

### 5

1. Selecting a database - `sql` `use` `vocab`

   ❓ The SQL \_\_\_ statement is used to select a database and perform SQL operations into that database.

   - SELECT
   - CREATE
   - JOIN
   - USE ✔️

### 6

1. Creating tables - `sql` `create-table` `syntax`

   ❓ The correct syntax for making a new table called toys is \_\_\_.

   - CREATE TABLE toys (); ✔️
   - MAKE TABLE NEW toys ();
   - START toys TABLE ();
   - INIT toys TABLE ();

### 7

1. Preventing empty fields - `sql` `not-null` `vocab`

   ❓ Columns can be prevented from having empty fields for any record by defining them with the \_\_\_ constraint.

   - REQUIRE DATA
   - NOT NULL ✔️
   - PREVENT EMPTY
   - MUST VARCHAR

### 8

1. Data type to hold variable length strings - `sql` `varchar` `vocab`

   ❓ The \_\_\_ data type can be used to specify that a column may only hold strings of variable lengths.

   - STRING
   - BLOB
   - CHAR
   - VARCHAR ✔️

### 9

1. Data type to hold whole numbers - `sql` `integer` `vocab`

   ❓ The \_\_\_ data type can be used to specify that a column may only hold whole numbers.

   - NUMBER
   - INTEGER ✔️
   - VARCHAR
   - BLOB

### 10

1. Setting value when none specified - `sql` `default` `vocab`

   ❓ The \_\_\_ constraint is used to add a specific value to a column when no other value has been specified.

   - DEFAULT ✔️
   - SELECTED
   - USE
   - VALUE

### 11

1. Adding data to tables - `sql` `insert-into` `vocab`

   ❓ Data may be added to a specified table by using the \_\_\_ statement.

   - ADD DATA
   - INSERT IN
   - INSERT INTO ✔️
   - ADD INTO

### 12

1. Adding data to tables 2 - `sql` `values` `vocab`

   ❓ The specific data being added to a table is preceded by the \_\_\_ keyword.

   - DATA
   - VARIABLES
   - VALUES ✔️
   - VARCHAR

### 13

1. Duplicated code - `tech-knowledge`

   ❓ An SQL statement is executed that successfully adds a new record of a person's name and age to a table. What is the result of executing the exact same SQL statement a second time?

   - A new identical record will be created ✔️
   - The original record will be overwritten
   - This will cause a database error
   - The second time code execution will be ignored

### 14

1. Changing data - `sql` `update` `vocab`

   ❓ Existing records in a table can be modified with the \_\_\_ statement.

   - MODIFY
   - UPDATE ✔️
   - REDO
   - RESET

### 15

1. Specifying data to change - `sql` `set` `vocab`

   ❓ When modifying existing table data, the \_\_\_ keyword is used to specify the column(s) and new value(s).

   - SET ✔️
   - WHERE
   - FIELD
   - LOCATION

### 16

1. Use of WHERE - `sql` `where` `tech-knowledge`

   ❓ When modifying data in a table, failure to use the WHERE statement will \_\_\_.

   - stop the code from executing
   - drop the database connection
   - modify all the records ✔️
   - prevent location services

### 17

1. Removing data from tables - `sql` `delete-from` `vocab`

   ❓ Data may be removed from a specified table by using the \_\_\_ statement.

   - REMOVE DATA
   - DELETE RECORD
   - DELETE FROM ✔️
   - REMOVE FROM

### 18

1. Elements with shared values - `sql` `group-by` `vocab`

   ❓ The \_\_\_ statement is used to group together elements with shared values.

   - SHARE FROM
   - GROUP BY ✔️
   - COMMON VALUE
   - COMBINE INTO

### 19

1. Selecting ranges of values - `sql` `between` `vocab`

   ❓ The \_\_\_ operator can be used to select values within a range.

   - RANGE
   - VALUES
   - MINMAX
   - BETWEEN ✔️

### 20

1. Unique row identifier - `primary-key` `tech-knowledge`

   ❓ Each record in a table is uniquely identified by a \_\_\_ key.

   - primary ✔️
   - unique
   - singular
   - master

### 21

1. Generating new values - `sql` `auto-increment` `vocab`

   ❓ \_\_\_ generates a new value for each inserted record in a table, increasing it by 1 each time by default.

   - UPDATE_ID
   - AUTO_INCREMENT ✔️
   - ADD_INTEGER
   - DEFAULT_ADD

### 22

1. Combining tables data - `join` `tech-knowledge`

   ❓ \_\_\_ can be utilized to combine two or more individual tables together using a value that is shared between them.

   - Inners
   - Outers
   - Joins ✔️
   - Combines

### 23

1. NPM mysql's createConnection method - `create-connection` `mysql` `vocab`

   ❓ The MySQL NPM package's createConnection method requires:

   - host name
   - user name and password
   - database name
   - all of the above ✔️

### 24

1. Requirements to connect - `mysql` `tech-knowledge`

   ❓ A database must first be \_\_\_ before attempting to connect to it with Node.

   - emptied
   - populated
   - deleted
   - created ✔️

### 25

1. More connections - `mysql` `connection.query` `syntax`

   ❓ In the code below, what would be placed in the \<STRING\> section?

   ```JavaScript
   connection.connect(function(err) {
       if (err) throw err;
       console.log("connected as id " + connection.threadId);

       connection.query(<STRING>, function(err, res) {
           if (err) throw err;
           console.log(res);
       });
   });
   ```

   - Name of the database
   - SQL code for Node to send to the database ✔️
   - Name of the host, user and password
   - All of the above

### 26

1. Purpose of connection.connect callback function - `mysql` `connection.connect` `tech-knowledge`

   ❓ In the prior question, connection.query is placed inside the connection.connect method's callback function so that the \_\_\_.

   - query will run only after the connection is made ✔️
   - code is more readible and maintainable
   - integrity of the data is not compromised
   - data can validated before sending it back

### 27

1. Data returned from database - `mysql` `tech-knowledge`

   ❓ Data returned from the database to a Node query is in the form of \_\_\_.

   - a single object
   - an array of objects ✔️
   - an array of arrays
   - a single array

### 28

1. CRUD acronym - `crud` `vocab`

   ❓ Programmers use CRUD methodology which stands for \_\_\_.

   - CREATE READ UNDERSTAND DEFEAT
   - COMMON RECURSIVE UNIVERSAL DATA
   - CREATE READ UPDATE DELETE ✔️
   - COMMON RECURSIVE ULTERIOR DESIGN

### 29

1. Database and Table creation code - `mysql` `schema.sql` `seeds.sql` `vocab`

   ❓ MySQL developers use **_ files to save their database and table creation code, and _** files to save the statements they use to insert data into their tables.

   - data.sql, database.sql
   - seeds.sql, schema.sql
   - database.sql, data.sql
   - schema.sql, seeds.sql ✔️

### 30

1. Large database performance - `index` `tech-knowledge`

   ❓ With very large databases, using certain columns as \_\_\_ helps speed up evaluation of queries.

   - indexes ✔️
   - foreign keys
   - null space
   - primary keys
