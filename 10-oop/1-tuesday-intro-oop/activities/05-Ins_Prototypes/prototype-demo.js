'use strict';

// 0.

const hello = 'Hello';
console.log(hello);
console.log(hello.toLowerCase()); // where is toLowerCase()?

const num = 1337;
console.log(num);
console.log(num.toString()); // where is toString()?

// 1.
const myArray = [2, 4, 6, 8];
console.log(myArray);

myArray.forEach(num => console.log(num));

myArray.map(num => console.log(num * 2));

// 2.
const myObject = {
  name: 'Eric',
  age: 28,
  occupation: 'Curriculum Dev'
};

console.log(myObject);

// 3.
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

Movie.prototype.logInfo = function() {
  console.log(`${this.title} was released in ${this.releaseYear}`);
};

const theShining = new Movie('The Shining', 1980);
theShining.logInfo();

console.log(theShining.hasOwnProperty('title'));
console.log(theShining.hasOwnProperty('logInfo'));
console.log(Movie.prototype.hasOwnProperty('logInfo'));
