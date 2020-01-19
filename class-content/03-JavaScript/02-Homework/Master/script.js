'use strict'

// each set of characters, leveraging ASCII sequences
// https://www.computerhope.com/jargon/a/ascii.htm
// https://www.webopedia.com/TERM/A/ASCII.html
// alternatively you could create the arrays "by hand"
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var lowerCasedCharacters = ['a', 'b', ...];
var characters = {
  numeric: createArrayInRange('0', '9'),
  lower: createArrayInRange('a', 'z'),
  upper: createArrayInRange('A', 'Z'),
  special: createArrayInRange('!', '/')
    .concat(createArrayInRange(':', '@'))
    .concat(createArrayInRange('[', '`'))
};

// create an array including characters beginning at the
// ASCII value of start up to, including, the ASCII value for end
function createArrayInRange(start, end) {
  var arr = [];
  for (var i = start.charCodeAt(0); i <= end.charCodeAt(0); ++i) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length)) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return;
  }

  var hasSpecialCharacters = shouldIncludeCharacters('special');
  var hasNumericCharacters = shouldIncludeCharacters('numeric');
  var hasLowerCasedCharacters = shouldIncludeCharacters('lowercase');
  var hasUpperCasedCharacters = shouldIncludeCharacters('uppercase');

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    !hasSpecialCharacters &&
    !hasNumericCharacters &&
    !hasLowerCasedCharacters &&
    !hasUpperCasedCharacters
  ) {
    alert('Must select at least one character type');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

function shouldIncludeCharacters(type) {
  return confirm('Click OK to include ' + type + ' characters.');
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  function addCharacters(characterType) {
    possibleCharacters = possibleCharacters.concat(characterType);
    guaranteedCharacters.push(getRandom(characterType));
  }

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  if (options.hasSpecialCharacters) {
    addCharacters(characters.special);
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  if (options.hasNumericCharacters) {
    addCharacters(characters.numeric);
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  if (options.hasLowerCasedCharacters) {
    addCharacters(characters.lower);
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  if (options.hasUpperCasedCharacters) {
    addCharacters(characters.upper);
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; ++i) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; ++i) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Get references to the #copy and #generate elements
var copyButton = document.querySelector('#copy');
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

  copyButton.removeAttribute('disabled');
  copyButton.focus();
}

function copyToClipboard() {
  var passwordText = document.querySelector('#password');

  passwordText.select();
  document.execCommand('copy');

  alert(
    'Your password ' + passwordText.value + ' was copied to your clipboard.'
  );
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Add event listener to copy button
copyButton.addEventListener('click', copyToClipboard);
