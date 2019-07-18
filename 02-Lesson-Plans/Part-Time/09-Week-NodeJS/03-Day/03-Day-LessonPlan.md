## 9.3 Lesson Plan - Node and ES6 Day 3 (10:00 AM) <!--links--> &nbsp; [⬅️](../../09-Week/02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../../10-Week/01-Day/01-Day-LessonPlan.md)

### Overview

In this class student's will be learning to use Jest to test their JavaScript applications. They will understand the importance of writing good tests to ensure less need for debugging in the future.

### Learning Objectives

By the end of class students will be able to:

* Understand and explain the use of testing when programming applications
* Install Jest
* Create tests for functions using Jest

### 1. Instructor Do: Introduce Testing (5 mins)

* Welcome students to class and explain today's objectives.

* Explain to students the importance of testing, and how testing can be used to create more reliable programs and help them avoid trouble in the future.

* TDD or Test Driven Development is the practice of writing tests that will initially fail, and then writing code to make them pass.
  
  * By writing a failing test first, developers know exactly what they are trying to achieve with the code they will write, wasting less time while ensuring properly functioning code.

* Explain that while we haven't been teaching a TDD approach, testing will still be valuable to make sure that our code is functioning as we would like without having to run it over and over, and inspect each piece ourselves.

### 2. Instructor Do: Jest Intro (10 mins)

* We are going to introduce students to a basic example of using Jest to test a function. 

* Open [Add.js](../../../../01-Class-Content/09-nodejs/03-day/01-Ins_TestJest/Add.js)

   ```js
    addNumbers = (num1, num2) => {
      return num1 + num2;
    };

    module.exports = addNumbers;
    ```

  * Explain that we simply created a function called `addNumbers`.

  * We then export that function via `module.exports`, so we can require it into our `Add.test.js`.
c
* Now open [Add.test.js](../../../../01-Class-Content/09-nodejs/03-day/01-Ins_TestJest/Add.test.js)

    ```js
    const addNumbers = require("./Add");

    test("Adds 3 + 4 to equal 7", () => {
      expect(addNumbers(3, 4)).toBe(7);
    });
    ```

  * Explain the use of the `test` method. The argument for the test method is first a plain english string of what you are testing. In this case we are testing that `3 + 4 = 7`. The next argument is a function that will run the function we are testing with our given test parameters.

  * `Expect` allows for us to use something called `matchers`. In this example we are simply expecting a certain value `to be` what we specify.

    * The `matcher` we use with our `expect` is `.toBe()`.

* Ask students what we need to do to run this test suite

  * We first need to `npm init`.

  * Next we must `npm install --save jest` to bring the package into our project.

  * Finally, we must edit the `scripts` in our `package.json`, specifically the `test` script. Put `jest` into the `test` script.

  ```json
    "scripts": {
      "test": "jest"
    },
  ```

* Now run `npm test` and show students the output.

### 3. Students Do: Test for Jest (10 mins)

* Slack out the following folder to your students [Multiply Unsolved](../../../../01-Class-Content/09-nodejs/03-day/02-Stu_FirstTest/Unsolved)

* **Instructions**

* For this activity you will create a function and write test for the function.

* You will write your function in `Multiply.js` and your tests will be written in `Multiply.test.js`.

* Your function should take in 2 numbers as arguments and multiply those two numbers.

* The activity is properly completed when your tests pass.

* **NOTE** You must `npm init` and then edit your test scripts to utilize `jest`.

### 4. Instructor Do: Review Multiply test (10 mins)

* Open up the solved activity folder. [Solved Activity](../../../../01-Class-Content/09-nodejs/03-day/02-Stu_FirstTest/Solved)

* Ask students what needs to be to run this solution

  * We must first `npm install`.

    * Let students know that we have already created the package.json and saved `jest` as a dependency. We have also inserted `jest` into our `test` script.

* Walk students through the code found within `Multiply.js` and `Multiply.test.js`.

  ```js
  const multiply = (num1, num2) => {
    return num1 * num2;
  };
  module.exports = multiply;
  ```

  * Point out that we export our function `multiply` from `Multiply.js` and `require` it into our `Multiply.test.js` file.

  ```js
  const multiply = require("./Multiply");

  test("Multiplying 2 by 2 equals 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  ```

  * Without the export in `Multiply.js` and require in `Multiply.test.js`, we would not be able to utilize our functions to test them in our test.js file.

* Explain how we needed to edit our `package.json` to `test` using `jest`

  * Run the command `npm test` and show students the output.

* Ask students if they have any lingering questions about how this was completed.

### 5. Instructor Do: Matchers (10 mins)

* We are going to go into using jests `matchers`

* Explain to students the concept of Matchers in Jest.

  * Matchers allow for us to test values in many different ways.

  * This allows us to capture different cases, and make sure our functions are always performing the ways we want them to.

  * Mention that matchers are always used with `expect`.

    * When we run `expect()` we are returned an `expectation object`. That allows us to perform a matcher on it to find out if the value matches some case that we provide.

* Open up [Matchers Demo](../../../../01-Class-Content/09-nodejs/03-day/03-Ins_Matchers)

* Opening `Matchers.js`, walk students through the basic subtraction function and following export.

  ```js
  subtractNumbers = (num1, num2) => {
  return num1 - num2;
  };
  module.exports = subtractNumbers;
  ```

* Open `Matchers.test.js`, walk students through the import and then move to the test.

  ```js
  const subtractNumbers = require("./Matchers");

  test("Subtracting 5 from 7 will be less than 3", () => {
    expect(subtractNumbers(7, 5)).toBeLessThan(3);
  });
  ```

  * Explain how we import just like our first test activities.

  * Point out how now, we are using a different matcher.

    * Instead of `.toBe()` we are using `toBeLessThan()`.

* Let students know there are numerous matchers they can make use of, and will get to in their next activity.

* Mention that you should try and use the `matchers` that most closely line up with the code you are trying to test.

### 7. Students Do: Matchers and Me (10 mins)

* Slack out the following folder to your students [Matchers Unsolved](../../../../01-Class-Content/09-nodejs/03-day/04-Stu_Matchers/Unsolved).

* **Instructions**

* In this activity we are going to use a new `matcher` to check the value of a function

* You will write your function in `Matchers.js` and your test will be written in `Matchers.test.js`.

* Create a function that adds two `floating point` numbers. i.e., `0.7, 1.1, 2.3`.

* Then write a test that checks if the sum of these two values is around the proper expected output

* Use [Jest's Matcher Docs](https://jestjs.io/docs/en/using-matchers) to find the correct matcher for this case.

### 8. Instructor Do: Multiple Tests (5 mins)

* Explain to students that it is not often that you only have a single function that needs to be tested.

* Open [Multiple Tests Solved](../../../../01-Class-Content/09-nodejs/03-day/05_Ins-MultipleTests)

* Run `npm i` and then `npm run test` and show students the passing output of multiple tests.

* Let them know it is their turn to now write multiple functions and multiple tests using only two files.

### 9. Students Do: Write Multiple Test (15 mins)

* Slack out the following [MultipleTest Unsolved](../../../../01-Class-Content/09-nodejs/03-day/06-Stu_MultipleTest/Unsolved)

* **Instructions**

* For this activity you will create 2 functions.

* You will write your functions in `MultipleTest.js` and your tests will be written in `MultipleTest.test.js`.

  * The first functions will compare two values which will equate to `true` or `false`

    * Use the `toBeFalsy()` matcher

  * The second functions will take in 3 arguments. It will then add the first two together and then divide the sum by the 3rd.

    * Use the `toBeGreaterThan()` matcher

* You will write tests for both functions in a separate file. (You should have two files when complete).

* You have completed this activity when both your tests are passing when running `npm run test`.

### 10. Instructor Do: Review Multiple Tests (5 mins)

* Open up [Multiple Test Solved](../../../../01-Class-Content/09-nodejs/03-day/06-Stu_MultipleTest/Solved)

* Go through `MultipleTest.js` first.

  ```js
  const functions = {
    trueOrFalse: (val1, val2) => {
      const value = val1 === val2;
      return value;
    },
    addAndDivide: (num1, num2, num3) => {
      return ((num1 + num2) / num3);
    }
  };
  module.exports = functions;
  ```

  * Point out how we wrapped our functions in an object named functions and used `module.exports`.

* Now open `MultipleTest.test.js`.

  * Show how we require in our `functions` object and walk through the tests and matchers we used.

  ```js
  const functions = require("./MultipleTest");

  test("Comparing 1 to an empty array would be false", () => {
    expect(functions.trueOrFalse(1, [])).toBeFalsy();
  });

  test("Adding 10 and 10 and diving the sum by 2 is greater than 9", () => { 
    expect(functions.addAndDivide(10, 10, 2)).toBeGreaterThan(9);
  });
  ```

* Run `npm run test` and show students the passing outputs.

### 11. Instructor Do: Introduce Mocks (10 mins)

* Explain what a `mock` is in testing.

  * Mocks allow us to create `mock functions` and test links between our code. We erase the actual implementation of the function and are able to capture calls to the function.

  * We can capture other information, but for the purpose of our lesson we will deal with function calls.

* Open [Mocks](../../../../01-Class-Content/09-nodejs/03-day/07-Ins_Mocks)

* Open `Mocks.js` and walk students through the logElements function provided.

  ```js
  function logElements(array) {
    let myArray = ["Pizza", "Hamburger", "Chicken"];
    for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
    }
  }
  module.exports = logElements;
  ```

  * Our function takes a single argument, an array.

  * For each iteration of our `for` loop, we will console.log the element.

  * Finally, we `module.exports` our `logElements` function so we can `require` in our `test.js`.

* Open `Mocks.test.js` and walk students through the test thats been written for our function.

  ```js
  const checkCallback = require("./Mocks");

  test("Tests that our mock is called twice", () => {
    const mockCallback = jest.fn(x => 5 + x);
    checkCallback([10, 20], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
  });
  ```

  * We first import our `checkCallback` function.

  * Next, we write our test. In this case we would like to know if our callback has been called twice.

  * We create a mock callBack function using the `jest.fn()` syntax and assign it to the variable `mockCallback`.

  * Next we invoke our `checkCallback` function, passing in an array and our mockCallback as arguments.

  * Finally we can make our assertion. Chaining of `mockCallback` we use `mock.calls.length` to find out how many calls to our mock have been made, and set this `toBe` 2.

* Explain that with each element added to the array being passed as an argument, it would linearly increase the amount of times `callback` is called in our `checkCallback` function.

### 12. Students Do: Mocks (15 mins)

* Slack out the following [Mocks Unsolved](../../../../01-Class-Content/09-nodejs/03-day/08-Stu_Mocks/Unsolved)

***Instructions**

* In this activity you are going to check if a mock function has been called

* You will write your function within `Mocks.js` and your tests within `Mocks.test.js`.

* Create a function which takes in 2 numbers and a callback

* Add those two numbers, then pass that value into a call to your callback function

* Write a test that expects the mock function to be called once.

* This is complete when the test for one mock call is passing.

### 13. Instructor Do: Review Mocks (5 mins)

* Open up [Mocks Solved](../../../../01-Class-Content/09-nodejs/03-day/08-Stu_Mocks/Solved)

* Walk students through the `addAndCallback` function.

  ```js
  const addAndCallback = (num1, num2, callback) => {
    const sum = num1 + num2;
    callback(sum);
  };

  module.exports = addAndCallback;
  ```

  * Point out that we take in 3 arguments.

    * 2 Numbers and a callback.

    * We take the `sum` of our addition and pass it to our `callback`.

  * We then export our function.

* Open `Mocks.test.js` and walk students through the test

  ```js
  const addAndCallback = require("./Mocks");

  test("Our mock callback is called once", () => {
    const mockCb = jest.fn(num1 => num1 + 3);

    addAndCallback(1, 2, mockCb);

    expect(mockCb.mock.calls.length).toBe(1);
  });
  ```

  * We require our `addAndCallback` function

  * We setup our test. We then create a mock callback using the `jest.fn()` notation and pass through some dummy arguments.

  * We call our `addAndCallback` function with 2 numbers and our mock function as the callback.

  * Finally we `expect` our mock callback to be called 1 time.

### 14. Instructor Do: Timer Mocks (10 mins)

* Open up [Mock Timer](../../../../01-Class-Content/09-nodejs/03-day/09-Ins_TimerMocks)

* Open up `TimerMock.js` and walk students first through the basic `timerMock` function we have setup.

  ```js
  function mockTimer() {
    setTimeout(() => {
      console.log("done");
    }, 3000);
  }

  module.exports = mockTimer;
  ```

  * The function is simple, we call setTimeout and console.log `STOP` after 3 seconds.

  * We then export our function so we can import it into our `TimerMock.test.js`

* Open up `TimerMock.test.js` and walk students through the code.

  ```js
  const mockTimer = require("./TimerMock");

  jest.useFakeTimers();

  test("waits 3 seconds before ending", () => {
    mockTimer();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });
  ```

  * First we import our `timerMock` function.

  * Next we invoke `useFakeTimers()` which is a built in Jest Function.

    * This method will mock our setTimeout function.

  * We then write our test case of waiting 3 seconds for timer to stop.

  * We call `timerMock()` and then we expect that setTimeout will have been called with a function (our mock) for a time of 3 seconds.

### 15. Students Do: Mock Timer (10 mins)

* Slack out the following folder to students [Mock Timer Unsolved](../../../../01-Class-Content/09-nodejs/03-day/10-Stu_TimerMocks/Unsolved)

* **Instructions**

* In this activity you are going to mock a `setTimeout`.

* You will write your function inside of `TimerMocks.js` and your tests within `TimerMocks.test.js`.

* Create a function which takes in 2 numbers. Create a setTimeout function that will return the difference after 5 seconds.

* Write a test that check that your `setTimeout` has been called 1 time.

### 16. Instructor Do: Review Mock Timer (5 mins)

* Open [Mock Timer Solved](../../../../01-Class-Content/09-nodejs/03-day/10-Stu_TimerMocks/Solved) and walk students through the code.

  ```js
  function subtractAfterTime(num1, num2) {
    setTimeout(() => {
      return num1 - num2;
    }, 5000);
  }
  module.exports = subtractAfterTime;
  ```

* We created a function `subtractAfterTime` that takes in two arguments.

  * We then create a `setTimeout` that after 5 seconds will return the difference between our two arguments.

  * Finally we export our function so it can be required into our `TimerMocks.test.js`

* Open `TimerMocks.test.js` and walk through the code.

  ```js
  const subtractAfterTime = require("./TimerMocks");

  jest.useFakeTimers();

  test("setTimeout was called 1 time", () => {
    subtractAfterTime();
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  ```

  * We import our function and save it to a constant

  * We first create our mock timer using `jest.useFakeTimers();

  * We write our test case and invoke our `subtractAfterTime` function and `expect` it to have been called 1 time.

### 17. BREAK (40 mins)

### 18. Mini Project (65 mins)

* Welcome students back from break and let them know its time to work on a challenge project that will tie this unit together.

* Students are going to build a basic command line portfolio generator.

* Site generators have been on the rise in recent years as the need for stylish and responsive webpages has risen drastically

  * With a lack of developers and an increase in demand, static generators have filled the void.

  * Platforms like Wix and Shopify allow clients to easily enter information and receive a nice built site.

* Open the [Mini Project](../../../../01-Class-Content/09-nodejs/03-day/Mini-Project)

* **Do not show students the code.**

* Run `npm install` and then run `node index.js`.

  * Complete the prompts given to you.

  * Open the resulting `index.html` that is generated by our program.

* Let students know that they will be building the program you just showed them.

* Slack out the following instructions:

* **Instructions**

* You have been tasked with creating a CLI Tool that generates an HTML Portfolio page.

  * Your application will ask the user for information, and output that information into an HTML document.

* You will need two files for this:

  * `index.js`
  * `package.json`

* When creating programs we always want to get an MVP (minimum viable product).

  * Our MVP for this project is just an HTML page displaying the users provides responses with no styling whatsoever.

* When you complete the MVP, you can begin to style the page that is generated.

* **Hints**:

* To write your HTML it would be easiest to use a dummy `index.html` file. This will allow you to have HTML syntax highlighting making it easier to visualize and write your HTML.

### 19. END (1 mins)

* Slack out the solution `index.js` to the mini project to your students.

* Let them know they did well taking in all this new information, and are welcome to stay for office hours with any questions they may have.
