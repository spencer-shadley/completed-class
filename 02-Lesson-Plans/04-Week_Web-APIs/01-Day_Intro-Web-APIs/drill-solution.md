# Pseudocode making a PB&J sandwich

1. Retrieve two slices of bread
1. Retrieve a butter knife
1. Retrieve a peanut butter container
1. Open the peanut butter continer
1. Insert the butter knife into the peanut butter container
1. Pull the butter knife out such that a large amount of peanut butter sticks to the knife
1. Place the knife against the slice of bread closest to you
1. Slide the knife to the end of the piece of bread
1. Destroy the knife
1. Retrieve a new knife
1. Repeats steps 4. - 9. with peanut butter instead of jelly and the remaining piece of bread
1. Pick up the piece of bread with jelly
1. Place that piece of bread on the remaining piece of bread such that each corner of bread is aligned
1. Consume the sandwich

# Write a function that takes in two numbers and outputs the max (the greater of the two numbers)

```js
var max = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
```

## Bonus

```js
var max = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
```
