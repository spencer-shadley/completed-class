# Unit 20 State Homework: 🏬 Online Marketplace

In this assignment, you will be creating a marketplace that allows users to view products from Best Buy. The user will be able to view details about the product, and if they decide, add the product to a shopping cart.

## Instructions

```
As a customer, I want to be able to search through Best Buy's directory and add items to my shopping cart. Once I'm finished shopping, I want to be able to navigate to my shopping cart and view a short summary of the items that I purchased.
```

How do you deliver this? Here are some guidelines:

* The server has already been provided for you. It will be up to you to decide how to style your application.

* 🔑 In the `server` folder, make sure to change `.env-example` to `.env`. It is recommended that you replace the Best Buy API Key with your own key.

* To run the application:

  * Open a tab in your terminal and run `mongod`.

  *  In a separate tab, `cd` into `server` and run `npm install` followed by `npm start`.

  * Create your React application in a third tab and run npm start. 

*  It is recommended that you include the following pages:

  * A Home page that displays "top" products. The user should be able to search for keywords.

  * A Shopping Cart page that displays all items in their cart. Users should be able to remove items from their cart, view a subtotal, and adjust quantities of each item in their cart.

### Hints

* Try making your application functional before worrying about styling it. 

* It is recommended that you outline the different elements of global state your application will need before writing any code.

## Minimum Requirements

* Functional, deployed application

* GitHub repository w/README describing project

## Bonus

* Add a `LOADING` action to your global state and display a loader to indicate that the user is waiting on data.

* Add user authentication to your application. All of the server side routes have already been provided.

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

* the URL to the deployed application

* the URL to the Github repository
