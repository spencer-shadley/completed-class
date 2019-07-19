# Unit 09 Node.js & ES6+ Homework: Developer Profile Generator

Create a command line application that dynamically generates a .pdf profile from a GitHub username. The application will be invoked with the following command:

```sh
node index.js
```

The user will be prompted for a favorite color which will be used as the background color for cards.

The pdf will be populated with the following:

* profile image
* user name
* links to the following: 
    * user location via Google Maps
    * user GitHub profile
    * user blog
* user bio
* number of public repositories
* number of followers
* number of GitHub stars
* number of users following

Refer to the [design mockup](09-NodeJS-homework-demo.pdf)


## User Story

AS A product manager

I WANT a developer profile generator

SO THAT I can easily prepare reports for stakeholders

## Business Context
When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigate to each individual team member's GitHub profile, a command line application will allow for quick and easy generation of profiles in .pdf format. 


## Acceptance Criteria

GIVEN the developer has a GitHub profile

WHEN prompted for the developer's GitHub username and favorite color 

THEN a pdf profile is generated


- - -

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

* Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

* Don't commit half done work, for the sake of your collaborators (and your future self!)

* Test your application before you commit to ensure functionality at every step in the development process

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* an animated GIF demonstrating the app functionality

* a generated pdf of your GitHub profile

* the URL to the Github repository
