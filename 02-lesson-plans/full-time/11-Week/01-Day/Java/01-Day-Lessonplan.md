## Day 1 - Java and OOP

### Overview

The purpose of this lesson is to provide students with basic facility in the Java programming language.

Students will get practice with Java's OOP tools, and be introduced to object-oriented design best practices.

`Summary: Complete activities 1-11 in Unit 21`

#### Instructor Priorities

* Java-specific learning objectives include:

  * Given a functional installation of Java 8 SE, students should be able to:

    * Label the type of each variable that appears in a program; and

    * Make meaningful use the difference between static and instance members.

    * Implement abstract class hierarchies using classes;

    * Articulate the benefits of encapsulation;

#### Instructor Notes

* This lesson provides a cursory coverage of the language, and entails numerous omissions of essential concepts. These omissions are known and intentional. The point is that students should get enough to continue to experiment with the language. This will be "most of the language", and that is fine.

* Installing Java on Mac and PC is straightforward. Regardless, you should slack out the appropriate installation instructions ahead of time.

  * Instructions for [installing on a Mac](http://www.java.com/en/download/help/mac_install.xml) and installing on a PC via the [online installer](http://www.java.com/en/download/help/windows_manual_download.xml) or the [offline installer](http://www.java.com/en/download/help/windows_offline_download.xml).

  * Emphasize that students must install **Java 8**, as this lesson makes use of one of its version specific features: [Lambda expressions](http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html).

  * Make students running Bash on Windows 10 aware that a bug in the embedded Linux environment precludes their installing Java 8. They will have to run their code from the Windows cmd terminal or Powershell.

* It may be easier to keep the example files open in one window, and demonstrate their examples in **Everyone Do** style in an interpreter on the projector.

* To introduce students to the basic principles of object-oriented program design. Today's material is abstract and potentially challenging, so we introduce minimal new syntax.

* Have your TAs refer to the [Time Tracker](01-Day-TimeTracker.xlsx) to stay on track.

### Class Objectives

* After class, students should be able to:

  * Install Java on either a Windows or Mac computer; and

  * Create a console application using the basic features of the language.

- - -

### 1. Everyone Do: Verify Java Installation (0:05)

* Welcome students to class, and explain that today's lesson will be a "crash course" in Java.

* Have everyone fire up a terminal and execute the following command. 

  * Run: `java -version`

![Java version output.](Images/1-java-version.png)

_Java version output._

* For class, students should be running Java 8 (version 1.8.x). 

  * This should pose no problems if you instruct students to install Java ahead of time.

  * Regardless, you should expect to troubleshoot. Have your TAs available and reserve a few minutes for this purpose.

### 2. Instructor Do: Data Types In Java (0:08)

* Explain that Java is built specifically to facilitate the design and implementation of large, complicated software systems. 

  * As such, there's a bit more boilerplate to it than there is with JavaScript, Python, Ruby, etc.

  * Explain that another fundamental difference between Java and JavaScript is that Java is a **compiled** language. This means that it must be converted from source code to something the computer can understand, called **byte code**, _before_ being executed.

    * This is by contrast to JavaScript, Python, Ruby, etc., where we can run source code "directly".

* Open up [01-Ins_Console-IO-Demo/console/ConsoleIO.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/01-Ins_Console-IO-Demo/console/ConsoleIO.java)

  * Point out the `package` statement at the top.

    * Explain that this statement tells Java which package the current file belongs to, and that a **package** is conceptually analogous to a JavaScript module.

    * Explain that your directory structure must match your package name. If you have a file called `ConsoleIO.java` in a package named `com.bootcamp.console`, Java expects your directories to look like `com/bootcamp/console/ConsoleIO.java`. 

      * In our case, we've placed `Console.java` in `package console`, so Java expects `console/ConsoleIO.java`.

![Java's typical package statement.](Images/1-java-package.png)

_Java's typical package statement._

* Point out that the `import` statement is conceptually analogous to Node's `require`.

  * Don't linger on this point. We'll come back to it momentarily.

* Point out that we kick off the meat of our file with `public class ConsoleIO`. 

  * Explain that this creates a class, called ConsoleIO, which is _publicly visible_. In other words, it creates a class that you can use in _any_ Java code.

    * Explain that a _class_ in Java is a bit different from a class in JavaScript. 

      * In Java, a class can be used to define the "shape" of objects.

      * In this case, we aren't using the class to create new objects, so it's just a "wrapper" for our code. In other words, this class is just a way for us to keep things organized.

  * Reassure students that it's okay if they don't fully understand this bit right now. It gets clearer with practice.

* Explain that the `public static void main` syntax refers to a function called `main`.

  * Explain that we'll cover functions in more detail later.

  * For now, point out that this is the so-called "entry point" to our application. In other words, this is the function Java looks for to start your app.

* Explain that, unlike JavaScript, Java requires you to declare variable "types".

![Very Java variable declaration.](Images/1-java-types.png)

_Very Java variable declaration._

* Explain that Java exposes many built-in types, but that students will only need a subset for today's activities. This subset includes:

  * `String`, the data type used to indicate strings;

  * `int`, the data type used to indicate numbers between -2<sup>31</sup> and 2<sup>32</sup>;

    * If a student asks, explain that the `long` data type allows you to accurately store values outside of this range.

  * `double`, a data type used to store "decimal values"; and

  * `boolean`, a data type used to store boolean values.

* Point out that Java has all of the same mathematical operators that JavaScript has. The syntax for all of the familiar mathematical operations is the same.

* Explain the `System.out.println` and `System.out.print` functions.

  * Explain that we'll talk about functions in greater detail later, but for now, students can simply take this one "at face value". For now, just point out that we call them just as we do in JavaScript: With the function name, parentheses, and a comma-delimited list of arguments.

  * Explain how these two functions differ: `println` prints its argument and a line break, whereas `print` simply prints its argument.

![Java's System.out.println function.](Images/2-java-print.png)

_Java's System.out.println function._

* Explain how to use `String.format` using the comments in the examples file.

* Point out that we can declare more complex data types &mdash; including arrays and maps &mdash; but that we'll get some practice with these basics first.

* Finally, demonstrate how to instantiate and use a `Scanner`.

  * First, point out that, to read input from command line, we need to use an object called a `Scanner`.

    * Explain that, to access this class, we need to import it. Jump to the beginning of the file to demonstrate the import statement.

    * Explain that the Scanner class comes from a built-in package called `java.util`. 

      * This is like using `require` to pull in built-in Node module.

    * Demonstrate how to instantiate a Scanner using `new`.

      * Point out that we use the class name to type the object.

      * Explain that `System.in` is a direct hook into the system's standard input stream. The reason we can't use it directly is because it's only capable of reading _bytes_. A Scanner provides an extra layer of abstraction and allows us to work with familiar data types rather than raw data.

![Instantiating a Scanner object.](Images/2-java-instantiation.png)

_Instantiating a Scanner object._

* Explain that, to wait for and read user input, we use an appropriate method on Scanner.

  * Since Java is statically typed, Scanner provides different methods for reading different types of input.

  * Explain the following methods:

    * `nextLine`, which reads user input, including any white space or newline characters, and returns it as a String;

    * `next`, which reads a single word of user input, and returns it as a String;

    * `nextInt`, which attempts to parse user input as an integer, and returns the result if successful; and 

    * `nextDouble`, which attempts to parse user input as a double, and returns the result of successful.

  * Explain that providing the wrong type can kill a program.

    * For instance, feeding a String to `nextInt` will result in an Exception.

![Various next methods in Java.](Images/2-next-methods.png)

_Various next methods in Java._

* Finally, demonstrate how to compile and run Java.

  * To keep it simple, show students to compile using: `javac *.java`.

  * To run the compiled ConsoleIO.class file, run: `java -cp ../ console.ConsoleIO`

    * Explain that `-cp` &mdash; which stands for classpath &mdash; tells Java where to look for package and class that you specify afterwards.

      * In this case, we tell Java to look for the folder called `console` in the parent directory; and within that folder, look for a file called `ConsoleIO.class`.

      * This is why our folder structures have to match our package statements. If they don't, Java won't be able to find our files properly.

### 3. Students Do: Echo Student Profiles To Console (0:08)

* Slack out [01-Ins_Console-IO-Demo/console/ConsoleIO.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/01-Ins_Console-IO-Demo/console/ConsoleIO.java) so students can refer to it as they work through the exercise.

* Slack out [02-Stu_Console-IO/Unsolved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/02-Stu_Console-IO/Unsolved).

* Let students know that they should use `Scanner.nextLine` to read input for this activity.

  * This is because `Scanner.next` doesn't consume newlines, and so complicates the solution a little more than is warranted for the level of today's introduction.

### 4. Instructor Do: Review Activity  (0:08)

* Open up [`02-Stu_Console-IO/Solved/console/ConsoleIO.java`](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/02-Stu_Console-IO/Solved/console/ConsoleIO.java). This activity is fairly straightforward, and is mainly intended to help students get some practice with Java's syntax.

* Ask a student how they set up their program to receive user input.

  * They should respond that they instantiated a Scanner object.

* Ask a student how they were able to save student profile information.

  * They should respond that they used `Scanner.nextLine`, and stored the result of the call in a String variable.

* Ask a student how they printed the information to the console.

  * This is a straightforward use of `System.out.println`.

* Take any student questions. If none remain, move on to the next section.

![Console-based student profile prompts.](Images/4-student-profile-information-one.png)

_Console-based student profile prompts._

![Printing the user's input.](Images/4-student-profile-information-two.png)

_Printing the user's input._

### 5. Instructor Do: Lists, Dictionaries, & Conditionals (0:12)

* This section will introduce students to the basic uses of arrays, array lists, hashmaps, and conditional statements in Java.

  * The primary objective is to get students familiar with the syntax. Demonstrate it, then move on. The activity affords ample practice opportunity.

* Open up [`03-Ins_Arrays-Maps-Conditions-Demo/collections/Arrays.java`](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/03-Ins_Arrays-Maps-Conditions-Demo/collections/Arrays.java).

* Explain that in Java, arrays must be created with a certain length, and can only hold data of a certain type.

  * Explain that, once set, that length can't change.

  * This is (obviously) in contrast to JavaScript.

* Demonstrate how to instantiate a typed array in Java.

  * The comments in the example file are fairly self explanatory.

  * First, demonstrate the syntax for creating an array of a given type.

  * Then, demonstrate how to instantiate an array with a `new` call.

![Declaring and instantiating an array.](Images/5-declaring-instantiating-arrays.png)

_Declaring and instantiating an array._

* Demonstrate the two ways to populate an array:

  * Either by directly setting values on instantiation with brace notation; or

  * By setting the value of each index sequentially.

![Populating an array at creation time; and populating an existing array by setting indices.](Images/5-populating-arrays.png)

_Populating an array at creation time; and populating an existing array by setting indices._

* Finally, demonstrate how to iterate over an array using the same syntax available in JavaScript...

![C-style for-loop in Java.](Images/5-c-style-for-loop.png)

_C-style for-loop in Java._

* ...And with Java-specific `for-in` syntax.

![Java-specific for-in syntax.](Images/5-for-in.png)

_Java-specific for-in syntax._

* Point out that arrays in Java are more cumbersome to work with than they are in languages like JavaScript, Python, or Ruby.

* Explain that Java offers another data type, called the ArrayList, which behaves like an array but doesn't impose a length constraint.

* Open up [03-Ins_Arrays-Maps-Conditions-Demo/collections/ArrayLists.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/03-Ins_Arrays-Maps-Conditions-Demo/collections/ArrayLists.java)

* First, point out that you need to `import java.util.ArrayList` to use this.

![Importing java.util.ArrayList.](Images/5-import-arraylist.png)

_Importing java.util.ArrayList._

* Next, explain how to instantiate an ArrayList.

  * Call attention to the bracket syntax. Explain that this is simply Java's way of specifying the type of object that goes into a collection.

  * Point out that you don't need to specify the type on the right hand side of the assignment statement, but it's perfectly valid syntax to do so.

![Instantiating an ArrayList over Strings.](Images/5-instantiating-arraylists.png)

_Instantiating an ArrayList over Strings._

* Next, demonstrate that you can add single elements to an ArrayList with the `add` method.

![Appending single elements to an ArrayList with add.](Images/5-arraylist-add.png)

_Appending single elements to an ArrayList with add._

* Then, demonstrate how to remove the item at a specific index.

![Removing a specific element in an ArrayList with remove.](Images/5-arraylist-remove.png)

_Removing a specific element in an ArrayList with remove._

* Next, demonstrate how to set the value of an element at a specific index with `set`.

![Setting the value of a specific element with set.](Images/5-arraylist-set.png)

_Setting the value of a specific element with set._

* Finally, demonstrate how to iterate over an ArrayList using the same for-in syntax as for arrays.

![Iterating an ArrayList.](Images/5-arraylist-iteration.png)

_Iterating an ArrayList._

* Point out that ArrayLists are a more versatile abstraction than Arrays.

  * ArrayLists are often preferable to raw arrays, but students are free to use either in their activities.

* Next, we'll cover Java's HashMaps. Open up [03-Ins_Arrays-Maps-Conditions-Demo/collections/HashMaps.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/03-Ins_Arrays-Maps-Conditions-Demo/collections/HashMaps.java).

* Explain that a HashMap is conceptually analogous to a JavaScript object.

* Explain that, when you instantiate a HashMap, you need to specify both the type of its keys and its values.

![Instantiating a HashMap whose String keys map to Integer values.](Images/5-instantiating-hashmaps.png)

_Instantiating a HashMap whose String keys map to Integer values._

* Point out that we must say `Integer` instead of `int`; `Double` instead of `double`; and `Boolean` instead of `boolean` if we use them as key or value types.

  * This is because collections can only contain objects, so Java must convert primitives to their corresponding wrapper types to insert them.

  * This procedure is called autoboxing. Feel free to explain it if students ask, but don't feel the need to belabor the point.

* Explain that we set the value of a key with the `put` method, and retrieve the value of a key with the `get` method.

  * Point out that we can use `getOrDefault` to retrieve the value of a key, _or_ a default value we specify if the key doesn't exist. This is safer than a simple call to `get`.

![Basic HashMap methods: put, get, and getOrdefault.](Images/5-hashmap-methods.png)

_Basic HashMap methods: put, get, and getOrdefault._

* Finally, demonstrate how to iterate over a HashMap using a lambda expression.

![Iterating over the keys and values of a HashMap in Java 8.](Images/5-lambda-expression.png)

_Iterating over the keys and values of a HashMap in Java 8._

* Finally, open up the [03-Ins_Arrays-Maps-Conditions-Demo/collections/Conditionals.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/03-Ins_Arrays-Maps-Conditions-Demo/collections/Conditionals.java).

* Explain that Java's conditional statements are the same as JavaScript's.

![C-style conditional statements.](Images/5-conditions.png)

_C-style conditional statements._

* Explain that Scanner objects offer a way for us to check if the standard input stream has data of a certain type _before_ we consume it.

![Verifying the type of our incoming data.](Images/5-has-methods.png)

_Verifying the type of our incoming data._

* Students are likely to be a bit overwhelmed by all the new syntax. Reassure them that this is natural, and that muscle memory comes with practice...Which the next activity will give them ample amounts of.

  * Slack out the [03-Ins_Arrays-Maps-Conditions-Demo/collections](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/03-Ins_Arrays-Maps-Conditions-Demo/collections), and tell students to refer to them as they work through the activity.

### 6. Partners Do: Indefinite Student Profiles  (0:20)

* Slack out the `04-Stu_Arrays-Maps-Conditions/Unsolved`.

* Students will need to initialize an `ArrayList<HashMap<String, String>>`. This declaration is a bit unintuitive by virtue of its unfamiliar syntax, so it may be worthwhile to give a fairly explicit hint that students can insert a HashMap&lt;String, String> into an ArrayList if they get the syntax right.

  * If you expect this to be a huge sticking point for students, feel free to just give them the answer here. Let them know they are encouraged to ask a TA to verify their solution, or guide them in the right direction on this point.

* Also point out that, since we want to allow users to create an _indefinitely long_ list of students, ArrayList is the correct data type—students should _not_ try to use an array.

### 7. Instructor Do: Review Activity  (0:08)

* Open up the `04-Stu_Arrays-Maps-Conditions/Solved/console/ConsoleIO.java`

* Ask a student to explain how they created a list of students maps

  * They should have initialized an ArrayList of HashMaps: `ArrayList<HashMap<String, String>>`.

![Initializing an ArrayList over HashMaps.](Images/7-nested-collections.png)

_Initializing an ArrayList over HashMaps._

* Ask a student how they initialized the HashMap to store their student's information.

  * They should have initialized a `HashMap<String, String>`.

![Initializing a HashMap&lt;String, String> for student information.](Images/7-nested-collections.png)

_Initializing a HashMap&lt;String, String> for student information._

* Ask students to explain how they iterated over:

  * Their student HashMap; and

  * Their list of students.

![Iterating over a HashMap with a lambda expression.](Images/7-lambda-expressions.png)

_Iterating over a HashMap with a lambda expression._

![Iterating over an ArrayList with for-in syntax.](Images/7-iterating-students.png)

_Iterating over an ArrayList with for-in syntax._

* Ask a student to explain the bracket syntax used to initialize the HashMap.

  * They should explain that it indicates that both the maps keys and its values are strings.

* Slack out the [04-Stu_Arrays-Maps-Conditions/Solved/console](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/04-Stu_Arrays-Maps-Conditions/Solved/console) before moving on.

### 8. Instructor Do: Functions  (0:12)

* Explain that the next section will introduce students to functions in Java.

  * Point out that students have already been using functions extensively.

* Explain that, in Java, functions are (somewhat interchangeably) referred to s _methods_.

  * Functions can only exist inside a class, in which context they're referred to as methods.

* Explain that functions in Java are less flexible than they are in JavaScript,.

  * Just as Java requires that variables be typed, so too does it require that programmers define what type a function returns.

* Open up [05-Ins_Functions-Demo/functions/Functions.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/05-Ins_Functions-Demo/functions/Functions.java).

* The example file contains extensive notes on the mechanics of functions, so refer to that file for explanations.

  * In particular, it covers:

    * Return types;

    * Defining package-private functions;

    * `public` and `private` access modifiers;

    * Basic generic methods.

* You'll have to add `static` after the access modifier for each function in the example file for it to compile.

  * For your convenience, there's a file in the same directory, [05-Ins_Functions-Demo/functions/Functions.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/05-Ins_Functions-Demo/functions/Functions.java), in which this keyword is already present.

  * You're free to discuss the difference between static and instance members here, if you'd like. You'll cover it in the next section, either way.

### 9.  Students Do: Refactor Student Information Tool  (0:25)

* Slack out the [06-Stu_Functions/Unsolved/functions/ConsoleIO.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/06-Stu_Functions/Unsolved/functions/ConsoleIO.java).

* Point out that students will have to make all of their functions `static` for their code to compile.

### 11.  Instructor Do: Review Activity  (0:10)

* Open up the [06-Stu_Functions/Solved/console/ConsoleIO.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/06-Stu_Functions/Solved/console/ConsoleIO.java).

* Explain that there are several ways to implement the functionality required by the activity, and that your reference solution represents just one of them.

* Ask a student to explain how they created a function to prompt a user for input, and store the user's input in a HashMap.

![A function that prompts for, and stores, user input.](Images/11-prompt-function.png)

_A function that prompts for, and stores, user input._

* Ask a student to explain how they created a function that prints a confirmation message you pass to it, and returns the user's input.

![A function that prints a message passed to it, and returns the user's input.](Images/11-confirm-function.png)

_A function that prints a message passed to it, and returns the user's input._

* Ask a student to explain how they wrote a function that iterates over a list of student HashMaps, printing their keys and values.

![A function that iterates over a list of student HashMaps.](Images/11-loop-function.png)

_A function that iterates over a list of student HashMaps._

* Point out how these functions are used to refactor the body of the application.

  * Point out that it's gradually become cleaner as we refactor to increasingly abstract patterns.

* Slack out the [06-Stu_Functions/Solved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/06-Stu_Functions/Solved).

- - -

### 11. Lunch (30 min)

- - -

### 12.  Instructor Do: Classes & Objects  (0:12)

* Explain that the next topic will be classes and objects.

* Explain that Java features immensely powerful tools for writing object-oriented code.

  * Explain that much of this unfortunately falls outside the scope of today's class, but encourage students interested in learning more about OOP and software design to take further steps with Java.

* Open up the [07-Ins_Classes-and-Objects-Demo/classes/User.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/07-Ins_Classes-and-Objects-Demo/classes/User.java).

* Explain that the `public class` syntax that students have seen so much of, predictably, tells Java to create a **class**.

  * Explain that a class is a "blueprint" for creating objects.

    * In this sense, classes in Java are similar to classes in JavaScript. Don't push the analogy too far, though, lest students make the mistake that they _are_ the same.

  * Explain that classes can be instantiated. This means you can use them to create new objects.

  * Explain that classes are also entities in and of themselves.

    * A blueprint defines how to build a house. But the blueprint itself has attributes—it's generally blue, and it's usually heavily annotated with useful information, etc.

    * Explain that this means classes can have properties and methods, as well.

      * Explain that properties and methods that belong to the _class_ — that is, the _blueprint_ as opposed to the _objects_ (or _house_), are called **static** properties or methods.

      * Point out the `static int` field called `sUsersCreated`.

        * Explain that we increment this variable whenever we create a new user.

        * Point out that it doesn't make sense for a single user to know how many users have been created. That's "knowledge" that belongs to the class itself. Thus, we make it static.

          * Point out that this isn't a very good pattern for production code. We've used it here just for illustration.

![Defining a class with a static field and member variables.](Images/12-class-syntax.png)

_Defining a class with a static field and member variables._

* Explain that we can declare **member variables**, or fields, inside of the class. These are properties that each object we instantiate will have.

* Explain that classes can have a **constructor**. Like in JavaScript, this is a function that initializes an object.

  * Point out that constructors have the same name as the class they instantiate.

  * Point out that the meaning of `this` in Java is _much_ more straightforward than it is in JavaScript. It _always_ refers to "this object".

![Defining a Constructor in Java.](Images/12-constructors.png)

_Defining a Constructor in Java._

* Explain that `public` methods are methods that anyone can use.

* Explain that `private` methods are methods that can only be used inside of the class.

  * Explain that this might be useful if you want to use an algorithm inside of a class, but want to be able to change that algorithm without having to worry about breaking client code.

  * It's all right if students don't fully understand the architectural utility of privacy at the moment. Just be sure to mention it.

![Public and private methods in Java.](Images/12-methods.png)

_Public and private methods in Java._

* Open up the [07-Ins_Classes-and-Objects-Demo/classes/Classes.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/07-Ins_Classes-and-Objects-Demo/classes/Classes.java)

* Demonstrate instantiating an object and calling its public methods.

![Instantiating a new object, and calling methods on the instance.](Images/12-instantiation.png)

_Instantiating a new object, and calling methods on the instance._

* Point out that, if we try to call a private method, Java will throw an exception (an error, in JavaScript terms).

* Explain that the order in which we compile our classes matters. `Classes.java` will look for `User.class` when you compile it, but throw an error if it can't find it.

  * To circumvent this issue, simply use `javac *.java` to compile everything.

### 13.  Students Do: Create A Student Class (0:25)

* Slack out the [08-Stu_Classes-and-Objects/Unsolved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/08-Stu_Classes-and-Objects/Unsolved).

### 14.  Instructor Do: Review Activity  (0:10)

* Before opening any solutions, ask a student to explain how they implemented their `Student` class.

  * Ask other students in their row if their implementations agreed or disagreed in any way.

* Open up [08-Stu_Classes-and-Objects/Solved/console/Student.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/08-Stu_Classes-and-Objects/Solved/console/Student.java), and check your students' solution against it.

* Repeat the above procedure for the Roster class.

  * This is just a simple wrapper around ArrayList.

* Finally, ask a student to explain where they used their classes in their `ConsoleIO.java` file.

  * They should explain that they replaced the student HashMap with a `Student` object, and the students `ArrayList` with a `Roster` object.

* Open up [08-Stu_Classes-and-Objects/Solved/console/ConsoleIO.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/08-Stu_Classes-and-Objects/Solved/console/ConsoleIO.java), and explain:

  * That you can make the `Scanner` and `Roster` static variables on the class.

  * Confirm that the reference solution also replaces the student HashMap with a `Student` object.

* Point out how much cleaner the code has become after refactoring.

* If time remains, foster a discussion on further refactoring options.

  * What problems remain?

  * What parts of the code are still ugly? What would make them cleaner?

* Slack out the [08-Stu_Classes-and-Objects/Solved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/08-Stu_Classes-and-Objects/Solved).

### 15. Instructor Do: Thinking About Classes (0:12)

- - -

**Objectives Met**

- - -

* Remind students that classes provide us with a powerful way to organize our code.

  * Explain that, while powerful, class-based design is not trivial.

* We're about to introduce some basic design principles for students to keep in mind when designing object-oriented systems.

  * Explain that these principles are language-agnostic. Students can, and should, apply them to programs written in Java; Python; or any other object-oriented language.

* Refer to the`Student` class they just built.

  * Ask a student to explain what makes any one `Student` different from any other.

    * Their names, email, address, etc.—the value of the _fields_ we declare on the class.

  * Ask a student to explain what all `Student`s have in common.

    * `Student`s are identical with regard to the methods we can call on them.

* Explain that this points out an essential characteristic of all objects.

  * Objects have certain values associated with them, which differentiate them from other objects of the same class.

  * Objects have certain behaviors associated with them—their **methods**—which they have in common with other objects of the same class.

  * Classes are a blueprint of sorts, which allows us to define the ways objects of a given class will look in general, and how they will be similar or different to one another.

    * **Fields** are (generally) configurable attributes that will (generally) be different between objects.

    * **Methods** are consistent across instances of a class.

    * In other words—data can be different, but behaviors on that data will be the same.

* Remind students that this can all be summarized thus: "Classes are a tool for associating **data** with **behavior** by way of a 'blueprint'."

  * Reiterate that fields represent data, and methods represent behavior using that data.

  * Refer to the  `Student` class for an example. The student's `firstName`, `lastName`, etc., are _data_. The `report` method, which prints the data, is a _behavior_ on that data.

* Point out that a natural question that arises is that of how one should best organize data and behavior.

* Remind students that classes afford the additional benefit of allowing us to keep some data and behavior private, and expose only the ones we choose to make public.

  * Explain that the advantage is that we can use private methods and data to produce _public_ results, but have the freedom to change the private method without affecting client code.

  * Consider the Heap data type, for example.

    * Explain that a Heap is just a data type with a special sort of ordering.

    * Explain that heaps can be represented as arrays with structural invariants, or as graphs.

    * If we create a Heap data type that people can use in their programs, we _don't_ want them to rely on us using an array or a graph.

      * Both can guarantee the heap invariant. But, if we start out using an array, and eventually decide to use a graph because we realized it's more efficient, any code that relied on our implementation being based on an array will break.

      * This is one reason we want to hide implementation details: It affords greater flexibility.

* Explain that we will explore both of these issues in detail in today and tomorrow's class.

### 16. Students Do: Designing Shape Classes  (0:12)

* Zip and slack out [09-Stu_Shapes/Unsolved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/09-Stu_Shapes/Unsolved), and instruct students to unzip it somewhere on their computers.

* Before starting the clock, briefly explain that Java allows you to define variable declarations `final`.

  * For example: `private final int age`.

  * Explain that a variable declared `final` can only be assigned to _once_.

    * E.g., if we assign: `private final int age = 22`, it is an _error_ to write `age = 23` after.

    * Explain that it's best practice to declare variables `final` by default, unless it becomes clear there's a good reason for them to be mutable.

* Slack out the following instructions to students.

* **Instructions**:

  * Your task for this activity is to build two classes: `Triangle` and `Square`. We'll assume that our classes are all "regular" shapes—i.e., their sides are all the same length. Users should be able to call three—and only three—methods on each shape: `area`, `perimeter`, and `getSides`.

  * Each class should have a field, called `sideLength`, which records the length of its sides. Should this field be `static`? Should it be `private` or `public`?

  * Each class should have a field, called `sides`, which keeps track of how many sides it has. Should this field be `static`? Should it be `private` or `public`?

  * Each class should have a method, called `area`, which uses the shape's side length to calculate its area. Feel free to Google the formula.

  * Each class should have a method, called `perimeter`, which uses the shape's side length to calculate its perimeter. Feel free to Google the formula.

  * When you're done implementing, execute the `run.sh` script (`bash run.sh` on mac) to make sure everything works as expected.

  * Take a look at the `getHeight` method in your `Triangle` class. Should this be `private` or `public`?

  * Take a moment to think about your solutions. Is there anything unsatisfying about them? What would be better than what you have?

### 17. Instructor Do: Review Activity  (0:08)

* Open up [09-Stu_Shapes/Solved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/09-Stu_Shapes/Solved).

* Ask a student to explain how they declared their `Square` and `Triangle` classes' instance variables.

  * They should declare `sideLength` as a `private final int`. This is not `static` because it changes from shape to shape.

  * Explain that, in this case, we should declare `sides` as a `static` variable. All `Square`s will have 4 sides, and all `Triangle`s will have 3 sides. This is a property of the _class_, not any individual object.

    * Emphasize that the number of sides that a `Square` or `Triangle` has is a property of `Square`s or `Triangle`s, generally—this is what is meant by `static. But, any given`Square\` probably has a different side length than any other—this is what is meant by an _instance property_.

* Ask a student to explain their implementation of the `Square` class's `area` and `perimeter` methods.

* Ask a student to explain their implementation of the `Triangle` class's `area` and `perimeter` methods.

* Ask a student whether `Triangle.getHeight` method should be `public` or `private`.

  * Explain that it should be `private`. Remember, our spec said that both Shapes should only expose three methods: `area`, `perimeter`, and `getSides`.

    * Since our API doesn't include `getHeight`, we shouldn't expose the method.

    * This is a (minor) example of implementation hiding. People who use a `Triangle` know that they can get its area, but don't know anything _for certain_ about how that area is calculated.

* Ask a student if they see anything suboptimal with these solutions.

  * Point out that `Triangle` and `Square` have the same API and the same fields. People who use a `Triangle` expect to be able to call the same methods on a `Square`, because both are shapes exposing the same methods.

    * Point out that, if we add a method to `Triangle`, we have to add it to `Square`, as well.

    * Remind students of how easy it can be, especially on large teams, to forget to adhere

  * Point out that these classes differ only in the details of how their `area` and `perimeter` methods are _implemented_.

* Explain that it would be better if we could put everything they have in common in one place, and keep only the methods that are different in the `Triangle` and `Square` classes.

### 18. Instructor Do: Subclasses & Extends (0:12)

- - -

**Objectives Met**

* Students should be able to use `extends` to define subclasses

* Students should be familiar with the term **polymorphism**

- - -

* Explain that Java allows us to define classes that **inherit** from other classes.

  * Explain that, if a `Person` class has public `getFirstName` and `getLastName` methods, a `Student` class that inherits from `Person` would _also_ have public `getFirstName` and `getLastName` methods.

* Explain that classes that inherit from other classes are called **subclasses**.

* Explain that, to create a subclass, we use the `extends` keyword.

  * Open up your [10-Ins_Subclasses-Demo/com/examples](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/10-Ins_Subclasses-Demo/com/examples).

  * Open up `Animal.java`.

* Explain that we have an `Animal` class, which contains `move` and `feed` methods.

  * Briefly point out that _all_ animals can move and all animals have to feed.

![Methods that will be common to all Animal objects.](Images/1-animal.png)

_Methods that will be common to all Animal objects._

* Next, open [10-Ins_Subclasses-Demo/com/examples/Dog.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/10-Ins_Subclasses-Demo/com/examples/Dog.java)

  * Explain the `class Dog extends Animal` clause.

    * Explain that this means `Dog` is a **subclass** of `Animal`.

      * Explain that `Animal` is called the **superclass** of `Dog`.

      * Explain that this means `Dog` has access to the fields and method on the class it `extends`.

        * So, even though our `Dog` only defines `bark` and `howl` methods, we can call `move` and `feed` methods on our `Dog`—because these are behaviors shared by all `Animal`s.

      * Open up `Animal.java`, and point out that its `feed` method sets `this.fed = true`. This means that, when we call `feed` on a `Dog`, its `fed` field will be set to `true`.

      * Explain that, in Java, a given class can only have one superclass.

    * Explain that, in `Dog`'s constructor, we can call the superclass's constructor with `super`.

      * Ask a student to explain what this might do in our particular case.

        * Explain that, in this case, it sets the `name` field in `Animal` to the value we pass it from `Dog`.

        * Emphasize that it's just a special type of function call.

![Dog extends Animal.](Images/4-dog-extends-animal.png)

_Dog extends Animal._

* Briefly, open [10-Ins_Subclasses-Demo/com/examples/Cat.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/10-Ins_Subclasses-Demo/com/examples/Cat.java).

  * Point out that it also `extends Animal`, and only defines `meow` and `purr` methods.

![Our Cat class.](Images/4-cat.png)

_Our Cat class._

* Open up [10-Ins_Subclasses-Demo/com/examples/Test.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/10-Ins_Subclasses-Demo/com/examples/Test.java).

  * Point out that we can, in fact, instantiate a `Dog` cand call its `move` and `feed` methods.

  * Point out that we can instantiate a `Dog` or a `Cat` as an `Animal`.

![Instantiating a Dog and Cat as an Animal.](Images/4-polymorphism.png)

_Instantiating a Dog and Cat as an Animal._

* Explain that we can always instantiate a subclass as an instance of its superclass.

* This is because a `Dog` is-a(n) `Animal`, and a `Cat` is-a(n) `Animal`, so it makes sense to be able to instantiate them as such.

* Explain that using the superclass to instantiate subclasses is called **polymorphism**.

  * Explain that this is just a fancy way to say that an `Animal` object can come in "many shapes"—i.e., it can be a `Dog`, or a `Cat`, or anything that `extends Animal`.

  * Emphasize that this is an important word in the world of object-oriented programming—students should be familiar with this word for interviews.

  * Reassure them that this isn't critical knowledge right now.

* Run the `runtest.sh` script, and demonstrate that everything works as expected.

  * In particular, point out that, even though we instantiated `buddy_two` and `fluffy` as `Animal`s, Java still knew which subclass they belonged to.

    * This illustrates that objects declared as `Animal`s can come in "many shapes."

### 19. Partners Do: Re-Architecting Shapes  (0:25)

* Zip and slack out the [11-Stu_Subclasses/Unsolved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/11-Stu_Subclasses/Unsolved) folder for this activity.

* Slack out the following instructions:

  * **Instructions**:

    * Think back to your `Triangle` and `Square` class. What did they have in common? What **class** of object are `Triangle` and `Shape`?

    * Create a class that "wraps up" the fields and methods that `Triangle` and `Class` had in common. What should you call this? Don't make these fields `private`.

    * What fields and methods in `Triangle` and `Square`, if any, are unique to each class? In other words, are there any fields or methods on `Triangle` or `Square` that you can't put in your new superclass?

    * If so, rewrite your `Triangle` and `Square` methods such that they _only_ contain fields and methods unique to them.

    * When you're done, run your `runtest.sh` script, and make sure everything works as expected. Feel free to open up `Test.java` to play with things, yourself.

    * When you're finished, take some time to discuss your solution with your partner. Is this the best you can do?

    * As a matter of fact, there _is_ a way to extract _all_ the functionality in `Triangle` and `Square` into a single class. What do you need to do to accomplish this? How would you distinguish between a `Triangle` and a `Square`? You don't have to implement this solution on your own—just think about it, and be prepared to share your thoughts with the class.

### 6. Instructor Do: Review Activity  (0:10)

* Open up your [11-Stu_Subclasses/Solved/com/shapes](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/11-Stu_Subclasses/Solved/com/shapes).

* Ask a student to explain what superclass they wrote for `Triangle` and `Square`.

  * You're looking for either `Shape` (expected) or `Polygon` (better).

* Ask a student to explain what fields they put in the `Shape` class.

  * They should have moved the `static sides` and member `sideLength` variables to the `Shape` superclass.

![Moving common fields to Shape.java.](Images/6-shape-fields-sizes.png)

_Moving common fields to Shape.java._

* Point out that the solution uses the `protected` modifier instead of `private`.

  * Explain that `private` _really means_ private. If we declare a field `private` in `Shape`, we can't access it in `Triangle`.

  * Explain that `protected` is like `private`, with the one difference that **subclasses also have access**.

    * So, if `private` means, "no one can see this but me", `protected` means, "no one can sees but me **and my children**."

* Ask a student to explain what methods they put in the `Shape` class.

  * They should have moved the `perimeter` and `getSides` methods into the `Shape` class.

![Moving common methods to Shape.java.](Images/6-shape-methods-sizes.png)

_Moving common methods to Shape.java._

* Ask a student to explain what methods they kept in the `Square` and `Triangle` classes.

  * They should have kept `area` in these classes.

  * Ask a student to explain why this makes sense.

    * Explain that these belong in the subclasses because **each uses a different implementation**.

![The area implementation for Square—different from that of Triangle.](Images/6-square-area.png)

_The area implementation for Square—different from that of Triangle._

![The area implementation for Triangle—different from that of Square.](Images/6-triangle-area.png)

_The area implementation for Square—different from that of Triangle._

* Open up your solution [11-Stu_Subclasses/Solved/com/shapes/Shape.java](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/11-Stu_Subclasses/Solved/com/shapes/Shape.java), and briefly talk through how it hits each of these points.

* Point out that, even though both our `Triangle` and our `Square` implement `area` differently, we might still want to specify that each _should_ have an `area` method.

  * After all, all 2D shapes have an area, so it would make sense for us to enforce that all `Shape`s have an `area` method.

* Explain that Java lets us do this with `abstract` methods.

  * Explain that an `abstract` method is one that doesn't have an implementation, but that subclasses are _required_ to implement.

    * If they don't implement `abstract` methods in their superclass, the compiler will complain.

* Add an `abstract double area ();` declaration to `Shape.java`.

![An abstract area method.](Images/6-abstract-area.png)

_An abstract area method._

* Explain that, if we put `abstract` methods in a class, we also have to mark the class as `abstract`.

![Marking the Shape class abstract.](Images/6-abstract-shape.png)

_Marking the Shape class abstract._

* Explain that this is how we force anyone extending `Shape` to put an `area` method in their subclass.

  * Point out that the fact that this is an `abstract` method allows them to implement however they want—one way for a `Triangle,` one way for a `Square`.

  * Optionally, delete the `area` method from `Triangle` and try to compile everything: `javac -cp ../../ *.java`. This demonstrates the compiler error.

* Optionally, add an `@Override` annotation to the `area` method in `Triangle` or `Square`.

  * Explain that this is a way to tell Java that this method lives in the superclass.

    * Explain that we don't _need_ to do this, but if we do, the compiler will make sure we define the method with the right return type and parameters.

    * Explain that "messages to the compiler" like this are called **annotations**.

    * Reassure students that they don't have to remember how to use the `@Override` annotation—they just have to know it exists, as it's common in other people's code.

![Adding an @Override annotation to a method.](Images/6-override-annotation.png)

_Adding an @Override annotation to a method._

* Zip and slack out [11-Stu_Subclasses/Solved](../../../../../01-Class-Content/21-regionalized-content/Java/01-Activities/11-Stu_Subclasses/Solved) for student reference.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=11.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=11.01)
