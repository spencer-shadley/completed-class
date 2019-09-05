# 3.3 Lesson Plan - Intro to APIs and AJAX (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

## Instructor Notes

* Before this class starts, tell your students to bring a pen and a notebook--they'll need it to pseudocode their work. Sure, they can do so on their computers, but having a separate medium to record their thought process will amplify the importance of high-level thinking.

* **Absolutely** go over the interview questions listed in this lesson plan. You need to be an expert on these exercises since they're going to stump a lot of your class. Make sure they don’t stump you, too!

* Expect that students will not be able to solve every problem. This is fine: it’s much more important that they at least attempt to solve it with visualization and pseudocode: how they would program a solution to the exercise if they had the time and know-how.

* Students will begin using AJAX to pull data from popular data sources. However, expect students to still only have a weak handle on JavaScript objects. Use the beginning of class to fill in any conceptual holes they may have. Spend the time necessary to get them feeling more confident breaking into a JavaScript object and retrieving specific fields.

* Before class, create an account at [RapidAPI](https://rapidapi.com/).

* This week's Giphy activities will require students to use an API key from [Giphy API](https://developers.giphy.com/). Please have them create an account and apply for a key before class starts in order to have it approved and activated in time for the activity.

* **Extra Resources:** Send out the following link during class and encourage students to practice with the [Whiteboarding Overview and Questions](https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/). This was given with the course pre-work but now is the time where a lot of it will start clicking for students since learning JavaScript.

* Have your TAs reference [03-Day-TimeTracker](https://drive.google.com/a/trilogyed.com/file/d/192W9stZpLCBdZQARTa5jizw3cyRqMhc0/view?usp=sharing) to help keep track of time during class.

### Class Objectives

* By the end of class students will be able to...

    * Answer conceptual problems with visualization.

    * Visualize and pseudocode problems and solutions

    * Introduce the concept and utility of APIs and JSON in web applications

    * Use a variety of APIs and the process for building endpoint URLs to utilize them

## Slides

## Time Tracker

- - -

### Class Objectives

* To introduce the concept and utility of APIs and JSON in web applications
* To be exposed to a variety of APIs and the process for building endpoint URLs to utilize them
* To work with the OMDb to build data-rich applications.
* To complete the More JavaScript and jQuery Checkpoint

- - -

### 1. Instructor Do: Welcome Students (10 mins)

* Welcome your students back to class. Ask them how they feel the activities have gone so far. Remind your class that this particular class is meant to be challenging and that you don't expect everyone to finish them--most students probably won’t.

  * The point is to emphasize the idea of thinking about each problem at a high level -- to visualize the solution. Even if a student lacks the know how to code out an interview question, they should at least know how their program would work at a conceptual level.

* You might have one or two students who feel distressed regardless of what you just said. You should tell your class that they can speak 1:1 with either you or a TA if they want to talk about any issues they've encountered today or over the length of the course.
* You might even want to have a one-to-one with students during the time allotted for the next activity.

### 2. Instructor Do: Very Brief Introduction to Algorithms (20 mins)

* Introduce the final activity to the class: Bubble Sort. Explain that this is an algorithm commonly taught in Computer Science courses.

* "But first, we need to briefly go over Computer Algorithms." Slack out [this link](https://www.quora.com/What-is-the-difference-between-algorithm-and-programming) and ask the class to find the answers to the following questions.

  * What is a computer algorithm?
    * Answer: A set of steps that a computer can take to solve a particular problem.
  * How does an algorithm differ from a program?
    * Answer: While some programs comprise a series of steps, a developer must code them out in a particular language. Algorithms are more high level--developers can apply the steps of an algorithm to different programs in order to solve various problems, like sorting and searching through data.

* Tell the class that Computer Scientists consider the Bubble Sort an inefficient, slow algorithm for sorting data. That description is especially true for programs that sort through hundreds of thousands of data entries.
  * Regardless, it's still important to know how this sorting algorithm works -- otherwise, how would you avoid it? "That's why you'll be making a program that uses this algorithm in your last interview activity."

### 3. Students Do: Bubble Sort (60 mins)

* Slack out the Bubble Sort activity to your students: `13-bubble_sort`.

* Make sure students spend at least ten minutes visualizing their solution before they code anything. An algorithm is intrinsically high level; if they don't know how it works, they will not be able to solve the problem.

  * Tell your class that they should not look at any coded-out solution online--they're only cheating themselves if they do.

* The instructions are provided in the `app.js` file. They're copied here for your convenience:

**Bubble Sort**

* Write a function that sorts an array of numbers in order. You can do this with the Bubble Sort algorithm. If you are unfamiliar with Bubble Sort, use Google to read up on the concept. Spend about 10 minutes pseudocoding your solution before writing any JavaScript.

* Use the array provided below. Display the unsorted array in the `#start` div of `index.html`.

* When the user clicks the `button` in `index.html`, the sorted result should be displayed in the `#result` div.

* DO NOT USE JQUERY TO SELECT ELEMENTS. ONLY USE VANILLA JS.

**End Instructions**

* Note: Ten minutes into the activity, ask a student to explain to their classmates how the Bubble Sort algorithm works. This will ensure that everyone has a clear idea of the concept.

### 4. Instructor Do: Go Over Bubble Sort (30 mins) 

* Tell students that time is up, and remind them that this exercise was meant to be a challenge--they shouldn't doubt their place as budding web developers if they couldn't solve it.

  * "Remember the key to showing your thought process to the interviewer--visualizing and the problem and pseudocoding the solution."

* Ask a student in the class to explain their pseudocoded sort function.

* Also ask if any students were able to solve the activity. Have them tell you their code line by line--make sure they say what each line does as well. Finally, run the function and test if it works.

  * If no students could answer the question, reassure them that this activity was meant to be a challenge for them. Regardless, type out the solution provided `13-bubble_sort` so that they know what a working Bubble Sort looks like.

* Ask the class if they have any questions about today's lectures and the concepts you went over this week.

* Slack out the solution and [video review](https://www.youtube.com/watch?v=t-qAWbYMiUs) for the activity.

- - -

### 5. BREAK (30 mins)

- - -

### 6. Students Do: CustomerObject Parsing (5 mins)

* Welcome Students to class and let students know that we will begin with a warm-up activity.

* Slack out the following files and instructions.

* **Folder**

  * [01-CustomerObject/Unsolved](../../../../01-Class-Content/06-ajax/01-Activities/01-CustomerObject/Unsolved)

* **Instructions**

  * Using the instructions shown in the comments, create `console.log` statements that parse out the requested information.

  * Help those around you if you finish early.

### 7. Instructor Do: Review CustomerObject Parsing (5 mins)

* Either live-code the solution yourself or open and demonstrate[01-CustomerObject/Solved](../../../../01-Class-Content/06-ajax/01-Activities/01-CustomerObject/Solved/customer-object-solution.html).

* While going over the solution, ask students why phoneNumber required an index parameter but first and last name did not.

![1-CustomerObject](Images/1-CustomerObject.png)

* Continue to ask questions to students to confirm their comfort with the material.

* Then let students know that working with JavaScript Objects like this is incredibly important in web development as we will use them to transmit data repeatedly.

### 8. Students Do: Install JSON Formatter (5 mins)

* Next point students to the following link: [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related?hl=en) and have them install the Chrome extension.

* Let them know that this will format JSON in the browser.

![2-JSONFormatter](Images/2-JSONFormatter.png)

### 9. Instructor Do: New York Times Scraper Demo (10 mins)

* Next, go to the following link: [NYT Scraper](http://nyt-mongo-scraper.herokuapp.com/).

* Briefly explain that the application's `Scrape New Articles!` button retrieves new articles from the New York Times and loads them onto the page. Every article loaded onto the page has a "Save" button. 

![3-NYTScraper](Images/3-NYTScraper.png)

* Next, visit the following link: [NYT Scraper API](http://nyt-mongo-scraper.herokuapp.com/api/headlines) to show students that "beneath the hood" the application is storing each headline as an entry in a JavaScript Object. Just like with the CustomerObject example, this JavaScript is holding a mix of various data types to store information such as the article's id, headline, summary, date, and whether it is saved or not.

![4-NYTScraperHeadlines](Images/4-NYTScraperHeadlines.png)

* Let them know that this approach of using JavaScript Objects as a data transmission method is a very common one.

* Then share both links to students.

### 10. Everyone Do: NYT Scraper Review (5 mins)

* Give students a few moments to look at the NYT Scraper Application and the headlines API endpoint.

* Encourage them to ask questions about this. If none are offered, have one or two students explain conceptually how the application works.

### 11. Students Do: API Research Questions (10 mins)

* Next slack out the following instructions to students:

* **Instructions:**

  * For the next few moments, research amongst yourselves the answers to the following questions:

    1. What is an API?
    2. What does API stand for?
    3. What are some examples of APIs? (Find links to specific APIs)
    4. What do these specific APIs allow you as a developer to do?

### 12. Everyone Do: Review API Research Questions (5 mins)

* Have students share their answers to these questions.

### 13. Instructor Do: API Definitions (5 mins)

* Then offer your definition of an API. You can use the following if you like:

  > APIs stand for Application Programming Interfaces. They provide a way for creating user code that utilizes other pre-built code to do various tasks. It can be used to quickly retrieve data from another person's database, to utilize someone elses more complex functionality (like maps), or to control other hardware and software.

* Briefly talk about why APIs are created. Talk about how you save time not having to create your code. Give a few examples of websites that use other companies' APIs.

  * AirBNB uses Google's API for maps [AirBNB](https://www.airbnb.com/s?s_tag=_s84SXqA)
  * Google Searches for Weather uses the Weather API [Weather Search](https://www.google.com/?gws_rd=ssl#q=weather+new+brunswick)
  * Even jQuery is an API [jQuery](https://jquery.com/)

* Point out that there are millions of APIs in existence.

* Point out that JSON (JavaScript Object Notation) is a common format for sending data between APIs. Use the word JSON, so students hear/understand it.

* Encourage questions at this point!

* Don't worry if your explanations are pretty high-level at this point, in the next class you will re-explain the concepts in more detail.

### 14. Instructor Do: API Experimenting (10 mins)

* Navigate to this URL: [Numbers](https://rapidapi.com/divad12/api/numbers-1). Explain to students that the Numbers API will take a string of numbers in various formats and return a fact regarding the input.

* Then navigate to this URL: [Face++](https://www.faceplusplus.com/face-detection/). Grab a photo of a student in your class who wears glasses via LinkedIn or something and paste the image URL into the application. Explain that the response JSON is intended to analyze "sentiment" based on the image. Values closer to 100 indicate greater likelihood. Have fun with this!

![5-FaceFace](Images/5-Face.png)

* If you'd like, you can also show off [PokeAPI](https://pokeapi.co/). This API takes parameters and can return almost any data you would want about Pokemon. Explain this is just a fun and
 quick showing of API consumption, and there are far more practical APIs out there for what they may want to create.

### 15. Students Do: API Experimenting (10 mins)

* Next, have students experiment on their own with new APIs. Slack out the following instructions:

* **Instructions:**

  * Using the [RapidAPI library](https://rapidapi.com/) as a starting point experiment with a few APIs of your own.

  * Note: You will need to create an account on RapidAPI first.

  * Note: Use the "free" filter, as some APIs require an subscription.

  * Note: Not all of the APIs are easy to use, just keep experimenting!  

### 16. Instructor Do: OMDb API Demo (10 mins)

* Present the following question. So if all this data exists in the world and we have JSON being created, how do we access the data?

* Navigate to the [OMDb API](http://www.omdbapi.com/) and explain that this API provides a database of information on nearly every movie in existence.

* Scroll through the basic documentation and point out that in this API, we "build" URLs that point to JSONs associated with various movies. Point out that the parameters allow us to filter results. Inform students that the OMDb API is no longer a free API and requires an API key which we will provide for them to use.

![6-OMDbAPI](Images/6-OMDbAPI.png)

* Then use Example GUI to generate a URL for a movie of your choice.

![7-OMDbAPIResopnse](Images/7-OMDbAPIResopnse.png)

* Then visit the link that gets generated, and show students the JSON that was generated. Be sure to add the following `apikey` parameter to the generated URL: `trilogy`. Example: <http://www.omdbapi.com/?t=Space+Jam&apikey=trilogy>

![8-OMDbJSON](Images/8-OMDbJSON.png)

* Ask students if they have any questions.

### 17. Partners Do: OMDb API Exploration (10 mins)

* Have students explore the OMDb API themselves.

* Slack out the following instructions to students:

* **Instructions:**

  * Go to the [OMDb API](http://www.omdbapi.com/) then use the documentation to try to answer the following:

    * Without using the user interface, how would I query the OMDB API to get all of the information related to the movie: Frozen?

    * Hint: you will have to build a URL of your own with the search parameters listed.

    * Note: The OMDb API now requires an API key. Here is your key: `trilogy`

### 18. Everyone Do: OMDb API URLs (10 mins)

* Using this <http://www.omdbapi.com/?t=Forrest+Gump&y=&plot=short&apikey=trilogy> as an example, have students break down the URL.

* Be sure to have them explain each parameter listed (i.e. the `?t`, the `+`, the `&`, `apikey=`, etc).

* Then ask students how they would show multiple movies that meet a condition? (i.e. how would you get all movies with the word `Matrix` in it). SOLUTION: Use the `/s` format: <http://www.omdbapi.com/?s=Matrix&y=&plot=short&apikey=trilogy>

### 19. Instructor Do: AJAX Query Demo (10 mins)

* Now open up your editor and create an AJAX call to OMDb using the below code as an example. (Alternatively, you can use [02-Ajax_OMDB/single-ajax.html](../../../../01-Class-Content/06-ajax/01-Activities/02-Ajax_OMDB/single-ajax.html). If making your own AJAX call, however, be sure to include a few console logs after the AJAX call to demonstrate asynchronicity. See `single-ajax.html` for details.

![9-AJAX](Images/9-AJAX.png)

* Be sure to point out the various parts of the AJAX call:
  * The `queryURL` which points to the JSON
  * The `GET` method which tells JavaScript to download the JSON
  * The `then` function which tells JavaScript to run the code inside ONLY when done with the download
  * Most importantly that all of the data is being stored in the `response` object-2.9
  * Lastly, in your Chrome inspector, point out how all the code past line 26 happens before the results of our API call are logged. Even though that happens first lexically.

* Ask students why they think the `.then` function is necessary? Why does the code after the AJAX request happen before the API results are logged?

* After a minute or two of discussion, explain to students that JavaScript is synchronous in nature. The code is executed one line at a time.
  * This makes the language easier to pick up initially, as code executes in the order one might expect.

  * But what if our API call takes a few seconds to come back? What if it takes a minute? Ten minutes? An hour?
    * While we won't be waiting on a request for TOO long, it does pose a problem when we have other code that needs to run no matter what the API response is. Just waiting for the API call to complete to execute other unrelated code isn't very efficient and doesn't provide a good user experience. So JavaScript can BEHAVE asynchronously through the use of callback functions and promises.

  * We have already seen asynchronous behavior through callbacks with setTimeout and setInterval. We pass setTimeout and setInterval callback functions to execute whenever they're ready, WHENEVER that may be.

  * Promises are similar. The .then function is an example of a promise. This is essentially a function that "promises" to be executed at some point. In this case, whenever our data comes back from the API. We describe what we want to happen by passing a callback function as a parameter into our promise.

  * In short, because the AJAX request takes a certain amount of time, our code after AJAX call executes in the meantime. Remember, AJAX stands for ASYNCHRONOUS JavaScript and XML.

* Run the code and show the results in the console.

![10-SpaceJamJson](Images/10-SpaceJamJson.png)

* Add a second AJAX call to another movie. (Alternatively you can use [02-Ajax_OMDB/multiple-ajax.html](../../../../01-Class-Content/06-ajax/01-Activities/02-Ajax_OMDB/multiple-ajax.html).

* Open the floor to questions.

* Slack out the code you just created.

### 20. Everyone Do: Logging JSON (10 mins)

* Ask students how they might parse out and retrieve the movie's runtime or actors list in response? (Show the JSON on the side).

![11-SpaceJamRuntime](Images/11-SpaceJamRuntime.png)

* After you complete this, end class for the day.

### 21. END (0 mins)

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=03.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=03.03)
