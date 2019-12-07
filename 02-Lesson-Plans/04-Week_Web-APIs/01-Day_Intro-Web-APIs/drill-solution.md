# Pseudocode making a PB&J sandwich

1. Get the ingredients
    1. Get two slices of bread
    1. Get a butter knife
    1. Get a peanut butter container
1. Add the peanut butter
    1. Open the peanut butter container
    1. Insert the butter knife into the peanut butter container
    1. Pull the butter knife out such that a large amount of peanut butter sticks to the knife
    1. Place the knife against the slice of bread closest to you
    1. Slide the knife to the end of the piece of bread
    1. Destroy the knife
1. Get a new knife
1. Repeat step 2 with jelly instead of peanut butter on the remaining piece of bread
1. Pick up the piece of bread with jelly (`jelly_bread`)
1. Place `jelly_bread` on the remaining piece of bread such that each corner of bread is aligned
1. Consume the sandwich

[Where the above code fails](https://minecraft.makecode.com/courses/csintro/functions/unplugged). Pseudocoding this is actually very hard!

# Write a function that takes in two numbers and logs the max (the greater of the two numbers)

Solution 1: Simple `if`/`else`
```js
function max(num1, num2) {
  var maxNum;
  if (num1 > num2) {
    maxNum = num1;
  }
  else {
    maxNum = num2;
  }
}
```

Option 2: 
```js
function max(num1, num2) {
  var maxNum = num1;
  if (num2 > num1) {
    maxNum = num2;
  }
  console.log(maxNum);
}
```

## Bonus 1

Instead of logging the max, `return` it. Then call it twice - one which takes the result and `alert`s it and another which `console.log`s it.

```js
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
var maxOfOneTwo = max(1, 2);
alert(maxOfOneTwo);
console.log(max(4, -3));
```

## Bonus 2 (ternary if)

Update your function to use a "ternary" if

```js
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
```
