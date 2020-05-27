# Project 2

## Application Requirements

- Must use a Node and Express server

- Must be backed by a MySQL database

- Must utilize, GET, PUT, POST and DELETE routes for manipulating data, following the CRUD paradigm

- Must be deployed, including connecting to a database (for example, with Heroku and JawsDB)

- Must utilize at least one new library, package or technology that we haven’t discussed

- Must have a polished UI

- Must use a new CSS library or framework (one that has not been covered in class)

- Must follow MVC paradigm

  - **Model**: Must use an ORM (not necessarily Sequelize)

  - **View**: Must have clear "view" separation of concerns, for example using Handlebars (alternatives are React, Angular, Vue, etc.)

  - **Controller**: Must contain core business logic, separated from the model and view

- Must use a RESTful architecture

- Must use good coding style (consistent indentation, naming conventions, etc.)

  - Must use a linter (ex. ESLint) with at least five rules specified and enforced

    - These lint rules must be enforced by Continuous Integration (such as Travis) before code gets to master

- Must include a `README.md`

  - Include code documentation

  - Link to deployed application

  - Embedded UML diagram detailing your architecture

- Must have high quality coding standards (DRY, correctly scoped variables, etc.)

- Must include unit tests with a test framework (`jest` is recommended)

  - At least 20 tests must be included

  - These tests must use Continuous Integration (such as Travis) to ensure they pass before code gets to master

  - Practice Test Driven Development (TDD)!

- You must include code coverage in your project

  - It is required to have a `test:coverage` script that outputs the coverage percentage

    - [Here are instructions](../3-saturday-code-coverage/activities/code-coverage/README.md) on how to add this

  - Code coverage is normally part of your Continuous Integration (example, using `coveralls`.) It is recommended to add code coverage to Travis.

  - 80% should be considered a low bar for test coverage but there is no required percentage for this project

## Presentation Requirements

In your presentation include:

- Elevator pitch: a one minute description of your application

- Concept: What is your user story? What was your motivation for development?

- Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

- Demo: Show your stuff!

- Directions for Future Development

- Links to to the deployed application and the GitHub repository

Here is a [presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) which you can optionally start from.

Google Slides, Powerpoint, Prezzi, a custom web app, interpretive dance, etc. are all acceptable so long as you clearly address the above points.

## Grading Metrics

| Metric        | Weight |
| ------------- | ------ |
| Concept       | 10%    |
| Design        | 10%    |
| Functionality | 40%    |
| Collaboration | 30%    |
| Presentation  | 10%    |

## Submission on BCS

You are required to submit the following:

- The URL of the deployed application

- The URL of the GitHub repository
