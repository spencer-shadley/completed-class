# Functions

Functions are the meat and potatos of JavaScript development. They are a way of defining a set of operations to be performed that can then be called or _invoked_ again without having to repeat the same logic. Functions are noted by the syntax:

```
    function myFunction (){
        //function logic
        //operations go here
        console.log('running!')
    }
```

This function would be be callable, or _invokeable_ using the syntax `myFunction()` which would print to the console `running!`

```
    myFunction();
```

## Arguments/Parameters

When using functions, sometime we want to be able to have our program determine a target value inside of a function dynamically. To do so, we define our function with arguments/parameters following the syntax

```
    function functionWithParams(param){
        console.log(param)
    }
```

We would refer to the variable above `param` as the functions parameter. This name is defined by you, the programmer, while you are defining the function, and can be just about anything. Upon being invoked, the each instance of the parameter is replaced with the value passed in.

```
    functionWithParams('foobar')
```

would print `'foobar'` to the console.

```
    function logLarry(larry){
        console.log(larry)
    }
```

is perfectly valid syntax, and calling `logLarry('any string value')`

would print `any string value` to the console

functions can be defined with multiple parameters, of any data type.

## Function Examples:

### 1. Write a function to iterate through these arrays. Return the total number of even numbers.

- Input: Array 
- Output: Integer 

```
    1. arr1 = [1, 2, 3, 6, 10];
    2. arr2 = [1, 2, 4, 5, 7, 8, 10, 12, 18, 16, 14, 12];
    3. arr3 = [1, 3, 5, 7];
```
**Hint** Use modulus (%)


# jQuery

jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.


 - Common jQuery functions
    1. Select an element by id vs class. 
        ```
        $('#element-id)
        $('.element-class)
        ```
    2. Empty
        ```
        .empty();
        ```
    3. Set text
        ```
        .html(content);
        .innerHTML = content;   <-----Javascript version>
        ```
    4. Set onClick
        ```
        .on('click', callback);
        .on('click', function() {
            callback();
        })
        ```
    5. On hover
        ```
        .hover(function() {
            // This happens when you mouse over the elemnt. 
            alert('You are now mouse overed the element');
        }; 
        function() {
            // This happens when your mouse leaves the element. 
            alert('Your mouse is leaving the selected element');
        });
    6. Chaining methods together
        ```
            .on({
            mouseenter: function(){
                $(this).css("background-color", "lightgray");
            },
            mouseleave: function(){
                 $(this).css("background-color", "lightblue");
             },
            click: function(){
                $(this).css("background-color", "yellow");
            }
            });
        ```



