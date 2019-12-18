# 20-jQueryCalculator

## File

- [`jquery-calculator-starter`](Unsolved/jquery-calculator.html)

## Instructions

- Create the JavaScript logic necessary to add functionality to the jQuery Calculator.

- Your calculator should be able to handle basic mathematical operations like addition, subtraction, multiplication, etc.

- You should be making use of the existing buttons.

- You should be making use of the existing placeholders for entering content (i.e. "firstNumber", "operator", "secondNumber", "result").

- You should have fun and push yourselves! This is a challenge activity—which means, if you get it done, you are a King of jQuery. If you don't, no sweat. The important thing is that you learned at least a FEW things along the way.

### Phase 1

- Your goals should be to:

  - Become familiar with the various elements of the HTML page as it is written now. (Identify the classes and IDs that matter!)

  - Create a general strategy for how you will accomplish the task:

    - How will you capture button clicks?
    - What will you do with the numbers clicked?
    - What will you do when the operator is clicked?
    - How will you differentiate numbers from operators?
    - How will you know the "value" of a number clicked?
    - How will you know when a user is done entering the first number?
    - Etc.

  - Create a few test "on-click" events. These could just trigger Alert messages for now. If you get further along, then have these buttons alert their "value".

### Phase 2

- Your goals should be to:

  - Begin creating sets of variables that you think you will need. As a few suggestions:

    - `firstNumber`, `secondNumber`, `operator`, `result`

  - Create code that captures the numbers from button clicks, and then displays them on the HTML.

  - Create code that captures an operator click, then immediately tells your code to begin recording the second number. (Example: If a user clicks the "plus" button, you know they are done typing the first number).

  - Create code that checks which operator the user has clicked, then saves this operator for later use in a conditional statement. (Example: If a user clicks the "plus" button, you know you will need to be adding two numbers. If a user clicks the "minus" button, you will need to be subtracting two numbers. Think: if-else statements!)

### Phase 3

- Your goals should be to:

  - Complete the functionality you are missing in your code.

  - Spend a few moments really assessing what you still have to do.

  - Get a TA/Instructor to help you set priorities if you are unsure as to how to proceed.

### Phase 4

- For the last 25 minutes, your goals should be to:

  - Complete any remaining functionality in your calculator

  - Handle bugs and edge cases (Example: What if a user tries to type in more numbers after getting the result? Will that mess up the screen?)

  - Create code to "restart" the calculator after a user clicks "clear".

### Bonuses

- Don't attempt these bonuses until you have fully completed the calculator

#### Bonus 1

- Have pressing "equal" repeat the previous operation on the new result when no new operator has been selected

#### Bonus 2

- Handle user `key` events as well as clicking on the buttons
