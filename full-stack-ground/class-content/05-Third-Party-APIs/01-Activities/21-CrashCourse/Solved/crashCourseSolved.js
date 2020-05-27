'use strict';

// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable
var name = 'Ahmed';

// 2. ARRAYS
// ==========================================================

// Create an array of five strings
var fiveArray = ['Ahmed', 'Lexus', 'Tom', 'Jim', 'Joy'];

// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Spencer five times"
for (var i = 0; i < 5; ++i) {
  console.log('My name is Spencer');
}

// Create a for loop that loops through your five string array and prints each name
for (var i = 0; i < fiveArray.length; ++i) {
  console.log('My name is ' + fiveArray[i]);
}

// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
function divider(num1, num2) {
  var result = num1 / num2;
  console.log(result);
  return result;
}

// Prints 5
divider(10, 2);

// Create a function that takes in an array of strings and then loops through the array and prints out strings.
// Then call that function
function looper(arrayNumbers) {
  for (var i = 0; i < arrayNumbers.length; ++i) {
    console.log(arrayNumbers[i]);
  }
}

looper(fiveArray);

// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object
var monsterTruck = {
  name: 'Cybertruck',
  brand: 'Tesla',
  carsDestroyed: 2001
};

// Console log any three of the properties in that object
console.log(monsterTruck.name);
console.log(monsterTruck.brand);
console.log(monsterTruck.carsDestroyed);

// Create an Array of 3 Objects
var threeObjects = [
  {
    name: 'Cybertruck',
    brand: 'Tesla',
    carsDestroyed: 2001
  },
  {
    name: 'Turbulent Combuster',
    brand: 'Toyota',
    carsDestroyed: 500
  },
  {
    name: 'Prius',
    brand: 'Toyota',
    carsDestroyed: 2
  }
];

// Console log 3 properties for every one of the five objects
for (var i = 0; i < threeObjects; ++i) {
  console.log(threeObjects[i].name);
  console.log(threeObjects[i].brand);
  console.log(threeObjects[i].carsDestroyed);
}

// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.
// Do this on a new page or see previous example