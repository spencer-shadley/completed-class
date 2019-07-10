## 3.4 Lesson Plan - APIs and Advanced AJAX (10:00 AM) <!--links--> &nbsp; [⬅️](../03-Day/03-Day-LessonPlan.md) &nbsp; [➡️](../05-Day/05-Day-LessonPlan.md)

### Slideshow

* This lesson's slides are available on Google Drive here: [03-4 Advanced AJAX](https://docs.google.com/presentation/d/1ykYBmbiVZF2QTsNI_ujE_zSHUELYj9Fm71qwzBaTdkE/edit?usp=sharing)

* To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Add the slide PDF file to your class repository along with other necessary files.

* **Note:** Editing access is not available for this document. If you wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

- - -

### Pre-Class Office Hours

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in an array of numbers and outputs the average of all the numbers.
Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
```

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

  * Ask students if they found a solution and go over their solution (or the one below if no student-solution is provided).

```js
var average = function (numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++){
    sum += numArr[i];
  }
  return sum / numArr.length;
}
```

### Overview

In this class, students will be building upon their knowledge of AJAX to retrieve data via Giphy & other APIs and display data onto an HTML page.

`Summary: Complete activities 4-11 in Unit 6`

##### Instructor Priorities

* Instructor should walk through the Giphy API example
* Students should complete the Weather in Bujumbura Activity
* Students should complete the Working Movie App Activity

##### Instructor Notes

* Use the slideshow as an initial starting point for your conversation on APIs. Make sure that students see the power of APIs and understand how APIs provide a link between front-end (what they've learned so far) and backend (what they will soon be learning). Be sure to replace the data and use the correct slide deck for your campus.

* Today's activities will feel pretty challenging and confusing to the majority of your students. Use your best judgement and adjust as necessary.If you need to cut the Bands In Town exercise by all means do so. Offer ample support and let students know that things will "click" eventually -- even if it doesn't quite click just yet.

* This week's Giphy and Bujumbura activities will require students to use API keys from [Giphy API](https://developers.giphy.com/) and [OpenWeatherMap API](http://openweathermap.org/api). Please have them create accounts and apply for keys before class starts in order to have them approved and activated in time for the activities.

* Today's Weather in Bujumbura Activity will require students to use an API key from [OpenWeatherMap API](http://openweathermap.org/api). Please have them apply for one before class starts in order to have it approved and activated in time for the activity.

* TAs should reference [04-Day-TimeTracker](04-Day-TimeTracker.xlsx) to help keep track of time during class.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f13914af-3613-4d2d-b87d-8817afeb5d77)

- - -

### Class Objectives

* To work with the Giphy APIs to build data-rich applications.
* To solidify understanding of APIs, JSONs, and their roles in full-stack web development
* To increase comfort working with APIs and AJAX calls in data-rich applications

- - -

### 1. Instructor Do: API and AJAX Slide Show (12 mins)

* Begin class by welcoming students and inform them that we'll be continuing to work with APIs and AJAX in this class.

* Take a moment to briefly quiz students on concepts covered last class:

  * What kind of data do we expect to get back from APIs? What format?

    * JSON (JavaScript Object Notation)

  * What jQuery method do we use to retrieve data from APIs?

    * `$.ajax`

  * What does AJAX stand for?

    * Asynchronous JavaScript and XML

* Then open up the [03-4 Advanced AJAX](https://docs.google.com/presentation/d/1ykYBmbiVZF2QTsNI_ujE_zSHUELYj9Fm71qwzBaTdkE/edit?usp=sharing) slideshow and begin presenting the slides. Encourage students to answer questions and ask questions. Draw upon your own insight regarding APIs to try and further solidify their understanding of the role APIs play in web development. Show the videos included in the slide deck when appropriate.

* Just be sure to keep focused and stay on track of time!

### 2. Partners Do: Giphy Documentation (10 mins)

* Next point students to the [Giphy API Documentation](https://developers.giphy.com/docs/).

* Then slack out the following instructions:

* **Instructions:**

  * As partners, using the [Giphy API Documentation](https://developers.giphy.com/docs/), try to research answers to the following questions:
    * How would you return back a single gif tied to a search term?

    * How would you return five gifs tied to a search term?

    * How would you return the trending gifs back from this API?

* Let students know that their homework will use the Giphy API Documentation

### 3. Instructor Do: Giphy API Demo (10 mins)

* Finally, go over [04-Giphy_API/giphy-api.html](../../../../01-Class-Content/06-ajax/01-Activities/04-Giphy_API/giphy-api.html). Point out the API key that needed to be appended to the end of your query URL.

* Slack out the [video review](https://www.youtube.com/watch?v=Kp7Xy2LScLM) for this activity.

### 4. Students Do: The Weather in Bujumbura (15 min)

* Then open the file [05-Bujumbura/Solved/bujumbura-solved.html](../../../../01-Class-Content/06-ajax/01-Activities/05-Bujumbura/Solved/bujumbura-solved.html) in your Browser. Explain to them them that this application uses the [OpenWeatherMap API](http://openweathermap.org/api) to retrieve live snippets of weather information about Bujumbura (the capital of Burundi (which is a city in Africa)).

![1-Bujumbura_1](Images/1-Bujumbura_1.png)

* Then slack out the following folder and instructions to students.

* **Folder:**

  * [05-Bujumbura/Unsolved](../../../../01-Class-Content/06-ajax/01-Activities/05-Bujumbura/Unsolved)

* **Instructions:**

  * Using either `bujumbura-easier.html` or `bujumbura-harder.html` as a starting point, add in the missing code necessary to accomplish the following:

    * Query the [OpenWeatherMap API](http://openweathermap.org/api) for the current weather data on Bujumbura, Burundi.

    * Log the retrieved data from this query to console.

    * Parse the retrieved data to display wind speed, humidity, and temperature information into the HTML.

    * HINT: You will need to request an API key from the website.

    * BONUS: Figure out how to convert the Kelvin temperature provided into Fahrenheit.

    * NOTE: Don't worry if this feels hard. Push yourself!

* **Instructor / TAs:**

  * Walk around and help students accomplish this task as necessary.

### 5. Instructor Do: Review Activity (5 min)

* Open the file [01-Activities/05-Bujumbura/Solved](../../../../01-Class-Content/06-ajax/01-Activities/05-Bujumbura/Solved) in your editor and walk students through the code.

* During your explanation, be sure to point out each of the following:

  * That we retrieved an API key from the [OpenWeatherMap API](http://openweathermap.org/api) site.

  * That we then used this APIKey as part of our `queryURL` along with the city parameter (in this case Bujumbura)

    ![2-Bujumbura_2](Images/1-Bujumbura_2.png)

  * That we then passed this `queryURL` into our AJAX call.

  * Then inside the `.then` method of the AJAX call, we are capturing data inside of a variable called `response`.

  * And that we parse this `response` JSON to retrieve individual properties like `wind.speed`, `main.humidity`, and `main.temp`. This was then dumped using jQuery into the HTML.

  * Finally, point out that when it came to the bonus we converted the temperature value by incorporating the Kelvin data into a formulaic conversion.

    ![3-Bujumbura_3](Images/1-Bujumbura_3.png)


* Ask students how you would recycle the code shown to instead find the weather in `London`. (Answer: Just change the `queryURL`)

* Ask students why all of the code needed be inside the `.then` function. (Answer: Otherwise, we might not have data yet.)

* Check if there are any other questions about this application before moving on.

### 6. Instructor Do: Working Movie App Demo (3 min)

* Next open the file [10-WorkingMovieApp/Solved/working-movie-app-solved.html](../../../../01-Class-Content/06-ajax/01-Activities/10-WorkingMovieApp/Solved/working-movie-app-solved.html) in your browser. Let students know that in today's class we will be working towards building this.

* In demonstrating this application:

  * Click on the existing buttons to show that movies are displayed.

  * Create a new movie to the listing, point out that a button was generated dynamically, and that this button becomes a clickable AJAX caller of its own.

### 7. Students Do: Movie App JSON Dump (10 min)

* Then open the file [06-MovieJSONDump/Solved/movie-json-dump-solution.html](../../../../01-Class-Content/06-ajax/01-Activities/06-MovieJSONDump/Solved/movie-json-dump-solution.html) in your browser. Demonstrate that this application takes in a user input then uses the [OMDb API](http://www.omdbapi.com/) to retrieve movie in the form of a JSON. This movie is then appended directly into the HTML as is.

![2-JSONDump_2](Images/2-JSONDump_2.png)

* Then slack out the following folder and instructions.

* **Folder:**

  * [06-MovieJSONDump/Solved](../../../../01-Class-Content/06-ajax/01-Activities/06-MovieJSONDump/Solved)

* **Instructions:**

  * Using `2-movie-json-dump.html` in `06-MovieJSONDump` as starter code, add functionality such that clicking `Movie Search` triggers an AJAX call to the OMDb database and the JSON response to be appended onto the page.

  * If you finish early, begin reading about the [Bands In Town API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0). Try to understand how to search for a specific artist.

### 8. Instructor Do: Review Activity (5 min)

* Review the JSON Dump activity. In your discussion be sure to point out:

  * The standard `AJAX` syntax of capturing both `queryURL` and `GET` method.

  * Point out the use of `JSON.stringify(response)` for converting the retrieved JSON into a string that can be put placed into text.

    ![2-JSONDump_1](Images/2-JSONDump_1.png)

### 9. Students Do: Dynamic Movie Button Layout (25 min)

* Next demonstrate the file [07-MovieButtonLayout/Solved/movie-button-layout-solved.html](../../../../01-Class-Content/06-ajax/01-Activities/07-MovieButtonLayout/Solved/movie-button-layout-solved.html) in your browser. Point out that this application allows users to create new buttons dynamically when a user clicks `Add a Movie Yo`.

* Then slack out the following folder and instructions.

* **Folder:**

  * [07-MovieButtonLayout/Unsolved](../../../../01-Class-Content/06-ajax/01-Activities/07-MovieButtonLayout/Unsolved)

* **Instructions:**

  * Using either `movie-button-layout-easier.html` or `movie-button-layout-harder.html` as a starting-point, replicate the functionality of the application just demonstrated to you.

  * Your final code should:

    * Dynamically generate the initial buttons using jQuery

    * Allow users to create new buttons upon entering text in the textbox and clicking `Add a Movie Yo`.

    * If you finish early, begin reading about the [Bands In Town API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0). Try to understand how to search for a specific artist.

### 10. Instructor Do: Review Activity (10 min)

* Next, review the solution provided in [07-MovieButtonLayout/Solved/movie-button-layout-solved.html](../../../../01-Class-Content/06-ajax/01-Activities/07-MovieButtonLayout/Solved/movie-button-layout-solved.html). In discussing the solution be sure to point out:

  * That the `renderButtons` function is looping through the `movies` array and creating a jQuery element for each.

  * Pay special attention to the syntax for jQuery's creation of dynamic elements.

  * Point out that the `.on("click")` event tied to the button is what triggers re-rendering of the movies array

  * Ask students why the `#buttons-view` needed to be emptied in the `renderButtons` function(Answer: otherwise content will get replicated each time you click a button).

### 11. Students Do: Log Movie JSON & Click JSON Data Attribute  (20 min)

* Demonstrate [08-LogMovieName/Solved/log-movie-name-solved.html](../../../../01-Class-Content/06-ajax/01-Activities/08-LogMovieName/Solved/log-movie-name-solved.html) in the browser.

  * Point out that, with this app, clicking any of the buttons—either new or old—will trigger an alert message listing out the movie name.

* Demonstrate [09-ClickJSON/Solved/click-json-solved.html](../../../../01-Class-Content/06-ajax/01-Activities/09-ClickJSON/Solved/click-json-solved.html) in the browser.

  * Point out that, with this app, clicking any of the buttons—either new or old—will cause a JSON dump of the movie to appear. Be sure to point out that the code works for both the original buttons _and_ the newly created buttons.

* Slack out the following files and instructions.

* **File:**

  * [08-LogMovieName/Unsolved/log-movie-name.html](../../../../01-Class-Content/06-ajax/01-Activities/08-LogMovieName/Unsolved/log-movie-name.html)

  * [09-ClickJSON/Unsolved/click-json.html](../../../../01-Class-Content/06-ajax/01-Activities/09-ClickJSON/Unsolved/click-json.html)

* **Instructions:**

  * Using the starter code provided, create the missing code snippets inside the `alertMovieName` function necessary to capture the movie name for both the original and new buttons.

  * Using the Starter code provided, create the missing code snippets inside the `displayMovieInfo()` function necessary to display JSON data about each movie.

  * HINT: You should use HTML `data-` attributes.

### 12. Instructor Do: Review Activity (10 min)

* Review the solution provided in [08-LogMovieName/Solved](../../../../01-Class-Content/06-ajax/01-Activities/08-LogMovieName/Solved/log-movie-name-solved.html).

* Review the solution to the last activity provided in [09-ClickJSON/Solved/click-json-solved.html](../../../../01-Class-Content/06-ajax/01-Activities/09-ClickJSON/Solved/click-json-solved.html).

  * Be sure to emphasize how we used the same `stringify` method in both solutions.

* In your discussion, be sure to point out

  * How we used data attributes to retrieve the "name" of each movie;

    ![4-ConsoleLog_1](Images/4-ConsoleLog_1.png)

* Also point out how we used an alternative `.on("click")` event. Instead of using an `.on("click")` event associated with our buttons, we created one that was associated with the `document`. This was necessary to ensure that the dynamically created elements were bound to jQuery.

  * Demonstrate how the app would function with both sets of event syntax.

    ![4-ConsoleLog_2](Images/4-ConsoleLog_2.png)

- - -

### 13. LUNCH BREAK (30 min)

- - -

### 14. Students Do: Complete Working Movie App (25 min)

* Finally, open the working file: [10-WorkingMovieApp/Solved/working-movie-app-solved.html](../../../../01-Class-Content/06-ajax/01-Activities/10-WorkingMovieApp/Solved/working-movie-app-solved.html) in your browser and demonstrate what the final application will look like.

* Then slack out the following folder and instructions.

* **Folder:**

  * [10-WorkingMovieApp/Unsolved](../../../../01-Class-Content/06-ajax/01-Activities/10-WorkingMovieApp/Unsolved)

* **Instructions:**

  * Using either version of the starter code provided to you, complete the application so that various snippets of information about your movie are displayed underneath. As a suggestion, display at least each of the following:

    * Movie Poster

    * Rating

    * Release Date

    * Plot

### 15. Instructor Do: Review Activity (5 min)

* Review the final application's code as shown in [10-WorkingMovieApp/Solved](../../../../01-Class-Content/06-ajax/01-Activities/10-WorkingMovieApp/Solved).

* Point out how this application's code basically consists of an AJAX call which retrieves data from the OMDb API, parses it, then displays it inside of an HTML element.

![5-WorkingApp_1](Images/5-WorkingApp_1.png)

![5-WorkingApp_2](Images/5-WorkingApp_2.png)

### 16. Students Do: Bands In Town App (20 min)

* If you have any extra time, then proceed with the Bands In Town application.

* Slack out the following folder and instructions to students.

* **Folder:**

  * [11-BandsInTownApp/Unsolved](../../../../01-Class-Content/06-ajax/01-Activities/11-BandsInTownApp/Unsolved)

* **Instructions:**

  * Using the starter code provided to you, complete the application such that your code will search the Bands In Town API for the artist specified in the search box.

  * Bands in Town is a service for finding out when and where bands and artists are scheduled to tour.

  * Information on how to use query the Bands In Town API can be found [here](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0)

  * Note: This is a free public API and you will not need to sign up for anything.

  * **HINT:** Scroll down the API docs and study the examples. See if you can figure out how to query for an artist's information. You will need to use the `/artists/{artistname} endpoint`.

  * **HINT:** The `app_id` parameter described in the docs is required, but can be set to anything you wish.

### 17. Instructor Do: Review Bands In Town App (5 min)

* Review the Bands In Town code. Be sure to point out how the `app_id` is required but can be anything, and point out how the logged JSON response relates to the new HTML on the page.

![6-BandsInTown_1](Images/6-BandsInTown-1.png)

![6-BandsInTown_2](Images/6-BandsInTown-2.png)

### 18. Students Do: Homework Intro (5 mins)

* If any time remains, have students create their own AJAX calls to the Giphy API. Have them try to create a website with buttons that launch searches for Gifs associated with specific terms.  
* You can play the [homework_demo](https://youtu.be/BqreERTLjgQ) file or showcase the final solution file in the browser.


### 19. Group Do: Homework Time (45 mins)

* Students should be given the remaining time to start working on the API homework.

* Make sure to keep an eye out for questions regarding the assignment and guide anyone who seems to have de-railed back on track.

* If students seemed to struggle today, you can use this time to review difficult topics or spend more time on one of the class activities rather than on homework. 

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=03.04)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=03.04)
