## 8.3 Lesson Plan - Joins in Sequelize & Project #2 (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

### Slideshow

* This lesson's slides are available on Google Drive here: [08-3 Linting and Projects](https://docs.google.com/presentation/d/1QSJWWiSZmx2I5SZncgJ9UKJP8b_6OFytiZRjGPNRSXo/edit?usp=sharing)

* To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Add the slide PDF file to your class repository along with other necessary files.

* **Note:** Editing access is not available for this document. If you wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

- - -

### Overview

We will also introduce the concept of joins & relations in Sequelize. Students will begin working on their second project.

`Summary: Complete Activities 15-16 in Unit 15`

* When using any of the `Supplemental PDFs`, please download and open. Do NOT preview on GitHub as they may not display properly in the browser.

##### Instructor Priorities

By the end of class students will:

* Become familiar with relations in Sequelize.

* Become familiar with the "include" option in order to easily perform queries with joins.

* Be introduced to the goals and requirements of Project #2.

Also:

* Each group should submit a Project Proposal by the end of the day.

##### Instructor Notes

* As Instructors / TAs, keep in mind that the success of your students post-bootcamp is largely dictated by the quality of their projects. Encourage and help steer them in every way you can towards high-quality final projects!

* Instructors / TAs, take a few moments before class to review the presentations posted on this link: <https://www.youtube.com/playlist?list=PLe80S_8KApqOTw-2-b-sgzTwwWImepoii>. Do not share these with students as they are Rutgers Specific -- however, use the insight you gain in watching these videos to understand what's possible.

* You and the TAs may want to implement a "workshop" series with individual groups. In these workshops, student groups will rotate between the Instructor and TAs to get help on specific topics like "Refining Ideas", "Finding the Right API", "Creating a Layout", etc. These workshops should be between 10-20 minutes each and are intended to ensure students are heading in the right direction. (Note: This approach works best if you can physically remove students from the main classroom and find small spaces to work with individual groups. Be creative here!).

### Sample Class Video (Highly Recommended)

* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=90d71a66-f2cc-4500-bdda-a86500f76e47)

- - -

### Class Objectives

* To provide students an opportunity to brainstorm project ideas and obtain instructor approval for project direction.

- - -

### 0. Instructor Do: Welcome Students (1 min)

* Welcome students and let them know that this has historically always been one of the most challenging units of the course. Give them praise for making it to Sequelize Day 3. Let's dive right in with a quick review!

- - -

### 1. Instructor Do: Introduce Sequelize Associations (5 mins)

* Explain to the class that what we went over in the last activity is considered a `belongsTo` association, as well as a `hasMany` association in Sequelize. These are some of the most common types of associations.

  * A Post **belongsTo** an Author.
  * An Author **hasMany** posts.

* This may be confusing at first, so we're going to do an exercise to hopefully help make this more clear. This exercise will have some unfamiliar syntax, so instructors and TA's should be walking around offering assistance.

- - -

### 2. Groups Do: Sequelize Associations (20 mins)

* Slack out the following folder and instructions:

  * **Folder:** [13-Post-Author-Association/Unsolved](../../../../01-Class-Content/15-sequelize/01-Activities/13-Post-Author-Association/Unsolved)

* **INSTRUCTIONS:**

  The goal of this exercise is to modify the Post and Author models so that they are associated with eachother.

  1) Open the folder slacked out to you.

  2) Run `npm install`

  3) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

  4) Navigate to the `post.js` file.

  5) You will need to set an `associate` property to the `Post` model after it's defined. There's an example of this type of association being done here:
  <https://github.com/sequelize/express-example/blob/master/models/task.js>

  * This may take a few tries to implement correctly in your own Post model (There's a lot of curly braces there!). You can verify your code works by starting your node server and then checking MySQL Workbench. If the Posts table now has a foreign key of AuthorId, you were successful.

  **Bonus**: If you complete the exercise before time's up, navigate to the author.js file and add a **hasMany** association from the Author model to the Post Model. An example of this type of association can be found here:
  <https://github.com/sequelize/express-example/blob/master/models/user.js>

  **Note** After this activity we have just one more step to complete the app and get it fully functioning.

- - -

### 3. Instructor Do: Review Sequelize Associations (20 mins)

* Open the solved version of the previous exercise [13-Post-Author-Association/Solved](../../../../01-Class-Content/15-sequelize/01-Activities/13-Post-Author-Association/Solved) in your editor and navigate to the posts.js file.

* Explain to the class that this while this may be some unfamiliar syntax, we don't need to perfectly understand how it all works to use it. A lot of Sequelize code is boilerplate we need not concern ourselves too much with. Nonetheless, it can be helpful to have some understanding:

![Post belongsTo](Images/5-Post-BelongsTo.png)

* Inside of this function we run the `Post.belongsTo` method and pass in some configuration.
* The object's only key is `classMethods` and it's value is another object.
* This inner object has a key of `associate`.
* We specify that we want to associate our `Post` model with `models.Author`.
* We run the **belongsTo** method on Posts and take in models.Author as an argument.
* We're adding a flag to our foreign key (AuthorId) saying this cannot be null. In other words, it won't let us create a Post without an Author.
* **Explain that for the most part they can create an association just by copying and pasting this code. There's no need to worry about memorizing it.**
* Briefly go over the **hasMany** association in the Author model. This was part of the bonus and isn't actually required to put a foreign key on the Post model, but it's VERY helpful as it helps us easily perform joins whether we're doing a find on Posts, or a find on Authors. This will be more clear in the next exercise!
  ![Author Associate](Images/8-Author-Associate.png)
* There are other types of associations we can do with Sequelize, but belongsTo and hasMany are some of the most common and what we'll be using here.

  * <http://docs.sequelizejs.com/en/latest/docs/associations/> Sequelize's docs are very thorough when it comes to the different types of relations that are available.

* We're almost done! While we've set up our relations, we haven't actually specified that we want to return joined data to the user inside of our queries, therefore our app won't work as expected quite yet.
* Inform students that in the next activity we're going to direct them to a section of Sequelize's documentation to see if they might be able to figure out how we need to change our queries to make this work.

- - -

### 4. Groups Do: Joins (15 mins)

* Slack out the following folder and instructions:

  * **Folder:** [14-Post-Author-Joins/Unsolved](../../../../01-Class-Content/15-sequelize/01-Activities/14-Post-Author-Joins/Unsolved)

* **INSTRUCTIONS:**

  The goal of this exercise is to modify our find queries in both post-api-routes.js and author-api-routes.js to use Sequelize's "include" option. We can use "include" to say that we want to return associated data.

  1) Open the folder slacked out to you

  2) Run `npm install`

  3) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

  4) Navigate to the `post-api-routes.js` file.

  5) Add the "include" option to the queries specified in the comments. This is a feature called "eager loading". We want to "include" the Author model. Examples can be found here:
  <http://docs.sequelizejs.com/manual/tutorial/models-usage.html#eager-loading>

  6) Navigate to the `author-api-routes.js` file and add the "include" option to the queries specified in the comments. Here we want to "include" the Post model.

  7) If successful the application should now be fully functional. After you create a few Authors with a few posts, try navigating to either `localhost:8080/api/posts` or `localhost:8080/api/authors` to make sure the JSON returned for both routes includes all of the data.

  **Hint**: The "include" key goes on the same options object as the "where" attribute we've been using. Examples can be found at the link supplied.

- - -

### 5. Instructor: Review Joins (20 mins)

* Slack out the solution to the previous exercise  [14-Post-Author-Joins/Solved](../../../../01-Class-Content/15-sequelize/01-Activities/14-Post-Author-Joins/Solved)

* Show students how by just adding `include: [<models>]` as an option in our query we can easily get the associated data.

* Create a few quick posts and demonstrate how when we navigate to `localhost:8080/api/authors` we get all of the author data with their Posts attached. Demonstrate the same for `localhost:808/api/posts` and note how the same is true in the reverse.

* In MySQL, this is what's known as a "left outer join". We can do others with Sequelize, but this gives us very convenient access to both pieces of associated data.

![Post Eager Loading](Images/6-Post-Eager-Loading.png)

- - -

![Author Eager Loading](Images/7-Author-Eager-Loading.png)

* Congratulate the class on getting through one of the most challenging topics in the course.

* Encourage students to review the [TrilogyTV Sequelize + Handlebars Review Video](https://www.youtube.com/watch?v=EDgpYNqItmc&index=1&list=PLgJ8UgkiorCnbVc-ZiCqgm3dw7Cvrewq2).

### 6. Instructor Do: Project 2 Slides (10 mins)

* Welcome students and explain that as we enter project # 2, we're going to start thinking a little more about _code quality_. Today we'll cover using a JavaScript linter and Travis CI checks to achieve this.

* Explain that later this week we'll also cover the basics of agile development and testing web applications.

* Unlike project 1, we'll be providing students with some boilerplate code they can use to jump start their applications. Stress that despite the other material we have to cover this week, this will save them time and ensure they can dive in building features for their apps.

* Assure the class that they'll have plenty of time to brainstorm project ideas before submitting their proposals for review by the end of class.

* Students should sit with their groups during today's activities and work to follow along with the examples.

* Go through the slide deck [08-3 Linting and Projects](https://docs.google.com/presentation/d/1QSJWWiSZmx2I5SZncgJ9UKJP8b_6OFytiZRjGPNRSXo/edit?usp=sharing).

* Slack out the [requirements for project 2](../Project-Resources/README.md).

* Answer any questions about project requirements.

### 7. Groups Do: Create a Repository (10 mins)

* Have students sit with their project groups as they create project repos and invite each other as collaborators.

* We have created a written guide and video guide on how to connect a GitHub repository to a Heroku Application for continuous deployment. Please provide these to your students along with the following activity instructions.

    [Connect Repo with Heroku Guide](../../../../01-Class-Content/16-project-2/03-Supplemental/Guides/GitHubHerokuConnect.md)

    [Connect Repo with Heroku Video](https://youtu.be/GgNcs9zlFSA?list=PLOFmg4xbN_TPrB6w4rThsFanVxJI_SfER)

* Refer to [01-Stu_Create-Repository](../../../../01-Class-Content/16-project-2/01-Activities/01-Stu_Create-Repository/README.md), which contains the following instructions:

* **Instructions**:

```
* One group member should create a new Github repo for the project.

* Protect the repo's master branch as we did during project 1.

  * Once at the repo's page, click the "Settings" tab.

  * Select "Branches" from the left sidebar.

  * Under "Branch protection rules", choose "master" from the dropdown.

  * Check off the following options:

    * "Protect this branch"

    * "Require pull request reviews before merging"

    * "Include administrators"

    * "Require status checks to pass before merging"

    * "Require branches to be up to date before merging"
  
  * Click "Save changes"

* Once complete, invite the other group members as collaborators.

* Upon creation of your repository, we would like you and your group to then create a Heroku application and connect your GitHub Repository for automatic deployment.

  * We have created a written guide and video guide on how you can link your GitHub Repo to your Heroku Application for continuous deployment which your instructor will provide.
  


* Once connection is complete, link your Heroku Applications live link to your TAs.
```

### 8. Instructor Do: Linting Overview (5 mins)

* Explain that now we'll discuss linting code with JavaScript.

  * Ask the class: "Can anyone tell me what a JavaScript linter is? Or why we would use one?"

    * A linter is a tool that we can use to analyze our code for potential errors as we're writing it. Linters can also be used to enforce particular styles of coding based on rules we can turn on or off.

    * Linters are useful because they can help teams write more consistent and readable code according to what they consider to be best practices. They're also helpful for identifying potential errors before the code is even run, thus improving overall code quality.

* Exposing students to linting will help during group projects and beyond as most software development teams use some kind of linter to maintain readable and consistent code quality.

* Explain that there are a few different libraries available for linting JavaScript code, but the one we'll be working with is the most popular: [eslint](https://eslint.org/).

* Take a moment to answer any high-level questions about linting, but avoid getting too off track as students will see how eslint works for themselves in the next activity.

### 9. Partners Do: No Lint Example (5 mins)

* In this activity students will examine a JavaScript file without eslint and attempt to identify issues with the code.

* Refer to [02-Stu_No-Lint-Example](../../../../01-Class-Content/16-project-2/01-Activities/02-Stu_No-Lint-Example/README.md), which contains the following instructions:

* **Instructions**:

```
* Before looking at any code, open Unsolved/index.html in your web browser and study the rendered application.

  * This simple example prompts the user for 2 numbers, and then what sort of mathematical operation they would like to perform. The result is then alerted back to the user.

* Now open Unsolved/example.js in your editor.

  * For what this application is supposed to do, the code works perfectly.

* Discuss with your partner: Even though the code works, what's wrong with it?
```

### 10. Instructor Do: Review No Lint Example (5 mins)

* As a class, go over the previous activity's [02-Stu_No-Lint-Example/Solved](../../../../01-Class-Content/16-project-2/01-Activities/02-Stu_No-Lint-Example/Solved/README.md) comparing each point to parts of the code being referred to.

* Explain that while none of these are actual JavaScript errors, consistency is important because it makes code easier to understand, especially if working on a team with others. Additionally having a linter helps ensure code reviews aren't just nitpicks over stylistic opinions.

* Take a moment to answer any questions but inform the class that in the next activity we'll fix the project using eslint.

### 11. Partners Do: Eslint Example (5 mins)

* In this activity students will use eslint to fix issues with the calculator app from the previous activity.

* Refer to [03-Stu_Eslint-Example](../../../../01-Class-Content/16-project-2/01-Activities/03-Stu_Eslint-Example/README.md), which contains the following instructions:

* **Instructions**:

```
* Install the [VS Code Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

* Open the Unsolved folder and run `npm install` from your terminal to install dependencies.

* Now open Unsolved/example.js in your code editor. If you were able to complete the previous steps correctly, you should see red annotations under different parts of the code. Hovering over each displays a popover with an eslint rule being broken.

* Work to fix each part of the annotated code.

* **Bonus**:

* Try changing the quote style to enforce single-quotes instead of double-quotes.

* **Hints**:

* If you're unsure about what an eslint rule is asking for, type it into Google for examples.
```

### 12. Instructor Do: Review Eslint Example (5 mins)

* Demonstrate how hovering over the annotations in the `example.js` file brings up the eslint rule being broken in the file.

  ![Eslint Annotations](Images/01-Eslint-Annotations.png)

* Explain that eslint is an npm package that must be installed. The VS Code extension gives us the annotations over our files so we know what to fix in the moment, but only works if we have the eslint npm package installed.

* Additionally eslint provides a cli tool we can use. Run the following command in your terminal to demonstrate this:

  ```
  npm run lint
  ```

* If you haven't already gone ahead and fixed all the lint errors in the `example.js` file, you should receive errors in the console. Scroll up to see the specific eslint errors and their line numbers.

* Ask the class: "Where do you think the the eslint rules are being set?

  * The `.eslintrc.json` file.

* Demonstrate the `.eslintrc.json` file for the class. Explain that this file contains the rules we want eslint to enforce for us. A list of eslint rules and how to use them can be found at [eslint.org](https://eslint.org/docs/rules/).

  * Eslint also includes the ability to share configs. Companies like Google and AirBnB create and publicly share their own configurations based on style guides used at their companies.

  * Students can look into how to use these if they wish, but they may find them to be much more restrictive than the simple one we're using now.

* Stress that changing conventions used in a project is now as easy as changing an eslint config. If the team decide they would prefer to indent 4 spaces instead of 4 or would prefer single quotes over double quotes, all we need to do is change a rule in the eslint config.

  * Being able to do this so easily helps us stay productive and minimize distractions. Without a linter, getting the entire team on board with and using a new convention could be a much more tedious and stressful process.

* Suggest that students use at least the basic eslint config provided for them in their projects. Take a moment to answer any additional questions.

### 13. Instructor Do: Introduce Project 2 Starter (8 mins)

* In the last project, students should have started with an MVP and then layered on changes. This time, we're giving them a starter project to work with, so instead of doing the initial setup themselves, they're going to write user stories and open issues to layer changes to it.

* Assure the class that it's very common to begin a new project using some kind of pre-built boilerplate as it saves time.

* Open [04-Stu_Project-Starter/Unsolved](../../../../01-Class-Content/16-project-2/01-Activities/04-Stu_Project-Starter/Unsolved) in your editor, run `npm install`, followed by `node server`. Take a moment to demonstrate the rendered application and some of is code.

* Be sure to point out the following:

  * The project starter already has express, handlebars, and sequelize set up.

  * The project starter has a basic linter set up.

  * The project starter has a `.travis.yml` file. This will be be largely ignored, but it will be used to make sure that only code that passes the linter can be merged into the Github master branch. 

  * Students will need to change a few things for their own apps, but this will be much quicker to get started than beginning from scratch.

* Change the indentation of a few lines of JavaScript code and demonstrate how running `npm run lint` logs these as errors to the console. 

  * Lint errors can be fixed manually, or by running `npm run fix` in the terminal. This will fix any errors automatically fixable by eslint across all files. This doesn't fix _all_ lint errors, but it will quickly take care of most.

* Take a moment to answer any high-level questions. In the next activity groups will add this setup to their empty project repos.

### 14. Groups Do: Project 2 Starter (10 mins)

* In this activity students will add the provided Project 2 Starter code to their group project repos.

* Instructional staff should be walking around making sure each group is successful.

* Stress that once groups have this initial boilerplate added to their project repos, all they need to do now is submit smaller pull-requests to layer on each new change.

* Refer to [04-Stu_Project-Starter](../../../../01-Class-Content/16-project-2/01-Activities/04-Stu_Project-Starter/README.md), which contains the following instructions:

* **Instructions**:

```
* Only one member of each group should complete this activity while the others watch.

* Copy the entire Unsolved folder to another location on your computers &mdash; wherever you would like your local copy of the group project to be.

* Rename the copied "Unsolved" folder to the name of your project.

* Open the copied project folder's `package.json` file and change its `name` property to the name of your project, e.g. `bathroom-finder-v2`. If you're unsure now, leave this field as is &mdash; it can be changed later.

* CD to the root of the copied project folder with your terminal and run the following commands:

  git init
  git add .
  git commit -m "Initial commit"

* Then copy the GitHub repo's remote SSH URL (the same URL you'd use to clone the repo).

* Run the following commands in your terminal, replacing <remote-url> with your GitHub repo's remote SSH URL.

  git remote add origin <remote-url>
  git push origin master

* If completed successfully you should see all of the files uploaded to GitHub.

* All other group members should now clone the repo.

* Discuss as a group:

  * How would you now add changes to this project?
```

- - -

### 15. Lunch (30 min)

- - -

### 16. Instructor Do: Introduce Travis CI (5 mins)

* Explain to the class that linters aren't very helpful if some group members choose to ignore their rules.

* Explain that in the next activity we're going to set up Travis CI (Continuous Integration).

  * Travis will prevent any code from being merged into master that doesn't pass the linter.

  * Travis will run a check on any new branches PR'd against master. This check may take a minute, but you will only be allowed to merge the code if the lint passes. Otherwise whoever made the PR will have to fix their code and try again.

* Take a moment to answer any questions. Students will follow step-by-step instructions to add Travis to their repos in the next activity.

### 17. Students Do: Travis Setup (10 mins)

* In this activity students will add Travis CI to their projects.

* Instructional staff should be walking around answering questions and making sure groups can complete the activity.

* Refer to [05-Travis-Setup](../../../../01-Class-Content/16-project-2/01-Activities/05-Stu_Travis-Setup/README.md), which contains the following instructions:

* **Instructions**:

```
* Only the owner of the project repo should complete this activity, other group members should watch.

* **Part 1**: Protecting Master

* Before we can set up Travis, we must configure the project repo to protect the master branch.

* Navigate to the repo's page, then click the "Settings" tab.

* Select "Branches" from the left sidebar.

* Under "Branch protection rules", choose "master" from the drop-down.

* Check off the following options:

  * "Protect this branch"

  * "Require pull request reviews before merging"

  * "Include administrators"

  * "Require status checks to pass before merging"

  * "Require branches to be up to date before merging"

* Click "Save changes"

* **Part 2**: Add Travis

* Navigate to <https://github.com/marketplace/travis-ci>.

* Select the option to "Set up a new plan" and choose the $0 "Open Source" plan when prompted.

* Click "Install it for free" and then on the next page click "Complete order and begin installation".

* On the next page select the radio button that reads "Only select repositories".

* From the "Select repositories" drop-down, choose your project repo.

* Click the "Install" button to complete the process.
```

### 18. Groups Do: Project Brainstorming (69 mins)

* Students begin work with groups to identify ideas, research APIs, and create project designs.

* Students should expect to submit initial project idea proposals by the end of class today.

### 19. Instructors Do: Answer Remaining Questions (12 mins)

* Students begin work with groups to identify ideas, research APIs, and create project designs.

* At the your discretion, Instructor/TA should begin hosting "workshops" to help steer groups in the right direction.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=08.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=08.03)
