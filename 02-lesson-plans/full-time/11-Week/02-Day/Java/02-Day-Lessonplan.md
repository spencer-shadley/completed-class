## Day 2 - OOP Continued

### Overview

Today's lesson plan will introduce students to additional essentials of core Java and design &mdash; specifically: Error handling and Exceptions; Generics; and Immutable classes.

`Summary: Complete Activities 12-19 in Unit 21`

##### Instructor Priorities

After today's lesson, students should be able to:

* Use classes and interfaces to separate implementation from interface;

* Use interfaces to describe the behavior of a set of classes.

##### Instructor Notes

* Have your TAs refer to the [Time Tracker](02-Day-TimeTracker.xlsx) to stay on track.

- - -

### Class Objectives

After today's lesson, students should be able to:

* Preempt and recover from checked exceptions;

* Specify a method's checked exceptions;

* Implement immutable classes;

* Use assertions to design code by contract.

- - -

### 1. Instructor Do: Describing Behaviors with Interfaces (0:12)

**Objectives Met**

* Students should be able to use interfaces to define APIs

- - -

* Point out that our abstract `Shape` class provides behavior for classes that extend it &mdash; our `Square` class gets a `perimeter` method for free, for example.

  * Explain that this is called **implementation inheritance** &mdash; subclasses _inherit_ an implementation of `perimeter`.

* Point out that the `Shape` class also functions to _describe_ its subclasses with the abstract method `area`.

  * `Shape` doesn't provide an implementation of `area`, but it does tell users that their subclasses _must_ have an `area` method.

* Point out that `Shape` does two things.

  * By defining an `area` method signature but not implementing it, in some cases, it tells us _what behaviors its subclasses should have_.

  * By implementing methods like `getSides` and `perimeter`, in other cases, it tells us _how its subclasses behave_.

* Explain that Java has a tool that lets us _only_ define what behaviors a subclass should have, _without_ providing _any_ implementations.

  * Explain that these tools are called _interfaces_.

  * Explain that they allow us to define what an object will look like, and what behaviors it will have, but let us define the specifics in our subclasses.

    * Explain that this flexibility can be useful when working with classes like `Square` or `Triangle`.

* Explain that an interface is effectively just a list of things you can do with an object.

  * The interface for our `Triangle`, for example, includes the following methods:

    * `area`, defined on `Triangle`;

    * `getSides`, defined on `Shape`;

    * `perimeter`, defined on `Shape`.

  * Point out that the interface for `Triangle` _does not_ include `getHeight`, because this is `private`.

* Open up [12-Ins_Interfaces-Demo/com/examples/Animal.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/12-Ins_Interfaces-Demo/com/examples/Animal.java) in 3-Interfaces.

  * Explain that this is the version of `Animal` we had before.

  * Point out that `AnimalOld` has a `name` field.

  * Point out that, while an animal _can_ have a `name`, not _all_ animals do.

    * Point out that, from a modeling perspective, putting a `name` field on an Animal class isn't good practice.

  * Point out that only _pets_ have names. So, we might want to put `name` in a class called `Pet`, and extend from that.

    * Remind students that we can only have one parent class, so this isn't an option in Java.

    * Explain that this is one of the problems interfaces solve.

  * Delete the `name` field and constructor from `Animal.java`.

* Open up [12-Ins_Interfaces-Demo/com/examples/Pet.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/12-Ins_Interfaces-Demo/com/examples/Pet.java).

  * Point out that `Pet` is declared with the keyword `interface`, _not_ class.

  * Point out that `Pet` contains the field `name`, just like any class could.

  * Point out that `Pet` contains the abstract method `cuddle`.

    * Explain that interfaces _can only contain_ abstract methods, but that we don't need to mark them `abstract`. Since they _have_ to be abstract, Java doesn't need to be told.

    * Point out that we (unfortunately) can't list the fields an object should have in an interface. But, we can specify behaviors that imply the existence of certain fields, as we've done in `Pet` with `name`.

![Our Pet interface, with a name field and cuddle method.](Images/8-interface.png)

* Our Pet interface, with getName (implying there is a `name` field) and cuddle method


* Next, open up [12-Ins_Interfaces-Demo/com/examples/Dog.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/12-Ins_Interfaces-Demo/com/examples/Dog.java).

  * Point out that we still extend `Animal`, but now we also implement Pet.

    * Explain that `implements` just means: "I guarantee that this class has all of the fields and methods you mentioned in Pet.java."

  * Point out that we've added a `private final String name` to `Dog`.

  * Point out that we've also added a `cuddle` method to `Dog`.

![Our updated Dog class, which now implements the Pet interface.](Images/8-dog-updated.png)

_Our updated Dog class, which now implements the Pet interface._

* Open up [12-Ins_Interfaces-Demo/com/examples/Cat.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/12-Ins_Interfaces-Demo/com/examples/Cat.java), and demonstrate that we've added the same field and method there.

![Our updated Cat class, now implementing the Pet interface.](Images/8-cat-updated.png)

_Our updated Cat class, now implementing the Pet interface._

* Reassure students that it's okay if this feels uncomfortable to them. This is all pretty abstract, and takes some getting-used-to.

  * Take a moment to answer student questions.

* Open up [12-Ins_Interfaces-Demo/com/examples/Test.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/12-Ins_Interfaces-Demo/com/examples/Test.java), and demonstrate that we still write our client code the same way.

  * Point out that there's one potential difference: Now, we can instantiate a `Cat` or `Dog` as a `Pet` _or_ an `Animal`.

  * Explain that objects are considered subclasses of the interfaces they implement, as well as the classes they extend.

  * Explain that this gives us great flexibility in defining our objects, because we can implement as many interfaces as we want, but only extend one superclass.

  * Remind students that this is called **polymorphism** &mdash; a `Pet` can be either a `Cat` or a `Dog`.

  * Point out that `cuddle` is implemented identically in both `Cat` and `Dog`.

    * Ask a student if this is optimal.

      * Ask them to explain why.

    * Point out that it would be a bad idea to put it into `Animal`, so we can't solve the problem that way.

    * Explain that, since we refer to `this.name` in the `cuddle` method, we can't put it into the interface.

      * The easiest way to help students understand why is to point out that _any_ class can implement `Pet`, but not all of them necessarily have a `name` attribute.

    * Explain that this is an intrinsic limitation to using interfaces in Java.

    * Explain that, if we _don't_ use a `this` reference, we actually _can_ put the method in the interface by using the `default` keyword.

      * Change the `cuddle` method to simply print `"Cuddle cuddle!"`, and add it as a default method in `Pet`.

      * Compile and run your code to demonstrate that it works just as before.

![Using polymorphism to initialize a Dog and Cat as Pets.](Images/8-polymorphism.png)

_Using polymorphism to initialize a Dog and Cat as Pets._

![Java 8 allows us to define default methods in interfaces.](Images/8-default-methods.png)

_Java 8 allows us to define default methods in interfaces._

* Acknowledge that interfaces can be difficult to understand at first.

  * Reassure students that this is the kind of thing that becomes intuitive with time and experience. The important thing right now is to understand the syntax and _think_ about these design issues as you code. Finding the "right answer" or implementing the "right design" isn't the point at this stage.

### 2. Everyone Do: Interface Case Study (0:12)

* Explain that the easiest way to understand interfaces, and object oriented design in general, is reading good examples of it.

  * Where better to start than Java itself?

* Explain that we'll take some time to discuss some interfaces used in the Java language.

* Explain that a "collection" is any data structure that you can put multiple objects in.

  * Explain that Java defines a _lot_ of collections &mdash; it has ArrayLists, Sets, HashMaps...

  * Point out that all of these collections have certain things in common—like the ability to add elements, or check for emptiness &mdash; but that each collection does these things differently.

    * Point out that an ArrayList would insert an item differently than a HashMap would.

    * Explain that this is why a collections _interface_ makes more sense than a collections _superclass_.

* Open up the documentation for the [Java Collections interface](https://docs.oracle.com/javase/7/docs/api/java/util/Collection.html), and scroll down to the **Method Summary**.

  * Choose a few methods on the list, and further discuss why it makes sense to specify them in an interface rather than implement them in a superclass.

    * Have students compare the behavior of `ArrayList` and `Hashmap` (which they know about), and `Set` (which they don't).

      * Briefly explain that a `Set` is just a "bag" of unique items. It can contain unique objects, and have a size, but those objects **are not ordered**.

  * As an example, ask students to discuss why `ArrayList` and `HashMap` can't have the same `add` method.

    * Discussion is more important than correct answers. But, before moving on, tell students that it's because an `ArrayList` just adds the item to an array, whereas `HashMap` has to keep track of an _association_. Both data types can add elements, but have to do so in intrinsically different ways.

  * What about `clear`? `size`?

    * `ArrayList` and `Set` remove a single object reference. A `HashMap` has to remove both a key _and_ an associated value.

    * `ArrayList` and `Set` just return the number of items they contain. A `HashMap` returns the number of key/value pairs, which is _not_ the number of objects "inside" of it (it's half that number).

  * Feel free to discuss other interfaces, as well. Consider reviewing the [List interface](https://docs.oracle.com/javase/8/docs/api/java/util/List.html), which implements `Collection`.

### 10.  Partners Do: Design Printable and DatabaseService Interfaces (0:12)

* Slack out the following instructions to students.

* **Instructions**:

  * This activity will give you some experience designing and implementing interfaces. Consider the class of items you can print. This includes books and magazines, but might also include web pages and PDFs. As a designer, do you want to consider _all_ printable items? Or do you want to restrict yourself to only one subset? Can you account for the behavior of both? In a real project, requirements will define boundaries, but for now, draw them based on what you think is possible.

  * Once you've got a working list of things you can print, come up with some methods that each of them should have.

  * Collect these methods into an interface called `Printable`.

  * Once you're satisfied with your `Printable` interface, choose some of the classes you thought of earlier, and make them implement `Printable`. Instead of implementing each method, just comment out what each might do in pseudocode. Does it look like each of your classes will implement their `Printable` methods uniquely? Discuss with your partner whether interfaces seem like a useful approach, here. If not, can you think of any alternatives?

  * You'll have to switch gears a bit for the next part of this activity. Take a moment to discuss what an Object Relational Mappers (ORM) is with your partner. To refresh your memory, they're tools that let you talk to _any_ database. Sequelize, for example, lets you use MySQL; PostgreSQL; or MongoDB.

  * Obviously, MySQL, PostgreSQL, and MongoDB are each very different tools—otherwise, people wouldn't make such a big deal about choosing between them! The advantage to a tool like Sequelize is that it lets us use each of them without worrying about the individual details. In other words, Sequelize defines a(n) common **\_** for interacting with _any_ database (fill in the blank).

  * Imagine you're in the early stages of building such an ORM. You want your users to be able to use a single set of methods to talk to any database they'd like. What Java tool do you use to specify these methods?

  * Let's call your specification a `DatabaseService`. Create a file for it; declare it properly; and brainstorm some methods you think belong on this service. You'll probably want to be able to `add` or `insert` items, for instance. What else? Don't worry about coming up with _everything_. Just get a few good examples down. Be prepared to discuss your choice of methods with the class!

### 11. Instructor Do: Review Activity (0:08)

* Ask a group to explain what different classes they could come up with that you might be able to print.

  * Our examples are `Book` and `PDF`, but there are obviously many possible answers.

  * We chose these to demonstrate the wide variety of "printable objects".

    * Point out that the fact that there are so many things that are `Printable` helps clarify another reason that interfaces are useful. It just wouldn't make sense for a `Book` and a `PDF` to share a superclass just because you can print both of them.

    * Emphasize that interfaces are useful for defining _common behaviors_ amongst _unrelated objects/classes_.

* Ask a group to explain what methods they put in their `Printable` class.

  * Our examples include `print`; `getPageCount`; and `renderForPrinting`. But students will have some excellent alternatives.

* Ask a group to explain if their example classes would implement their `Printable` methods uniquely.

  * Our examples would, but this is by design. Students might have good examples of common implementations.

    * In this case, good solutions might include:

      * Using patterns like mixins (in JavaScript);

      * Using language features that allow you to implement interfaces that hold state, like traits in Scala or Groovy; or

      * If possible, redesigning your class hierarchy such that your common behaviors _can_ logically be extracted into a superclass.

    * Students aren't expected to come up with these particular answers, but they're available for you to refer to if the discussion calls for it.

* Ask a group to answer the Sequelize question: Sequelize defines a(n) **interface** for interacting with databases.

  * API is a fine alternate answer. If someone uses this answer instead, commend the response, and point out that the terms "interface" and "API" are often used interchangeably.

* Ask a group to answer the first `DatabaseService` question:

  * What Java tool do you use to specify \[the methods of an ORM]? | The `interface`.

* Ask a few groups to explain what methods they included on their `DatabaseService` interface, and why.

  * More importantly, ask a few groups to explain the logic as to why this should be an interface.

  * The reason is that `DatabaseService` specifies a set of behaviors that a tool should have. But, because the tool will have to talk to MySQL, _or_ PostgreSQL, _or_ MongoDB, etc., its implementation will have to change based on which database its configured to talk to.

  * **This is the most important point for students to understand**. Try to ensure that at least three groups are able to articulate this logic to you.

* After reviewing the exercise, congratulate students on having made it through a tough lesson.

  * Point out that, while OOP is popular enough that we often take it for granted, it really is a nuanced subject.

  * Remind students that the purpose of today's lesson was both to introduce new, essential Java syntax, and introduce some fundamental ideas and best practices of OOP design philosophy.

  * Encourage students to think about these design problems _every time_ they have to build a new application. The brief questions and guidelines in [Supplements/ThingsToRemember.md](Supplements/ThingsToRemember.md) are useful starting points at this stage.

  * Remind students that today's lesson introduced the [Supplements/FourPrinciplesOfOOP.md](Supplements/FourPrinciplesOfOOP.md), which can be important for interviews and reading more about OOP.

    * Emphasize that it's really more important to understand the concepts than know the lingo.

    * But, point out that the vocabulary is easy to remember, so it's worth reviewing from time to time.

  * Remind students that the real advantage to learning principles of design is the fact that they can use them in _any_ language, on _any_ project.

    * Point out that JavaScript doesn't have classes the same way that Java does.

    * Point out this means we can't build class hierarchies or use interfaces the same way.

    * But, point out that we _can_ apply other principles &mdash; we can create and compose small, highly specialized objects to build big systems out of small pieces and we can use prototypes to share methods, for example.

    * Finally, point out that most other languages students will use later &mdash; Python, Ruby, PHP, C#, etc. &mdash; have classes very similar, if not identical, to Java's. In these languages, they can apply these principles _directly_.

      * Emphasize that students should feel particularly empowered to be grappling with this material at this stage. Reassure them that, while it's hard now, they _will_ master it; and when they do, it will be a skill that they will apply in _all_ of their languages, and on _every_ project.

### 7. Instructor Do: Exceptions & Error Handling (0:20)

* Point out that students have now seen a substantial amount of core Java.

* Explain that one important point we have yet to cover is that of error handling.

  * Point out that it's common for programs to run into problem conditions that interrupt execution.

  * Explain that programming languages have tools to allow you to _catch_ problems when they occur, and, if possible, recover from them, and continue on.

* Explain that, in Java, there are two types of "problem conditions".

  * One is called an **error**. Explain that, in Java, errors represent _serious_ problems that you shouldn't bother dealing with &mdash; like, say, the network goes down; the hard drive gets corrupted; or the operating system hiccups for whatever reason. Students won't be programming around errors. To quote the [Java docs](http://docs.oracle.com/javase/7/docs/api/java/lang/Error.html)

    > An Error...indicates serious problems that a reasonable application should not try to catch.

  * The other type of problem condition is called an **exception**. The term comes from the fact that problem conditions are **exception**-al occurrences.

* Explain that Java has `Error` and `Exception` classes specifically for making it easier to deal with such problem conditions.

  * Explain that, whenever an exception occurs, Java creates an object that contains information about what caused it.

    * Explain that, when this happens, your program stops running, and Java looks for a piece of code that knows how to deal with the error information it generated.

    * If it can't find any code that knows how to deal with the error, it kills execution and prints a stacktrace.

* Explain that, if we're proactive, we can identify portions of code where exceptions might occur, and tell Java what to do about it should they occur.

* Open up the [documentation for Exception](https://docs.oracle.com/javase/7/docs/api/java/lang/Exception.html?is-external=true), and scroll down to the **Method Summary**.

  * Reiterate that, when Java creates a bare `Exception`, it includes information about what caused the error.

  * Explain that exceptions can also be created with a `String message` to make them a bit friendlier.

  * Finally, explain that exceptions can also be created with a `Throwable cause`.

    * Explain that `Throwable` is the superclass for `Error` and `Exception`.

      * Basically, a `Throwable` is "anything that went wrong."

    * Explain that, sometimes, one problem can cause another.

      * For example, if the network dies when you're trying to download a picture, it might cause your program to complain that it can't do anything with an empty file. So, a `NetworkError` might cause a `FileEmptyException`.

      * The reason we have the `Exception(String message, Throwable cause)` constructor is just so we can keep track of all the details whenever something goes wrong.

![The three main constructors for the Exception class.](Images/1-exception-constructors.png)

_The three main constructors for the Exception class._

* Explain that we'll next turn our attention to how to actually deal with exceptions.

* Open up [14-Ins_Exceptions-Demo/com/exceptions/Throw.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/14-Ins_Exceptions-Demo/com/exceptions/Throw.java).

  * Explain that `throw new Exception("Oh no! A disaster!")` tells Java that an exception has occurred, and that it should look for code that knows how to handle it.

![Manually throwing an Exception.](Images/1-throwing-exceptions.png)

_Manually throwing an Exception._

* Point out that there is no such code in this file.

* Try to compile and run the file via `run.sh`. Point out that Java prevents us from doing so

* Run `Throw.java` via the `run.sh` script, and demonstrate that the exception we threw kills the program.

![Note that Java forces us to handle the exception we threw.](Images/1-must-handle-exception.png)

_Note that Java forces us to handle the exception we threw._

* Reopen `Throw.java`, and wrap the `throws` statement in `try`/`catch` blocks.

![Handling the Exception with try/catch.](Images/1-try-catch.png)

_Handling the Exception with try/catch._

* Explain the syntax of these blocks.

  * Explain that `try { ... }` tells Java: "Run the code inside these brackets. If anything goes wrong, run the code in the `catch` block.

  * Explain that `catch (Exception e) { ... }` tells Java: "If an `Exception` causes a problem, run the code in this block to fix it."

  * In this case, we just print the history of the error (i.e., the stacktrace), and then continue execution.

![Nothing special to report &mdash; the program executes swimmingly.](Images/1-handled-exception.png)

_Nothing special to report &mdash; the program executes swimmingly._

* Explain that Java has many different exception types.

  * Explain that we can have several `catch` clauses, each for a different exception.

![Catching several exceptions.](Images/1-catching-multiple-exceptions.png)

_Catching several exceptions._

* Explain that, if you write code that _might_ throw an `Exception`, Java _requires_ you to wrap it in a `try`/`catch` block.

  * Explain that the compiler will point out exactly which exceptions these are, and exactly which lines you need to catch them on, so students shouldn't be intimidated by the prospect of having to learn them all.

  * When Java tells you what exceptions to catch, you should catch those specific exceptions. In other words, use the specific exception's name in your `catch` block, not `Exception`.

### 8. Students Do: Handling Errors  (0:20)

* Slack out [unsolved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/15-Stu_Exceptions/Unsolved).

* Slack out the following instructions.

* **Instructions**:

  * You've been provided a `Polygon` class, which you instantiate by passing a number of edges and a side length: `new Polygon(vertices, sideLength)`. The class requires that you pass a number greater than 3 for `vertices`, and a nonzero number for `sideLength`.

  * Instantiate a `Polygon` in `Test.java`, and try to call its `area` method. Use the `run.sh` script to run it. What happens? Can you explain why?

  * Wrap the appropriate blocks around your code. Just print to the console for now. The compiler will give you the name of the exceptions you need to catch. In your code, you'll need to put `Polygon.` in front of them. It will look like this: `Polygon.$EXCEPTION_NAME`.

  * Run your code again, and make sure everything works.

  * When you're done, try to print the `Polygon` you instantiated outside of the `try`/`catch` block. What happens? Can you explain why?

### 9. Instructor Do: Review Activity  (0:15)

* Ask a student to explain what happened when they tried to instantiate a `Polygon` class and run their program.

  * They should have gotten a compiler error about an `InsufficientVerticesException` and an `InvalidSideLengthException`.

* Ask a student to explain why this happened.

  * The reason this happened is because `Polygon` _might_ throw either of these exceptions on construction. So, Java _requires_ that we tell it what to do, just in case.

* Ask a student to explain the code they used to suppress the compiler error.

  * They should have used `try`/`catch`/`catch` blocks.

![Handling two exceptions with two catch blocks.](Images/3-multiple-catch-blocks.png)

_Handling two exceptions with two catch blocks._

* Explain that `e.printStackTrace` prints information about the error to the console.

* Explain that, since we're handling both exceptions the same way, we can use an alternate syntax to catch _either_ exception with a single `catch` block.

![Using "or" to catch either exception.](Images/3-catching-either.png)

_Using "or" to catch either exception._

* Ask a student to explain what happened when they tried to use their `Polygon` outside of the `try` block.

  * They should get a "cannot find symbol" error from the compiler..

  * Explain that this is because, if the code in the `try` block throws, the `Polygon` _won't_ be initialized &mdash; even if the `catch` block recovers the exception successfully &mdash; so it isn't in scope for the rest of the program.

* Ask a row to hypothesize how Java was able to tell us that there were exceptions we need to account for.

  * Students shouldn't know this yet, so let this be an open-ended question.

  * Explain that we actually have to tell Java if we want compiler warnings like this.

* Open up the `Polygon` class.

  * There's a possibly intimidating amount of code here, but the bulk of it is documentation.

  * Point out that the constructor has a `throws` clause.

    * Explain that, in addition to a return type and parameters, we can declare the exceptions that a function throws.

    * In this case, we declare that the constructor can throw two exceptions. So, whenever we use it, we have to account for both.

![A throws clause on the constructor.](Images/3-throws.png)

_A throws clause on the constructor._

* Scroll down to the bottom of the class, where the custom exceptions are defined.

  * Point out that we can put classes inside of classes. Explained that these are called **nested classes**.

    * Acknowledge that this looks a little strange at first, but that it's really quite straightforward to use.

    * Explain that we create the class like any other, and can refer to it inside of `Polygon` directly.

    * Explain that, in other classes, we have to specify that these live in `Polygon`. That's why we had to write `Polygon.InvalidSideLengthException` in `Test.java`.

![Custom exceptions in the Polygon class.](Images/3-custom-exceptions.png)

_Custom exceptions in the Polygon class._

* Point out that defining a custom exception is quite straightforward. We just extend `Exception` and override its `String message` constructor.

  * Point out that this lets us use custom exception names without a whole lot of trouble.

  * Explain that we can extend the other constructors if necessary. It often isn't.

* Explain that nested classes are useful for defining classes you _only_ use inside of the class you define them in.

### 10. Everyone Do: Refactor & Checked vs. Unchecked Exceptions (0:18)

* Point out that, in this case, we're referring to the exception both in `Polygon`, _and_ in `Test`.

* Have everyone open up `Test.java`. Explain that one way we can refer to the `Polygon` exceptions directly is to use an `import static` statement.

![Using import static to refer to exception nested classes directly.](Images/4-import-static.png)

_Using import static to refer to exception nested classes directly._

* Explain that this allows us to refer to `public static` declarations in other classes directly.

  * If we don't `import static`, we'd have to say `Polygon.InvalidSideLengthException`.

* Explain that, in general, it's best to avoid `import static`.

  * Explain that it's it's fine, here, but it can get messy on larger projects.,

  * This is because `import static` sometimes results in name clashes.

  * Get rid of the `import static` statements. We won't need them in a moment.

* Explain that we don't _have_ to keep our custom exceptions inside of `Polygon`. If we remove them, we can get rid of the `import static` statements.

* Have everyone open up `Polygon.java`, and scroll down to the custom exceptions.

  * Ask a student how they think we should move these exceptions out. Make sure they know this isn't a trick question, as it's deceptively easy.

  * Explain that all we need to do is move it into its own class, and remove the `static` keyword.

* Explain that, at this point, we can compile and run our program as before.

* Point out that our project will get cluttered pretty quickly if we just leave everything in the same directory like this.

  * Explain that we can create a directory specifically for our exceptions, called `custom`.

* Have everyone follow along through the following steps.

  * Alongside `Test.java`, make this new directory with; `mkdir custom`

  * Move the custom exceptions into this new folder: `mv *Exception.java custom`.

    * Remind students that this creates another **package**, so we'll need to import these exceptions in our `Test` and `Polygon` classes.

  * In both `Test.java` and `Polygon.java`, add this import statement:

    * `import com.exceptions.custom.*`

  * Explain that this imports everything (`*`) in the `com.exceptions.custom` directory.

  * Run the program again, to demonstrate that everything works as before.

* Finally, point out that instantiating a `Polygon` with bad data is really a programming mistake.

  * We can't really `catch` the exception and fix the problem &mdash; it's just up to the programmer not to screw up.

* Because this is the case, we probably shouldn't _force_ programmers to catch the exception. We should just trust that the read the documentation for `Polygon` and know what they're doing.

* Explain that, since we subclassed `Exception`, we created what Java calls **checked exceptions**.

  * Whenever a method throws an exception that subclasses `Exception`, Java requires you to catch it. Since the compiler _checks_ for these, we call these exceptions **checked exceptions**.

* Explain that there's another class of Exception in Java, called `RuntimeException`.

  * Explain that runtime exceptions should be used to indicate the programmer made a mistake. The compiler does _not_ check for these exceptions. So, we call them **unchecked exceptions**.

* Open up your custom exception classes. Ask a student to explain which line of code you need to change to turn these into unchecked exceptions.

  * Simply change `extends Exception` to `extends RuntimeException`.

![Extending RuntimeException in our custom exception classes.](Images/4-subclassing-runtime-exception.png)

_Extending RuntimeException in our custom exception classes._

* Open up `Test.java` and get rid of the `try`/`catch` block. Demonstrate that the program runs just as before.

![Removing try/catch after refactoring to subclass RuntimeException.](Images/4-unchecked-exceptions.png)

_Removing try/catch after refactoring to subclass RuntimeException._

- - -

### 11. Lunch (0:30)

- - -

### 12. Instructor Do: Variadic Functions & Streams  (0:15)

- - -

**Objectives Met**

* Students should be able to create methods with a variable number of arguments.

* Students should be able to articulate the difference between a stream and a collection.

* Students should be able to convert collections to streams with `stream`.

* Students should be able to use `forEach` on a `stream`.

* Students should be able to define a lambda expressions as an argument to `forEach`.

- - -

* Point out that Java's precision can make it feel much "heavier" than more dynamic languages, like JavaScript.

  * Explain that this has its strengths, but that it can be syntactically cumbersome.

* Explain that there are ways to program more "freely". The first thing we'll look at is writing functions that take arbitrary number of arguments.

* Point out that, in JavaScript, we can pass as many arguments to a function as we want.

  * Even if we define a function with two parameters, it's legal to pass more: `function multiply (x, y)` _can_ be called as `multiply(2, 2, 3, 4, 5)`.

  * Point out that, in Java, this engenders a compiler error.

* Explain that Java provides an easy way to define these functions. Open up [17-Ins_Varargs-Demo/com/varargs/Varargs.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/17-Ins_Varargs-Demo/com/varargs/Varargs.java) to demonstrate.

* Point out the ellipsis (`...`) in the definition of the `greetStudents` method.

  * Explain that this means, "accept an arbitrary number of `String` arguments, and put them in an array called `names`".

    * Point out that this collects them into a raw array, _not_ an `ArrayList`.

  * Also, point out that we can use `final` on the parameter. This means we can't reassign it in the method body. Remind students that using `final` liberally is good practice.

![Defining a variadic function over String.](Images/5-varargs.png)

_Defining a variadic function over String._

* Demonstrate the function by calling it in `main` with a list of students' names.

* Point out that, when we define functions like this, we'll generally be doing something with the list that users pass us.

  * Explain that Java also provides special methods for operating on lists.

* Point out that we've used a `for` loop to print the elements of `names`.

* Explain that all `Collections` have a method, called `stream`, which turns the collection into a _stream_.

  * To explain the difference, explain or act out the following scenario:

    * Fill a bag with items. It can be anything &mdash; pens, pen caps, phones, gold nuggets, anything.

    * Hand a student the bag, and have them go through and name each item.

      * Explain that the bag is a collection of things. It's like a `Set` in Java.

      * Explain that naming each item is like using a `for` loop on the `Set`, and calling the `name` function on each one.

    * Now, take the bag back. Hand an individual item to the student, and tell them to name each one.

      * Do this until the bag is empty.

    * Point out that this is different from what we did the first time. Instead of giving the student the `Set`, and having them go through each item, we handed them each item _directly_.

      * This is the difference between a collection and a stream. A collection is a _group of things_. A _stream_ is _a thing at a time_.

    * Point out that, in this case, the student didn't use a `for` loop on the `Set`, and call `name` on each item. Instead, they _just_ called `name` on each item &mdash; someone else took care of looping.

  * Explain that all collections in Java have a method called `stream`, which transforms it from a _collection_ of things to a _stream_.

  * Explain that we first have to import the correct method from Java's `Arrays` package.

![Importing the stream method from Arrays.](Images/5-import-stream.png)

_Importing the stream method from Arrays._

* In `Varargs.java`, change the `greetStudents` method to call `stream` with `names` as its argument.

![Defining a variadic function over String.](Images/5-varargs.png)

_Defining a variadic function over String._

* Explain that this turns it from an array to an object called a `Stream`.

  * Explain that all `Stream` objects have a `forEach` method, which lets you call a function on each item individually.

  * Explain that, when using `forEach`, we can pass the function we want to call directly. This is _just_ like passing a callback to a function in JavaScript!

![Using a lambda expression to print each element in names with a call to forEach.](Images/5-foreach.png)

_Using a lambda expression to print each element in names with a call to forEach._

* Explain that Java calls these "callbacks" **lambda expressions**.

  * Explain their syntax:

    * Explain that they consist of a parameter list followed by an arrow: `->`.

    * Explain that we include a method body in braces, just like we would when defining a normal function.

    * Point out that we can get rid of the braces if we want to put the entire expression on one line.

![One-line lambda expression without braces.](Images/5-one-line-lambda.png)

_One-line lambda expression without braces._

* Run the file to demonstrate how everything works.

* Point out that doing all that refactoring just to get rid of a `for` loop is silly.

  * Explain that the real reason for learning this concept is the fact that `Stream` offers a _lot_ of other methods, which we'll take a look at after the next activity.

### 13. Partners Do: Variadic Functions & Streams  (0:15)

* Slack out [16-Stu_Varargs/Unsolved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/16-Stu_Varargs/Unsolved).

* Slack out the following instructions.

  * **Instructions**:

    * Explain the difference between a collection and a stream to your partner. Can you think of when it would make sense to use a stream instead of a collection data type?

    * Create a function that takes an arbitrary number of `String` names and prints each one with the title `"Dr"`. Use a `for` loop.

    * Compile it down and make sure it works. Then, convert it to use a `stream`.

    * Update your function such that it excludes any name starting with the letter `"A"`. Use `String.startsWith("letter")` for this. You should `import java.util.ArrayList` for this.

    * Now you're working with an `ArrayList`. All classes that extend Java's `Collections` interface have a `stream` method that you can call on them directly (e.g., `list.stream()`). Do so, and simply chain your `forEach` call.

    * This demonstrates a useful general point. All Java classes that extend the `Collections` interface have a `stream` method you can call like this. It's a bit cleaner than working with raw arrays.

    * This isn't the most elegant solution available. What's awkward about it?

### 6. Instructor Do: Review Activity  (0:15)

* Ask a group to explain the difference between a collection and a stream.

  * Ask them to explain when it might make sense to use a stream instead of a collection.

  * Explain that this often makes sense if we're unsure of how many items we'll receive, or if the items arrive over time. In either case, we can't use a collection, because we don't have all the items!

* Ask a group to explain how they implemented their `average` method with a `for` loop.

  * Ask the same group to explain how they converted it to use a `stream`.

* Ask a group to explain how they excluded numbers greater than 10 from their averaging routine.

* Show students your [16-Stu_Varargs/Solved/com/streams/Streams.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/16-Stu_Varargs/Solved/com/streams/Streams.java) for comparison.

* Point out that it's awkward to use both a `for` loop and a `forEach` call in the same function.

  * Explain that we'll take a look at better methods for accomplishing this sort of thing after the break.

  * Feel free to start the break early.

![Using both a for and forEach loop feels a bit awkward.](Images/6-awkward-loops.png)

_Using both a for and forEach loop feels a bit awkward._

### 15. Instructor Do: Stream Methods (0:28)

* **Instructor Note**: This section is largely lecture, hence its designation as an **Instructor Do**. However, do ensure that everyone joins you in writing and running code when you demonstrate new methods.

* Point out that it was a bit awkward to _first_ filter our array, and _then_ loop through it.

  * Return to the bag example from earlier.  Imagine we want to do something with everything that is _not_ a pen.

    * If we use a collection. We must go through the bag; remove the pens; create a new collection from the result; and _then_ do our work.

    * There are a few ways to use it if we use streams. Explain that the most elegant approach requires two students.

      * Explain that the first student will only do _one_ thing: Pass the second student pens, and throw away anything that _isn't_ a pen.

      * Explain that the second student will do the "work" &mdash; in this case, count the pens they receive.

      * Point out that, in this approach, the first student passes along a _filtered_ version of the stream.

      * Explain that we can do a similar thing in Java.

* Open up the solution to the last exercise.

  * Get rid of the `for` loop.

  * Chain a call to `filter` after `stream`, and have it check the first letter of each `name`.

    * Explain that `filter` takes a function that returns a boolean. It throws away every element that causes the function to return `false`, and passes along every element that causes it to return `true`.

![Filtering a stream.](Images/8-filter.png)

_Filtering a stream._

* Run the file to demonstrate that this does the same thing that our original solution did.

* Explain that `Stream` objects also have a `count` method, which returns the number of items that pass through them.

* Explain that we can use this to count how many doctors names don't start with A.

  * Delete the `forEach` expression and replace it with a call to `count`.

  * Point out that `filter` returns a `Stream`, which is why we can chain our call `count`.

  * Explain that streams can have a _lot_ of elements, which is why `count` returns a `long`.

![Counting stream elements with count.](Images/8-count.png)

_Counting stream elements with count._

* Point out how much cleaner it is to chain simple stream operations like this than to use bulky `for` loops.

* Explain that there are four major methods on `Stream` objects. The first of these is `filter`, which students have already seen.

* Explain that the second major method is called `map`.

  * Whereas `filter` removes elements from a list, `map` turns each element into something different.

  * In other words, `map` takes a stream as input; do something to each of its elements; and return a new stream with the result.

* Explain that this sounds weird in English, but is straightforward to program with.

  * Explain the updated `helloDoctors` method in [18-Ins_Stream-Methods-Demo/com/varargs/Streams.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/18-Ins_Stream-Methods-Demo/com/varargs/Streams.java).

    * Point out that one-line lambda expressions don't need braces _or_ a return statement. Java returns the last evaluated expression automatically.

  * Point out that another way to write our `helloDoctors` method is to create a stream of strings that say `"Hello, Dr ${name}!"`, and print each one.

![Using map to create a new String from an old one.](Images/8-map.png)

_Using map to create a new String from an old one._

* This can be a challenging concept, so take a moment to discuss some examples. Ask individual students how to write `map` functions that:

  * ...Takes a stream of integers and returns a stream of their squares?

    * `map((int _int) -> _int * _int)` OR `map((int _int) -> Math.pow(_int, 2))`

  * ...Takes a stream of names and returns their capitalized versions? Remind them of `String.toUpperCase`.

    * `map((string name) -> name.toUpperCase())`

  * ...Takes a stream of `Person` objects, each of which has a `String firstName` and `String lastName`, and return a stream of full names?

    ```
    * `map((Person person) -> String.format("%s %s", person.getFirstName(), person.getLastName()))`
    ```

* Explain that the third major method on `Stream` objects is `concat`.

  * Ask a student to explain string concatenation.

  * Point out that concatenation just means to put two things directly together. We can concatenate more than strings.

    * Open your browser console and demonstrate that we can concatenate arrays in JavaScript, for example: `[1, 2].concat([3, 4]) // 1, 2, 3, 4]`

* Explain that we'll often want to put two streams together, and that Java has a method for doing just this.

* Explain the `Stream.concat` example in [18-Ins_Stream-Methods-Demo/com/streams/Streams.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/18-Ins_Stream-Methods-Demo/com/streams/Streams.java).

  * First, explain that we have to import the `Stream` package, so we can use all of the methods it has to offer.

  * Refer to line 22. Explain that the `Stream.concat` function takes two `Stream` objects; concatenates them; and returns the result.

  * Point out that, in this example, we create two streams directly with `Stream.of`.

    * Explain that this function takes a list of values, and turns them in to a stream.

  * Finally, demonstrate that we can use the stream later, just like any other.

![Creating and concatenating two Streams in-place.](Images/8-concatenating-streams.png)

_Creating and concatenating two Streams in-place._

* Point out that this can be useful when you need to collect streams from multiple sources into one.

* Explain that there's only one more major method on streams to learn: `reduce`.

  * Explain that `reduce` can take a bit of practice to grok, so it's okay if students feel uncomfortable with it at first.

* Explain that `reduce` provides a way to _reduce_ a stream into a single value.

* Scroll to the `average` function in `Streams.java`.

* Point out that, while this is fine, it might be nice to do this with streams, instead.

  * Again, we sometimes _have_ to use streams instead of collections, so it's useful knowledge.

![Finding the average of an array of doubles.](Images/8-averaging-with-loop.png)

_Finding the average of an array of doubles._

* Explain that taking a list of numbers and turning it into a _single_ average is an example of _reducing_ the list into a _single_ result.

  * That means it's a perfect candidate for the `reduce` operation.

* Scroll down to `_average`. Explain each line.

  * The very first line converts the array into a stream.

  * The second line is the call to `reduce`.

    * Explain that, just like `map` and `filter`, `reduce` looks at each element of the stream one-by-one.

    * Point out that `reduce` receives two parameters: 0, and a lambda expression. Explain the lambda expression, first.

      * Explain that `current` is the element that `reduce` is looking at _right now_.

      * Explain that `total += current` means, "add the current term to the number, `total`."

      * Explain that the first argument to `reduce` &mdash; 0 &mdash; is the value that `total` has when `reduce` first starts.

    * Explain that, after it sees every element, `reduce` returns the value of `total`.

  * Finally, explain that `/ terms.length` simply divides `total` by the length of `terms`, so we get the average.

![Using reduce to calculate the average of an array of terms.](Images/8-reduce.png)

_Using reduce to calculate the average of an array of terms._

### 16. Partners Do: Stream Methods  (0:28)

* Slack out [19-Stu_Stream-Methods/Unsolved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/19-Stu_Stream-Methods/Unsolved).

* Slack out the following instructions:

  * **Instructions**:

    * Your first task is to create a `Stream` of user-input names.

    * First, create a `Scanner` object. Make it a `private static` variable on your class.

    * Create a method that prompts the user for a number with `System.out.print`, and collects their input with your scanner's `nextLine` method.

    * Create a method that calls the method you just wrote `int N` times with a `String message` as a prompt, and saves the results in an `ArrayList`.

    * In your `main` method, call that method to collect five names. Turn the `ArrayList` into a stream, and save that stream to a variable.

    * Using that stream as a starting point, create a new one that throws out every name starting with `"A"`.

    * Add "Dr." to the remaining names.

    * Turn this stream into a single String which says, "Hello, Dr. John, Dr. Jenny, Dr. Melody". Your names will be different, of course. What function will you use for this? What should your initial value be? Discuss carefully with your partner.

    * Save the string you created above into a variable.

    * Finally, print that variable. Print it with an exclamation mark at the end.

    * If you have time, extract the above stream logic into a separate function that accepts a `Stream` and returns a `String`. Instead of saving the stream of names, create and pass it directly to your new method. This should reduce your `main` method into just two lines.

### 17.  Instructor Do: Review Activity  (0:12)

* Remind students that there was nothing easy about this exercise. It's okay if they found it challenging!

* Start by reminding students how to instantiate a `Scanner`.

![Instantiating a Scanner around System.in.](Images/10-scanner.png)

_Instantiating a Scanner around System.in._

* Next, ask a student how they wrote the method to prompt users and collect input.

![Prompting a user for a name.](Images/10-prompt-user.png)

_Prompting a user for a name._

* Ask a student to explain how they wrote the method to prompt users `N` times.

![Prompting a user for a name N times.](Images/10-prompt-user-n.png)

_Prompting a user for a name N times._

* Ask a student to explain how they converted the `ArrayList` to a `Stream`.

![A simple call to stream() converts an ArrayList to a Stream.](Images/10-list-to-stream.png)

_A simple call to stream() converts an ArrayList to a Stream._

* Ask a student to explain how they got rid of names starting with the letter A.

* Ask a student to explain how they converted each name to contain the title "Dr.".

* Ask a student to explain how they converted the resulting stream of names to a greeting.

![Using filter, map, and reduce to create a greeting.](Images/10-reducing-names.png)

_Using filter, map, and reduce to create a greeting._

```
* This is the part that will require the most time. Explain the following:

    * Our starting term should be "Hello", because this is what we'll add names to.

    * Every time we see a new name, we want to update it with ", ${name}". So, we return the result of `String.format(""%s, %s", _greeting, name)`.

        * Students can also use: `_greeting += ", " + name`.

    * Remind students that `reduce` returns a string, so they need to save the result of all of these stream operations to a `String` variable to hang onto it.
```

* Finally, ask a student to explain how they printed the final result.
* Take a moment to answer student questions.

  * If students seem comfortable with the material, explain how you can extract the stream operations into their own function()`reduceGreeting`).

  * If not, feel free to skip this bit. Prioritize review.

![Condensing the main method to use the reduceGreeting method.](Images/10-condensing-main.png)

_Condensing the main method to use the reduceGreeting method._

* Before dismissing class, explain that the _real_ advantage to learning these stream operations is the fact that they're useful in _many_ more places than Java.

  * Explain that programming with streams is the foundation for whole style of programming, called functional programming.

  * Explain that, since this is a style of programming, it's not restricted to a single programming language. This is _not_ "just a Java thing".

  * To illustrate, open up [19-Stu_Stream-Methods/Solved/streams.js](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/19-Stu_Stream-Methods/Solved/streams.js).

    * Explain that JavaScript arrays have `map`, `filter`, `reduce`, `concat`, and `forEach` methods, as well!

    * Briefly show students the JavaScript version of the program they just wrote.

      * Point out that they can even use the same arrow syntax, but that it uses `=` instead of `-` in JavaScript.

      * Don't belabor the point or explain the details of arrow functions &mdash; just make it clear that we can process lists with exactly the same logic in JavaScript.

    * Slack out [19-Stu_Stream-Methods/Solved/streams.js](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/19-Stu_Stream-Methods/Solved/streams.js), and encourage students to practice stream programming in both JavaScript and Java whenever they have the chance. It's a powerful technique, and just requires a bit of practice to feel natural.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=11.02)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=11.02)
