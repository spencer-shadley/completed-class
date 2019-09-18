# 03.3 Lesson Plan - Intro to APIs and AJAX (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

## Instructor Notes

* Before this class starts, tell your students to bring a pen and a notebook--they'll need it to pseudocode their work. Sure, they can do so on their computers, but having a separate medium to record their thought process will amplify the importance of high-level thinking.

* **Absolutely** go over the interview questions listed in this lesson plan. You need to be an expert on these exercises since they're going to stump a lot of your class. Make sure they don’t stump you, too!

* Expect that students will not be able to solve every problem. This is fine: it’s much more important that they at least attempt to solve it with visualization and pseudocode: how they would program a solution to the exercise if they had the time and know-how.

* Students will begin using AJAX to pull data from popular data sources. However, expect students to still only have a weak handle on JavaScript objects. Use the beginning of class to fill in any conceptual holes they may have. Spend the time necessary to get them feeling more confident breaking into a JavaScript object and retrieving specific fields.

* Before class, create an account at [RapidAPI](https://rapidapi.com/).

* This week's Giphy activities will require students to use an API key from [Giphy API](https://developers.giphy.com/). Please have them create an account and apply for a key before class starts in order to have it approved and activated in time for the activity.

* **Extra Resources:** Send out the following link during class and encourage students to practice with the [Whiteboarding Overview and Questions](https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/). This was given with the course pre-work but now is the time where a lot of it will start clicking for students since learning JavaScript.

### Class Objectives

  * Answer conceptual problems with visualization.

  * Visualize and pseudocode problems and solutions

  * Introduce the concept and utility of APIs and JSON in web applications

  * Use a variety of APIs and the process for building endpoint URLs to utilize them

## Slides

N/A

## Time Tracker

[3.3 Time Tracker](https://drive.google.com/open?id=1OlaJokSTSUfgy84NSb6JW2rGCvZT9Lyj)

- - -

### Class Objectives

* To introduce the concept and utility of APIs and JSON in web applications
* To be exposed to a variety of APIs and the process for building endpoint URLs to utilize them
* To work with the OMDb to build data-rich applications.
* To complete the More JavaScript and jQuery Checkpoint

- - -


### 12. Everyone Do: Continue Logic Building (45 mins)

* Slack out the below objectives:

* **Phase III Objectives**

  * For the next 40 minutes, your goals should be to:

    * Complete the functionality you are missing in your code.

    * Spend a few moments really assessing what you still have to do.

    * Get a TA/Instructor to help you set priorities if you are unsure as to how to proceed.

### 13. Everyone Do: Refinement (25 mins)

* Slack out the below objectives:

* **Phase IV Objectives**

  * For the last 25 minutes, your goals should be to:

    * Complete any remaining functionality in your calculator

    * Handle bugs and edge cases (Example: What if a user tries to type in more numbers after getting the result? Will that mess up the screen?)

    * Create code to "restart" the calculator after a user clicks "clear".

### 14. Instructor Do: Review Calculator (10 mins)

* Because this application is pretty massive, the main focus during review is to help students understand **how** they should be re-examining the code on their own. Starting with the code blocks collapsed may help with clarity (as in the below image with the `.on` methods).

* Give students the high points. Emphasize the following:

  * We set a number of variables in the `initializeCalculator` function.

  * We used JQuery to create separate on click listeners for numbers, operators, and equals.

  * We used `this.value` in the callback function to determine what the value was for a given number or operator.

  * We created code that would change the HTML content using `.html`

  * We took numeric inputs for `firstNumber` **until** a user clicks an operator. Once a user clicks an operator, we changed the value of a boolean, called `isOperatorChosen`, and immediately began recording the `secondNumber`.

  * Once a user clicks the "equal" button, we used conditionals to check which operation they had clicked, then ran that operation on the two numbers.

* Encourage students to spend some time re-examining this code. Even if they don't yet feel comfortable creating it from scratch, let them know that it has a number of key code snippets that they may find useful at various points in the class.

### Review Unit 05 (40 mins)

* Take a moment to answer lingering questions about the mini project. Once you have answered all questions, proceed to do a review on jQuery.

* If there are any activities that you needed to cut short due to time constraints, this is a perfect time to review them. 

* Ask the class the following question(s) and use their answers to drive the review:

  * ☝️ Are there any activities you thought were challenging and would like to spend more time going over?

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
