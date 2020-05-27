// These are important Arrat Manipulation avaScript functions to know!
// *************
// Filter()
// Map()
// forEach()
// Find()
// Some()
// Every()
// Reduce()
// Includes()
// for ( let i of array )

const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 100 },
    { name: 'Computer', price: 100 },
    { name: 'Keyboard', price: 100 }
];

// *********************
// filter()
// This will return all items that fit the permater set. This creates a new list.

const filteredItems = items.filter((item) => {
    return item.price <= 100;
})

console.log()
console.log('*******************')
console.log('Filtered Items')
console.log()
console.log(filteredItems);
console.log()

// *********************
// map()

const itemNames = items.map((item) => {
    return item.name;
});

console.log()
console.log('*******************')
console.log('Items Map')
console.log()
console.log(itemNames);
console.log()

// *********************
// find()
// This will return the first item where the find function is true. 

const foundItem = items.find((item) => {
    return item.name === 'Book';
});


console.log('*******************')
console.log('Found Item')
console.log(foundItem);
console.log()

// *********************
// forEach()
// Does not return anything. Just runs a function on each item. 
console.log('*******************')
console.log('For Each')
console.log()

items.forEach((item) => {
    console.log(item.name);
})

console.log('******************')



// *********************
// some()
// As soon as one item is true, returns true for whole statement. 

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
})

console.log('*******************')
console.log('Some Items')
console.log(hasInexpensiveItems);
console.log()

// *********************
// every()
// Checks to see if every item falls under the category presented

const hasExpensiveItems = items.every((item) => {
    return item.price <= 1000;
})

console.log('*******************')
console.log('Every Item')
console.log(hasExpensiveItems);
console.log()

// *********************
// Reduce()
// Does an operation on array and returns a combination of those operations.

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)

console.log('*******************');
console.log('Reduce Items');
console.log(total);
console.log()

// *********************
// Includes()
// Returns true or false if array includes the variable. 

const numbers = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2);

console.log('*******************');
console.log('Includes Item');
console.log(includesTwo);
console.log()

// *********************
// for (let i of array)
// Iterates over an array for each element

const array3 = [1, 1, 2, 2, 3, 3, 5, 8, 9, 9]

let obj = {};

for (let i of array3) {
    obj[i] = true;
}

let objKeys = Object.keys(obj);

console.log(objKeys);

const ReverseString = str => str.toString().split("").reverse().join("");

console.log(ReverseString(12345));
console.log(ReverseString("hello"));
console.log(ReverseString([1, 2, 3, 4, 5]));
