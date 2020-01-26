# What's new in ES6?

Below are examples comparing the old and new syntax from ES6. Each example will only use that one new concept in the sample code, all other code will be ES5.

## Arrow Functions

`() => {}`

Arrow functions are a new way to create functions

Old:

```js
var func = function(parameterA, parameterB) {
  console.log('my cool function');
  console.log('is built using arrow functions!');
};

// alternatively
function func2(parameterA, parameterB) {}
```

New

```js
const func = (parameterA, parameterB) => {
  console.log('my cool function');
  console.log('is built using arrow functions!');
};
```

## let and const

`var` is banned. Use `let` if you have a variable whose reference might change. Use `const` if the reference will not change.

old

```js
var numPizzas = 3;
numPizzas = 8;
var pizzaCompany = 'Dominos';
```

```js
let numPizzas = 3;
numPizzas = 8;
const pizzaCompany = 'Dominos';
```

## Array Functions

### forEach

`someArray.forEach(function(item) {})`

Get each item in an array using this new function

Old

```js
for (var i = 0; i < pizzas.length; ++i) {
  var pizza = pizzas[i];
  console.log('pizza', pizza);
}
```

New

```js
pizzas.forEach(function(pizza) {
  console.log('pizza', pizza);
});

// with arrow functions
// pizzas.forEach(pizza => console.log('pizza', pizza));
```

### Filter

`someArray.filter(function(item) { return true; })`

Creates a new array, filtered to only the items which meet your given criteria

Old

```js
var pizzas = [
  { company: 'Dominos', price: 5 },
  { company: 'Pizza Hut', price: 7 },
  { company: 'Papa Johns', price: 8 }
];
var cheapPizzas = [];
for (var i = 0; i < pizzas.length; ++i) {
  var pizza = pizzas[i];
  if (pizza.price <= 7.5) {
    cheapPizzas.push(pizza);
  }
}
```

New

```js
var pizzas = [
  { company: 'Dominos', price: 5 },
  { company: 'Pizza Hut', price: 7 },
  { company: 'Papa Johns', price: 8 }
];
var cheapPizzas = pizzas.filter(function(pizza) {
  return pizza.price <= 7.5;
});
```

### Map

`someArray.map(function(item) {})`

Old

```js
var pizzas = [
  { company: 'Dominos', price: 5 },
  { company: 'Pizza Hut', price: 7 },
  { company: 'Papa Johns', price: 8 }
];

var pizzaCompanies = [];
for (var i = 0; i < pizzas.length; ++i) {
  var pizza = pizzas[i];
  pizzaCompanies.push(pizza.company);
}
```

New

```js
var pizzas = [
  { company: 'Dominos', price: 5 },
  { company: 'Pizza Hut', price: 7 },
  { company: 'Papa Johns', price: 8 }
];

var pizzaCompanies = pizzas.map(function(pizza) {
  return pizza.company;
});
```

## Template Literals

`` `my ${evaluated.value}` ``

Another way to create strings which supports whitespace (new lines, tabs, etc.) and evaluating JavaScript inline.

Old

```js
var pizza = { company: 'Dominos', price: 5 };
console.log('A pizza from ' + pizza.company + ' costs ' + pizza.price);
```

New

```js
var pizza = { company: 'Dominos', price: 5 };
console.log(`A pizza from ${pizza.company} costs ${pizza.price}`);
```

## for...of

`for(var x of y)`

Another way to loop through collections (anything iterable)

Old

```js
var pizzas = [
  { company: 'Dominos', price: 5 },
  { company: 'Pizza Hut', price: 7 },
  { company: 'Papa Johns', price: 8 }
];

for (var i = 0; i < pizzas.length; ++i) {
  var pizza = pizzas[i];
  console.log(pizza);
}
```

New

```js
var pizzas = [
  { company: 'Dominos', price: 5 },
  { company: 'Pizza Hut', price: 7 },
  { company: 'Papa Johns', price: 8 }
];

for (var pizza of pizzas) {
  console.log(pizza);
}
```

## Rest

`...`

Enables creating functions with an arbitrary number of parameters

Old

```js
// Not possible, closest thing would be to take an array of inputs
// but the caller would then have to construct an array before calling
// your function
```

New

```js
function sum(...nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; ++i) {
    sum += nums[i];
  }
}
sum(42, 834, 2, -4);
```

## Spread

`...myArray`

Pull out the values from collections such as arrays

Old

```js
var meats = ['sausage', 'pepperoni', 'cheese'];
var veggies = ['pepper', 'garlic', 'tomato'];

var allToppings = [];
for (var i = 0; i < meats.length; ++i) {
  allToppings.push(meats[i]);
}
for (var i = 0; i < veggies.length; ++i) {
  allToppings.push(veggies[i]);
}
```

New

```js
var meats = ['sausage', 'pepperoni', 'cheese'];
var veggies = ['pepper', 'garlic', 'tomato'];
var allToppings = [...meats, ...veggies]; // ['sausage', 'pepperoni', 'cheese', 'pepper', 'garlic', 'tomato']
```

## Object Destructuring

`{ myProperty } = myObject`

Pull out properties from an object into new variable(s)

Old

```js
var pizza = { company: 'Dominos', price: 5 };
var company = pizza.company;
var price = pizza.price;
console.log(company, price);
```

New

```js
var pizza = { company: 'Dominos', price: 5 };
var { company, price } = pizza;
console.log(company, price);
```

## Promises

`myPromise.then(function(data) {})`

`myPromise.catch(function(err) {})`

Promises are a way to handle asynchronous code which provide a `then` method which takes a callback with successful data and a `catch` method which takes a callback with error information

```js
var promise = axios.get('https://icanhazdadjoke.com/', config);
promise.then(function(res) {
  console.log(res);
});
promise.catch(function(err) {
  console.error(err);
});
```

## ES6 Module Import

`import { functionOne, functionTwo } from 'some-module'`

The officially supported way to include modules in ES6, importing only what you need

Old

```js
var inquirer = require('inquirer');
inquirer.prompt(myPrompts);
```

New

```js
import { prompt } from 'inquirer';
prompt(myPrompts);
```

# Bonuses

Cool new stuff, but technically not in ES6

## fetch

`fetch('my-url')`

An easy way to make AJAX calls added around the same time as ES6 to the browers' runtimes

Old (jQuery)

```js
var queryURL =
  'https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy';
$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function(response) {
  console.log(response);
});
```

New

```js
var queryURL =
  'https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy';

fetch(queryURL).then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});

// with arrow functions
// fetch(queryURL).then(response => response.json().then(console.log));
```

## async/await

`async myFunction() {}`

`await someAsyncCall()`

This is syntactic sugar to work with promises in a more readable way which was added in ES8

```js
async function promptUser() {
  try {
    const { name } = await inquirer.prompt({
      message: 'What is your name?',
      name: 'name'
    });
    console.log(name);
  } catch (err) {
    console.error(err);
  }
}
```
