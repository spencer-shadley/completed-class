## ES6 and React

### 1

1. What is ES6/ES2015? - `ES6`, `ES2015`, `ECMAScript`, `vocab`

   ❓ ES6/ES2015 is the sixth major release of the ECMAScript language specification which is commonly known as \_\_\_.

   - a front-end only language
   - JavaScript
   - an NPM package
   - a back-end only language

### 2

1. Scoping Definitions - `var`, `let`, `const`, `block-scope`, `functional-scope`, `vocab`

   ❓ Variables declared with the `var` keyword are **_ scoped, while those declared with `const` or `let` are _** scoped.

   - functionally, block
   - globally, locally
   - block, functionally
   - locally, globally

### 3

1. Scoping Example 1 - `var`, `functional-scope`

   ❓ What will be the output of the following code?

   ```JavaScript
   for (var i=0; i<5; i++) {
       setTimeout(function() {
           console.log(i);
       }, 100);
   }
   ```

   - 0, 1, 2, 3, 4
   - 1, 2, 3, 4, 5
   - 4, 4, 4, 4, 4
   - 5, 5, 5, 5, 5

### 4

1. Scoping Example 2 - `let`, `functional-scope`

   ❓ What will be the output of the following code?

   ```JavaScript
   for (let i=0; i<5; i++) {
       setTimeout(function() {
           console.log(i);
       }, 100);
   }
   ```

   - 0, 1, 2, 3, 4
   - 1, 2, 3, 4, 5
   - 4, 4, 4, 4, 4
   - 5, 5, 5, 5, 5

### 5

1. Const vs Let with Strings and Numbers - `let`, `const`, `vocab`

   ❓ A string or number type declared with **_ cannot have its value changed. A string or number type declared with a _** can have its value changed.

   - `let`, `let`
   - `const`, `const`
   - `let`, `const`
   - `const`, `let`

### 6

1. Const vs Let with Arrays and Objects - `let`, `const`, `vocab`

   ❓ An array or object type declared with **_ can have its value be changed but cannot be reassigned. An array or object declared with _** can have its value be changed or reassigned.

   - `let`, `let`
   - `const`, `const`
   - `let`, `const`
   - `const`, `let`

### 7

1. Template Literals - `template-literals`, `syntax`

   ❓ In the code below, we can re-write the console log statement using template litereals as follows:

   ```JavaScript
       const name = "Super Coder";
       const age = 30;
       console.log("In 30 years, " + name + " will be " + (age + 30) + " years old");
   ```

   - `` console.log(`In 30 years, ${name} will be ${age + 30} years old`); ``
   - `console.log("In 30 years, $(name) will be $(age + 30) years old");`
   - `` console.log(`In 30 years, $(name) will be $(age + 30) years old`); ``
   - `` console.log('In 30 years, $`name` will be $`age + 30` years old'); ``

### 8

1. ES6 Objects - `objects`, `ES6`, `syntax`

   ❓ What is the value of myObject.friends in the ES6 code below?

   ```JavaScript
       let friends = "john";
       let myObject = {
           friends
       }
   ```

   - john
   - friends
   - undefined
   - none of the above - this will cause a syntax error

### 9

1. ES6 String Methods - `startsWith`, `endsWith`, `includes`, `ES6`, `vocab`

   ❓ \_\_\_ is a new ES6 string method.

   - `startsWith()`
   - `endsWith()`
   - `includes()`
   - all of the above

### 10

1. map Method - `map`, `ES6`, `syntax`

   ❓ What will be logged by the code below?

   ```JavaScript
       const snacks = [
           {name: "pizza", calories: 300},
           {name: "candy", calories: 200},
           {name: "chips", calories: 100}
       ];
       const names = snacks.map(function(snack) {
           return snack.name;
       });
       console.log(names);
   ```

   - `pizzacandychips`
   - `{pizza: "", candy: "", chips: ""}`
   - `["pizza", "candy", "chips"]`
   - `["chips"]`

### 11

1. Array Method - `filter`, `ES6`, `vocab`

   ❓ \_\_\_ is an array method that creates a new array with elements that pass the test of a provided function.

   - `map()`
   - `reduce()`
   - `filter()`
   - `startsWith()`

### 12

1. Arrow Functions - `arrow-functions`, `syntax`

   ❓ Rewrite the forEach function in the code below as an arrow function:

   ```JavaScript
       const snacks = [
           {name: "pizza", calories: 300},
           {name: "candy", calories: 200},
           {name: "chips", calories: 100}
       ];
       snacks.forEach(function(snack) {
           console.log(snack.name, snack.calories);
       });
   ```

   - `snacks.forEach => console.log(snacks.name, snacks.calories);`
   - `snacks.forEach(snack => console.log(snack.name, snack.calories));`
   - `snacks.forEach => return (console.log(snacks.name, snacks.calories));`
   - `snacks.forEach(snack => return {console.log(snack.name, snack.calories)});`

### 13

1. Lexical binding - `arrow-functions`, `lexical-binding`, `this`, `vocab`

   ❓ Arrow functions lexically bind the `this` value which means they use the `this` of \_\_\_.

   - their child functions
   - their enclosing content
   - the global scope
   - none of the above

### 14

1. Destructuring Objects - `destructuring`, `syntax`

   ❓ Using destructuring, we can rewrite the last two lines of the code below that define occupation and birthplace as follows:

   ```JavaScript
   const superman = {
       occupation: "superhero",
       birthplace: "krypton"
   }
   const occupation = superman.occupation;
   const birthplace = superman.birthplace;
   ```

   - const {occupation, birthplace } = superman;
   - const (superman) => {occupation, birthplace};
   - const {occupation..birthplace} => superman;
   - const {occupation..birthplace = superman};

### 15

1. Purpose of Babel - `transpiling`, `babel`, `vocab`

   ❓ The primary purpose of a transpiling tool like Babel is to:

   - improve code execution performance
   - avoid syntax errors
   - convert newer unsupported JS to JS the browser understands
   - standardize coding styles

### 16

1. Exporting ES2015 modules - `exports`, `vocab`

   ❓ With ES2015 modules, a file can have multiple **_ exports but only one _** export.

   - named, default
   - variable, primary
   - anonymous, named
   - anonymous, variable

### 17

1. Classes - `class`, `vocab`, `syntax`

   ❓ Using the Cat class defined below, a new hungry and sleepy cat would be initialized with \_\_\_.

   ```JavaScript
   class Cat {
       constructor(hungry = false, sleepy = false) {
           this.isHungry = hungry;
           this.isSleepy = sleepy;
       }

       feed() {
           this.hungry = false;
       }
   }
   ```

   - `const myCat = var Cat(hungry, sleepy);`
   - `const myCat = new Cat(true, true);`
   - `const myCat = var Cat(isHungry, isSleepy);`
   - `const myCat = new Cat(false, false);`

### 18

1. Alternative Package Manager - `yarn`, `vocab`

   ❓ \_\_\_ is an open source JavaScript package manager alternative to npm.

   - create-react-app
   - yarn
   - React
   - JSX

### 19

1. React benefits - `react`, `tech-knowledge`

   ❓ Benefits of using React include:

   - Fast learning curve compared to other JS libraries like Angular, Ember
   - Components based structure that allows separating the application into reusable pieces
   - Ability to code for the client, for servers using node, or mobile apps with React Native
   - All of the above

### 20

1. JS Syntax Extension - `JSX`, `tech-knowledge`

   ❓ **_ is a syntax extension to JavaScript that looks like _**, and makes it easy to describe the UI a component should produce.

   - JSX, HTML
   - React, Handlebars
   - yarn, npm
   - JSX, React

### 21

1. Create React App - `create-react-app`, `syntax`

   ❓ After scaffolding a React app using Create React App, it can be started up in developer mode with the command \_\_\_.

   - `npm init`
   - `yarn start`
   - `open src`
   - `explorer src`

### 22

1. React App Execution - `create-react-app`, `tech-knowledge`

   ❓ Execution of a React application built with create-react-app begins with the **_ located in the _** folder.

   - index.js, src
   - index.html, public
   - App.js, src
   - index.js, public

### 23

1. React Static assets - `react`, `tech-knowledge`

   ❓ External CDNs can be linked in the **_ file, and static assets placed in the _** folder, that will not be processed by Babel or Webpack.

   - index.js, src
   - index.html, public
   - App.js, src
   - index.js, public

### 24

1. Components placement - `react`, `components`, `tech-knowledge`

   ❓ Components should be placed in the \_\_\_ folder.

   - src
   - public
   - node_modules
   - package

### 25

1. JSX Requirement - `react`, `JSX`, `tech-knowledge`

   ❓ When using JSX inside of JavaScript, the \_\_\_ must be imported.

   - node modules
   - components
   - React library
   - static files

### 26

1. ReactDOM.render - `react`, `ReactDOM.render`, `tech-knowledge`

   ❓ The second argument to the ReactDOM.render method is \_\_\_.

   - index.js containing components to be rendered
   - index.html containing links to other assets
   - the real DOM element that the React app should be rendered inside
   - the name of the React npm package

### 27

1. Rendering multiple JSX elements - `react`, `JSX`, `syntax`

   ❓ Normally when rendering multiple JSX elements, they should be \_\_\_.

   - enclosed within a parent element
   - separated into different files
   - located in distinct components
   - this is not possible

### 28

1. JSX Class Exception - `JSX`, `class`, `syntax`

   ❓ Since `class` is a reserved word in JavaScript, HTML classes are referred to with \_\_\_ in JSX.

   - `classID`
   - `classJSX`
   - `className`
   - `Class`

### 29

1. Closing JSX Elements - `JSX`, `syntax`

   ❓ Self-closing JSX elements must be closed with \_\_\_.

   - `/`
   - `*`
   - `#`
   - `.`

### 30

1. Commenting JSX - `JSX`, `syntax`

   ❓ Inside JSX, comments can be written inside curly braces as follows:

   - `// comment //`
   - `:: comment ::`
   - `/* comment */`
   - `<!-- comment -->`

### 31

1. JS Expresssions in JSX - `JSX`, `syntax`

   ❓ Entire JavaScript expressions can be placed within \_\_\_ and evaluated inside JSX code.

   - parentheses
   - curly braces
   - forward slashes
   - square brackets

### 32

1. Component Styles - `components`, `tech-knowledge`

   ❓ Components can have their own individual styles defined using:

   - CSS stylesheets only
   - inline styles only
   - CSS stylesheets, inline styles, or a mix of the two
   - This is not possible - Components cannot have individual styles

### 33

1. JSX Style Properties - `JSX`, `props`, `tech-knowledge`

   ❓ A JSX style property must be \_\_\_.

   - an object
   - a string
   - an array
   - a function

### 34

1. Passing Props - `react`, `props`, `components`, `tech-knowledge`

   ❓ Props can be passed into a component by:

   - Setting an attribute to the rendered component's tag
   - Passing an expression between the component's tags
   - Both of the above
   - None of the above

### 35

1. Prop Types - `react`, `props`, `tech-knowledge`

   ❓ The type of data that can be passed as a prop is \_\_\_.

   - strings and numbers
   - arrays
   - components
   - all of the above

### 36

1. Data Flow - `react`, `tech-knowledge`

   ❓ In React apps, data flows from \_\_\_.

   - parent to child only
   - child to parent only
   - child to parent and parent to child
   - none of the above - data does not flow

### 37

1. Importing Folders - `react`, `import`, `tech-knowledge`

   ❓ When importing a component's folder instead of a file, the folder's \_\_\_ file is imported by default if it exists.

   - public.js
   - main.js
   - index.js
   - App.js

### 38

1. Component Data - `react`, `state`, `vocab`

   ❓ To associate data with components, and keep track of any values that need to update the UI when changed, \_\_\_ can be used.

   - state
   - variables
   - props
   - arrays

### 39

1. Updating Data - `react`, `setState`, `vocab`

   ❓ Using the \_\_\_ method to update component data causes the component to re-render itself and all its children with the new data.

   - render()
   - update()
   - setState()
   - new()

### 40

1. React Event Handlers - `react`, `onClick`, `onSubmit`, `onChange`

   ❓ \_\_\_ is a common React event name.

   - onClick
   - onSubmit
   - onChange
   - all of the above

### 41

1. Child Component Update - `react`, `components`, `tech-knowledge`

   ❓ Child components can update their parent's state by \_\_\_.

   - passing them a method created in the parent
   - calling the render() method
   - reversing the state
   - this cannot be done because data only flows from parent to child

### 42

1. Rendering JSX - `react`, `render`, `tech-knowledge`

   ❓ The \_\_\_ method built in to React returns the JSX that a component should render and must be included in every class component.

   - setState()
   - render()
   - preventDefault()
   - extend()

### 43

1. Component Lifecycle Event - `react`, `componentDidMount`, `tech-knowledge`

   ❓ The \_\_\_ method is a component lifecycle event built into React that automatically runs once after the component is rendered for the first time.

   - handleInputChange()
   - render()
   - get()
   - componentDidMount()

### 44

1. App Component Structure - `react`, `stateless`, `stateful`, `tech-knowledge`

   ❓ Most components should be **_ and concerned mainly for some part of the app's presentation. Few components should be _** and concerned for the app's business logic and controlling presentational components.

   - stateless, stateful
   - eventful, stateless
   - stateful, eventfull
   - statefull, stateless

### 45

1. JSX Decisions - `react`, `JSX`, `ternary`

   ❓ Since `if` statements cannot be written inside JSX curly braces, instead \_\_\_ can be used for simple conditional logic.

   - switch statements
   - ternary expressions
   - arrow functions
   - none of the above - decision logic is not possible in JSX

### 46

1. React Router - `react-router`, `tech-knowledge`

   ❓ The React Router library allows rendering of other components based on \_\_\_.

   - server inputs
   - total number of components
   - current URL path
   - named order of components
