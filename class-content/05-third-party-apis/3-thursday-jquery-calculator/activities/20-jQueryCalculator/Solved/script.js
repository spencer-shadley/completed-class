$(document).ready(function() {
  // Make our variables global to the runtime of our application
  // these are all initialized with default values in "initializeCalculator"
  var firstNumber;
  var secondNumber;
  var operator;
  var isOperatorChosen;
  var isCalculated;
  var result = 0;

  // Use a function to initialize our calculator.
  // This way when the user hits clear, we can guarantee a reset of the app.
  function initializeCalculator() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    isOperatorChosen = false;
    isCalculated = false;

    $('#first-number, #second-number, #operator, #result').empty();
  }

  function updateNumbers(number) {
    if (isCalculated) {
      return false;
    }
    // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
    if (isOperatorChosen) {
      secondNumber += number;
      $('#second-number').text(secondNumber);
    } else {
      firstNumber += number;
      $('#first-number').text(firstNumber);
    }
  }

  function handleNumberClick() {
    updateNumbers($(this).val());
  }

  function handleKeyDown(event) {
    var key = event.key;
    if (Number.isInteger(parseInt(key))) {
      updateNumbers(key);
      return;
    }

    switch (key) {
      case '=':
      case 'Enter':
        updateEqual();
        break;
      case 'Backspace':
      case 'Delete':
        initializeCalculator();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '^':
        updateOperator(key);
        break;
      default:
        console.error('unsupported key', key);
    }
  }

  function updateOperator(op) {
    // Check if a first number has already been selected
    // Or we've already run a calculation, if so we just exit.
    if (!firstNumber || isCalculated) {
      return false;
    }

    // Set isOperatorChosen to true so we start writing to secondNumber
    isOperatorChosen = true;

    // Store the operator
    operator = op;

    // Set the HTML of the #operator to the text of what was clicked
    $('#operator').text(op);
  }

  function updateEqual() {
    if (isCalculated) {
      firstNumber = result;
    }

    // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
    isCalculated = true;

    // Use parseInt to convert our string representation of numbers into actual integers
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    // Based on the operator that was chosen.
    // Then run the operation and set the HTML of the result of that operation
    // this is called a "switch statement" - it is basically a series of if / else ifs
    // for a shared condition specified in the switch()
    // you can read this is as "when operator equals plus..., when operator equals minus..., etc."
    switch (operator) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      case '^':
        result = Math.pow(firstNumber, secondNumber);
        break;
      default:
        console.error('unsupported operation', operator);
    }

    $('#result').text(result);
  }

  $('.number').on('click', handleNumberClick);

  $('.equal').on('click', updateEqual);

  // Call initializeCalculater so we can reset the state of our app
  $('.clear').on('click', initializeCalculator);

  $('.operator').on('click', function() {
    updateOperator($(this).val());
  });

  $(document).on('keydown', handleKeyDown);

  // Call initializeCalculater so we can set the state of our app
  initializeCalculator();
});
