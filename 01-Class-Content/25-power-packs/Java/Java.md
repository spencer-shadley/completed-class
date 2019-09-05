# Java Basics

## Intro

Welcome to a short course covering basic to intermediate Java. Java is one of the most—if not the most—popular programming languages in the world. Throughout its more than 20-year lifespan, it has gone through many iterations, making it robust, powerful, and very well supported. 

Any question you might have about Java has probably already been answered in some online forum. It has the second largest StackOverflow community and the fourth largest meetup community, and is the second most tagged language on GitHub! This enormous and mature Java ecosystem brings with it a vast array of tools and libraries which make learning and using Java much easier than other languages.

## Why Learn Java? 

First and foremost, it is consistently one of the most in-demand development skills by employers. Millions of programmers and billions of devices use it worldwide. It can run on any hardware or OS, and is very popular at the enterprise level. Google has adopted it for all Android apps and 90% of Fortune 500 companies use it for back-end development. 

Java offers several advantages as a programming language—most notably in its speed and power. Until now, you’ve been working with a dynamically typed language (JavaScript). Java is statically typed, which makes it faster because the computer’s resources aren’t wasted on checking the definition of values in your code. 

Another advantage of Java is that it is a high-level language, meaning it operates independently of the OS and hardware. The Java Virtual Machine (JVM) acts as an intermediary between the program and the machine, handling things like memory allocation, which frees you up to focus on writing elegant code, compiling, and executing.  

Finally, Java is multithreaded, which makes it possible to perform multiple actions at the same time. You might recall that Node.js is single-threaded, meaning it can only perform one action at a time. 

What if you’re really into JavaScript and aren’t that interested in becoming a Java developer? Learning Java can make you a better JavaScript developer because it will get you thinking about types, improving your fluency in the functions, arguments, and arrays that you use in JavaScript. 

## What Will I Learn? 

This course is self-paced—how fast or slow you go is up to you. You’ll work independently and will need to hold yourself accountable for mastering the following concepts:

* Using Java data types and assigning variables

* The differences between dynamic and static typing

* Basic syntax for creating methods that use loops or conditionals to log data based on a criteria

* The different parts of a method signature 

* Using classes to create blueprints for objects

* Using constructors and the **new** keyword to create objects based on class blueprints

* Using file input/output in Java

* Using the built in Java 2D Graphic Library

Meticulously doing the activities is crucial. Just like in the boot camp you recently completed, if you’re diligent in completing those, you will excel. 

> **Note**: Make sure you type out each line of code in the activities. No copy-and-pasting! This is the only surefire way to learn to code. 

One thing to look forward to is that a lot of the basics we will cover are similar to things you already know in JavaScript, so some of the topics will be very familiar to you!

# Install Your Tools

Before you begin your Java journey, you need the proper tools: the Java Development Kit (JDK) and a code editor. 

VS Code and Sublime are fine editors for simpler languages like JavaScript, but a mammoth like Java needs a bonafide integrated development environment (IDE). An IDE is a robust code editor with a compiler and debugger built-in. We’ll use IntelliJ IDEA, one of the most popular IDEs in the biz.

If you’re a Mac user, follow the instructions in the next section, Mac Install Guide, to install these. If you’re using Windows, scroll down to the Windows Install Guide section. 

## Mac Install Guide

Let’s install JDK and IntelliJ IDEA on your Mac. 

> **Important**: Make sure to follow the instructions closely! Each step must be completed exactly as described in order for the installs to work.

### Install the Java Development Kit

The first tool you’ll install is Java itself. To do that, you need the Java Development Kit (JDK).

> **Note**: Before you install the JDK, you’ll need an Oracle account (they’re free). Follow [the steps here](https://docs.oracle.com/en/cloud/get-started/subscriptions-cloud/csgsg/get-oracle-com-account.html) to create one. 

1. Head over to the [JDK download page](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

2. Accept the license agreement under Java SE Development Kit.

3. Click the "Mac OS X x64" download option.

4. Open the installation files package once the download is complete.

5. When the installation package window pops up, double click the package icon to launch the install wizard.

6. In the Introduction section of the install wizard, click Continue.

7. The Destination Select section should automatically choose an installation location and redirect you to the next section.

8. In the Installation Type section, click Install.

9. Enter your password in the pop-up prompt, and click Install Software.

10. Once the Installation section completes, you should see a message that says "The software was successfully installed."

11. You will be automatically directed to the Summary Section, which means you've successfully installed Java!

12. Click the close button, and select "Move to Trash" for the installation files.

13. Open Terminal and run the command `java -version` to check that the install completed successfully. You can also verify that the install worked by opening System Preferences and looking for a Java icon there (see image below).

![image alt text](Images/image_0.png)

Having trouble? Watch the video on installing JDK on Mac [here](https://youtu.be/9Bw8vpjYRiA).

### IntelliJ IDEA

Next, you’ll install IntelliJ IDEA to use as your code editor. 

1. Head over to the [Download Page](https://www.jetbrains.com/idea/download/#section=mac).

2. Download the Community Edition for MacOS.

3. Run the disk image file after it downloads.

4. In the Finder window that pops up, drag the IntelliJ IDEA CE icon into your Applications folder.

![image alt text](Images/image_1.png)

5. In the Applications folder, open IntelliJ in Launchpad.

6. Click Open when prompted to open a third-party app downloaded from the internet.

7. When prompted to import IntelliJ settings from a config or installation folder, choose the default "Do not import settings" and click OK.

8. You can choose to send usage statistics or choose the "Don't send" option to keep from sharing data (totally up to you!). 

9. Next you’ll be prompted to Customize IntelliJ IDEA. You can click "Skip remaining and set defaults" or click through to set the theme, etc. until you reach the "Start Using IntelliJ" button.

10. Don't forget to eject the install drive and delete the IntelliJ IDEA disk image from your Downloads folder after successful installation.

11. Congratulations! You've installed IntelliJ IDEA!

> **Hint**: Having trouble? Watch the video on installing IntelliJ IDEA on Mac [here](https://youtu.be/TYQan9aRAbs).

Give yourself a pat on the back! Installations can be tedious, but they provide the pillars for everything you will do going forward.

## Windows Install Guide

Let’s install JDK and IntelliJ IDEA on your Windows computer. 

> **Important**: Make sure to follow the instructions closely! Each step must be completed exactly as described in order for the installs to work.

### The Java Development Kit

The first tool you’ll install is Java itself. To do that, you need the Java Development Kit (JDK).

> **Note**: Before you install the JDK, you’ll need an Oracle account (they’re free). Follow [the steps here](https://docs.oracle.com/en/cloud/get-started/subscriptions-cloud/csgsg/get-oracle-com-account.html) to create one. 

1. Head over to the [JDK Download Page](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

2. Accept the license agreement under Java SE Development Kit.

3. Click the Windows x86 download option.

4. Run the install file.

5. On the first setup page, click Next.

![image alt text](Images/image_2.png)

6. Select the install path and click next.

7. On the "Change in License Terms" page, click OK.

8. Once again, choose the installation directory.

9. Click Next.

10. When the Complete page appears, you've successfully installed Java!

> **Hint**: Having trouble? Watch the video on installing JDK on Windows [here](https://youtu.be/o25N3nb_yiM).

### Install IntelliJ IDEA

Next you’ll install IntelliJ IDEA to use as your code editor. 

1. Head over to the IntelliJ IDEA [download page](https://www.jetbrains.com/idea/download/#section=windows).

2. Download the Community Edition.

3. Run the install file.

4. On the first setup page, choose next.

5. Select the destination folder and click next.

6. Mark the "Update PATH variable option", create the .java association, and click Next.

7. Click Install.

8. Choose your option for when to reboot.

9. Once you've rebooted, launch IntelliJ.

10. Accept the Privacy Policy and continue.

11. You can choose to send usage statistics, or choose the "Don't send" option to keep from sharing data.

12. Congrats! You've installed IntelliJ IDEA!

Having trouble? Watch the video on installing IntelliJ IDEA on Windows [here](https://youtu.be/JOc9lVFVQso).

Give yourself a pat on the back! Installations can be tedious, but they provide the pillars for everything you will do going forward.

# Lesson 1: Hello, World

One of the first things many developers do when learning a new language is to write a "Hello, World!" program. Why be any different? Let’s do this in Java. 

Creating a "Hello, World" program in JavaScript was pretty simple. In Java, it's a tiny bit more verbose. This is because Java is a **high-ceremony language**, unlike languages like Python or Ruby. This means that it you need to write a fair amount of code before you write the code that actually does the work you want it to do. 

Let’s start with that code. But first, we should familiarize ourselves with IntelliJ IDEA. 

Open IntelliJ IDEA, and you will be greeted with a screen where you can create a new project:

![image alt text](Images/image_3.png)

Click Create New Project.

You’ll see a screen asking what type of project you want to create. Java should be selected by default. Without checking any additional boxes or changing anything, click Next.

![image alt text](Images/image_4.png)

Now you need to name your project. Let’s name it HelloWorld.

![image alt text](Images/image_5.png)

This will bring you to a page where you can choose a template. Since you want to learn all you can, let’s move ahead without choosing a template for now and click Next.

![image alt text](Images/image_6.png)

That should do it! You are now on the main editor window of your project. Let’s go ahead and create our first class. 

To do this, click your **src** folder in the directory navigator on the left side of the window. Then go to File > New... > Java Class and give it the name HelloWorld.

![image alt text](Images/image_7.png)

Great! You’ve created your very first class! IntelliJ should now open to your newly created HelloWorld.java file and you will see the following:

> **Note**: When creating a class, the name of the file must correspond to the name of the class in your code. You named your file HelloWorld, so you’ll see that your class is also named HelloWorld.

```java
public class HelloWorld {
}
```


> **Note**: You’ll see **public** a lot in Java. **public** (as opposed to **private**) is a keyword used in a method or variable declaration that signifies that the method or variable can be accessed by elements in other classes. For more information about **public** or anything else Java-related, check out [Oracle Docs]([https://docs.oracle.com/en/java/index.html](https://docs.oracle.com/en/java/index.html)), a fantastic resource for everything Java.

So far you’ve worked with classes in JavaScript and may remember that a class is essentially a blueprint that can be used to create new objects using the **new** keyword. While we can instantiate new objects from classes in Java, we’ll often use classes for their static properties and methods without creating new objects. This means that classes *themselves* can be used similarly to how we use objects in JavaScript.

Unlike JavaScript, in Java, all of our code must be written inside of a class. There’s no concept of global variables or functions. At least one class in every Java program needs a **main** method.  It serves as an entry point for the program and is what gets everything started. Add the main method right inside of your HelloWorld class declaration.

```java
public class HelloWorld {
  public static void main(String[] args) {

  }
}
```


Every Java program requires an entry point, and that entry point is the **main method.** It is required in all programs (we will dissect the keywords in this method later in the lesson).

```java
public static void main(String[] args){}
```

Though we aren’t calling this method ourselves, it does accept a String array of arguments when the program first starts. 

> **Note**: Does this remind you of anything in Node.js? It should! It’s similar to **process.argv**, which can be used to pass in arguments to a Node.js application.

The above code is what makes Java a **high-ceremony language**. Unlike in JavaScript where we can just write **console.log("Hello, World!")**, Java takes a bit more code to get to that point. 

Now that we’ve gone through the ceremony, let’s get "Hello, World!" printing out! Inside the main method, let’s add the code that will print out “Hello, World!”:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Similar to how **log** is a method of the **window.console** object in JavaScript, **println** is a method of the **System.out** object and is used to print messages to the console.

Great! We have the code necessary to print "Hello, World!". But how do we run this? 

In JavaScript, we can run our code as is, like so:

```java
console.log("Hello, World!");
```

But in Java, we need to first go through a step called **compilation**. When we compile, our Java code is converted into **byte code**. This byte code is readable by the JVM and allows the code we write to be run and understood by any computer with the JVM installed. Voila!

Inside IntelliJ IDE, right-click HelloWorld.java, then click Run ‘HelloWorld.main()’. 

Your code will be compiled and then run, which should open a window in the bottom of your editor showing the path to the java.exe file, the file you are running, and then the line you printed: "Hello, World!". 

Congratulations, you’ve written your first Java program!

![image alt text](Images/image_8.png)

# Lesson 2: Statically-Typed Variables

In this lesson, we will go over the statically-typed structure of Java. 

The JavaScript you’re used to is dynamically-typed, which allowed for more flexibility in variable declaration and return typing. But this makes JavaScript less efficient than Java because the computer must do a lot of value-definition checking when the program runs. 

Let’s jump into learning how to harness this powerful characteristic of Java. 

## Variables Overview

You might recall that JavaScript is a dynamically typed language. This means you can have a variable that holds one type of data (like a boolean) which can later hold another type of data (like a string).

```js
var isFavorite = false;
isFavorite = "not really";=
```

Java is a **statically typed** language. It requires you to declare a variable along with the **type** of data it will hold. This means that when you declare a variable, you must tell the computer what type of data it will hold and the type of data it holds can never change.

```java
boolean isFavorite = false;
String favString = "not really";
```

Java exposes many built-in types, but we will only need a subset of these to progress through this unit. Using the same process that we did for our HelloWorld project, create a new project called VariableTypes, and create an associated class with the same name. Add your main method to the class.

```java
public class VariableTypes {
 public static void main(String[] args) {

  }
}
```

Inside the main method, we can start exploring the different data types:

A **String** indicates strings:

```java
String name = "Cleopatra";
```

An **Int** indicates whole numbers (e.g., 1, 2, 3):

```java
int age = 2016 + 69;
```

A **Double** stores decimal values (e.g., 1.2, 2.3, 3.54):

```java
double price = 1999.99;
```

A **Boolean** stores boolean values (e.g., true or false):

```java
boolean truth = true;
boolean falseness = !truth;
```

## Variables Practice

Now that we have a handle on Java’s data types, let's practice thinking about how to use them. 

Using the same process that you did for our HelloWorld and VariableTypes projects, create a new project called VariablesPractice and create a new class with a main method.

Inside the main method, do the following and try to answer the questions. Try different types until you can figure it out.

* Create two variables: one int and one Double. Add them together to find the sum, and store the result as a variable called **sum**. What type is **sum**?

* Create a String variable. Add it to your int and store the result as a variable. What type is it?

* When you think you know the data types of the resultant variables, use **System.out.println** to check the values.

* Is **sum** a whole number or a decimal value?

Decimal value, as **b** is a decimal value.

* What happens when we add a string and a number together in JavaScript?

The string and number will be concatenated. I.e. `4 + cat = 4cat.`

```java
public class VariablesPractice {

  public static void main(String[] args) {

    int a = 4;
    double b = 3.5;
    String c = "cat";

    // calculated variable sum is a double
    double sum = a + b;

    // calculated variable concat is a String
    String concat = a + c;

    // value of sum is 7.5
    System.out.println(sum);

    // value of concat is "4cat"
    System.out.println(concat);

  }
}
```

# Lesson 3: Arrays in Java

Arrays in Java are similar to the arrays you’ve worked with in JavaScript. The most important difference is that in Java, once initialized, an Array can only hold a fixed amount of elements. If you initialize an array with a size of 4, it will only ever be able to hold 4 elements. In JavaScript, arrays could hold as many or few elements as you wanted, without having to choose the size at creation.

We’ve worked with creating variables of a certain type that can hold a single value. That’s fine for small programs, but as things become more complex, you may want or need to hold more data inside a single variable. For that, you use an array.

An **array** is a data structure that allows for a **fixed number** of values of the **same type**, and that is important to remember. You must first specify the length of the array, which cannot be changed in the future. You must also declare its type, and this also cannot be changed. 

Let’s look at how you declare an array with a type using the declaration we are used to:

```java
int[] arr1;
```

The above syntax is called an **array declaration.** 

We have declared an array, but nothing is being done with it yet. Let’s look at what is called an **array initialization**.In order for us to do something with an array, we must first initialize it. Initialization of an array includes defining a name and the number of elements it will hold.

```java
public static void main(String[] args) {
  int[] arr1 = new int[4];
  arr1[0] = 10;
  arr1[1] = 20;
  arr1[2] = 30;
  arr1[3] = 40;

  int[] arr2 = {10, 20, 30, 40};
}
```

Just like JavaScript, Java uses **zero indexing**. This means that array indexing starts at 0. If we wanted to print out one of our elements, we would just pass it to **System.out.println()** like this:

```java
public static void main(String[] args) {
  int[] arr1 = new int[2];
  arr1[0] = 10;
  arr1[1] = 20;
  System.out.println(arr1[0])
}
```

Why don’t we tie this together with something we learned in previous lessons? We can add elements to an array and then print the array to the console with a method from the Arrays class, `.toString();`. Let’s go ahead and do that.

Create a new project called **Arrays**. Inside the **Arrays** class, define the **main method**: 

```java
public class Arrays {
   public static void main(String[] args) {

   }
}
```

To work with arrays, we will need to import the **Array** package from **java.util.Arrays**:

```java
import java.util.Arrays;
```


Now that we’ve laid the foundation, let’s initialize a new array:

```java
String[] names = new String[6];
```


Next, we need to add some elements to fill this newly initialized array:

```java
names[0] = "Tammer";
names[1] = "Matt";
names[2] = "Christian";
names[3] = "Alec";
names[4] = "Xander";
names[5] = "Jared";
```


Now we want to print our array to the console. How would we go about doing that? We’ll use the **Arrays** class, and specifically a method from that class, **.toString(array)**. 

The **Arrays** class is built into Java, so all we need to do to use is import it from the java.utils package. Without using this class and method, we would not be able to properly print our array to the console.

```java
System.out.println(Arrays.toString(names));
```

Great! Run the code and you should see all the names we added to the array printed in order to your console. The completed code should look like the following.

```java
import java.util.Arrays;

public class Arrays {
  public static void main(String[] args) {
    String[] names = new String[6];
    names[0] = "Tammer";
    names[1] = "Matt";
    names[2] = "Christian";
    names[3] = "Alec";
    names[4] = "Xander";
    names[5] = "Jared";

    System.out.println(Arrays.toString(names));
  }
}
```

# Lesson 4: Basic Syntax

This lesson introduces some basic Java syntax, including keywords, modifiers, conditionals, and iteration. 

## Keywords and Modifiers

At this point, you’ve probably noticed some keywords that you aren’t familiar with. These most likely included **public**, **static**, **void**, and **main**. These are **modifiers**. By placing them in class or method declarations, they modify the behavior of the class or method. 

Let’s look at what each of these means:

* **public**—This means that this method will be available to **all** other classes that want to access it (i.e., it’s public).

* **static**—This means that we do not need to create a new object or instantiate this class to call the methods associated with it.

* **void**—This means that our method has no return value. If you do not specify the **void** modifier with a method, Java will expect a return value. If you do not provide one AND do not provide the **void** modifier, you will receive an error at compilation.

* **main**—Every Java program requires a main method. The main method is the entry point to our application and will always be written as:

```java
 public static void main(String[] args){
  //code
}
```

## Conditionals Overview

The conditional statements we will use within Java are almost identical to those you have previously used in JavaScript. Both use what we call **C-style syntax**, because both of these languages were derived from the programming language C.

Before we dig into conditionals, let’s first create a new project. Let’s name the project Conditionals, and create the class and main method for it.

```java
public class Conditionals {
  public static void main(String[] args){

  }
}
```

Now, just like you would in JavaScript, add an **if/else** statement comparing the number 5 to 1. Create two different outputs for whether the statement evaluates to true or false:

```java
public class Conditionals {
  public static void main(String[] args){
    if (5 < 1) {
      System.out.println("I hope this line doesn't print..")
    } else {
      System.out.println("Now this is correct!")
    }
  }
}
```

Which of the two statements that we wrote will print to the terminal? Run the project using the Run menu again and find out if you were correct!

## Iteration Overview

Iteration allows us to loop over items in Arrays and ArrayLists and perform some function on each item as we go through. 

Let’s take a look at some code that iterates over an ArrayList of names:

```java
import java.util.ArrayList;
import java.util.List;


public class ListsPractice {
 public static void main(String[] args) {

  ArrayList<String> names = new ArrayList<>();

  names.add("Brett");
  names.add("Tri");
  names.add("Jamila");

  System.out.println( names.get(1) );
 }
}
```

To compare it to JavaScript, this is how we'd loop through an array called **names** in JS:

```java
for(var i = 0; i < names.length; i++) {
  console.log(names[i])
}
```

This is how we'd do a similar loop through a List called **names** in Java:

```java
for (int i = 0; i < names.size(); i++) {
  System.out.println(names.get(i));
}
```

What similarities and differences do you notice in **for-loops** in Java and JavaScript? Let's take a look.

Remember that your iterator, **i**, still has to be given a type. In this case, the type is int, which is short for integer:

```java
int i = 0;
```

Instead of **.length**, we use **.size()** to get the total number of elements:

```java
i < names.size();
```

**System.out.println** is used instead of **console.log**:

```java
System.out.println();
```

And finally, you'll use **.get(i)** instead of **i** with brackets to target elements of the ArrayList by its index:

```java
names.get(i);
```

The complete code looks like this:

```java
import java.util.ArrayList;
import java.util.List;

public class ListsPractice {
  public static void main(String[] args) {

    ArrayList<String> names = new ArrayList<>();

    names.add("Brett");
    names.add("Tri");
    names.add("Jamila");

    for (int i = 0; i < names.size(); i++) {
      System.out.println(names.get(i));
    }
  }
}
```

Great work! You’ve got basic Java syntax, arrays, and variables under your belt—and you wrote your first Java program! In the next lesson we will move on to method signatures and other more complex topics.

# Lesson 5: The Method Signature

In Java, all methods have what is called a **method signature**. The method signature is comprised of the method name and its parameter list. 

Let’s look at a few examples and identify the method signatures. First, let’s look at the following **FirstMethod** method:

```java
public void FirstMethod (int age, double height, String name) {
// method code goes here
}
```

The method signature of the above would be:

```java
FirstMethod(int, double, String)
```

This means that **FirstMethod** MUST be called with an integer, double, and a string. If it does not have these arguments, an error will be thrown.

Let’s look at another method and identify its signature.

```java
public void MapCoordinates (int x, int y, String location, String country){
// method code goes here
}
```

In the above code, what would the method signature for **MapCoordinates** be?

If you guessed what’s in the following line of code, you’re right! 

```java
MapCoordinates (int, int, String, String)
```

Method signatures give developers easy access to the method name and the list of typed parameters that are required in order to use the method properly.

The method signature is paramount for another reason. The compiler will not allow you to create two methods with the same signature that execute different code. What you can do is create another method with the same name, but a different **parameter list**. 

Look at this example:

```java
// method 1
public void FirstMethod (int age, double height, String name) {
  System.out.println("This is method 1")
}
// method 2
public void FirstMethod (int age, double height, String name) {
  System.out.println("This is method 2")
}
```

The above code will NOT work because the methods have identical signatures.

Here is an example of using the same name but a different signature, which does work.

```java
// method 1
public void FirstMethod (int age, double height, String name) {
  System.out.println("This is method 1")
}
// method 2
public void FirstMethod (int age, double height, double weight, String name) {
  System.out.println("This is method 2")
}

FirstMethod(35, 5.8, "clark"); // "This is method 1"
FirstMethod(28, 5.8, 200, "tammer"); // "This is method 2"
```

Notice that the names of the methods are the same, but when we pass the different signature parameters, we receive the proper output from the method that we wanted.

# Lesson 6: Generating Random Numbers

In this lesson, we will generate random numbers using Java’s built-in **Random** class. Random number generation can be used for many things. You can use it to simulate dice rolls and user input, or any other function that requires randomization.

> **Note**: We won’t go over every feature of the **Random** class. We’ll just scratch the surface and use it to generate some random numbers so you have an idea of what it can do.

Let’s begin by creating a new project called **RandomNumber** and then add the main method under it: 

```java
public class RandomNumber {

   public static void main(String[] args) {

   }
}
```

Now that we have our main method, we can generate a random number. To do this, we first need to import the **Random** class from the **java.util.Random** package.

## Packages

Packages in Java are groups of similar types of classes, interfaces, and sub-packages. When pulling a package into your project, you are pulling in all the associated classes and methods, allowing you to use the functionality that’s built into that package. 

> **Note**: You can think of a Java package just like the NPM packages you used with NodeJS. They provide you with functionality, and only by importing them into your project can you use that functionality.

Add the following package import above **public class Main**:

```java
import java.util.Random;
```


Adding this line allows us to access the methods associated with this class. 

Now that we’ve pulled in our **Random** class, we need to **instantiate** a new instance of this class, creating a new **Random object**. To do this, we will use the **new** keyword, like so:

```java
Random randomGenerator = new Random();
```

You will notice that we did not specify a data type like the ones we went over previously (int, String, etc.). Classes can also be data types: when we create a new object, the class it is being derived from will be its type. So in this case, **randomGenerator** is of type **Random**.

Great! We now have everything in place to generate a random number. Let’s do that now.

```java
public class RandomNumber {

  public static void main(String[] args) {
    Random randomGenerator = new Random();

    int randomInt = randomGenerator.nextInt(4);

    System.out.println(randomInt);
   }
}
```


Running this code will produce a random number between zero and three (0–3). When we specify **nextInt(4)**,we are saying we want a random number anywhere in the range of 0 to 4. So that leaves us with 0, 1, 2, and 3 as a possible result.

What if we wanted random numbers between 1 and 4? How would we do that?

It’s simple, all we need to do is add 1 to our random generation. Let’s generate a random number between 1 and 6.

```java
public class RandomNumber {

  public static void main(String[] args) {
    Random randomGenerator = new Random();

    int randomInt = randomGenerator.nextInt(6) + 1;

    System.out.println(randomInt);
   }
}
```

Here is the line that allows us to change the range of numbers we are randomly generating.

int randomInt = randomGenerator.nextInt(6) + 1;

If we were to leave off the **+ 1**, we would receive values between 0 and 5. Because we add 1 to our random number, we ensure we are receiving a number between 1 and 6. 

Go ahead and write out code that would allow for a random number between 3 and 9:

```java
public class RandomNumber {

  public static void main(String[] args) {
    Random randomGenerator = new Random();
    int randomInt = randomGenerator.nextInt(6) + 3;
    System.out.println(randomInt);
   }
}
```

# Lesson 7: ArraysList in Java

How many elements can an array in JavaScript hold? An array in Java can only hold as many elements as we specify at its declaration—the only limit is how many we can fit in memory. 

Enter the **List**. When using a standard array in Java, we need to specify its length at declaration. If we tried to enter more elements than we declared, we’d receive an error and would need to declare a new array. With a List, it will dynamically grow as the need for more elements grows. We do not need to set how many elements will exist at its declaration, allowing for much more flexibility.

Just like arrays, however, Lists are statically typed. This means that we MUST declare the type of data that we're going to store in our List.

Let's take a look at how we might use a List in a Java program.

In JavaScript, if we want to declare an empty array called **names**, we'd do the following:

```js
var names = [];
```

If we wanted to create an ArrayList in Java to serve the same purpose, we can declare that like so:

```java
List<String> names = new ArrayList<>();
```

Notice how when we instantiate a new List, we don’t call it:

```java
List<String> names = new List<>();
```

Instead, we declare a **new ArrayList<>();**. This is because List is an **interface**.

> **Note**: We will get into more detail about interfaces later. For now, just know that we cannot instantiate a new object from an interface, and instead must use something called an ArrayList.

In the above code examples, we're creating a new variable called **names**, which is a List of Strings and setting it equal to a new empty List. Let's take a second to break this down.

* **List<String>**—This is the syntax we use to specify the data type of our variable. Remember, in Java all variables must have a declared type. In this case, we're saying that this is a List that will contain Strings.

* **names**—The name of the variable to be created.

* **= new ArrayList<>();**—The value that we're assigning to our variable. In this case, we're telling Java to create a new empty List. We'll talk about what exactly **new** means in later lessons, but for now, every List we create will use this syntax.

Now that we understand how to create a List, let's create a new project in which we can play with them. Once again, using the same process we've used in our first few activities, create a new project called ListsPractice. Create a new class for this project, and add your main method.

```java
public class ListsPractice {
 public static void main(String[] args) {

 }
}
```

The first thing we need to do in order to use Lists in Java is import some related Lists libraries into our project. Arrays are built into Java, but Lists are not. They require you to import an outside library. 

> **Note**: In JavaScript, we can access additional functionality using npm packages and the **require** or **import** statement. Similarly, in Java, we use **import** statements to bring in outside libraries and provide additional functionality. 

To import Lists into our project, we add the **import** statement at the top of the code, outside the class. The libraries we want to import are **java.util.List** and **java.util.ArrayList**.

Type the following lines of code to add these libraries to your project:

```java
import java.util.List;
import java.util.ArrayList;

public class ListsPractice {

 public static void main(String[] args) {

 }
}
```

Inside the main method, create a new List called **names**, just like in our example above. Add this line of code inside of your **main method**.

```java
List<String> names = new ArrayList<>();
```


We're ready to add data to our List, but how can we do this? If we were working in JavaScript and wanted to add the name "Brett" to our array, we could do so like this:

```js
names.push("Brett");
```

Adding data to a List in Java uses similar syntax, except our method is called **add** instead of **push**:

```java
names.add("Brett");
```

Similar, right?

Add this to your main method and add a couple more names to the **names** List. When you're finished, your main method should look something like this:

```java
import java.util.List;
import java.util.ArrayList;

public class ListsPractice {

 public static void main(String[] args) {

   List<String> names = new ArrayList<>();

   names.add("Brett");
   names.add("Tri");
   names.add("Jamila");
 }
}
```

Now, let's print the second value in our List to the terminal. Just like arrays in JavaScript, Lists in Java are **zero-indexed**, meaning we start counting at 0. In JavaScript, if we wanted to access the second element of an array, we would use bracket notation to specify the element at index 1.

```java
console.log( names[1] );
```

To access elements in a Java List, we have to use a method called **get()**.

```java
System.out.println( names.get(1) );
```

Add this to your main method and then use the Run menu to run your code. The final class file should look like this:

```java
import java.util.List;
import java.util.ArrayList;

public class ListsPractice {

 public static void main(String[] args) {

   List<String> names = new ArrayList<>();

   names.add("Brett");
   names.add("Tri");
   names.add("Jamila");

   System.out.println( names.get(1) );
 }
}
```

Now we can tie everything together with a short activity.

## Your Turn

You’ve been tasked with generating random numbers and adding them into a List. Then you must log those numbers out to your console. 

Think of the following questions as you attempt to solve this problem:

1. How do you create a random number?
2. How do you create an array?
3. How do you create a new random number at each iteration?

Here’s the solution (don’t peek before you figure it out yourself!): 

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class RandomArrays {
   public static void main(String[] args) {

       List<Integer> numbers = new ArrayList<>();
       for(int i = 0; i < 10; i++){
           Random genNum = new Random();
           int randNum = genNum.nextInt(100);
           numbers.add(randNum);
           System.out.println(numbers);
       }
   }
}
```

Let’s go through this solution.

* We first create a **public class** called **RandomArrays**.

* Inside our main method, we instantiate a new List.

* We use the standard for loop notation to start our loop. 

* We first instantiate a new object from the **Random** class from the **java.util.Random** package. 

* We then create a new variable that will hold our randomly generated number. 

* This is the important part—as we iterate, we would like to add each randomly generated number to our List. We do that with this line:

```java
int randNum = genNum.nextInt(100);
numbers.add(randNum);
```

* Finally, we use **System.out.println(numbers);** to print out our array as it grows to our console. 

Great job! Run the program and you will see your random numbers print to the console!

# Lesson 8: Scanner and System.in

We have used the console up until this point to display data that we wanted to print. What if we wanted to interact with our users, and receive input from them? In your previous course, you utilized NodeJS and Inquirer to receive user input. Java has a built-in class called **Scanner**, which uses another System method, **System.in**. We can use this to receive user input, and then perform an action based on that input.

Begin by creating a project called **FirstScanner**, and then create the main method:

```java
public class FirstScanner {
   public static void main(String[] args) {

   }
}
```

To get started with Scanner, we need to instantiate a new instance of the **Scanner** class. To do this let’s import Scanner and then instantiate the object.

In order to instantiate a new Scanner object, we must tell the Scanner from where it should receive its input. Earlier we used the **System.out** to produce output to the console, so we’ll use **System.in** to receive input from the console. You might notice a keyword we haven’t used before: **new**. This lets us create a new object from a class. For now, that’s all you need to know—we will cover it in more depth a little later on.

Your code should now look like the following:

```java
import java.util.Scanner;

public class FirstScanner {
   public static void main(String[] args) {

       Scanner scanner = new Scanner(System.in);
   }
}
```

We can now prompt our user with a question, and receive some input as a response! We first need to ask our user a question. Let’s get their name by asking them for it.

Add this line of code after your **Scanner instantiation**:

```java
System.out.println("Hello! What is your name?");
```

Next, we need to capture their response. To do this, we will use a method from the **Scanner** class called **.nextLine();**. This allows us to capture String input from our users. 

Add this line to your code after the line you just added:

```java
String name = scanner.nextLine();
```

Finally, let’s print out this user input. Add this final line of code: 

```java
System.out.println("Welcome " + name);
```

Great! Now you can capture users input as a String and output that same information to them in the console. The complete code should look like the following:

```java
import java.util.Scanner;

public class FirstScanner {
   public static void main(String[] args) {

       Scanner scanner = new Scanner(System.in);
       System.out.println("Hello! What is your name?");
       String name = scanner.nextLine();
       System.out.println("Welcome " + name);
   }
}
```

What if we wanted to capture a number input by our user? Would we still use **.nextLine();**?

No, we wouldn’t! Data types are important in Java, and they continue to be important when it comes to capturing input.

Let’s add to our previous FirstScanner program and ask for our user’s age.

To do this, let’s add a new question under our name output. First, we will ask the question with **System.out**, and then add a second line of code that allows us to capture integer input:

```java
System.out.println(name + ", how old are you?");
int age = scanner.nextInt();
System.out.println("Okay! " + name + ", you are" + age + " years old");
```

Now we have a program that can ask for a user’s name and age and then print that information back out to the console. Awesome! This is what the program should look like now:

```java
import java.util.Scanner;

public class FirstScanner {
   public static void main(String[] args) {

      Scanner scanner = new Scanner(System.in);

      System.out.println("Hello! What is your name?");

      String name = scanner.nextLine();

      System.out.println("Welcome " + name);
      System.out.println(name + ", how old are you?");

      int age = scanner.nextInt();

      System.out.println("Okay! " + name + ", you are " + age + " years old");
   }
}
```

You will notice some spacing around our strings in our outputs. This makes it so that when we print to the console, it is formatted correctly and looks normal.

Go ahead and run the program. You’ll be prompted to enter a name and age, and see it print to your console! 

# Lesson 9: Switch Statements in Java

Switch statements in Java function the same way with the same syntax that you’re used to from JavaScript. We can use them to control the flow of our program, especially when paired with **Scanner** and **System.in**. Then we can let the user choose options and receive prompts based on those selections. 

Just like in JavaScript, a switch statement consists of a case (a condition), the code that condition will execute, a break (will terminate the switch statement when a case is met), and a **default** which will be fired off if none of the cases are met. 

Here’s an example:

```java
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Where are these useful? Well, when receiving user input, we may want to make a decision and run certain code based on the user’s input. The **switch** statement will allow us to do just that. Let’s incorporate a **switch** statement into our code along with a **Scanner** to capture user input.

First let’s create a new project called ScannerSwitch. Inside the src folder, create a new Java class and name it **ScannerSwitch**:

```java
public class ScannerSwitch {
   public static void main(String[] args) {

   }
}
```

In this project, we will simply ask the user for their name and then ask them to confirm whether it is correct or not. We will then execute distinct code based on the "yes" or “no” response received.

Let’s bring in the necessary packages. For this exercise, we only need to bring in **Scanner**. Add this line of code above the public class at the top of the file:

```java
import java.util.Scanner;
```


Great! That’s all the basic setup we need for this project. Just like all of our previous projects, once our main method has been declared, we can begin to code. 

First, we will need to instantiate a new instance of the **Scanner** class for use a bit later in our program. In the main method, type the following code:

```java
Scanner scanner = new Scanner(System.in);
```

> **Note**: We named the object **scanner**, but you can name it whatever you like!

Now that we have that set up, we need to prompt our user with a message. How do we write to our console?

Correct! We use **System.out.println();**. Add the following line of code after our scanner instantiation:

```java
System.out.println("Hello! What is your name?");
```

Now that we’ve asked the question, we need to capture our users response. How do we go about capturing user input?

We use **scanner.nextLine();** and save that to a String variable. Add this line of code after the one you just added:

```java
String name = scanner.nextLine();
```


Now that we’ve captured the user’s response to a variable, let’s print that back to them and ask for confirmation. Add the following line of code to the next line: 

```java
System.out.println("Your name is " + name + ". Is that correct? Enter yes or no");
```


We can now capture the user’s next response, which will be what we use in the following **switch** statement. Let’s do that in a new String variable by adding the following code: 

```java
String response = scanner.nextLine();
```


What happens if our user were to input an uppercase **Y** in their answer? Our code would not work. To fix these kind of edge cases we can use the **.toLowerCase()** method on our users input.

String response = scanner.nextLine().toLowerCase();

Excellent! We are ready to build our **switch** statement based on what is stored in the **response** variable. Looking at the example of the **switch** statement provided at the beginning of this lesson, what do you think it will look like? 

Let’s go ahead and build it together. First we need to set our **switch** and give it the **variable** we will be basing our **cases** on. The first line of our **switch** statement will look like this:

```java
switch(response){

}
```


Next, we need to provide a **case.** The case will execute some code based on whether it matches the user’s response. Let’s first start with a response of "yes." The case will look like the following:

```java
case "yes":
   System.out.println("Great! Welcome, " + name);
   break;
   ```

At this point, our `switch` statement should look like:

```java
switch(response){
  case "yes":
     System.out.println("Great! Welcome, " + name);
     break;
}
```


Finally, we need to deal with a response of "no." What should we do if the user tells us the name they entered is incorrect? We should prompt them for a new name! 

Try building out the "no case" yourself. Remember—if they choose no, we must prompt and receive a new name:

```java
case "no":
   System.out.println("Sorry! Please re-enter your name");
   String newName = scanner.nextLine().toLowerCase();
   System.out.println("Got it, your name is " + newName);
   break;
```

The final piece to our switch statement is the **default case**. This will be fired if the input given does not match any of the cases we provided.

Add the following code to prompt the user to enter a value if they enter something other than "yes" or “no”.

```java
default:
   System.out.println("Please enter yes or no");
   ```

Our complete `switch` statement should look like the following:

```java
switch(response) {
   case "yes":
       System.out.println("Great! Welcome, " + name);
       break;
   case "no":
       System.out.println("Sorry! Please re-enter your name");
       String newName = scanner.nextLine().toLowerCase();
       System.out.println("Got it, your name is " + newName);
       break;
   default:
       System.out.println("Please enter yes or no");
}
```

Now that we have finished the switch statement, our program is complete. Here is the completed code:

```java
import java.util.Scanner;

public class ScannerSwitch {
   public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);

       System.out.println("Hello! What is your name?");

       String name = scanner.nextLine().toLowerCase();

       System.out.println("Your name is " + name + ". Is that correct? Enter yes or no");

       String response = scanner.nextLine();

       switch(response) {
           case "yes":
               System.out.println("Great! Welcome, " + name);
               break;
           case "no":
               System.out.println("Sorry! Please re-enter your name");
               String newName = scanner.nextLine().toLowerCase();
               System.out.println("Got it, your name is " + newName);
               break;
           default:
               System.out.println("Please enter Yes or No");
       }
   }
}
```

Run your newly completed program and you will be prompted for a name. You will then be asked to confirm if this is correct, and based on your response, the corresponding code will run. 

Congratulations—your programs are becoming a bit more complex!

# Lesson 10: Classes and Objects

Classes in Java are considered the blueprints from which objects are created. Classes can contain any number of the following different types of variables: local, instance, and class variables.

Just like in JavaScript, where and how we define our variables is paramount to the functionality of our programs. Something you will remember is the term **scope**. Scope will impact what variables and methods can be accessed from other classes and objects, and just like in JavaScript, improper scoping can lead to errors and problems accessing data. 

> **Note**: We will get into scope more in the next lesson. 

Let’s equate this to the Scanner class we’ve used, which is built into Java. When we instantiate a new object of the Scanner class, like so:

```java
Scanner scanner = new Scanner(System.in);
```

We are able to access methods associated with the Scanner class our object was created from (like **Scanner.nextLine();**). 

> **Note**: There are numerous other methods attached to the Scanner class, but we did not need to use them. Just know they are available to you.

Like we said earlier, **classes** are our blueprint for the **objects** we will create. When we create an object, you can think of it as a copy of the class it’s being created from. 

There are three steps to object creation: 

* **Declaration**—A variable declaration with a variable name with an object type.

* **Instantiation**—The **new** keyword is used to create the object.

* **Initialization**—The **new** keyword is followed by a call to a constructor. This call initializes the new object.

![image alt text](Images/image_9.png)

The **new** keyword in Java is used to instantiate a new object from a class. When using the **new** keyword, it calls the **constructor** of the class you are instantiating the object from. 

Let’s take a look at a simple example of using **new** and a **constructor**.

```java
// Create a FirstConstruct class
class FirstConstruct {
  int x;  // Create a class attribute
  String name; // Create another class attribute

  // Create a class constructor for the FirstConstruct class
  public FirstConstruct() {
	x = 5;  // Set the initial value for the class attribute x
    name = "tam";
  }
}
// Create an object of class FirstConstruct (This will call the constructor associated with FirstConstruct)
FirstConstruct myObj = new FirstConstruct(); 
System.out.println(myObj.x); // Print the value of x
System.out.println(myObj.name); // Print the value of name

// Outputs 5
// Outputs tam
```

When the **new** keyword and a constructor are used together, the JVM creates a new object in a part of memory called the **heap** and hands us a **reference** to that object. References contain the location of the newly created object on the heap and allow us to access/use the object (more on this in a minute as well). 

When the JVM allocates memory, there are four possible places it will do so. The next lesson will talk a bit about two of these memory allocation points.

# Lesson 11: Scoping

The **scope** of a variable refers to where it is accessible from within the rest of the code. 

The following scopes are available in Java:

* **Member Variables / Class-Level Scope**—These variables are declared inside a class (not within a method) and can be accessed anywhere inside the class.

* **Local Variables / Method-Level Scope**—These variables are declared inside a method and can only be used within the method in which they were declared. A local variable is declared within a method or a constructor. The scope and lifetime are limited to the method itself; this means that when the method is completed, the variable is destroyed

* **Loop Variables / Block Scope**—Declared inside a block and not usable outside of it. Any variables declared within a loop are local to that loop. That means that when the loop is complete, the variables declared within that loop are no longer accessible. This goes the same for block scoping; variables declared within a block are only accessible within that block.

The following modifiers can be added to a variable to further refine their scope:

* **Public**—Visible/usable by any class.

* **Protected**—Can be accessed within the package it was declared in. Can also be seen or accessed by subclasses or package members.

* **Default**—Default is Package-Private. This means that all classes within the same package can access the variable, but not outside the package.

* **Private**—Only the class in which it was declared can access it.

Scoping in programming is extremely important. Where you declare a variable is one of the most important parts of declaration. You need to make sure you are properly scoping your variables so they are accessible where they are needed and exist only as long as necessary. This can be a tricky idea to wrap your head around, but with time and practice it can help you write cleaner and more efficient code.  

Let’s take a look at some code examples that show different scopes.

## Class Scope

```java
public class ClassScope {
  private int money = 0;
  public void addMoney() {
  money++;
  }
  public void subtractMoney() {
  int savings = money + 1;
  }	
}
```


In **ClassScope**, we declared an integer variable named **money.** This can be accessed by any methods that are in the class. If we were to remove the **private** modifier, it would be accessible anywhere in the package.

## Method Scope

```java
public class MethodScope {
  public method1() {
    int age = 28
  }
  public method2() {
    age = age + 1
    // this will have a compile error, age cannot be resolved to a variable
  }
}
```


In **MethodScope**, we declared two methods. In the first, we declared a variable **age**, and gave it a value of 28. In our second method, we attempted to access the **age** variable, but it is not available in **method2**. This is because method-scoped variables are only accessible within the method in which we declare them. Therefore, we can use **age** in **method1** but not in any other methods.

## Block Scope

```java
public class BlockScope {
  for(int i=0; i<10; i++){
    int j = 0
    j++;
  }
 System.out.println(j);
 // this will have a compile error; age cannot be resolved to a variable
}
```


In **BlockScope**, we wrote a for loop, and in that loop we declared an integer variable **j**. Within the for loop, the variable is accessible, but outside of the loop you cannot access **j**. That is a **block scoped variable**.

Scope can impact your programs in many ways, and declaring a variable in the wrong place will leave you with errors or an inability to access variables or data where you need it. Being careful about when and where you declare a variable can save you many headaches and memory in the future.

# Lesson 12: Return Types

In Java, we can set a return type for our methods. When we do this, we are telling the compiler the data type of what is going to come back from the method when called. 

Let’s take a look at what a return typed method can look like:

```java
public static int mult1and1() {
   int y = 1 * 1;
   return y;
}

public static int mult1and2() {
   int y = 1 * 2;
   return y;
}

public static int mult(int a, int b) {
   int y = a * b;
   return y;
}
```


* Methods can return values to the caller, but they don’t have to.

* We have seen examples of both in our code so far:

    * **System.out.println(…)** does not return a value to the caller; it simply does some work for us.  It prints a value to the console.

    * The Scanner method **nextLine()** does return a value to us. Remember that it returns the string of characters the user typed in.

* Even if our method does not have a return value, we must always indicate a return type. The return type for a method that returns no value is **void**. Otherwise, it is the type of whatever value is returned from the method.

We saw an example of when we do have a return type, but what if our method doesn’t return anything? When your method has no return value, use the modifier **void** to let the compiler know that this method has no return type. 

Here is an example of a method with no return type:

```java
public static void sayHi() {
  System.out.println("Hi!");
}
```


In the above code, the method has no return value. All this method would do is print "Hi!" to our console. Because of this, we have no need to declare a return type. 

Removing **void** would cause an error saying we are required to add a return type:

```java
public static sayHi() {
  System.out.println("Hi!");
}
// Error "invalid method declaration; return type required"
```

# Lesson 13: Comments and Debugging 

Just like in JavaScript, commenting in Java is an important part of the programming process. Though comments themselves don’t necessarily execute any functionality, they do let you and anyone else reading your code know what you were doing at that point in time. 

Having this level of detail in your code is helpful for many reasons. Imagine a scenario where you are working on a project and it’s getting quite complex. Suddenly, you are pulled into a different project and have to put the previous one on hold? A well-commented program allows you to jump right back into work later, with the comments telling you what methods did what. 

Comments offer the same benefit for other programmers who join the project to analyze your code or help you write more: they give context to what would normally just be lines and lines of code.

## Comments

There are two different types of comments:

### Block Comments

Block comments start with ```/*``` and end with ```*/```. They can span multiple lines (thus the name, "block").

### Single-Line Comments

A single-line comment should not be longer than one line. Everything after ```//``` is a comment. You can see in the example below what happens if a single-line comment spills over onto a second line. 

Let’s look at an example of both a block comment and a single-line comment.

```java
public static int mult(int a, int b) {
   int y = a * b;
   /* This is a block comment,
   as you can see this can span multiple lines without breaking
   and can allow for longer comments or deeper explanation into a function
   or plans for what to do in the future. */
   return y;
   // this is a single line comment,
  and continuing to the next line would escape the comment and cause an      error
}
```

## Debugging

Debugging is an incredibly valuable tool to have in your kit. Debugging is something that beginners often overlook, and can lead them to lots of headaches they could have solved. 

Sometimes our code is not executing exactly how we thought it would. In these cases, the debugger allows us to step in at certain points and see what is actually going on versus what we are seeing at execution. This enables us to pinpoint exactly where things are going wrong and observe the state of our program wherever we choose.

We use breakpoints in IntelliJIDEA to pinpoint where we want to observe the current state of our program. Setting those up is super simple! 

The following image shows lines of code that set different values of a name array to values we want it to hold:

![image alt text](Images/image_10.png)

In the left column, click to the right of the line numbers to set a breakpoint:

![image alt text](Images/image_11.png)

The red dot indicates a breakpoint. If you click Run > Debug, you will see an output in your console showing the variables’ values and methods state at each breakpoint you set. 

We won’t go deeper into debugging here—just remember that it is a vital tool that should be remembered and used whenever you’re in need of troubleshooting. Using the debugger while you write code is a habit you should get into—it will make you a better programmer.

Great job working through these lessons! You learned about the method signature, random number generation, array lists, scanner and receiving user input, scoping, and return types. That’s a lot of content, so pat yourself on the back for your hard work. In the next lesson, we will cover object-oriented concepts in Java, as well as writing to files, reading files, and using Java’s built in 2D graphic library. 

## Lesson 14: Object-Oriented Concepts in Java

Java is an object-oriented programming (OOP) language. OOP is a rich programming paradigm that builds on the concepts of **abstraction**, **encapsulation**, **inheritance**, and **polymorphism** (more on these below).

In OOP, data, properties, and functions are bundled together in something called an object. An object is code that allows a developer to create identical or similar objects without needing to rewrite the object’s code. This is achieved by first creating a class, which acts as a blueprint for objects of that class. You can then easily create an **instance** of the object, which is a copy of the object built from the blueprint.

> **Note**: In JS, we used constructor functions to make new objects. Java classes allow us to do something similar. 

Let’s take a look at an example that might help clarify classes and objects. Imagine that we have a class of **Car**. Cars can accelerate, honk, stop, and have a speed at any given time. We can create **objects** from this **Car** class, like a Ford Fiesta or Honda Accord. ** 

These are cars, but they are each their own version of a car. Because these **Car** objects were created from the **Car** class, they inherit all the functionality found in the main **Car** class but are also their own distinct objects created from that class.

The following code shows what this would look like:

```java
public class Car {
  int mileage;
  int currentSpeed;
  String make;
  String name;

  // Constructor for creating new Car objects
  public Car (String name) {
    this.name = name;
  }
  
  public void honk() {
    System.out.println("Honk honk");
  }

  public void stop() {
    System.out.println("Hit the breaks!");
    currentSpeed = 0;
  }

  public void accelerate() {
    currentSpeed = currentSpeed + 15;
  }
  
  public void printSpeed() {
    System.out.println("The " + name + " is going " + currentSpeed + " miles per hour");
  }
}
```

Now that we have created a basic `Car`class, we can go ahead and create some objects based on this class. These objects will inherit all the methods and attributes associated with the class they’re derived from. 

```java
public class CarObjects {
  public static void main(String[] args) {
    Car ford = new Car("Ford");
    Car honda = new Car("Honda");
    // we have created a Ford and Honda object from the Car class

    // call the accelerate method on each of our new Car Objects
    ford.accelerate();
    honda.accelerate();

    // print their current speed which should be 1 mile per hour
    ford.printSpeed();
    honda.printSpeed();
    /* call honk, then stop, then print our current speed which should now be 0 */
    honda.honk();
    honda.stop();
    honda.printSpeed();
  }
}
```

Running `CarObjects`should give you an output like the following:

`The Ford is going 15 miles per hour

The Honda is going 15 miles per hour

Honk honk

The Honda is going 0 miles per hour`

## The Four Pillars of OOP

There are four main concepts of Java OOP (object-oriented programming) that we will briefly go over. We will not be doing a very deep dive, so feel free to research more later. A link to Oracles documentation will be provided at the end of the unit.

The four pillars of Java OOP are:

* **Abstraction**—This is the process of keeping or hiding implementation details from the user. The only thing the user receives is functionality. All you would need to know is which methods are available on an object and its signature, and you can use the methods. You do not need to know about what the method does behind the scenes, what side effects it may have, or what it even needs to due to produce the result you are looking for. This hiding of implementation is abstraction

* **Encapsulation**—This is the process of bundling methods and variables into a single place that can show the developer the state of an object. This is our class. Encapsulation at its most basic is the process in which we design a class, creating a blueprint for future object instantiation.

* **Inheritance**—This allows for classes to be derived from other classes, receiving their attributes and functionality. Inheritance at its most basic is shown in our above **Car** example. When we created a new car, that new object **inherited** all of the functionality the original blueprint it was created from had.

* **Polymorphism**—This allows for the subclasses of a class to create their own unique methods and functionality, while sharing some of the functionality of the parent class as well. Back to thinking of the **Car** class, we could create a new object that, while it has the method **honk()**, the honk may say **"beep beep"** instead of **“honk honk”** and keep all the other methods and functionality the same. 

# Lesson 15: Exceptions in Java

Errors occur in all programs, and handling them is an important part of programming. Each programming language has its own way of handling errors. Java uses **exceptions**. 

We have two choices when an exception occurs. We can either catch the exception or let the compiler know that it can throw an exception and allow later code to deal with it. You will see examples of exceptions and how to handle them in a bit.

There are two main categories of exceptions in Java. 

* **Checked Exceptions**—We are required to either catch these or specify that our code might throw an exception. The compiler will enforce this requirement.

* **Unchecked Exceptions**—We do not have catch or specify that these might arise, but we can catch them if we want to. Unchecked exceptions are typically errors that we can't or don't want to recover from. Like all things in code though, that will not always be the case. An unchecked exemption is one we do not want to catch at compile time, and stop our program from starting.

Whenever you use any kind of file input/output, an error can occur.When there is a possibility of errors, we must add special exception cases into our code. We will make sure to add these in the next few lessons.

# Lesson 3: Scanner and PrintWriter

We can use Java to create and write to files on our system. This can be useful for storing data in text files and having that data be read in later if necessary. We are going to go through the very basics of creating a file and writing to it using `Scanner`and `PrintWriter`. 

To get started, create a new project called FileCreation,and write out your main method:

```java
public class FileCreation {
  public static void main(String[] args) {

  }
}
```

Now that we have our mainmethodcompleted, we can import `PrintWriter’. This is a class built into Java, which can be imported from the java.iopackage. At the top of your file, add this code:

```java
import java.io.PrintWriter;
```

Next, we need to create a new object from the `PrintWriter`class. We will use the `new` keyword and a constructor. Type the following code inside of our main method:

```java
PrintWriter writer = new PrintWriter("our-new-file.txt", "UTF-8");
```

As you can see, our constructor takes two arguments. The first argument is the name of the file with the extension. Our file will be named our-new-file, and it will be an .txt (text)file.  The second argument is the encoding type we want to use. For our purposes, we will use UTF-8.

Now, because this program will be creating a file and writing to it, there is the possibility that it will throw an exception.To handle these, we will specify this within our method signature. 

Let’s first import the two exceptions we need to be ready for. They are also built into Java and are part of the java.io package. Add these under your `PrintWriter` import at the top of your file:

```java
import java.io.FileNotFoundException;
import java.io.UnsupportedEncodingException;
```


As we described earlier, these exceptions need to be added to the method signature. To do this, we need to add a few things to the mainmethod. 

Add the following code to your main method:

```java
public static void main(String[] args) throws FileNotFoundException, UnsupportedEncodingException {
  ```

If we do not add these exceptions, our code will not execute. This is because anytime you use I/O (input/output) functionality, exceptions can be thrown and the compiler will require you to include the proper code to catch them. 

Now that we’ve imported everything we need and added the proper exceptions to our method signature, we can create and write to a file!

Using PrintWriter is very simple. We instantiatethe object as `writer`,so we will use that name to access the methods we need. We will only need the `.println()` and `.close()`methods. We will use `writer.println()` to write lines of text to a file, and `.close()` to end the process.

Let’s get to it. Add the following lines of code under your PrintWriter object instantiation.

```java
writer.println("This will be on line 1 of our text file");
writer.println("This will be on line 2 of our text file");
writer.close();
```

The completed code should look like the following: 

```java
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

public class FileCreation {
   public static void main(String[] args) throws FileNotFoundException, UnsupportedEncodingException {

   PrintWriter writer = new PrintWriter("our-new-file.txt", "UTF-8");

   writer.println("This will be on line 1 of our text file");
   writer.println("This will be on line 2 of our text file");
   writer.close();
   }
}
```

The code above will create a text file called our-new-file.txt within our project directory. It will write two separate lines with the text we specified in our `println();`method. Using the `.close();` method will end the process, and deallocate the memory that `PrintWriter` was using. 

> **Note**: `PrintWriter` can create other types of files than text. We just used .txt for demonstration purposes.

Great job! You just created your first file and wrote to it, all in four lines of code!

# Lesson 16: BufferedReader and FileReader

There are several different ways to read a file in Java. The easiest and most useful way will be to use a class built into Java called **BufferedReader**, which is part of the **Reader** package. **BufferedReader** reads text from an input stream—in this case, our text file. 

We can start by completing the basic setup like we have had to do for all of our programs. Create a new project called **ReadAFile**. Then, write a main method.

This is our class declaration and **main method:**

```java
public class ReadAFile {
  public static void main(String[] args){

  }
}
```

In this project, we will also need a .txt file, so go ahead and create a file called data.txt in the src folder of your project and write a few lines in it, using whatever words you’d like. (Make sure it spans multiple lines). 

Here’s an example:

```java
This
Is
Multiple
Lines
```

Great! We are going to use a few built-in Java classes, so let’s go ahead and import all the proper packages. 

Above `public class ReadAFile`, add the following imports:

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
```

We will use **BufferedReader** and **FileReader** to read in our file. **Path** and **Paths** will be used so we can obtain the path to the file we want to read regardless of the OS we are using. Finally, we import **IOException**, as any I/O process requires this.

Now that we have everything we need to begin reading a file, let’s write some code! We will start with obtaining the current path the program is running from. To achieve this, we will use the **Path** and **Paths** classes.

Add the following code inside of your ReadAFiles **main method**:

```java
Path currentPath = Paths.get(System.getProperty("user.dir"));
Path filePath = Paths.get(currentPath.toString(), "src", "data.txt");
String inputFile = filePath.toString();
System.out.println(inputFile);
```

The first line of code will obtain the current path where this code is being run from and save it to the **Path** variable **currentPath**. Next, we take the user’s current path and specify that we are looking for a directory called src and a file called data.txt. We save that to a variable called **filePath**. Finally, we take our **filePath** variable and convert it to a string, then output it to the console with **System.out.println();**.

We have our user’s path and a path to the file we would like to read. So now we need to instantiate a new **BufferedReader**object as well as a **FileReader**. We will pass our newly instantiated **FileReader**into our **BufferedReader**. To do this, add this line of code under the previous code you just added:

```java
BufferedReader reader = new BufferedReader(new FileReader(inputFile));
```

We declare a new object of **BufferedReader** called **reader**. We then instantiatea new **BufferedReader** and initialize its constructor, passing in a new **FileReader** and passing the file we want to read into the **FileReader** constructor. 

Because we’ve added **FileReader** into the code, we need to catch the possible exception it can throw. To do that, add the following line to the main method after your **(String[] args)**:

```java
throws IOException
```

Our main method now looks like this:

```java
public static void main(String[] args) throws IOException {
```

Now we can actually read a line from our file. To do that, we want to use our new **reader** object and a method called **.readLine();**. Add the following line of code under the main method:

```java
String line = reader.readLine();
```

We save the value of **reader.readLine();** to a variable. The reason we do this is so that we can use the value in a while loop. The while loop will run as long as there are lines to read. 

Type the following line of code under our **reader.readLine**. This will create our while loop.

```java
while(line != null){
   System.out.println(line);
   line = reader.readLine();
}
```

Let’s go ahead and break down this while loop**.** It says "while there is a line to read (while the line is NOT null), let’s print out the line to the console and then read the next line." If there is no next line to read, we are done. 

Great! Now run this code and you should see all of the lines you wrote into data.txt logging out to the console! The complete code should look like the following:

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;

public class ReadAFile {

   public static void main(String[] args) throws IOException {


       Path currentPath = Paths.get(System.getProperty("user.dir"));
       Path filePath = Paths.get(currentPath.toString(), "src", "data.txt");
       String inputFile = filePath.toString();
       System.out.println(inputFile);

       BufferedReader reader = new BufferedReader(new FileReader(inputFile));
       String line = reader.readLine();

       while(line != null){
           System.out.println(line);
           line = reader.readLine();
       }
   }
}
```

# Lesson 17: 2D Graphics Library

Java has something called the Abstract Window Toolkit (AWT) built in. This toolkit lets you draw basic two-dimensional images using code. It can be a bit complicated, so we are only going to cover the basics. 

In this lesson, you’ll use AWT to create a basic picture of a mouse’s head by creating three black circles and positioning them like this:

![image alt text](Images/image_12.png)

There are a few ways to create images using Java. We’ll use the **Canvas** and **Graphics** classes. 

We will use coordinates to draw our images, but Java does not use a standard coordinate system. You’re probably used to Cartesian (x, y) where both points can be positive or negative. In Java, the coordinate system starts in an upper-left corner leaving ONLY positive values for coordinates. Coordinates are measured in pixels.

The following image shows how Java coordinates differ from Cartesian:

![image alt text](Images/image_13.png)

Let’s get started! First, create a new project called Drawing. Then create your main method. 

```java
public class Drawing {
  public static void main(String[] args){

  }
}
```

For the purposes of this project, we will need to import a few things—mainly all of the **java.awt** package along with a package called **JFrame**. Our main class is going to extend **Canvas**, so we will receive all the methods from **Canvas**.

The **extends** keyword allows us to inherit all the functionality of the class we are extending. When we **extend** a class, we are making a **subclass**. 

> **Note**: This works the same as ReactJS components, when your component would extendthe Component class of React.

```java
import java.awt.*;
import javax.swing.JFrame;

public class Drawing extends Canvas {
  public static void main(String[] args){

  }
}
```

Now that we’ve set up our basic class, we need to set up the **frame** that we will draw in. To do this, add the following code inside of your main method:

```java
JFrame frame = new JFrame("My New Drawing");
```

This creates a new JFrame object, which is the window that will hold the canvas. Now add code that creates the canvas under the previous line:

```java
Canvas canvas = new Drawing();
```

Beneath that, add the following line of code, which sets the canvas size to have a width and height of 500 pixels:

```java
canvas.setSize(500,500);
```

Now that we have the canvas created and sized, we need to add it to our frame. We then pack it (size it to fit the canvas) and then make it visible. Add the following code to make that happen under your **canvas.setSize**:

```java
frame.add(canvas);
frame.pack();
frame.setVisible(true);
```

At this point, your code should look like the following: 

```java
import java.awt.*;
import javax.swing.JFrame;

public class Drawing extends Canvas {

   public static void main(String[] args) {
       JFrame frame = new JFrame("My Drawing");
       Canvas canvas = new Drawing();

       canvas.setSize(400, 400);

       frame.add(canvas);
       frame.pack();
       frame.setVisible(true);
   }
}
```

Run your code and take a look at how it is progressing. So far, the only output you should see is the opening of a window. It might not seem like much, but you are well on your way!

![image alt text](Images/image_14.png)

Next, we need to write a method that will paint, or draw, our canvas as we specified. Let’s create a new method called **paint**. Add the following line of code under the closing brace of our drawing class. This will create a new method, **paint**:

```java
public void paint(Graphics g) {
   Rectangle bb = new Rectangle(100, 100, 200, 200);
}
```


In this method, we pass a **Graphics** object as an argument. We then create a **Rectangle** object and give it the dimensions of 100 x 100 x 200 x 200. We want to take this rectangle and turn it into a circle. 

Next, we will create another method called boxOval. Type this code in under your completed **paint** method.

```java
public void boxOval(Graphics g, Rectangle bb) {
   g.fillOval(bb.x, bb.y, bb.width, bb.height);
}
```

Finally let’s make this print out our circle as a drawing. To do this, we will call **boxOval** inside of **paint**:

```java
public void paint(Graphics g) {
   Rectangle bb = new Rectangle(100, 100, 200, 200);
   boxOval(g, bb);
}
```

So far, your code should look like the following:

```java
import java.awt.*;
import javax.swing.JFrame;

public class Drawing extends Canvas {

   public static void main(String[] args) {
       JFrame frame = new JFrame("My Drawing");
       Canvas canvas = new Drawing();

       canvas.setSize(400, 400);

       frame.add(canvas);
       frame.pack();
       frame.setVisible(true);
   }
  public void paint(Graphics g) {
    Rectangle bb = new Rectangle(100, 100, 200, 200);
    boxOval(g, bb);
  }
  public void boxOval(Graphics g, Rectangle bb) {
    g.fillOval(bb.x, bb.y, bb.width, bb.height);
  }
}
```

If you run this code now, you should see a black circle pop up in a new window. Now we have everything we need to move to the next phase. 

We currently have a circle. To turn that circle into a mouse, what do we need to add? Two more smaller circles! 

They don’t just need to be smaller—they also need to be positioned in such a way that makes them look like ears. To get started, create a new method and call it **mouse**:

```java
public void mouse(Graphics g, Rectangle bb){
}
```

The next thing we want to do is create a circle, so let’s call our **boxOval** method. Add this code beneath the **mouse** method:

```java
public void mouse(Graphics g, Rectangle bb){
  boxOval(g, bb);
}
```

We now want to halve the size of the circle, so we will divide the current width and height by 2. Add the following **int** code to do that:

```java
public void mouse(Graphics g, Rectangle bb){
  boxOval(g, bb);

  int dx = bb.width / 2;
  int dy = bb.height / 2;
}
```

Now that we have our newly sized circle, let’s instantiate a new **Rectangle**object with the halved sizes. Type the following line of code after the **mouse** method code block:

```java
Rectangle half = new Rectangle(bb.x, bb.y, dx, dy);
```

Finally, we need to create two new circles with the new sizes and then put them in the correct position to be ears. Add the following code to do that:

```java
half.translate(-dx / 2, -dy / 2);
boxOval(g, half);
half.translate(dx * 2, 0);
boxOval(g, half);
```

Excellent! Run this code and you should see your mouse head output to the screen in a new window. 

Your code should look like the following:

```java
import java.awt.*;
import javax.swing.JFrame;

public class Drawing extends Canvas {

   public static void main(String[] args) {
       JFrame frame = new JFrame("My Drawing");
       Canvas canvas = new Drawing();

       canvas.setSize(400, 400);

       frame.add(canvas);
       frame.pack();
       frame.setVisible(true);
   }
  public void paint(Graphics g) {
    Rectangle bb = new Rectangle(100, 100, 200, 200);
    boxOval(g, bb);
  }
  public void boxOval(Graphics g, Rectangle bb) {
    g.fillOval(bb.x, bb.y, bb.width, bb.height);
  }
  public void mouse(Graphics g, Rectangle bb){
    boxOval(g, bb);

    int dx = bb.width / 2;
    int dy = bb.height / 2;

    Rectangle half = new Rectangle(bb.x, bb.y, dx, dy);

    half.translate(-dx / 2, -dy / 2);
    boxOval(g, half);
    half.translate(dx * 2, 0);
    boxOval(g, half);
  }
}
```

Now that we have created our mouse, let’s go ahead and use **BufferedImage**and **ImageIO**to save this drawing to our machine as a .png!

# Lesson 18: BufferedImage and ImageIO

**BufferedImage** and **ImageIO** are built-in Java classes, like many of the other classes we’ve used throughout this course. We will also use the **File**class to create our file.

**BufferedImage** creates an image buffer that we can pass our image into. That buffer will then create a data set of a **color model** and **raster**. The raster will contain the coordinates, allowing the .png to contain the drawing we made. We can use these alongside **ImageIO** to save the file. 

First, we need to add **import** statements to our project to incorporate these new classes. At the top of your Drawing project, add these imports:

```java
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
```

Great! These imports will allow us to use all the methods and classes we need to complete this lesson. 

Inside the **mouse** method, we need to instantiate a **BufferedImage**object. When initializing the object, we need to pass an int width (**dx**), int height (**dy**), and image type (**BufferedImage.TYPE_INT_RGB**).

```java
BufferedImage buff = new BufferedImage(dx, dy, BufferedImage.TYPE_INT_RGB);
```

Now we need to create a new file where our drawing will be saved. We’ll use the **File** class to do this. Add the following line of code:

```java
File file = new File("mouse.png");
```

Next we want to save our drawn image to the newly created file. To do this, we will use the **buff** object to pass it into ImageIO’s **.write()** method. Add the following line of code:

```java
ImageIO.write(buff, "png", file);
```

Excellent. But there is still one remaining task: handling exceptions. Because this is an I/Ooperation, we need to let our method know that it could throw an exception.

So let’s add **throws IOException** to our method. The **mouse** method signature should now look like the following:

```java
public void mouse(Graphics g, Rectangle bb) throws IOException {
  ```

Good. We got that done, but that still doesn’t solve all of our problems. 

We need to call the **mouse** method from within the **paint** method. Because this is an I/Ooperation, it has a chance to fail. To handle this, let’s use **try/catch**. We will **try** to call our **mouse**method and if it works, great. If not, let’s **catch the thrown exception** and print our stacktrace. 

Inside the **paint** method, add the following code beneath where you created the **Rectangle** object:

```java
try {
   mouse(g, bb);
} catch (IOException e) {
   e.printStackTrace();
}
```

This should solve any problems we might have with exceptions. 

Your complete project should look like the following:

```java
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.JFrame;

public class Drawing extends Canvas {

   public static void main(String[] args) {
       JFrame frame = new JFrame("My Drawing");
       Canvas canvas = new Drawing();

       canvas.setSize(400, 400);

       frame.add(canvas);
       frame.pack();
       frame.setVisible(true);
   }
   public void boxOval(Graphics g, Rectangle bb) {
       g.fillOval(bb.x, bb.y, bb.width, bb.height);
   }
   public void paint(Graphics g) {
       Rectangle bb = new Rectangle(100, 100, 200, 200);

       try {
           mouse(g, bb);
       } catch (IOException e) {
           e.printStackTrace();
       }
   }
   public void mouse(Graphics g, Rectangle bb) throws IOException {
       boxOval(g, bb);

       int dx = bb.width / 2;
       int dy = bb.height / 2;

       Rectangle half = new Rectangle(bb.x, bb.y, dx, dy);

       half.translate(-dx / 2, -dy / 2);
       boxOval(g, half);
       half.translate(dx * 2, 0);
       boxOval(g, half);

       BufferedImage buff = new BufferedImage(dx, dy, BufferedImage.TYPE_INT_RGB);
       File file = new File("mouse.png");

       System.out.println("saving....");

       ImageIO.write(buff, "png", file);

       System.out.println("saved!");
   }
}
```

Excellent! Run this code and you should see your newly drawn mouse pop up in a new window, and a mouse.png file saved to your project directory!

![image alt text](Images/image_15.png)

## Congratulations

You made it! By now, you should have a solid grasp on the fundamentals of Java, including dynamic versus static typing, classes, objects, arrays, lists, and the method signature. You also learned how to use constructors and the **new** keyword to instantiate new objects, and how to use for loops to conditionally log data to the console.

Building on the programming skills you gained from the boot camp you just completed, you were able to quickly write your first Java program (the iconic "Hello, World!") and progress on to more involved projects. You learned to write to the console and receive user input via the **System** and **Scanner** methods built in to Java. You created random numbers and pushed them dynamically into arrays. You wrote to and created files, and even read data from existing files. 

You covered a lot of ground and should be extremely proud of yourself! You now have a solid foundation in Java. If you want to take it further, remember that [Oracle’s JavaDocs](https://docs.oracle.com/en/java/) is a rich resource for learning everything there is to know about Java.

