'use strict';

// more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373

// constructors
const object = {};
const map = new Map();

// add items
object.foo = `bar`;
map.set(`foo`, `bar`);

// retrieve items
console.log(object.foo); // 'bar'
console.log(map.get(`foo`)); // 'bar'

// ----------------
// differences
// ----------------

// no way to get collection size/length in Object
console.log(object.size); // undefined
console.log(map.size); // 1

// Object will run each key through toString() since it only supports string keys
object[6] = `bar`;
map.set(6, `bar`);
console.log(Object.keys(object)); // [ '6', 'foo' ]
console.log(map.entries()); // { [ 'foo', 'bar' ], [ 6, 'bar' ] }

// keys are guaranteed to be ordered by insertion in a Map
object[9] = 9;
object[3] = 3;
object[6] = 6;
object[400] = 400;

map.set(9, 9);
map.set(3, 3);
map.set(6, 6);
map.set(400, 400);

console.log(Object.keys(object)); // [ '3', '6', '9', '400', 'foo' ]
console.log(map.entries()); // { [ 'foo', 'bar' ], [ 6, 6 ], [ 9, 9 ], [ 3, 3 ], [ 400, 400 ] }

// Map is iterable
for (const entry of map) {
    console.log(entry); // ['foo', 'bar' ], [6, 6], ...
}

// Map has a few extra methods
map.has(9); // true
map.values(); // { 'bar', 6, 9, 3, 400 }
// more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Big O guarantees are limited for Map
// spec only mandates "sub-linear" for retrieving items
// https://www.ecma-international.org/ecma-262/6.0/#sec-map-constructor

// insertion and removal of key-value pairs tends to perform better in a Map
