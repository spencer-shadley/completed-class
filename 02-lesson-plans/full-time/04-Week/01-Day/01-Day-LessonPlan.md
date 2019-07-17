## 4.1 - Intro to Client-Side Storage & Firebase (10:00 AM) <!--links--> &nbsp; [⬅️](../../03-Week/05-Day/05-Day-LessonPlan.md) &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)

### Pre-Class Office Hours

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in an input and returns true if it’s an integer and false otherwise.

Ex:
Input: "7"
Output: false

Input: 7
Output: true

Input: 4.3
Output: false

```

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

  * Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided). 

  * Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

```js
var isInt = function (input) {
  return parseInt(input) === input;
}

```

```js
var isInt = function (input) {
  return Math.floor(input) === input;
}
```

* Briefly tell students that the second solution is preferable. The first one actually won't work for very large numbers because of the way `parseInt` works under the hood.

* This isn't important for them to fully understand at this point, but it's a great opportunity for them to see that learning the language they work in deeply can help them write less error-prone code.

* [more info on using parseInt on numbers](https://www.gideonpyzer.com/blog/use-parseint-for-strings-not-for-numbers/)

### Overview

In this class, we will be introducing the concept of data persistence and simple client-side approaches to maintain content between browser sessions. We will also be introducing Firebase, an easy-to-use server-side database that makes it easy to power our front-end applications with expansive datasets.

`Summary: Complete Activities 1-13 in Unit 07`

##### Instructor Priorities

* Students should be able to articulate definitions of data persistence, client-side storage, and server-side storage.

* Students should have a conceptual understanding of the pros and cons of client-side vs. server-side storage.

* Students should become familiar with the concepts of `localStorage` and `cookies`.

* Students should complete the Sign-in Page with localStorage activity.

* Students should complete the To-Do App with localStorage activity.

* Students should understand the following:

  * How to setup and initialize a new Firebase
  * `.set({})`
  * `.on("value")`

* Students should complete + understand the Firebase "Down Counter" Application

##### Instructor Notes

* Avoid "live coding" any of the cookies examples. Cookies are challenging to demonstrate live as it requires first creating a deployed repo and then constantly pushing to the [deployed site](http://cookie-example-rcb.herokuapp.com/). Demonstrate the pre-coded solution, point out this limitation, and move on. Students do NOT need to know how to code cookies (or localStorage) for the homework.

* You will likely find that students are still struggling with basic JavaScript at this point in the class. Use today's class as an opportunity for JavaScript strengthening. If necessary, cut examples on Firebase Presence and Deployment in favor of JavaScript reinforcement. Maintain motivation through each of the basic examples.

* If there are any issues with the data in the firebase databases, use [Firebase Manager](https://firebase-manager-fsf.netlify.com/) to clear them. To illustrate database creation in firebase, create your own personal account to use for demonstration purposes.

  * **Important**: Be sure you always have two links for firebase: one each for the core and the realtime database. You'll need both when demonstrating and running firebase examples locally - if you remove the second link when copying over your own app configuration, the `database` code won't work.

* Have your TAs reference [01-Day-Time-Tracker](01-Day-Time-Tracker.xlsx) to help keep track of time during class.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bfb8ba84-9964-4b62-a95b-6979e0f85ba6)

### Class Objectives

* To introduce the concept and utility of "data persistence" in web applications

* To demonstrate different methods for client-side data storage (i.e. localStorage, sessionStorage, and cookies)

* To build a semi-complex application taking advantage of localStorage to maintain content between browser sessions.

* To introduce the utility of server-side storage systems like Firebase

* To provide a grasp of the basic methods for storing and retrieving data in Firebase

* To introduce the concept of user "presence" in Firebase

### FIREBASE MANAGER: DO NOT SLACK TO STUDENTS. INSTRUCTOR USE ONLY

 [Firebase Manager](https://firebase-manager-fsf.netlify.com/)

* **Important**: We have created a "firebase manager". This will allow you to clear all the data stored within our deployed firebase applications in case anyone has added anything malicious and/or unwanted. Only use when NECESSARY.

### 1. Partners Do: Build a Basic To-Do App (15 mins)

* Divide students into groups of three (either pre-defined or self-selected). Have students sit next to their groups.

* Open up the solved file inside `01-todolist-nopersistence` in the browser and demonstrate the functionality of the intended to-do application. Point-out that the todo items are added consecutively and that clicking the "X" button closes the appropriate todo item.

![1-basictodo](Images/1-basictodo.png)

* Then slack out the following files and instructions.

* **Files**:

  * `01-todolist-nopersistence`

* **Instructions**:

  * Assign one student of the three of you to be the group's typist. All others in the group will help supervise, offer guidance, and help catch bugs that the group's typist might not be able to catch. Throughout this activity (and many of today's activities) you will be switching roles with those in your group.

  * Then create a Basic To-Do application using `1-student-do-todolist.html` as a starting point. The HTML is already created for you so you will only have to fill in the javascript sections where there are large blanks. Alternatively, if you are feeling bold and capable, your group may code it from scratch without the use of the base code provided.

  * Helpful Hint: Each of the buttons and text elements should have a dynamically created identifier or data attribute that differentiates one item on the list from another. You should use these attributes to close out the appropriate items when you click on the "X" beside them.

### 2. Instructor Do: Build a Basic To-Do App (7 mins)

* Open up the solved file inside [01-todolist-nopersistence/Solved](../../../../01-Class-Content/07-firebase/01-Activities/01-todolist-nopersistence/Solved/1-student-do-todolist-solution.html) and walk students through the code.

* Spend the appropriate time necessary to explain how:

  * `var toDoTask` is using `.val()` to retrieve the textbox input.

  * We are creating jQuery elements for `toDoItem` and `toDoClose` to handle the text and buttons.

  * Then point out that we are using a counter via `toDoCount` to give each of these todoItems and buttons identifiers that are unique to them.

  * Finally, point out that we can use the dynamic identifier (numbers) to match and close the right todo item when the appropriate button is clicked.

![2-todocode_1](Images/2-todocode_1.png)
![2-todocode_2](Images/2-todocode_2.png)

* Then slack out the solution code to students.

### 3. Everyone Do: Go Over the To-Do App (5 mins)

* Have the students discuss amongst their groups the solution to the assignment. If their group's solution did not work, prompt them to understand why this might have been the case before moving on to discussing the solution itself.

### 4. Everyone Do: Losing To-Dos (1 min)

* Ask students to take the working to-do list solution and to then create 15 todo items from their lives.

* Once they are done have them refresh the page.
  * "Oh Noezzz!! All my todos are gone!"

### 5. Instructor Do: Discuss "Data Persistence" (2 min)

* Very briefly use this example to introduce the concept of "data persistence" (i.e. the need to create web applications that are able to store data beyond the lifetime of the browser instance).

* Then (again BRIEFLY) discuss that this week's classes are all about providing the tools the students require to do this.

### 6. Instructor Do: Discuss "Client-Side vs Server-Side" Storage (1 min)

* Introduce students to the concept that data can persist in two ways. We can temporarily store data on users' computers + browsers (client-side) and we can also store that information on an external server/database (server-side).

### 7. Everyone Do: Pros / Cons of Client vs. Server Side Storage (2 min)

* Have students talk to their groups about the possible advantages and disadvantages of using client vs server-side data storage.

  * What would be some cases in which you might want to use one over the other?

### 8. Instructor Do: Explain Pros / Cons of Storage Options  (2 min)

* Answer the questions just given to the students. Offer the perspective that...

  * Client-side persistence might be useful for saving login information or information that would allow a web application to work offline. Client-side persistence is also useful for information relevant to having the page load quickly. (i.e. widgets that will get run repeatedly on visits.

  * Server side. Obviously, this is where you are going to store the hunk of your data for all your users, customers, locations, etc. Your local machine isn't going to store everyone's data every time. That would make no sense. You need an external storage center for data if you are using server-side persistence.

### 9. Instructor Do: Client-Side Approach Overview (2 min)

* Let students know that we'll be showing them three approaches for performing client-side data persistence. (localStorage, sessionStorage, and cookies). Also, point out that there are other approaches out there for doing the same thing and that the major differences between them have to do with:

  * Variable eases of use

  * Compatibility with older browsers

  * Security

### 10. Students Do: Sign-in Page Without Persistence (7 min)

* Open solved file inside the [02-signin-nopersistence](../../../../01-Class-Content/07-firebase/01-Activities/02-signin-nopersistence/Solved/2-student-do-signin-no-persistence-solution.html) folder in the browser and show students the sign-in page. For now, the focus should be on creating a sign-in page that simply saves the user input and displays it inside of a text-box.

* Then slack out the following instructions and files.

* **Files:**

  * `02-student-do-signin-no-persistence` (unsolved)

* **Instructions:**

  * Using the `02-student-do-signin-no-persistence` as a starting point, fill in the JavaScript code necessary to make the page "save user inputs" and then re-display them on the second card (most recent member).

  * Note: Don't worry about using client-side saving just yet. Just focus on getting the text inside the inputs and then displaying them via HTML in the second card.

![3-signin](Images/3-signin.png)

### 11. Instructor Do: Review Sign-in without Persistence (10 min)

* Open solved file inside the [02-signin-nopersistence](../../../../01-Class-Content/07-firebase/01-Activities/02-signin-nopersistence/Solved/2-student-do-signin-no-persistence-solution.html) folder and walk students through understanding the code. Make sure they can re-explain the sections to you line by line!

* Then slack out the solution to students so they have it for the next activity (in case they didn't complete it in time.)

### 12. Instructor Do: Demonstrate localStorage (10 min)

* Open the solved file inside `03-instructor-do-localstorage`. Help walk your students through the key lines of code in the program. Point out that data is getting stored in a property associated with localStorage.

  * Try your best to focus on the `localStorage.clear()`, `localStorage.setItem()`, and `localStorage.getItem()` expressions.

  * Point out that localStorage is storing variables in its internal key-value pairing. In essence, localStorage is something like a data object while not explicitly being one.

![4-localstorage](Images/4-localstorage.png)

* Explain that we can view and manipulate the contents of local storage with Chrome Developer Tools.

  * Open the Chrome Developer Tools; select the **Application** tab; and click the **Local Storage** button in the left column.

  * Explain that the resulting pane displays the key-value pairs that we set on local storage from our JavaScript.

    * Change the value through the `input` and refresh the page to demonstrate.

  * Explain that we can set the value of our local storage keys directly from the Developer Tools.

    * Change the value through the Developer Tools and refresh the page to demonstrate.

![We can view and manipulate the contents of local storage from the developer tools in Chrome.](Images/12-local-storage-dev-tools.png)

_We can view and manipulate the contents of local storage from the developer tools in Chrome._

* Point out that the developer tools can be useful when debugging applications that use local storage.

  * Encourage students to keep their developer tools open while they work on the next activity.

### 13. Students Do: Sign-in Page with localStorage (15 min)

* Open the solved file [04-signin-localstorage](../../../../01-Class-Content/07-firebase/01-Activities/04-signin-localstorage/Solved/4-student-do-signin-localstorage-solution.html). in your browser and show them how a re-configured version of the code would work if it utilized localStorage.

* Then slack out the following files and instructions:

* **Files:**

  * [`02-student-do-signin-no-persistence-solution.html`] (If you haven't sent this already)

* **Instructions:**

  * Using the solution provided to you in `02-student-do-signin-no-persistence-solution.html`, re-configure the application so that it utilizes localStorage.

  * If your code worked it should save/display the last inputted user even if the tab is closed or if the page is closed and reopened.

### 14. Instructor Do: Review Sign-in with localStorage (10 min)

* Review the code provided in [04-signin-localstorage/Solved](../../../../01-Class-Content/07-firebase/01-Activities/04-signin-localstorage/Solved/4-student-do-signin-localstorage-solution.html) -- paying particular attention to point out all the sections where localStorage is being cleared, set, or obtained (i.e. getItem). Also, point out the arguments needed to set and get data.

![\-localstoragesignin](Images/5-localstoragesignin.png)

### 15. Everyone Do: Replace Sign-in with sessionStorage (5 min) (Optional)

* Show students that by replacing all of the `localStorage` instances with the word `sessionStorage` we can get a session limited version of the app (i.e. a version of the same program that, when we close tabs or the browser, does not preserve the data. Contrast this to localStorage.)

* You can use the solution [5-student-do-signin-session-storage-solution.html](../../../../01-Class-Content/07-firebase/01-Activities/05-signin-sessionstorage/Solved/5-student-do-signin-session-storage-solution.html) to quickly show the solution here.

* Point out that we can view session storage through the developer tools the same way we view local storage data.

![We can view session storage through developer tools the same way we view local storage data.](Images/15-session-storage-dev-tools.png)

_We can view session storage through developer tools the same way we view local storage data._

- - -

### 16. Instructor Do: Introduce Cookies (5 min)

* **Important**: Warn students that due to security implications, Chrome doesn't support cookies on static local non-deployed HTML pages. There are workarounds for this, but in order to demonstrate the activity we will either be going to the deployed Heroku version of this activity, OR you can use the firefox or safari browser to demonstrate the desired functionality if desired and convenient. Cookies are not necessary for this unit's homework.

* Warn students that working with cookies can be cumbersome at times.

* Mention cookies are essentially the original form of client-side data storage. It typically involves relaying a cookie string between the machine and a specific web-page.

* Cookies are useful because they are compatible with nearly all browsers so long as users have cookies enabled.

* Cookies aren't as seamless to use as localStorage but, have the native ability to be transported back and forth between the machine and web page.

* When using cookies there is no way to send and receive only "select" bits of information to the server. In essence, any data you collect in cookies is constantly sent back and forth.

* As with localStorage, you SHOULD NOT save sensitive information in cookies.

### 17. Instructor Do: Show Working Cookies App (7 min)

* Walk students through an example of using cookies via this link (or locally with Safari or Firefox): <http://cookie-example-rcb.herokuapp.com/>.

* Then walk students through the code associated: `6-instructor-do-cookies-intro.html` in `06-cookies-demo`. 

  * **Note: We are limited to the use of session cookies since we are not using a server. If we were on a server, we would be able to set an `expire` date for our cookie.**

  * You must also use Firefox or Safari, as the setting of cookies via the file system does not work at all with Chrome or Edge.

![6-cookieparser](Images/6-cookieparser.png)

![7-cookielines](Images/7-cookielines.png)

* As you show them the code be sure to point out the following:

  * The `readCookie` function(readCookie functions are readily available online)

    * The key takeaway here is that there is no native way to parse out a cookie's various properties. You need a separate helper function.

  * Point out that cookies are created by adding to the properties of `document.cookie` and that you can set an expiration date of the past to delete them or set the expiration date for some time in the future to make them last until that time.

  * Also point out that, because this is using cookies, we needed to examine the application through Heroku in order to store data at all. Due to security reasons, Chrome will block cookies if they're being stored on a non deployed HTML page. This makes the process of debugging code with cookies even more painful than it already is.

### 18. Everyone Do: Review Sign-in with Cookies (7 min)

* Slack out the code in `07-student-do-signin-cookies-solution.html` to students and point them to <http://cookies-signin-rcb.herokuapp.com/>. Then have them spend a few minutes reviewing the code, focusing their attention primarily on how much more convoluted the cookie-based code is compared to the localstorage version they worked on earlier.

### 19. Partners Do: To-Do with localStorage (30 min)

* Have the students return to the groups that were created earlier in class and have them assign a new typist to take over as the group's primary coder for this assignment.

* Task students with incorporating data-persistence into the todo list assignment from the beginning of class.

* Demonstrate to students a working version of the code in the browser using the solution inside [08-todolist-localstorage](../../../../01-Class-Content/07-firebase/01-Activities/08-todolist-localstorage/Solved).

* Warn students that this is a VERY challenging exercise. The point is to take an honest stab at it and see what you can do! Push yourselves!!!

* Slack out the following files and instructions:

* **Files:**

  * `01-student-do-todolist-solution.html` (If you haven't sent this already)

* **Instructions:**

  * Using a working example of the to-do application `01-student-do-todolist-solution.html` incorporate the use of `localStorage` to create data persistence.

  * Have the group member who hasn't typed yet become the typist in the group while the other two take on the role of supervisor.

  * HINT: You will need to create an additional array of todos that you can keep adding todo items to.

  * HINT: You will need to selectively delete array elements to get this working properly. (Suggestion: Look into `.splice`)

  * HINT: You will need to take an array and dump the contents into localStorage (Suggestion: Use `JSON.stringify(todoArray)`).

  * HINT: Don't freak out. This is hard, but push yourselves as best you can!

### 20. Instructor Do: Review the To-Do with localStorage (10 min)

* Walk students through the coded solution inside [08-todolist-localstorage](../../../../01-Class-Content/07-firebase/01-Activities/08-todolist-localstorage/Solved) and use the code comments to help guide the discussion.

* Let students know that it's OKAY if it doesn't completely click right away. This was a TOUGH activity.

* Sets up an initial array will hold our todos. If we have todos array in local storage already, use that. Otherwise set list to an empty array.
  ![8-todolocal_1](Images/8-todolocal_1.png)

* Each time a user adds a record, it adds to the array, then we dump that array into localStorage, and the HTML using the putOnPage function
  ![8-todolocal_2](Images/8-todolocal_2.png)

* When a user deletes a todo we clear it from three places (HTML, Array, and localStorage). Note how we use .remove() to remove the todo from the DOM
  ![8-todolocal_3](Images/8-todolocal_3.png)

* When we re-load the browser, we run the put on page function will look for any todos in localstorage and then puts them on the page.
  ![8-todolocal_4](Images/8-todolocal_4.png)

### 21. Instructor Do: Introduce Homework (5 min)

* Demonstrate to students the two homework assignments. _Strongly_ suggest that they aim to do the easier of the two unless they are very, very confident in their JavaScript. The harder of the two homework assignments is SIGNIFICANTLY harder whereas the other assignment is completely doable following the third class of the week. Also, let them know that both homework assignments are great milestones because they showcase the ability to work with external data (backend).

![9-trainapp](Images/9-trainapp.png)

* For the demo of Homework 1, visit: [TrainTime App](https://train-time-fsf.herokuapp.com/). (**DON'T SEND STUDENTS THE LINK OR ELSE THE WILL BE ABLE TO DOWNLOAD THE SOURCE CODE!!!**)

* Explain to them the concept as the following:

  * This app lets you see train schedules in the future based on the current time.

  * When you create a new train, you specify the start time and frequency and it will then calculate the next train on the schedule.

* For Homework 2: Demo the RPS Video and open the working solution in your browser.

  * Explain to them that the app allows you to have multiple users all seeing different things on their screens (i.e. if you are the active player you will see one screen while the second player or audience members will see entirely different screens from that of the first).

* Both of these homework assignments rely on Firebase which we will introduce after lunch!

- - -

### 22. Lunch (30 min)

- - -

### 23. Instructor Talk: Firebase Introduction (3 min)

* Navigate to the Firebase website (<https://firebase.google.com/>). Then, while having it on in the background, begin to concisely discuss the concept behind Firebase. Namely that...

  * Firebase offers an extremely easy to use system for relaying data between your application and their dedicated platforms.

  * It offers an easy to use, intuitive GUI for seeing your data in real-time.

  * It offers near instantaneous transmission of data between the Firebase database and your application. Of specific importance is the concept of "real-time" data binding (i.e. when your data changes in the database it will IMMEDIATELY reflect that change in your application.)

* Remember to be concise! Try to stay on time as there's plenty to do!

### 24. Everyone Do: My First Firebase Database (5 min)

* Have students follow your lead as you create a new Firebase Database. You can use the below steps as a guide.

  * Navigate to the Firebase website (<https://firebase.google.com/>), click 'GET STARTED FOR FREE', log in with your Google account, and then create a Firebase app by clicking 'CREATE NEW PROJECT'. Have them call it whatever they would like (let students know that it needs to be a unique name though).

  * Once they have a Firebase app, have them click 'Database' on the left navbar.

    ![Database Sidenav](Images/1-Database.png)

  * Show students that the displayed URL is where all of the data will get stored.

    ![Firebase URL](Images/2-Firebase_URL.png)

  * It is also important to note that by default Firebase requires authentication to read/write to a new database. For students to be able to complete exercises without worrying about authentication, they will need to set their database rules to 'public'.

    ![Change Rules GIF](Images/3-Change_Rules.gif)

  * Have students click the 'RULES' tab, set both ".read" and ".write" to true, and then click Publish.

### 25. Instructor Do: Ex 1 - Click Button Counter - Firebase Console (7 min)

* Open the code in [instructor-do-clickbutton-fireconsole.html](../../../../01-Class-Content/07-firebase/01-Activities/09-clickbutton/instructor-do-clickbutton-fireconsole.html) in `09-clickbutton` (Do NOT slack out this code yet).

* Walk students through the key parts of this basic Firebase application. You can use the below steps as a guide:

  * Inclusion of the Firebase.js file

  * Firebase config and initialization

  * Creation of a reference to the database (i.e. `var database = firebase.database()` )

  * The use of `.set()` to save the data to the database

  * The use of `.ref()` to specify where the data will be saved. Since there is nothing inside the parentheses the data is saved to the database's root directory.

* Be sure to change the Firebase URL where appropriate.

![Click Count](Images/4-Click_Count_1.png)
![Click Count](Images/4-Click_Count_2.png)

* Once you've walked them through the code, open up your Firebase database in the browser and then show students that, as you click the button, the database is changing to reflect this. (NOTE: At this point, HTML is not changing -- just the Firebase data).

![Show Clicks](Images/5-Show_Clicks.png)

### 26. Everyone Do: My First Firebase App (3 min)

* Slack out the code inside [instructor-do-clickbutton-fireconsole.html](../../../../01-Class-Content/07-firebase/01-Activities/09-clickbutton/instructor-do-clickbutton-fireconsole.html) in `09-clickbutton`.

* Have the students navigate to their app's overview page and click 'Add Firebase to your web app'. They should see a code snippet like this:

![Firebase Config Code Snippet](Images/6-Code_Snippet.png)

* Then instruct students to replace the Firebase config object with the config from their OWN Firebase database. This object tells Firebase the URL of their database.

![New Config](Images/7-Config.png)

* Have them click the button a few times and notice the changes being made to the database. Confirm that students have a working connection at this point.

### 27. Everyone Do: Reflect on Firebase (3 min)

* Have students talk to those around them about the code they are now seeing.

* Encourage them to pay deep attention to the process of setting up a new Firebase and `.set` especially.

### 28. Instructor Do: Ex 1 - Click Button Counter - Complete (7 min)

* Open the file [instructor-do-clickbutton-fullcomments.html](../../../../01-Class-Content/07-firebase/01-Activities/10-clickbutton-complete/Solved/instructor-do-clickbutton-fullcomments.html) in `10-clickbutton-complete`. Run the application in the browser.

* Point out how as you click the numbers change. Then point out that this isn't a big deal... because we could just be using a counter.

* So instead, do the following. Close your browser and re-open it. Point out that the number remained. That is a much bigger deal since we did not use localStorage.

* Next, open multiple tabs all pointing to the same file. Show them side by side. Then start clicking the button. Point out that the number is changing on both screens.

* Finally, open up [10-clickbutton-complete/Solved/instructor-do-clickbutton-fullcomments.html](../../../../01-Class-Content/07-firebase/01-Activities/09-clickbutton/instructor-do-clickbutton-fireconsole.html) in your web browser and demonstrate it for the class. 

* Then have the class open up the same file and have them click the button as well. Point out how the numbers change in every student's browser INSTANTLY &mdash; no refresh required! Let them simmer in amazement for a moment. This is a big deal since, even if we were to use localStorage, it would not be possible for the same click data to be altered and shared across multiple browsers, or multiple computers if we were to deploy this.

* Then walk them through the code. Point out the key aspects of this file, namely:
  * `database = firebase.database()` which references the database
  * `.set({})` which saves the data
  * `.ref()` which specifies where the data will be saved
  * `.on("value", function(){})` which effectively creates an "on-change" event so that the moment the page first loads or the moment the database changes, the impact is reflected immediately.

![3-OnClickOnValue](Images/8-Click-Button_1.png)
![3-OnClickOnValue](Images/8-Click-Button_2.png)

### 29. Everyone Do: Why is this so cool? (1 min)

* Briefly ask students to offer a few situations where instant transmission of data like this might be useful. Good answers include:

  * Chat services

  * Streaming content

  * Stock Market Tracking

### 30. Students Do: Re-comment Click Button Code (6 min)

* Slack out the file [instructor-do-clickbutton-nocomments.html](../../../../01-Class-Content/07-firebase/01-Activities/10-clickbutton-complete/Unsolved/instructor-do-clickbutton-nocomments.html) in `10-clickbutton-complete` (be sure to send the one WITHOUT comments). Then ask students to comment each of the lines of the code with what they think is happening on that line.

* Tell students that, if they finish this task early, they should visit [Realtime Database Getting Started Guide](https://firebase.google.com/docs/database/web/start).

### 31. Everyone Do: Discussion / Questions (5 min)

* Discuss the key comments of the previous assignment and open the floor to questions.

* Once the activity is complete, slack out the file `instructor-do-clickbutton-fullcomments.html` in `10-clickbutton-complete`. Tell them to look over this throughout class and when they get home.

### 32. Students Do: ClickDown Counter (15 min)

* Open the solved file [student-do-downbutton.html](../../../../01-Class-Content/07-firebase/01-Activities/11-countdownbutton/Solved/student-do-downbutton.html) in `11-countdownbutton/SOLVED` in your browser. Show how the final application should work (click down to 0).

* Let students know that for this activity they will be building this application and that they have two choices in difficulty. They can either use `logic.js` (easier) or `logicOption2.js` (harder) in the `Unsolved` folder to start with. The difference between the two is the amount of starting code.

* Then slack out the following files and instructions.

* **Files**:

  * `student-do-downbutton.html` (unsolved)
  * `logic.js` (unsolved)
  * `logicOption2.js` (unsolved).

* **Instructions**:

  * Using either `logic.js` (unsolved) (easier) or `logicOption2.js` (harder), create the click down activity using a Firebase database to store the click data on the backend.

  * Your application should be able to run on multiple browser windows simultaneously and register click events on each screen correctly.

### 33. Instructor Do: Review Click-Down Activity (5 min)

* Spend a few moments reviewing the activity, walking through the high points and any issues people faced. Again emphasize that there are effectively 2 pieces in play when transmitting and receiving data from a Firebase server: `on.("value")` for retrieval and `.set` for setting data.

* Let students know that this activity is extremely important for the homework as it serves as the basis that the homework builds on.

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=0PHeP5bLqYE) for the activity.

### 34. Instructor Do: Multiple Properties (5 min)

* Create a new Firebase app and then open [instructor-do-more-properties.html](../../../../01-Class-Content/07-firebase/01-Activities/12-moreproperties/instructor-do-more-properties.html) in `12-moreproperties`. Switch the link in the code included to the url for the firebase database you just created.

* Walk students through the code, making certain to point out that in this example we use `.set({})` to change multiple properties all associated with the same database.

* Show them how the changes are reflected in both the Firebase website and in the HTML of this working application.

![4-MultipleProperties](Images/9-Multiple-Properties.png)

* Slack out this code when finished.

### 35. Student Do: Most Recent User Firebase Example (15 min)

* Demonstrate [recentuser-solved.html](../../../../01-Class-Content/07-firebase/01-Activities/13-mostrecentuser/Solved/recentuser-solved.html) in `13-mostrecentuser` file in the browser. Show students that the most recent user is changing in real-time to replace the old content when new data is submitted.

* Then slack out the unsolved `recentuser.html` in `13-mostrecentuser` to students to attempt to create a webpage that does the same. The finished product should save the newest user to a Firebase database and change the HTML.

### 36. Instructor Do: Discuss / Explain Most Recent User (5 min)

* Review [recentuser-solved.html](../../../../01-Class-Content/07-firebase/01-Activities/13-mostrecentuser/Solved/recentuser-solved.html) in `13-mostrecentuser`. Again focus on the key aspects: the `on.("value")` to track changes, the `.set({})` to add data, etc...

* Slack out the solution and [video review](https://www.youtube.com/watch?v=ZWH19t4ujRA) for this activity.

### REMINDER: FIREBASE MANAGER: DO NOT SLACK TO STUDENTS. INSTRUCTOR USE ONLY

 [Firebase Manager](https://firebase-manager-fsf.netlify.com/)

* **Important**: We have created a "firebase manager". This will allow you to clear all the data stored within our deployed firebase applications in case anyone has added anything malicious and/or unwanted. Only use when NECESSARY.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=04.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=04.01)
