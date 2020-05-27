## JavaScript and jQuery

### 1

1. Object Syntax - `javascript` `syntax` `object`

   ❓ When defining an object, its property-value pairs are enclosed within \_\_\_\_.

   - parentheses
   - curly brackets ✔️
   - colons
   - square brackets

### 2

1. Object Bracket Notation - `javascript` `syntax` `object` `bracket notation`

   ❓ In terms of objects, how would one use bracket notation to refer to a value that is not a variable?

   - object["property"] ✔️
   - object(property)
   - object("property")
   - object-property

### 3

1. Object Dot Notation - `javascript` `syntax` `object` `dot notation`

   ❓ In terms of objects, how would one use dot notation to refer to a value?

   - object.[property]
   - property.object
   - object.property ✔️
   - property.[object]

### 4

1. Object Self Referencing - `javascript` `object` `this` `vocab`

   ❓ The \_\_\_\_ keyword is simply a way to reference the object itself.

   - object
   - item
   - it
   - this ✔️

### 5

1. Object Functions - `javascript` `object` `method` `vocab`

   ❓ Functions that are properties of objects are also known as \_\_\_\_.

   - steps
   - tasks
   - methods ✔️
   - functions

### 6

1. Objects Example - `javascript` `object` `method`

   ❓ What will be logged to the console with the following code?

   ```JavaScript
       var myObject = {
           myNumber: 30,
           myFunction: function() {
               this.myNumber += 30;
               console.log(myObject.myNumber);
           }
       }

       myObject.myFunction();
   ```

   - 30
   - 60 ✔️
   - 3030
   - undefined

### 7

1. Variable Scope - `javascript` `scope` `vocab`

   ❓ Variables that we can refer to everywhere are known as \_\_\_\_ variables.

   - global ✔️
   - permanent
   - eternal
   - primary

### 8

1. Function Arguments - `javascript` `functions` `syntax` `scope`

   ❓ What will be logged to the console with the following code?

   ```JavaScript
       var myFunction = function(someCar) {
           var myCar = someCar;
       }

       myFunction("Honda");

       console.log(myCar);
   ```

   - someCar
   - myFunction
   - Honda
   - ReferenceError: myCar is not defined ✔️

### 9

1. Alternative to For Loops - `javascript` `forEach` `vocab` `JS vs jQuery`

   ❓ What is another JavaScript method that is used to loop over arrays or Objects?

   - loopOver
   - readAll
   - \$.each
   - forEach ✔️

### 10

1. Browser Interpretation - `javascript` `DOM` `vocab`

   ❓ Effectively, the \_\_\_\_ is the version of HTML / CSS interpreted by the browser.

   - DOM ✔️
   - program
   - debugger
   - console

### 11

1. Populating Elements - `javascript` `innerHTML` `vocab` `JS vs jQuery`

   ❓ Without using jQuery, HTML elements on a page can be populated using the \_\_\_\_ property.

   - .text()
   - innerHTML ✔️
   - div
   - script

### 12

1. Coding a New Div - `javascript` `createElement` `vocab` `JS vs jQuery`

   ❓ Without using jQuery, we can code a new div with the following:

   - createElement("div") ✔️
   - \$("&lt;div&gt;")
   - makeDivElement()
   - createNew("div")

### 13

1. Attaching to an Element - `javascript` `appendChild` `vocab`

   ❓ Once a new div has been coded, it can be attached to an element on the page with the \_\_\_\_ JavaScript method.

   - placeDiv
   - appendChild ✔️
   - createPosition
   - setElement

### 14

1. Changing Element CSS Styling - `javascript` `setAttribute` `vocab` `JS vs jQuery`

   ❓ Without using jQuery, a CSS style of an element can be manipulated using the \_\_\_\_ method.

   - adjustCSS
   - .css()
   - setAttribute ✔️
   - setStyle

### 15

1. What is jQuery? - `jQuery` `vocab`

   ❓ jQuery is a cross-platform JavaScript \_\_\_\_ for easier client-side scripting.

   - command
   - template
   - table
   - library ✔️

### 16

1. jQuery Purposes - `jQuery` `vocab`

   ❓ jQuery can be useful for tasks such as:

   - Dynamically inserting, updating, or removing HTML
   - Registering click or other change events
   - Downloading data from databases
   - All of the above ✔️

### 17

1. jQuery Selectors - `jQuery` `syntax`

   ❓ A div with the id of myDiv can be targeted using jQuery by typing:

   - \$("#myDiv") ✔️
   - \$(.myDiv)
   - \$("myDiv")
   - \$div

### 18

1. jQuery Button Creation - `jQuery` `syntax` `button`

   ❓ A new button can be created using jQuery and assigned to a variable using the following code:

   - `var newButton = $newButton;`
   - `var newButton = $("<button>");` ✔️
   - `var newButton = create.button;`
   - `var newButton = button("new");`

### 19

1. Attaching divs with jQuery - `jQuery` `syntax` `append`

   ❓ A page contains a div with the id "emptyDiv". jQuery may be used to attach a div named newDiv to it with the following code:

   - `$(emptyDiv).appendChild(newDiv);`
   - `$("emptyDiv").appendChild(newDiv);`
   - `$("#emptyDiv").append(newDiv);` ✔️
   - `$("#emptyDiv").attach(newDiv);`

### 20

1. Iterating with jQuery - `jQuery` `each` `vocab`

   ❓ The \_\_\_\_ jQuery method can be used to iterate over an array without using a for loop.

   - .loop
   - .iterate
   - .every
   - .each ✔️

### 21

1. HTML Loading Delay - `javascript` `vocab` `document.ready`

   ❓ \_\_\_\_ makes sure that our JavaScript code doesn't get run until the HTML document is finished loading.

   - document.ready ✔️
   - page.loaded
   - document.complete
   - process.ended

### 22

1. jQuery Listeners - `jQuery` `on-click` `syntax`

   ❓ We can use jQuery to create a listener that listens for a click on all elements with the class myClass using:

   - `$(".myClass").on("click", function() { ... });` ✔️
   - `$(".myClass").on(function() { ... });`
   - `$".myClass").on("press", function() { ... });`
   - `$(".myClass").on(clickMe!, function() { ... });`

### 23

1. jQuery Attaching to Top of Element - `jQuery` `prepend` `vocab`

   ❓ To attach an element to the beginning of another element, we can use the \_\_\_\_ jQuery method.

   - .append
   - .attach
   - .start
   - .prepend ✔️

### 24

1. jQuery Options - `jQuery` `syntax`

   ❓ Writing \_\_\_\_ is equivalent to writing \$() when using the jQuery library.

   - jQuery() ✔️
   - select()
   - click()
   - library()

### 25

1. jQuery Data Attributes - `jQuery` `attr` `vocab`

   ❓ The **\_** jQuery method can be used to place attributes on HTML elements

   - .attribute
   - .append
   - .attr ✔️
   - .info

### 26

1. jQuery Element Classes - `jQuery` `vocab` `addClass`

   ❓ We can give classes to elements using the \_\_\_\_ jQuery method.

   - .addClass ✔️
   - .giveClass
   - .setClass
   - .attrClass

### 27

1. Button Displayed Name with jQuery - `jquery` `text` `vocab`

   ❓ A button with an id of myButton can be set to have its displayed name show as "SuperButton" with the following jQuery code:

   - `$("#myButton").name("SuperButton");`
   - `$("#myButton").text("SuperButton");` ✔️
   - `$("#myButton").set("SuperButton");`
   - `$#myButton("SuperButton");`

### 28

1. More JavaScript Scoping - `javascript` `scope` `vocab`

   ❓ In JavaScript, \_**\_ functions can access \_\_** variables, but not vice versa.

   - parent, child
   - all, child
   - parent, all
   - child, parent ✔️

### 29

1. What is this? - `javascript` `this` `Window`

   ❓ What will the code below log to the console when run in a browser?

   ```JavaScript
       function myFunction() {
           console.log(this);
       }

       myFunction();
   ```

   - this
   - Window ✔️
   - myFunction
   - null

### 30

1. Parsing Objects - `javascript` `object` `dot notation`

   ❓ With the code below, how would you log "lizard" to the console?

   ```JavaScript
       var group = {
           large: {
               creatures: "blue whale",
               medium: {
                   creatures: ["zebra", "rhino", "hippo"],
                   small: {
                       creatures: "cat",
                       tiny: {
                           creatures: ["snail", "hamster", "lizard", "spider"]
                       }
                   }
               },
               other: {
                   creatures: "human"
               }
           }
       };
   ```

   - `console.log(group.large.medium.small.tiny.creatures[2]);` ✔️
   - `console.log(group.tiny.creatures[2]);`
   - `console.log(group.tiny.creatures.lizard);`
   - `console.log(group.large.medium.small.tiny.creatures[lizard]);`
