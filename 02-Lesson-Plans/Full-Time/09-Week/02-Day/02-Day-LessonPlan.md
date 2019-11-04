# 9.2 - Intro to Mongoose and IndexedDb (10:00 AM)

## Overview

In the class, you will introduce students to Mongoose, a node package that provides a schema-based solution to model your Node application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

This lesson also introduces The Indexed Database API, commonly referred to as IndexedDB. IndexedDB is a JavaScript API provided by web browsers for managing a NoSQL database of JSON objects. 

## Instructor Notes

* Complete activities `12-25` in `17-NoSQL`

* When moving on to new activities, make sure you refresh and or delete your database in IndexedDB. If you are not seeing changes to your database this will fix it.

* If students question why they are learning IndexedDB, let them know that the web is moving away from traditional cookies and into client side storage solutions such as IndexedDB. It gives them the ability to have offline mode for their applications which they will be learning more about in the following unit.

## Learning Objectives

* Create custom methods in Mongoose to set and update data purely on the back end.

* Utilize Mongoose's populate method to create relationships between the collections in their database.

* Explain the pros and cons of storing client side data with cookies and IndexedDB.

* Request an IndexedDB instance.

* Create an object store and add data with the `add` method.

* Search for an item by keyPath with the `get` method.

* Create and search by index with the `getAll` method.

* Utilize Cursors to iterate through and update object store data with the `update` method.

## Slides

N/A

## Time Tracker

[17.2: Intro To Mongoose Time Tracker](https://docs.google.com/spreadsheets/d/1lICiFCUP4-tUDzW8lw64clnlr9OlhczRgVDer8eRZrU/edit?usp=sharing)

- - - 

## Class Instruction

### 1. Instructor Do: Custom Methods (10 mins)

* Use the prompts and talking points below to demonstrate the following Mongoose key point(s):

  * ✔ Mongoose provides a way for us to create custom methods to manipulate our data.

* Change into [12-Ins-Custom-Methods](../../../../01-Class-Content/17-noSQL/01-Activities/12-Ins-Custom-Methods) and run `npm install` then `node server.js` to launch the app.

* Visit `localhost:3000` and fill out the form to create a new user and demo the response.

  ```js
  {
    "isCool": true,
    "_id": "5cfbbd607de1a557eeaaa056",
    "username": "test...the Coolest!",
    "password": "password1234",
    "email": "testuser@gmail.com",
    "userCreated": "2019-06-08T13:51:28.033Z",
    "__v": 0
  }
  ```

* Ask the students the following question(s):

  * ☝️ What is difference about the way our data was returned?

  * 🙋 Our new user has an `isCool` field that is set to `true`.

* Open [12-Ins-Custom-Methods/userModel.js](../../../../01-Class-Content/17-noSQL/01-Activities/12-Ins-Custom-Methods/userModel.js) and scroll down to the custom methods.

* Here 

  ```js
  UserSchema.methods.coolifier = function() {
    this.username = `${this.username}...the Coolest!`;
    return this.username;
  };

  UserSchema.methods.makeCool = function() {
    this.isCool = true;
    return this.isCool;
  };
  ```

* Next open `server.js` and demonstrate how we are calling our methods on our new user.

  ```js
  app.post("/submit", ({ body }, res) => {
    const user = new User(body);
    user.coolifier(); // Bob...the Coolest!
    user.makeCool(); // isCool = true;

    User.create(user)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
  ```

* Ask the students the following question(s):

  * ☝️ What are the benefits of using Mongoose?

  * 🙋 It let's use create a schema, enforce validations and overall make it easier to interface with a Mongoose database.

* Take any clarifying questions before moving on to the students activity.

### 2. Student Do: Custom Methods (15 mins)

* Direct students to the next activity located in [13-Stu-Custom-Methods/Unsolved](../../../../01-Class-Content/17-noSQL/01-Activities/13-Stu-Custom-Methods/Unsolved)

* **Instructions**

* Open `userModel.js` and create the following custom methods.

  * `setFullName`: sets the current user's `fullName` property to their lastName appended to their `firstName`

  * `lastUpdatedDate`: sets the current user's `lastUpdated` property to `Date.now()`

* When you are finished use your new custom methods in a `POST` request.

### 3. Instructor Do: Review Methods (10 mins)

* Change into [13-Stu-Custom-Methods/Solved](../../../../01-Class-Content/17-noSQL/01-Activities/13-Stu-Custom-Methods/Solved) and open the `userModel.js` file.

* Ask for a volunteer to lead your through the custom methods they created.

* Next open `server.js` and ask for a volunteer to explain how to call these new methods in that file.

* Start the server and load up the site in your browser to demonstrate the form. 

* Take any clarifying questions before moving on.

### 4. Instructor Do: Mongoose Populate (10 mins)

* Change into [14-Ins-Populate](../../../../01-Class-Content/17-noSQL/01-Activities/14-Ins-Populate) and start the server with `node server.js`. 

* Then, visit `/books` to see your books listed.

```js
[{
    "_id": "5cfbc820bc851f678c714b2c",
    "author": "Herman Melville",
    "title": "Moby Dick",
    "__v": 0
}, {
    "_id": "5cfbc83ebc851f678c714b2d",
    "author": "F. Scott Fitzgerald",
    "title": "The Great Gatsby",
    "__v": 0
}]
```

* Then visit `/library` to see your library data listed in JSON, including a list of `ObjectIds` in the book property. These are the `ObjectIds` associated with each book we've made.

```js
[{
    "books": ["5cfbc510fff60b62b1a9c318", 
              "5cfbc51cfff60b62b1a9c319", 
              "5cfbc820bc851f678c714b2c", 
              "5cfbc83ebc851f678c714b2d"],
    "_id": "5cfbc29cfff60b62b1a9c317",
    "name": "Campus Library",
    "__v": 0
}]
```

* Ask students, what if we want to see the data for all of the books stored in our library. We could go back to books, but what if we want to include all of the information about our library and our books, and query that data with just one call.

  * Answer: This is where `Mongoose`'s populate method comes in. Open the `/populated` route in your browser, and go to the books property. All of the books will be there.

  ```js
  [{
      "books": [{
          "_id": "5cfbc820bc851f678c714b2c",
          "author": "Herman Melville",
          "title": "Moby Dick",
          "__v": 0
      }, {
          "_id": "5cfbc83ebc851f678c714b2d",
          "author": "F. Scott Fitzgerald",
          "title": "The Great Gatsby",
          "__v": 0
      }],
      "_id": "5cfbc29cfff60b62b1a9c317",
      "name": "Campus Library",
      "__v": 0
  }] 
  ```

* How does this happen?

  * Show them the `Library.js` model, and how it has a reference to the `Book.js` model inside it's schema.

    ```js
    const mongoose = require("mongoose");

    const Schema = mongoose.Schema;

    const LibrarySchema = new Schema({
      name: {
        type: String,
        unique: true
      },
      books: [
        {
          type: Schema.Types.ObjectId,
          ref: "Book"
        }
      ]
    });

    const Library = mongoose.model("Library", LibrarySchema);

    module.exports = Library;
    ```

  * Then show them the `index.js` file inside of the `models` folder.

    ```js
    module.exports = {
    Book: require("./Book"),
    Library: require("./Library")
    };
    ```

  * Explain that when working with multiple models, it's often useful to be able to require all of them at once, rather than individually. 
  
  * By exporting an object containing all of our models from the `index.js` file in the models folder, we can then require this object and access all of our models inside of `server.js`.

    ```js
    const db = require("./models");
    ```

  * Point out the `populate` method being used in `server.js`.

    ```js
    app.get("/populated", (req, res) => {
    db.Library.find({})
      .populate("books")
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
    });
    ```

  * Explain that here we are running `populate("books")` after finding books and before handling the result of the query in `.then`.

  * Take any clarifying questions before moving on to the next activity.

### 5. Student Do: Mongoose Populate (20 mins)

* Direct students towards the next activity located in [15-Stu-Populate/Unsolved](../../../../01-Class-Content/17-noSQL/01-Activities/15-Stu-Populate/Unsolved)

* **Instructions**

  * Open `server.js` and update the `/populate` route to return `Users` populated with notes as JSON to the client.

* **Hint:** Check out the `Note.js` and `User.js` models to see how the schemas there make the populate method possible.

### 6. Instructor Do: Review Mongoose Populate (15 mins)

* Open up [15-Stu-Populate/Solved/server.js](../../../../01-Class-Content/17-noSQL/01-Activities/15-Stu-Populate/Solved/server.js).

* Ask for a volunteer to to walk you through the solution.

```js
app.get("/populateduser", (req, res) => {
  db.User.find({})
    .populate("notes")
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});
```

### 7. Instructor Do: Review MongoJS and Mongoose (35 mins)

*  Take some time before the break to answer any clarifying questions about the previous activity or any other concepts covered so far in Unit 17.

### 8. Break (30 mins)

### 9. Instructor Do: Intro To IndexedDB (10 mins)

* Welcome students to class.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ How do we store data client-side? 

  * 🙋 Cookies, local storage, session storage.

  * ☝️ What is a cookie?

  * 🙋 A cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser.

  * ☝️ What are some of the issues we encounter storing data client-side? 

  * 🙋 String value pairs, objects must be stringified and strings must be converted to JSON. Size limits.

  * ☝️ rom the name, what do we think IndexedDB is?

  * 🙋 The Indexed Database API (IndexedDB) is a JavaScript application programming interface provided by web browsers for managing a NoSQL database of JSON objects in the client.

### 10. Instructor Do: Creating an IndexedDB Connection (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔ We access `indexedDB` via the `window` object.

  * ✔ We create a new IndexedDB connection using the `open` method and pass it a name for the DB and a version number.

  * ✔ Our request returns a result that we can then manipulate.

  ```js
  const request = indexedDB.open("firstDatabase", 1);
  
  request.onsuccess = event => {
    console.log(request.result);
  };
  ```

* Open [16-Ins_Opening_IndexedDB](../../../../01-Class-Content/17-nosql/01-Activities/16-Ins_Opening_IndexedDB/index.html) in your browser and open your Chrome Developer tools and navigate to `Application` then `IndexedDB`.

  ![16-Ins_Opening_IndexedDB.png](Images/16-Ins_Opening_IndexedDB.png)

* Navigate into the `16-Ins_Opening_IndexedDB` directory and open `index.html` from the command line. Inside the `IndexedDB` tab we see that we now have a new database connection called `firstDatabase`.

* Ask the class the following question(s): 

  * ☝️ How many arguments does the `open` method take and what are they for?

  * 🙋 Two and the first one is the DB name, the second is the version number. The version number controls which version of the schema to use.

### 11. Student Do: Creating an IndexedDB Connection (10 mins)

* Direct students to the activity instructions found in [17-Stu_Opening_IndexedDB](../../../../01-Class-Content/17-nosql/01-Activities/17-Stu_Opening_IndexedDB/Unsolved):

```md
# Requesting an IndexedDB Database

In this activity, you will create a request for an indexedDB database and console.log the name of the db to the screen. 

## Instructions

* Write code to request an IndexedDB database instance.

* On success, log the name of the database to your console.

## 💡 Hint(s)

* Use the [indexedDB open docs](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open) docs to learn about the arguments it takes.

* You can `console.log` the `request` to so what attributes are available to you.

## 🏆 Bonus

* How can we check that indexedDB is enabled before trying to open a connection? Use the following link to research and update your solution [Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB).

```

### 12. Instructor Do: Review Creating an IndexedDB Connection (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔ We first request our DB instance with `const request = window.indexedDB.open("firstDatabase", 1);`
  
  * ✔ In the `onsuccess` method we `console.log(request.result.name);` 

  ✔ The `onsuccess` method is called every time we make a request.

* Open [17-Stu_Opening_IndexedDB](../../../../01-Class-Content/17-nosql/01-Activities/17-Stu_Opening_IndexedDB/Solved/index.html) in your IDE and explain the following point(s):

  * We first request our DB instance with `const request = window.indexedDB.open("firstDatabase", 1);`
  
  * In the `onsuccess` method we `console.log` the `name` of the `result`, which is the database name.

  ```js
  const request = window.indexedDB.open("firstDatabase", 1);
    request.onsuccess = event => {
    console.log(request.result.name);
  };
  ```

  * 🔑 Our `open` method takes two arguments, first the db name and then the version number. 

* Ask the class the following question(s):

  * ☝️ What happens when we call `open` on `indexedDB`?

  * 🙋 The call to the `open()` method returns a request object with a `result` (success) value that you handle as an event. 

* Answer any questions before proceeding to the next demo.

### 13. Instructor Do: Creating Object Stores (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔ Object stores can be thought of as a "table" where we hold data.

  * ✔ Object stores can hold any data type.

  * ✔ Object stores are schema-less, unlike SQL databases.

  * ✔ We create our object stores in the `onupgradeneeded` method which is called when you change the db version. ie: From no database to 1, from 1 to 2 etc.

  * ✔ If the database doesn't already exist, it is created by the `open` operation, then an `onupgradeneeded` event is triggered.

*  Open [18-Ins_Creating_Object_Stores](../../../../01-Class-Content/17-nosql/01-Activities/18-Ins_Creating_Object_Stores/index.html) in your IDE and explain the above points.

  ```js
  const request = window.indexedDB.open("todoList", 1);
  
  request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore("todoList");
  };

  request.onsuccess = event => {
    console.log(request.result);
  };
  ```

* Next open [18-Ins_Creating_Object_Stores](../../../../01-Class-Content/17-nosql/01-Activities/18-Ins_Creating_Object_Stores/index.html) in your browser and open your Chrome Developer tools and navigate to `Application` then `IndexedDB`.

  ![18-Ins_Creating_Object_Stores.png](Images/18-Ins_Creating_Object_Stores.png)

* We navigate into the `20-Ins_Creating_Object_Stores` directory and open `index.html` from the command line. Inside the `IndexedDB` tab we see that we now have a new database connection called `todoList`.

* When we click on the database tab, we can see that we now have an empty object store called `todoList`.

* Ask the class the following question(s): 

  * ☝️ What is an object store?

  * 🙋 It's similar to an SQL table and where we store data in IndexedDB.

  * ☝️ What is the main difference between an object store and an SQL table?

  * 🙋 Object stores do not have schemas.

### 14. Student Do: Create an Object Store (15 mins)

* Direct students to the activity instructions found in [19-Stu_Creating_Object_Stores](../../../../01-Class-Content/17-nosql/01-Activities/19-Stu_Creating_Object_Stores/Unsolved):

```md
# Creating an Object Store

In this activity, you will create an object store for your IndexedDB database.

## Instructions

* Write code to request an IndexedDB database instance.

* On success, log the result to your console.

* Inside the `onupgradeneeded` method, create an object store for you database called `todoList`.

## 💡 Hint(s)

* Use the [open](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open) docs to learn about the arguments it takes.

* You can `console.log` the `request` to so what attributes are available to you.

## 🏆 Bonus

* Use the [keyPath](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/keyPath) docs to research what a `keyPath` is and how to add it to your `objectStore`.
```

### 15. Instructor Do: Review Creating Object Stores (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔ We create the object store in the `onupgradeneeded` method.

* Open [19-Stu_Creating_Object_Stores](../../../../01-Class-Content/17-nosql/01-Activities/19-Stu_Creating_Object_Stores/Solved/index.html) in your IDE and review the code snippet.

  ```js
  const request = window.indexedDB.open("todoList", 1);
    
  request.onsuccess = event => {
    console.log(request.result);
  };

  request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    const objectStore = db.createObjectStore("todoList");
  };
  ```

* Ask the class the following question(s):

  * ☝️ What do we use object stores for? 

  * 🙋 To store our indexedDB data.

* Answer any questions before proceeding to the next demo.

### 16. Instructor Do: Defining Object Store Data with Indexes (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔ Object stores are schema-less and have no native search capability.

  * ✔ We create indexes on object store "columns" so we can query.

  * ✔ We use the `createIndex(indexName, keyPath)` method to create indexes, it takes two arguments.

  * ✔ The `indexName` is what you use to access the index when querying.

  * ✔ The `keyPath` is the actual name of the "column."

* Open [20-Ins_Creating_Indexes](../../../../01-Class-Content/17-nosql/01-Activities/20-Ins_Creating_Indexes/index.html) in your IDE and review the code snippet.

  ```js
  const request = window.indexedDB.open("todoList", 1);
  request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    const objectStore = db.createObjectStore("todoList");
    objectStore.createIndex("timestamp", "timestamp");
  };
  request.onsuccess = event => {
    console.log(request.result);
  };
  ```

* Open [20-Ins_Creating_Indexes](../../../../01-Class-Content/17-nosql/01-Activities/20-Ins_Creating_Indexes/index.html) in your browser and open your Chrome Developer tools and navigate to `Application` then `IndexedDB`.

  ![20-Ins_Creating_Indexes.png](Images/20-Ins_Creating_Indexes.png)

  * We navigate into the `22-Ins_Creating_Indexes` directory and open `index.html` from the command line. Inside the `IndexedDB` tab we see that we now have a new database connection called `todoList`.

  * When we click on the database tab, we can see that we now have an empty object store called `todoList`. Inside our `todoList` object store we now have a `timestamp` index that we can use to query on.

* Ask the class the following question(s): 

  * ☝️ What are indexes for?

  * 🙋 They are used to query on object store "columns" since they have no way to natively search.

### 17. Student Do: Defining Object Store Data with Indexes (10 mins)

* Direct students to the activity instructions found in [21-Stu_Creating_Indexes](../../../../01-Class-Content/17-nosql/01-Activities/21-Stu_Creating_Indexes/Unsolved):

```md
# Creating Indexes

In this activity, you will create an index on your object store that can be used to query data.

## Instructions

* Write code to request an IndexedDB database instance.

* On success, log the result to your console.

* Inside the `onupgradeneeded` method, create an object store for you database called `todoList`. 

* Next, create three indexes for your ToDoList called `icebox`, `inprogress` and `complete`. 

## 💡 Hint(s)

* Use the [createIndex](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex) docs if you are stuck.

## 🏆 Bonus

* The `createObjectStore` method takes an optional `keyPath`. Using the [docs](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore), update your code to pass the `keyPath` option when your store is created.
```

### 18. Instructor Do: Review Defining Object Store Data with Indexes (5 mins)

* Open [21-Stu_Creating_Indexes](../../../../01-Class-Content/17-nosql/01-Activities/21-Stu_Creating_Indexes/Solved/index.html) in your IDE and explain the following point(s):

  * We simply call the `createIndex` method on our object store and create three new indexes, giving each of them an `indexName` and `keyPath`.

  ```js
  request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    const objectStore = db.createObjectStore("todoList");
    objectStore.createIndex("icebox", "icebox");
    objectStore.createIndex("in-progress", "in-progress");
    objectStore.createIndex("complete", "complete");
  };
  ```

  * 🔑 Recall that the `indexName` is what you use to access the index and the `keyPath` is the actual name of the "column."

* Answer any questions before proceeding to the next demo.

### 19. Instructor Do: Adding and Getting Object Store Data (5 mins)
  
* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔ We add data to our object stores with the `add` method.

  * ✔ We can add a `keyPath` argument when we create our object stores that let's us query.

  * ✔ We use `get` object store method to query by `keyPath`.

  * ✔ We use the `getAll` object store method to query by indexes.

* Open [22-Ins_Adding_Getting_Data](../../../../01-Class-Content/17-nosql/01-Activities/22-Ins_Adding_Getting_Data/index.html) in your IDE and review the following code.

  ```js
  request.onupgradeneeded = event => {
    const db = event.target.result;
    const todoListStore = db.createObjectStore("todoList", { keyPath: "listID" }); // can now query by listID
    todoListStore.createIndex("statusIndex", "status"); // can now query by statusIndex
  }

  todoListStore.add({ listID: "1", status: "complete" }); // adding data

  const getRequest = todoListStore.get("1"); // querying by keyPath
  const getRequestIdx = statusIndex.getAll("complete"); // querying by index

  ```

* Open [22-Ins_Adding_Getting_Data](../../../../01-Class-Content/17-nosql/01-Activities/22-Ins_Adding_Getting_Data/index.html) in your browser and open your Chrome Developer tools and navigate to your console.

  ![22-Ins_Adding_Getting_Data](Images/22-Ins_Adding_Getting_Data.png)

  * We navigate into the `22-Ins_Adding_Getting_Data` directory and open `index.html` from the command line. When we click on the database tab, we can see that we now have data in our `todoList` object store.

* Next open your developer tools console to show the data being returned from our `get` and `getAll` methods.

  ![22-Ins_Adding_Getting_Data-console](Images/22-Ins_Adding_Getting_Data-console.png)

* Ask the class the following question(s): 

  * ☝️ What is a keyPath?

  * 🙋 A keyPath gives us a way to query our column's data.

  * ☝️ What is an index?

  * 🙋 An index is another way to more efficiently and specifically query for data.

### 20. Student Do: Adding and Getting Object Store Data (15 mins)

* Direct students to the activity instructions found in [23-Stu_Adding_Getting_Data](../../../../01-Class-Content/17-nosql/01-Activities/23-Stu_Adding_Getting_Data/Unsolved):

```md
# Adding and Getting Data

In this activity, you will create add and retrieve data from an objectStore using a keyPath and index.

## Instructions

* In the `onupgradeneeded` method: 

  * Create a `todoList` object store with a `listID` keyPath that can be used to query on.

  * Create an index for a "column" you'd like to query on. ie: due-date

* In the `onsuccess` method:

  * Create variables for a new `transaction` on your database, `objectStore` and the `index` you created.

  * Add four new items to your object store with the `add` method.

  * Using the `get` method, return an item from your object store.

  * Using the `getAll` method, query by index and return all items.

## 💡 Hint(s)

* Use the following docs if you are stuck.

  * [add](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/add) 

  * [get](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/get)

  * [getAll](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAll)

## 🏆 Bonus

* Make a new request that removes all of your data from the object store. Use [the clear docs](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/clear) as your guide.
```

### 21. Instructor Do: Review Adding and Getting Object Store Data (5 mins)

* Use the prompts and talking points below to review the following key point(s):
  
  * ✔ We add data to our object stores with the `add` method.

  * ✔ We can add a `keyPath` argument when we create our object stores that let's us query.

  * ✔ We use `get` object store method to query by `keyPath`.

  * ✔ We use the `getAll` object store method to query by indexes.

* Open [23-Stu_Adding_Getting_Data](../../../../01-Class-Content/17-nosql/01-Activities/23-Stu_Adding_Getting_Data/Solved/index.html) in your IDE and explain the following point(s):

  * We first create an object store and pass it the optional `keyPath` argument of `listID` that we can use to query with.
  
  * We then create an index on our `todoListStore` with `createIndex`, passing it an `index` of `statusIndex` and a `keyPath` of `status`.
  
  * We then simply use the `add` method to add records to our object store.

  * Next, we make a get request to our object store using the `get` method, which queries by `keyPath`.

  * Finally we make another get request with `getAll` and query by our `index`.

* Open [23-Stu_Adding_Getting_Data](../../../../01-Class-Content/17-nosql/01-Activities/23-Stu_Adding_Getting_Data/index.html) in your IDE and review the following code.

  ```js
  request.onupgradeneeded = event => {
    const db = event.target.result;
    const todoListStore = db.createObjectStore("todoList", {keyPath: "listID"}); 
    todoListStore.createIndex("statusIndex", "status"); 
  }

  todoListStore.add({ listID: "1", status: "complete" }); 

  const getRequest = todoListStore.get("1"); 
  const getRequestIdx = statusIndex.getAll("complete"); 

  ```

  * 🔑 Querying by `index` is more efficient than by `keyPath`. When creating a schema, if you know the data you will be searching for most often, creating an `index` for that data is ideal.

* Ask the class the following question(s):

  * ☝️ When querying with the `getAll` method, what argument do you pass it?

  * 🙋 The value of the index you want returned.

* Answer any questions before proceeding to the next demo.

### 22. Instructor Do: Updating Data With Cursors (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔ We open a cursor request on our object store with `openCursor`.

  * ✔ On success we have a result that we can iterate through.

  * ✔ We use the `continue` key word to move through the records.

* Open [24-Ins_Updating_Data_With_Cursors](../../../../01-Class-Content/17-nosql/01-Activities/24-Ins_Updating_Data_With_Cursors/index.html) in your IDE and review the following code.

  ```js
  const getCursorRequest = todoListStore.openCursor();
    getCursorRequest.onsuccess = e => {
      const cursor = e.target.result;
      if (cursor) {
        console.log(cursor.value);
        cursor.continue();
      } else {
        console.log("No documents left!");
      }
    };
  ```

* Open [24-Ins_Updating_Data_With_Cursors](../../../../01-Class-Content/17-nosql/01-Activities/24-Ins_Updating_Data_With_Cursors/index.html) in your browser and open your Chrome Developer tools and navigate to your console.

   ![24-Ins_Updating_Data_With_Cursors](Images/24-Ins_Updating_Data_With_Cursors.png)

  * We navigate into the `24-Ins_Updating_Data_With_Cursors` directory and open `index.html` from the command line. Next open your Chrome Developer tools and navigate into the console to see the data being returned.

* Ask the class the following question(s): 

  * ☝️ What is a cursor used for?

  * 🙋 It gives us a way to iterate through our object stores files.

### 23. Student Do: Updating Data With Cursors (15 mins)

* Direct students to the activity instructions found in [25-Stu_Updating_Data_With_Cursors](../../../../01-Class-Content/17-nosql/01-Activities/25-Stu_Updating_Data_With_Cursors/Unsolved):

```md
# Updating Data With Cursors

In this activity, you will be updating records in your object store using a Cursor.

## Instructions

* Inside ` getCursorRequest.onsuccess`

  * Set the `result` to a variable named `cursor`.

  * Check the status of each cursor's value and if it's equal to "in-progress", set the status to "complete".

## 💡 Hint(s)

* Use the [cursor docs](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor), specifically `cursor.value`, `cursor.update` and `cursor.continue` to solve the activity.

## 🏆 Bonus

* Make a new request that removes any tasks with the status "backlog" from the object store. Use [the delete docs](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete) as your guide.
```

### 24. Instructor Do: Review Updating Data With Cursors (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * ✔ We open a cursor request on our object store with `openCursor`.

  * ✔ On success we have a result that we can iterate through.

  * ✔ We use the `continue` key word to move through the records.

* Open [25-Stu_Updating_Data_With_Cursors](../../../../01-Class-Content/17-nosql/01-Activities/25-Stu_Updating_Data_With_Cursors/Solved/index.html) in your IDE and explain the following point(s):

  * We first open a cursor on our object store with `openCursor()`.

  * Then in our `onsuccess` method we check to see if our cursor has any data in it.

  * If it does, we check the status of each cursor's value and if it's equal to "in-progress" we set the status to "complete" with the `update` method.

  * We then call `continue` to move to the next record, until there are none left to evaluate.

  ```js
  const getCursorRequest = todoListStore.openCursor();
    getCursorRequest.onsuccess = e => {
      const cursor = e.target.result;
        if (cursor) {
          if (cursor.value.status === "in-progress") {
            const todo = cursor.value;
            todo.status = "complete";
             cursor.update(todo);
          }
          cursor.continue();
        }
      };
  ```

* Ask the class the following question(s):

  * ☝️ What does the `continue` method do?

  * 🙋 Continues to the next record, exiting when there are none left.

* Answer any questions before proceeding to the next demo.

### 25. End

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)