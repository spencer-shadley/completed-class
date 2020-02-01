// Encapsulation

class Hedgehog {
    constructor() {
        this.speed = 10000; 
        this.name = 'Sonic';
        this.zoom = function () {
            // both name and speed are accessible from here
            console.log(`${this.name} zooms with the speed of ${this.speed} km per hour!`);
        };

    }
}
 
const sonic = new Hedgehog();

// console.log(`Sonics name is ${sonic.name}`)
// console.log(`Sonics speed is ${sonic.speed} km/hr`);
// sonic.zoom();

// freezeRay = (target) => {
//     target.speed = 0;
//     console.log(`I have frozen ${target.name}!`)
// }
// freezeRay(sonic);
// console.log(`Sonics speed is ${sonic.speed} km/hr`);

// INHERITANCE

class Tree {
    constructor(name) {
        this.name = name;
        this.trunk = true;
    }
}

const bananaTree = new Tree('banana');
// console.log(bananaTree.name);
// console.log(bananaTree.trunk);

// ABSTRACTION

class Person {
    constructor({firstName, lastName, job}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
    }
}

class Job {
    constructor({company, position, salary}) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

const Kawhi = new Person({
    firstName: 'Kawhi', 
    lastName: 'Leonard', 
    job: new Job({company: 'NBA', position: 'AllStar', salary: '$$'})
});

// console.log(Kawhi);

// Person.prototype.defense = function () {
//     console.log(`${this.firstName} ${this.lastName} can play some great defense`)
// }

// Kawhi.defense();
// console.log(Kawhi.job)
