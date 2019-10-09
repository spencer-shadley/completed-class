# Unit 11 Express Homework: Note Taker

Create an express application that uses a json file to save a user's todo notes. To run the application, run the following commands in your terminal:

```sh
npm install
npm start
```

The user should have a text input that allows them to create and save notes.

It is recommended that you use the following folder structure:

```
db/             // contains json file that stores notes
public/         // front end
  assets/       //Folder contains css and client-side JavaScript
    css/
    js/
  index.html
  notes.html
routes/         // API and HTML routes
  apiRoutes.js  
  htmlRoutes.js
server.js       // Runs the application
```

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
AS A user

I WANT a note taker application

SO THAT I can create and refer to notes
```

Refer to the [design mockup](./Assets/09-NodeJS-homework-demo.pdf).

## Business Context

When organizing your day, it is important to have a way of tracking the work that you're getting done. Rather than writing this information down, you'll be creating an application that will save everything you need to do in a file that can be editted.

## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The application allows the user to create a note with a title and description.

* A user has the ability to delete a note.

* The application uses a `json` file to store notes.

* The application uses an Express server to serve all API routes.

* The application uses an Express server to serve all client-side routes.

- - -

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your code base in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have more than 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* An animated GIF demonstrating the app functionality

* A generated PDF of your GitHub profile

* The URL of the GitHub repository

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
