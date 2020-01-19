'use strict'

// Avoid using arrow functions for object methods
var dog = {
  name: 'Lassie',
  sound: 'Woof!',
  makeSound: () => console.log(this.sound),
  readTag: () => console.log("The dog's tag reads: " + this.name + '.')
};

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window

// the reason for this is the context in which that property is created has global scope
// it may be more clear to read the code as below:
// var dog = {};
// dog.name = 'Lassie';
// dog.sound = 'Woof!';
// dog.makeSound = () => console.log(this.sound);
// dog.readTag = () => console.log("The dog's tag reads: " + this.name + '.');
