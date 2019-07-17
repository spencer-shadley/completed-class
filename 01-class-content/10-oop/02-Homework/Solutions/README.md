This is the homework for Week 10, OOP. 

## Learning Topics
  * Testing with jest
  * OOP fundamentals
    * constructors
    * inheritance 

## File structure
```
app.js         // main program
lib/           // classes
  Employee.js
  Manager.js
  Engineer.js
  Intern.js
output/        // rendered output
  team.html
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
  
```
  
```javascript
class Employee {

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email
    this.title = 'Unknown'
  }

  getTitle() {
    return 'Employee';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}
```

```javascript
class Engineer extends Employee {

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getTitle() {
    return 'Engineer';
  }

}
```

```javascript
class Manager extends Employee {

  constructor(name, id, email, team) {
    super(name, id, email);
    this.team = team;
    this.title = 'Manager';
  }

  getGithub() {
    return this.github;
  }

  getTeam() {
    return this.team;
  }

}
```

```javascript
const e = new Employee("bob", 1, "bob@catworx.com");
alice = new Engineer(...)
bob = new Intern(...)
carl = new Engineer(...)
# passing in 'team' as array of other employee instances
dave = new Manager(..., [alice, bob, carl]);
```

## Testing

```bash
    npm run test
```





  
