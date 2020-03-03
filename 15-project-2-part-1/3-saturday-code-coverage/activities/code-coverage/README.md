# Instructions

To ensure our unit tests are properly testing our app we will add code coverage tools to our application.

Use the given code as an example to add code coverage to your project 2 repository

- add code coverage tools to your `package.json`

  - run `npm install --save-dev coveralls`

  - run `npm install --save-dev mocha-lcov-reporter`

  - add a jest coverage script to your app (`"test:coverage": "jest --coverage"`)

  - add a coveralls script to your app (`"coveralls": "jest --coverage --coverageReporters=text-lcov | coveralls"`)

  - verify this works - run `npm run test:coverage` and you should see the test coverage

- Update travis to ensure we run our code coverage

  - we can automatically run code coverage in Travis with `coveralls`

  - update `.travis.yml` to include this script: `npm run coveralls`

- exclude generated coverage files from git

  - add `coverage/` to your `.gitignore`

- create an account on https://coveralls.io

  - enable your project 2 repo with coveralls (click the toggle)

- Test it out! Create a new pull request and check the test coverage

# Resources

- [Video walk-through](https://www.youtube.com/watch?v=bt1iOy9lv0U)
