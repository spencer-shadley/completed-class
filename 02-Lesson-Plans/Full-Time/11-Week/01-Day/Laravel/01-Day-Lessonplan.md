## Day 1 - Intro to PHP and Laravel

### Overview

This lesson will introduce students to the basics of PHP. The goal is to familiarize students with the fundamentals of the language, and introduce them to enough classical OOP for them to get a productive start with Laravel.

We'll also introduce students to the fundamentals of Laravel, including

1. [Templating with Blade](https://laravel.com/docs/5.1/blade);

2. [Using Controllers to link logic to views](https://laravel.com/docs/5.1/controllers);

`Summary: Complete activities 1-9 in Unit 21`

#### Instructor Priorities

Students should be able to:

* Use PHP's core features and data structures (conditionals, functions, arrays, etc.).

* Create and instantiate classes, and understand instance vs static members.

* Use `require` to write modular web pages and scripts.

* Display data in Blade templates;

* Create controllers, and associate them with views

#### Instructor Notes

* Be sure to tell students that they **must have PHP installed before coming to class**. Slack out the `Supplements/PHP-Installation-Instructions.pdf` ahead of time.

  * Let students know that MAMP is a popular alternative to XAMPP, and they should give it a try if they have trouble with the latter.

* Some students will be intimidated by the prospect of learning a new language. Where possible, draw analogies to JavaScript to mitigate their apprehension.

* Solutions are distributed as the entire Laravel project directory, less the `vendor` folder.

* Students running OS X are liable to have difficulties installing Composer. This is by and large due to the fact that the Composer-provided scripts install to the directory in which they're executed, rather than to a directory necessarily on the user's PATH. Windows users are fortunate enough to have a [straightforward installer](http://getcomposer.org/doc/00-intro.md#installation-windows). Regardless, **tell your students to install Composer and Laravel beforehand**. This will greatly reduce the amount of time spent troubleshooting in class.

  * The following terminal command _should_ install directly to `/usr/local/bin`, on PATH by default: `curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer`

  * Alternatively, tell students to follow the instructions on the [Composer page](http://getcomposer.org/download/), with **one crucial modification**:

    * On line 3, instead of `php composer-setup.php`, have them run `php composer-setup.php --install-dir=/usr/local/bin`.

    * This installs Composer to a directory that should already be on the PATH.

  * You may also wish to share this more complete guide to the nix notion of a PATH](../../../../X-Supplements/The_Nix_Path_In_A_Nutshell.pdf), as well. It's not required reading, and is directed at motivated students running OS X (or Linux) who want to understand how PATH works.

  * Additionally, be sure to notify students that they _must_ have Laravel installed before class. [Installation instructions are on the home site](https://laravel.com/docs/5.5/installation).

  * Be sure to share these instructions with students **before class starts**.

* The most important outcome of the Laravel unit is that students should be able to **create and edit models via form inputs**. Focus on the latter half of today's class to facilitate this.

* Have your TAs reference the [TimeTracker](01-Day-TimeTracker.xlsx) to help keep track of time during class.

- - -

### Class Objectives

* To develop command of the fundamentals of PHP;

* To understand PHP's place in the stack;

* To use PHP's object-oriented features to write clean and well-structured code.

* To develop familiarity with Laravel's view and controller layers.

- - -

### 1. Everyone Do: Welcome Students & Install PHP (10 min)

* Take a moment to welcome students, and let them know today's agenda is to learn the basics of PHP and Laravel

* Before diving into the details, though, we'll take some time to make sure everyone has a working PHP installation.

* Have students run: `php -v`.

  * Several of your students will have PHP installed already. Anyone running 5.6.x/7.0.x is good to go. Anyone else will have to either install, or upgrade their installation.

  * Note that students running 5.6.x don't have to upgrade to 7.0.x, but may if they want to.

![The version output we want to see.](Images/php-version-output.PNG)

_The version output we want to see._

* Slack out the following instructions to anyone who needs to install PHP.

  * **Instructions**. The steps to install PHP depend on your system. Follow the instructions relevant to your development environment.

  * **Mac Users**. The most reliable way to install PHP on Mac is via [Homebrew](http://brew.sh/).

    * Run the command on the home page to install Homebrew.

    * Then, run: `brew install homebrew/php/php70`

    * Run: `php -v`. PHP should report that you're running version 8.0.x (it doesn't matter what `x` is).

  * **Windows Users**. The most reliable way to install PHP on Windows is via [XAMPP](https://www.apachefriends.org/index.html).

    * Download and install XAMPP for version 7.0.x. By default, this instals to `c:\xampp`.

    * Windows 8

      * Open **Control Panel**, open **System** settings, and click the **Advanced** tab

      * Click **Environment Variables**.

      * In **Edit System Variable**, find the entry for `PATH`.

      * Select it; click `Edit`; and add: `;c:\xampp\php`. _The semicolon is important._

      * Save your settings, and open a command prompt.

      * Run: `php -v`, which should report that you're using PHP 7.0.x.

    * Windows 10

      * Open **Control Panel**, then **System and Security**, then **System**.

      * On the left side card click **Advanced system settings**.

      * Click **Environment Variables**.

      * In **System variables**, find the entry for `PATH`. Select it and click `Edit`.

      * Click `New` and enter `C:\xampp\php`.

      * Save your settings, and open a command prompt.

      * Run: `php -v`, which should report that you're using PHP 7.0.x.


* Expect at least a few students to have trouble with this one. Make sure to have your TAs available for troubleshooting.

### 2. Instructor Do: Introduce PHP (5 min)

* This will be the first time most of your students see or use PHP. Provide them with a brief overview of the language and its place along the stack.

* Be brief. Touch on the points below, but feel free to move quickly.

* Since someone will ask, PHP has stood for several things, but now means [PHP: Hypertext Processor](http://php.net/manual/en/history.php).

* Like JavaScript, PHP is a scripting language. This means we can run our PHP files immediately after writing them.

  * Draw an analogy to running JavaScript files from the command line with Node, and explain that we can do the exact same thing with PHP files using `php`.

* PHP is used for most of the same things server-side/backend JavaScript is used for.

  * Give familiar examples: Processing/validating form input, handling API calls, parsing JSON response...

* Unlike JavaScript, browsers **cannot** understand PHP. This means we **must** run it on a server.

  * Give a few examples: We can use PHP for routing (analogous to Express), talking to the Database (analogous to Sequelize), etc

  * Use the analogy of JavaScript templating libraries. We write a template; turn it into HTML on the server; and send the result to the browser. Explain that PHP works similarly.

* Reassure  students that the learning curve will be shallow. Learning PHP will be like learning a different way to do things they already know how to do—not like learning to program again.

### 3. Instructor Do: Variable Declarations (5 min)

* Open up `01-Variables/Examples/example.php`, and introduce students to how PHP declares variables.

* Explain that PHP files always start with `<?php`.

* Point out that, unlike JavaScript, no `var` keyword is necessary.

* Point out that, like JavaScript, we can use any variable to store values of any type.

* Make sure students know that they have to end every statement with  semicolon.

* Show students how to use `echo`, and demonstrate that echo statements don't require parentheses.

* Mention that, if your argument to `echo` is wrapped in double quotes, PHP will automatically interpolate variables within the string.

* Mention that PHP offers all of the same arithmetic operations that JavaScript does, with the addition of an exponentiation operator.

![The above points, annotated.](Images/3-intro-php-1.png)

_The above points, annotated._

### 4. Students Do: Hi, My Name Is . . . (5 min)

* Slack out the following instructions to students:

* **Instructions**:

  * Create a new PHP file. Name it whatever you wish.

  * In it, create variables to store your first name, last name, and birth year.

  * Create a variable to store your full name, and construct it from your first and last name.

  * Calculate your age and store it in a variable.

  * Print the following to the screen as separate lines:

    * "My name is {{ NAME }}."

    * "I'm {{ AGE }} years old."

  * Run your program from the command line. Make sure everything prints on separate lines.

### 5. Instructor Do: Review Activity (2 min)

* Walk through the solution, emphasizing that:

  * `echo` does not automatically add newlines.

  * PHP automatically interpolates variable values, but that we can't embed arithmetic expressions directly into the string.

* Demonstrate how to insert newlines manually, and that using the `print` statement achieves the same effect.

![Annotated solution.](Images/5-annotated-solution.png)

_Annotated solution._

### 6. Instructor Do: Conditionals (3 min)

* Explain that PHP offers the same conditional operators that we have in JavaScript.

* Open `02-Conditionals/Examples/example.php` to demonstrate.

![Annotated solution.](Images/6-annotated-solution.png)

_Annotated solution._

### 7. Students Do: Sake! Sake! Sake! (8 min)

* Slack out the following instructions to students:

* **Instructions**

  * Open your solution to the last exercise.

  * Where you print your name, if it's longer than 12 characters, print: "It's a long name". Otherwise, print: "It's a short name".

  * Use `str_repeat` to print a line of separators, like "=". Check the docs: <http://php.net/manual/en/function.str-repeat.php>

  * After printing "I am {{ AGE }}", if you're older than 21, print: "Sake! Sake! Sake!". If you're younger than 21, print: "No Sake for me :(". Otherwise, print: "Just slipped by! Sake! Sake! Sake!"

### 8. Instructor Do: Array & Associative Arrays (5 min)

* The solution to the previous activity is in `02-Conditionals/Solutions/solution.php`.

* Take a moment to review the previous exercise, and slack out the solution.

* Open `03-Arrays/Examples/array_example.php`, and show students how to declare arrays.

* Demonstrate how to iterate over an array using `foreach`.

![Simple array declarations.](Images/8-array-declarations.png)

_Simple array declarations._

* Open `03-Arrays/Examples/associative_array_example.php` and show students how to declare associative arrays.

  * Tell students to think of these by analogy to JavaScript objects.

* Demonstrate how to iterate over the keys and values of an associative array using `foreach`.

* Show students the syntax, but be brief. They'll develop muscle memory for it through the exercises.

![Associative array declarations.](Images/8-associative-array-declarations.png)

_Associative array declarations._

* Finally, explain that PHP has a variable analogous to Node's `process.argv`, which collects command-line arguments.

  * Explain that `$argv` is an array.

  * Explain that `$argv[0]` is always the name used to run the script. Higher indices collect arguments themselves.

### 9. Partners Do: Loops & Maps (8 min)

* Slack out the following instructions to students:

* **Instructions**

  * In this activity, you'll expand upon the previous exercise using loops and arrays.

  * To get started, create a fresh PHP file.

  * Write a line that echoes the first command-line argument passed to your script.

  * Create an associative array, and store your and your partner's last names as the keys, and your first names and age as the value. _Hint_: What data structure do you use to store multiple pieces of information in a specific order?

  * Loop through the array, and print the same information you printed previously for both yourself and your partner:

    * "My name is {{ FULL NAME }}." Print whether it's long or short.

    * "I am {{ AGE }} years old." Print the relevant "Sake!" statement, depending on your age.

    * Separate each iteration with a line of separators, using `str_repeat`.

### 10: Instructor Do: Review Activity (2 min)

* Briefly review the solution to the activity: `03-Arrays/Solutions/solution.php`.

  * Emphasize that you can use anything as a value in an associative array, including other arrays.

* Slack the solution out to students.

### 11: Instructor Do: Functions (5 min)

* Open `04-Functions/Examples/example.php`.

* Show students how to define functions, with Example 1 and 2.

![Function definitions.](Images/11-function-definitions.png)

_Function definitions._

* Show students that functions can be called prior to being defined, with Example 3.

![Calling a function before definition.](Images/11-called-before-definition.png)

_Calling a function before definition._

* Point out how similar this is to JavaScript.

* Finally, open `04-Functions/Examples/required.php` to demonstrate that PHP has a `require` statement, much like Node's `require` function.

* Point out that we need to use relative paths for PHP to find the right file.

![Using require in PHP.](Images/11-require-relative-paths.png)

_Using require in PHP._

### 12. Partners Do: Functions (10 min)

* Slack out the following instructions to students:

* **Instructions**

  * In the last exercise, our `foreach` statement got a bit cluttered.

  * Create a file called `helpers.php`.

  * Write a function that echoes to the screen, but includes a newline.

  * Write a function that prints a separator to the screen.

    * Let it take a parameter specifying how many separators to print.

    * If the user passes none, set a default value: <http://php.net/manual/en/functions.arguments.php>

  * Write a function that tests if a name is long, and returns the appropriate string.

  * Write a function that determines if you're drinking sake tonight, and returns the appropriate string.

  * Make these functions available in your solution to the last exercise, and refactor your `foreach` statement.

### 13. Instructor Do: Review Activity (5 min)

The solution to this exercise is in `04-Functions/Solutions/solution.php` and `04-Functions/Solutions/helpers.php`.

* Take a few minutes to go over any student questions, and slack out the solution.

![Annotated solution.](Images/13-annotated-solution.png)

_Annotated solution._

![Annotated solution.](Images/13-annotated-helpers.png)

_Annotated solution for helpers.php._

### 14. Instructor Do: Introduction to OOP (15 min)

* So far, the closest thing we've seen to organizing our programs is the `require` statement.

* Point out that PHP allows us to create objects, which help us write better organized, more modular, code.

* Review the following conceptual points:

  * Unlike in JavaScript, we must create classes to work with objects in PHP.

  * A class is like a blueprint. Effectively, it says:

    * When you create this kind of object, it will have these properties and these methods.

  * Using the class to create an object is called **instantiating the class**, and yields a new object, which is called an **instance** of the class. It's the difference between a floorplan (class) and an apartment (instance).

* Open `05-Classes-and-Objects/Examples/Charizard_uncommented.php`.

  * Explain that the convention is to name classes, properties, and methods in CamelCase.

  * Explain the difference between `public` and `private`.

    * Tell students that `public` properties and methods are things everyone who creates the object can see or use. By contrast, `private` methods and properties are only available to the object itself.

  * Explain that the `$this` keyword **always** refers to "the object this method was called on".

  * Point out that the `->` syntax is equivalent to JavaScript's `.`. It looks alien, but it functions identically.

![Object basics.](Images/15-object-basics.png)

_Object basics._

* Open `05-Classes-and-Objects/Examples/example.php`, and demonstrate:

* How to instantiate a new object in PHP: `$variable = new Class;`. Note that the parentheses are optional.

* The difference between public and private methods and fields.

  * Note that `$charizard->speak()` works just fine, but that using `println` throws an exception.

* Explain that keeping some things public and some things private allows us to keep what you _do_ with the object separate from _how_ you do it.

  * Feel free to give examples of where it's useful to separate implementation from API—replacing some algorithm that the class uses with a faster one, for instance—but don't feel the need to drill this point just yet.

![More on objects.](Images/15-more-on-objects.png)

_More on objects._

* Finally, point out that it would be unwieldy to create a class for each Pokemon that exists.

  * Explain that it would be better to have a single `Pokemon` class, which would have all of the properties common to all Pokemon (`name`, `weight`).

  * Explain that, this way, we could use a _single_ class to create _multiple, different_ Pokemon objects.

  * Explain that, if we did this, and found that our `Charizard` class still had do define unique behavior beyond what all Pokemon have in common—such as a `breatheFire` method—we could use the `Pokemon` class as the _base class_ for `Charizard`.

  * Explain that PHP has mechanisms for writing such code, but that we won't cover them in detail today, because they aren't required for the homework or what we'll do with Laravel.

  * Regardless, we have example code demonstrating the `05-Classes-and-Objects/Examples/Pokemon.php` and `5-Classes-and-Objects/Examples/Charizard_subclass.php`. Slack them out for curious students.

### 15. Partners Do: Create a User Profile (10 min)

* Slack out the following instructions to students:

* **Instructions**

  * Create a User class. It should:

    * Store the user's first name; last name; and email address. It should set these upon instantiation.  You'll need to use a constructor for this: <http://php.net/manual/en/language.oop5.decon.php>

    * Store a URL for the user's profile image. Don't set this in the constructor, but write a method that can set this property after the object is created.

    * Write a method to return the user's full name.

    * Should any of this information be private?

  * We should probably make the first name and email address required, but it's okay if users don't want to share their last names. With your partner, brainstorm a way to set the last name to a default if users don't provide one.

    * What order should you put your constructor arguments in to make this easy?

  * Finally, create a short script, and instantiate a few users. Print their full name to make sure everything is wired up right.

### 16. Instructor Do: Review Activity (5 min)

* Review the solution in `05-Classes-and-Objects/Solutions/User.php`. Call on different students to answer the following:

  * How do we access and set object properties?

  * How can we instantiate users without a last name? Why can't we set a default for anything but the last argument?

* Take a moment to point out the `static` keyword in the solution.

  * Explain that, every time we create a `new User`, we get a whole new object.

  * Explain that these objects are _different_ from the class that creates them.

    * Remind students that the class is like the "instructions" of a blueprint, and the objects are the results of _following_ the blueprint.

    * Point out that a blueprint can have properties, too—an obvious one is color.

      * Point out that this color property is completely independent of any of the objects we get by _instantiating_ the blueprint.

  * Explain that properties like this, which belong to a class (blueprint) independent of those that it defines for the objects it instantiates, are called **static properties**.

    * Point out that classes can have static methods, as well.

  * Explain that, in this case, our `created` property simply keep tracks of how many users we've instantiated with `new`.

    * Point out that it doesn't make sense to keep this information on an individual user, but that it might be useful to keep it stored on the class.

  * Point out that, to access a `static` property or method, we use the syntax: `$Classname::$Property`.

  * Reassure students that it's okay if this is conceptually unclear. They need to understand the syntax for calling static methods, but don't need to be fluent in the distinction between instance and static members.

![Referring to a static property in PHP uses double colons.](Images/17-users-created.png)

_Referring to a static property in PHP uses double colons._

* Slack out the solution file to students.

![Annotated solution.](Images/17-annotated-solution.png)

_Annotated solution._

- - -

### 17. Lunch (30 min)

- - -

### 18. Instructor Do: Simple Server & Templates (5 min)

* Zip and slack out the `06-PHP-Templates/Boilerplate` files to students.

* Open `6-PHP-Templates/Examples/index.php`, and show students that you can embed PHP in HTML.

![Close PHP embedded in HTML.](Images/18-close-embedded-php-blocks.png)

_Close PHP embedded in HTML._

* Remind them that the browser **does not** understand PHP. This means we need a server to first interpret the PHP, and then send the result to the browser.

* Let students know that the PHP command line tool comes with a built-in server. In the directory containing your `index.php` file, run: `php -S localhost:3000`.

* Visit `http://localhost:3000`, and demonstrate that `index.php` is being served.

![Demonstrating php -S.](Images/18-php-s.png)

_Demonstrating php -S._

* Point out that PHP automatically serves `index.php`. If it can't find it, it presents an error instead.

* Reopen `index.php`. Point out that you must close PHP blocks embedded in HTML.

* Open `head.php` to show students that you can use `require` to include pure HTML as well as PHP.

### 19. Partners Do: Superglobals & HTML (10 min)

* This activity is meant to get students familiar with PHP's superglobals.

* Slack out the following instructions to students:

  * **Instructions**

    * Unzip `Boilerplate.zip` and fire up a server on port 8000.

    * Look up PHP's documentation on superglobals: <http://php.net/manual/en/language.variables.superglobals.php>

    * Open `content.php`. In your browser, change the URL to the following:

      * `http://localhost:8000?name=John&email=john@doe.com`

      * You might want to read about query strings for this part: <https://en.wikipedia.org/wiki/Query_string>

    * Next, add `<? php print_r($_GET) ?>` just after opening your container `div`.

    * Discuss what you see with your partner. Be ready to share your thoughts with the class.

    * Reset the URL and enter a name and email with the form. Note the URL. What effect do you think this has on `$_GET`?

    * Repeat the above step, but change the form's method to POST. What effect does this have on the URL? Which superglobal do you think this information is in?

### 20: Instructor Do: Check-In (5 min)

* Ask a student to explain the relationship between the query string and `$_GET` superglobal.

* Ask a different student to explain the `$_POST` superglobal.

* Answer any questions that might come up. If none do, feel free to cut this check-in short, and move on to the next activity.

### 21. Partners Do: Create Users from Form Data (20 min)

* Slack out the following instructions to students:

* **Instructions**

* Pull in the User class you built earlier.

* Figure out how to create a user whenever you can get at least a name and email address from the URL query string.

  * If you can create a user, add a header that greets them.

  * If you can't, add a header that says, "Hello, Stranger!"

  * You'll want to use the shortcut syntax for `echo` in the template: <http://php.net/manual/en/function.echo.php>

* Figure out how to do the same if the form data is sent via `POST`.

* Write a function that figures out which of the two methods the form used, and gets information from the correct superglobal. Consider this exercise optional.

  * Hint: You can use `$_SERVER`, but you don't need to.

### 22. Instructor Do: Wrap-Up (8 min)

* Ask different students to explain how they solved the different parts of this activity.

* Demonstrate how to create a new User using`$_GET` and `$_POST` parameter.

* Ask a student how they figured out whether to get data from the `$_GET` or `$_POST` superglobal.

* Demonstrate how to do this directly, by checking $\_SERVER\['REQUEST_METHOD'], or by simply checking the length of the `$_GET` and `$_POST` variables.

* Spend the rest of the time answering student questions.

### 23. Instructor Do: Introduce Laravel (5 min.)

Take a moment to introduce Laravel with the following points:

* Laravel is an MVC Framework that makes it easy to develop database-backed websites.

* It provides:

  * An extensible templating system;

  * A powerful backend that makes it easy to use a variety of SQL-based databases (SQLite, PostgreSQL, or MySQL);

  * All of PHP's object-oriented programming features, as well as [all the new features and speed of PHP 7](http://php.net/releases/7_0_0.php); and

  * A high-productivity workflow. Laravel generates a generous amount of boilerplate for you.

    * Likely to be one of students' favorite parts of the framework.

![Relative popularity of PHP frameworks.](Images/1-php-framework-popularity.png)

_Relative popularity of PHP frameworks._

### 24. Everyone Do: Verify Laravel Installation (8 min.)

* Installing Laravel requires a tool called Composer.

* This installation is easier than that for PHP, but expect trouble regardless. Have your TAs on-hand to troubleshoot. Move on early if everything goes smoothly.

* Tell students that they can think of Composer as NPM for PHP projects.

* Slack out the following instructions to students:

* **Instructions**

  * Visit Composer's Downloads page: <https://getcomposer.org/download/>

  * Mac and Windows users will need to do slightly different things from here.

  * **Mac Users** Run: `cd /usr/local/bin`, and run the script on the Composer site. You may need `sudo`.

    * After installing composer, run this command to move the tool into your path: `mv composer.phar /usr/local/bin/composer`. This will let you run composer simply by typing `composer` in your terminal.
      * Run `composer --version` in your terminal. Your window should display a version statement. If it instead shows an error message, consult a TA.

  * **Windows Users** // Create a directory for Compuser, such as `c:\composer`, and `cd` into it. Add this directory to your `%PATH%`. Then, run the script on the Composer site in the directory you just created. (Alternatively, you can just download and run `Composer-Setup.exe`)

    * When you're done, run: `composer --version`. If it worked, you'll get a version statement.

  * Now that you have Composer, you can install the Laravel command line tool by running: `composer global require "laravel/installer"`

    * If you're on a mac, run this command to add Laravel to your PATH: `export PATH="~/.composer/vendor/bin:$PATH"`

  * To verify your Laravel installation, run `laravel --version`.

    * This lesson will use Laravel 5.2.x. 5.3.x was written after this draft, and introduces breaking changes to project structure.

* Cut this short as soon as you're certain everyone is good to go.

### 25. Instructor Do: Hello, Laravel (5 min.)

* Demonstrate how to create a new project with Laravel:

  * Ordinarily, one runs: `laravel new ProjectName`

  * For the sake of this lesson, instead do: `composer create-project laravel/laravel ProjectName 5.2.x`.

    * Again—this is to prevent issues due to the 5.3 update.

![Creating a new Laravel project.](Images/3-new-project.png)

_Creating a new Laravel project._

* Explain that this creates a project in a new directory called ProjectName.

* Change into the project directory.

  * Mention that students should initialize and commit to a Git repo immediately.

* Run: `php artisan serve`.

* Visit `localhost:8000` to show off the demo page.

### 26. Students Do: Hello, Laravel (3 min.)

* Slack out the following instructions to students:

* **Instructions**

  * Create a new Laravel project.

  * Change into the project directory.

  * Serve the demo site.

![Hello, Laravel.](Images/4-laravel.png)

_Laravel's boot page._

### 27. Instructor Do: Review (2 min.)

* Take a moment to point out that we served the site with a tool called PHP Artisan.

* Explain that Artisan will be our primary tool for scaffolding boilerplate and managing workflow.

* In the command line, run: `php artisan`

* Make sure students know that they won't be responsible for learning all—or even most—of Artisan's functionality. Just make sure they know how to access this help prompt, and encourage them to check it out from time to time.

### 28. Instructor Do: Laravel's Blade (5 min.)

* Let students know that the first thing we'll cover is Laravel's templates.

* Open [07-Basic-Templates/Examples](../../../../../01-Class-Content/21-regionalized-content/Laravel/01-Activities/07-Basic-Templates/Examples)

* Tell students that static assets—such as images; css; etc—live in `resources`, and that templates live in `resources/views`.

![Resources directory in the starting project.](Images/6-resources.png)

_Resources directory in the starting project._

* Open up `resources/views/welcome.blade.php`. Point out that it looks just like HTML...because it is.

* Remind students raw PHP allows you to require HTML to build modular web pages.

* Tell students that Blade allows us to do the same thing.

  * Open up `07-Basic-Templates/Examples/layout.blade.php`, and review the following points.

    * Note the line with `@yield('content')` inside the `body` tag. This is similar to`require './content.php`, in that we _replace_ the `@yield` statement with the contents of a different file.

![@yield statement.](Images/7-yield-statement.png)

_@yield statement._

* Any number of child views can use `layout.blade.php` as a base, and substitute their own content anywhere a `@yield` statement appears.

  * Open up `home.blade.php`, and cover the following:

    * Point out the `@extends('layout')` line at the top. This tells Blade to look for a file in the `resources/views` directory, called `layout.blade.php`, as the basis for this template.

    * This line ensures that our template will render exactly like `layout.blade.php`, _except_ for where we override `@yield` blocks.

    * Point out the `@section('content')...@stop` block. Blade inserts everything in this block where the `@yield` statement appears in the parent.

    * Explain that you have a choice between `@stop` or `@endsection` to end a block, but should stick to one or the other.

![Basic Blade directives.](Images/7-child-templates.png)

_Basic Blade directives._

### 29. Students Do: Modularizing Templates (8 min.)

* Slack out the following instructions to students:

* **Instructions**

  * Find the template used as your project's current homepage.

  * Which sections of this template should be common to all pages on the site? Extract these to a base layout file.

  * Which sections of the template are specific to the home page? Allow child templates to override these sections.

  * Allow child templates to override the page's `<title>`.

  * Create a template for an About page. We can't load it yet, so all it needs is a header, for now.

### 30. Instructor Do: Review Activity (5 min.)

* Walk through the solution in `07-Basic-Templates/Solutions/resources/views`.

* Call on different students to explain what they moved out of the template, and why.

![Annotated layout.](Images/8-annotated-layout.png)

_Annotated layout.blade.php._

![Annotated welcome.](Images/8-annotated-welcome.png)

_Annotated welcome.blade.php._

### 31. Instructor Do: Routes (8 min.)

The files for this section are at `08-Routes/Example` and `08-Routes/Solutions`.

* Point out that we didn't have to do any work for Laravel to figure out that we wanted to load `welcome.blade.php` when we hit `localhost:8000`.

* Explain that this is because Laravel has already registered this route for us.

* Open up `app/Http/routes.php`.

* Explain that routes are registered with the following formula:

  * `Route::METHOD(ENDPOINT, HANDLER)`

* Let students know that they have the most common HTTP methods available: GET, POST, PUT/PATCH, and DELETE.

  * We'll touch on each of these individually through the lessons and assignments.

* Explain that an ENDPOINT can be any string, and that the initial slash is optional.

  * Optionally, demonstrate, by deleting it from the definition of the default route.

* Explain that the HANDLER is just a function.

* Explain that the call `view('welcome')` tells Laravel to look for a template called `welcome.blade.php`, and render it.

  ![An example route.](Images/9-routes.png)

  _An example route._

* Explain that we can pass data to our templates from our controllers, as well.

  * Demonstrate by storing the string `Laravel 5` in a variable (e.g., `$site_title`) and passing it to the view using `compact`.

  * Explain that `compact` lets us refer to the variables whose names we pass it in the template, and that they'll have the value set in the route.

  * Open up `welcome.blade.php`; replace "Laravel 5" with {{ $site_title }}; and show that the site displays as before.

![Variable interpolation in the template.](Images/9-template.png)

_Variable interpolation in the template._

### 32. Students Do: Create an About Me (12 min.)

* Slack out the following instructions to students:

* **Instructions**

  * Create a route that displays the About template you created earlier.

  * Using Artisan, check that it serves as expected.

  * Add some information to your about page. Style it however you'd like, but include the following information:

    * First Name;

    * Last Name; and

    * Email Address.

  * Pass these values to your view from your route.

    * _HINT_: The function you use for this is not limited to a single argument!

  * Replace the default styling with Bootstrap, if you want to. This step is optional.

### 33. Instructor Do: Review Activity (5 min.)

* Change to `08-Routes/Solutions`, and open `app/Http/routes.php`.

* Walk through the solution, and take some time to answer student questions.

* Slack the solution out to students, so they can refer to them later.

![Annotated solution.](Images/11-annotated-solution.png)

_Annotated solution._

### 34. Instructor Do: Introduce Controllers (5 min.)

* This is acceptable for demonstration, but not production. Remind students that it's best to separate content from `routes.php`, which developers should only use for registering routes.

* Explain that Laravel provides Controllers to handle the kind of logic we just put in our About route.

* Explain that creating controllers is such a common task that Artisan can do it immediately.

* Run: `php artisan make:controller HomeController`.

* Explain that this command creates `HomeController` in `app/Http/Controllers`. Open it up.

* Explain that a Controller is a class, and that each of its methods tells the application how to respond to a specific route.

* Proceed by example:

  * Create an index method: `public function index()`. Explain that this will handle our default route.

![index method in HomeController.](Images/12-homecontroller.png)

_index method in HomeController._

* Open `app/Http/routes.php`. Copy and paste the default route's logic into the index method.

* Update the route: `Route::get("", "HomeController@index");`

![Refactoring routs.php.](Images/12-routes-refactored.png)

_Refactoring routes.php._

* Explain the syntax for referencing a Controller method:

  * `CONTROLLER@METHOD`

* Serve the site and show that everything works as before.

### 35. Partners Do: Refactor About Me (12 min.)

* Slack out the following instructions to students.

* **Instructions**

  * Create an AboutController.

  * Move the logic from your About route into the controller.

  * Serve your site, and make sure everything works as expected.

  * if you finish early, feel free to continue with the remaining challenge.

  * Instead of a single first name, last name, and email, create three arrays, containing both your and your partner's names and emails.

  * Loop through each array in the template, and using a list, print:

    * Our names are: YOUR FULL NAME // PARTNER FULL NAME

    * Our emails are: YOUR EMAIL // PARTNER EMAIL

  * _HINT_ Where should you define full names to make this easy?

  * _HINT_: The Blade documentation on foreach is here: <https://laravel.com/docs/5.1/blade#control-structures>. But, you _can_ use raw PHP for this—Blade is just a convenience.

### 36. Instructor Do: Review Activity (5 min.)

* Ask a student how they solved the problem of printing full names.

* Change to [3-Controllers/Solutions](../../../../../01-Class-Content/21-regionalized-content/Laravel/01-Activities/09-Controllers/Solved) and open `app/Http/Controllers/AboutController.php`.

![Anotated routes.php.](Images/14-annotated-routes.png)

_Annotated routes.php._

* Walk students through the solution.

  * This is intentionally clumsy. We will see a better way to do this tomorrow!

![Annotated AboutController.php.](Images/14-annotated-aboutcontroller.png)

_Annotated AboutController.php._

* Open up `09-Controllers/Solutions/resources/views/about.blade.php`. Review the syntax of Blade's `@foreach` directive.

* Slack these files out to students, so they can refer to them later.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=11.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=11.01)
