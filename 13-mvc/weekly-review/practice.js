// WHAT IS OBJECT DESTRUCTURING????

// BASICS:


// MAKE A VARIALBE FOR EACH GOT HOUSE
const houseArray = ['Targaryen', 'Stark', 'Lannister'];

const [Targaryen, Stark, Lannister] = houseArray;

console.log(`These are the GOT houses: ${Targaryen}, ${Stark}, ${Lannister}`);


// MAKE A VARIABLE FOR EACH FOOD
const foodArray = ['Pizza', ['Burrito', 'Steak']];

const [Pizza2, [burrito, Steak]] = foodArray;

console.log(`These are nested arrays of ${Pizza2}, ${burrito}, and ${Steak}`)


// SKIPPING. WHAT DO YOU WANT TO EAT?
const foodArray2 = ['Pizza', 'Dog Poop', 'Strawberries', 'Slime', 'Dirt', 'Pancakes'];

const [burrito2, , Strawberries, , , Pancakes] = foodArray2;

console.log(`I would like to eat ${burrito2}, ${Strawberries}, and ${Pancakes}`);



// MAKE A VARIABLE FOR THE STUDENTS INFO
const student1 = {
    name: 'John Doe',
    age: 16,
    scores: {
        math: 74,
        english: 63
    }
};
const student2 = {
    name: 'Sally Doe',
    age: 16,
    scores: {
        maths: 80,
        english: 85
    }
};


const { name, age, scores: { math, science = 100 } } = student1;

console.log(`My name is ${name}, I am ${age} years old, and my math grade is ${math}. I like science ${science}`);

// BONUS: CREATE SCIENCE SCORES FOR THEM BOTH

// MAKE A VARIABLE FOR HOUSE COST AND IF IT HAS A POOL
const house = {
    cost: '1000000',
    size: 'large',
    hasPool: false,
    waterFront: false
}

const { cost, hasPool } = house;

console.log(`My house cost ${cost} and pool ${hasPool}`)

// ACCESS NESTED OBJECT
const complicatedObj = {
    arrayProp: [
        "Zapp",
        { second: "Brannigan" }
    ]
};

const [name2, { second }] = complicatedObj.arrayProp;

console.log(`My name is ${name2} ${second} `);

