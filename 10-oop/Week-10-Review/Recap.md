# <center> Object Oriented Programming 

## Four pillars  (Encapsulation, Inheritance, Abstraction, Polymorphism)
___

### Encapsulation 

    - Enclosing all the functionalities of an object within that object so that the methods and properties are hidden from the rest of the application.
    - Keep state private
    - Sonic Example
    
### Inheritance

    - An objects ability to inherit methods and properties from a parent object.
   ```js
    class Tree {
        constructor(name) {
            this.name = name;
            this.trunk = true;
        }
    }

    const bananaTree = new Tree('banana');
    bananaTree.name === `banana`;
    bananaTree.trunk === true;
```
   
    - We have now created a banana tree from the basic tree constructor. 

### Abstraction

    - Abstraction manages complexity of a system by hiding internal details and composing it in several smaller systems.

   ```js
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
            this.salary = salar;
        }
    }

    const Kawhi = new Person({
        firstName: Kawhi, 
        lastName: Leonard, 
        job: new Job('NBA', 'AllStar', '$$')
    }
```

### Polymorphism

    - A core concept of an object-oriented paradigm that provides a way to perform a single action in different forms.
    - Telling two architects to `build me a house` would yield very different results. 
    - Car constructor
        - Compact Car
        - Truck
        - Tesla 

