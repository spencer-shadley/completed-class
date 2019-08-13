## Easier Assignment - Building a Wireframe

### Overview

In this assignment, you will build a web design skeleton using HTML/CSS. Your completed work should look just like the image below:

![Final Layout](./Assets/Images/Easier-Layout.png)

### Student Notes

* This exercise will challenge most students unfamiliar with HTML/CSS. If you see this task as too simple or if you finish it within three hours, attempt the second homework assignment.

* Just because this is the "easier" assignment does not make it the "quick" one. The process of learning web development is nothing without a serious time investment. While the work may seem strenuous now, you'll find yourself becoming more comfortable with web development as you put more hours into your training.



### Instructions

1. Create a new repository in GitHub called `HW-Wireframe`.
2. Clone this repository to your computer by following the process we went over in class.
3. Navigate to the `HW-Wireframe` folder you just cloned onto your machine. Then create two files inside this folder: `index.html` and `style.css`.
4. Make your initial Git commit and push it to GitHub.
   * `git add .`
   * `git commit -m "<COMMENT>"`
   * `git push origin master`
   * If this process was done correctly, you should see these two files appear in your repository. This will be your initial test to confirm that you're hooked into GitHub.
5. Return to your local copies of `index.html` and `style.css`. Using the screenshot at the top of these instructions, recreate the design using HTML/CSS.
   * All of your HTML should be inside of the `index.html` file.
   * All of your CSS should be inside of the `style.css` file.
6. When you finish the assignment, commit your changes with Git and push them into your GitHub repo. Remember:
   * `git add .`
   * `git commit -m "<COMMENT>"`
   * `git push origin master`

### Additional Specifications

1. Your HTML should have each of the following sections:
   * Header
   * Nav
   * Aside (With a Heading)
   * Section (With a Heading)
   * Article (With a Heading) contained within the Section
   * Headers contained within the Article
   * Paragraph contained within the Article
2. Your CSS should have styles for each of the following elements:
   * Body
     * font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
     * color: '#777'
     * background: '#777'
     * width: '960px'
     * font-size: '18px'
   * Header, Nav, Section, Aside, and Footer
     * background: '#ebebeb'
   * Article
     * color: '#ebebeb',
     * background: '#777'
   * h1 and p
     * color: '#777',
     * background: '#ebebeb'
3. The width of the section should be:
   * section: 495px

### Helpful Hints

* For a refresher on working with Git and GitHub, consult the GitHub Supplemental Guide we sent you in class.
* Don't forget to review these concepts: `float`, `padding`, `margin`, `display`, `overflow`, `clear` and `text-align`.
* This will be a tough assignment. Towards the end of the course, you'll look back to this exercise and realize just how much you've grown as a developer. Stay positive!



# Unit 01 Introduction to Web Development, HTML, CSS and Git Homework (Easier): Building a Wireframe

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

The user will be prompted to choose from the following password criteria:

* Length (must be between 8 and 128 characters)
* Character type:
  * Special characters
  * Numeric characters
  * Lowercase characters
  * Uppercase characters

The application should validate user input and ensure that at least one character type is selected.

The user will also have the option to click on a button and copy the password to their clipboard.

![password generator demo](./Assets/03-JavaScript-homework-demo.png).

## User Story

AS AN employee with access to sensitive data

I WANT to randomly generate a password that meets certain criteria

SO THAT I can create a strong password that provides greater security

## Business Context

For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application that can generate strong passwords quickly and effortlessly will save employees time and ensure secure access to data.

## Acceptance Criteria

GIVEN a user needs a new, secure password

WHEN prompted for password criteria

THEN a password is generated

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

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository

---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

