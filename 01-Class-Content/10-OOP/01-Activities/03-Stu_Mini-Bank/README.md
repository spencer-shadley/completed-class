# MiniBank

In this activity you will use objects to create a mini banking application.

## Instructions

Update the `createMiniBank` function to achieve the following:

1. Add another private value of `statement` that should be set to an array with one value, `0`. This array will contain all transactions made with the MiniBank objects.

2. Add a `setBalance` function that takes a value and updates the private `statement` value to it.

3. Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.

4. Write a `getStatement` function that returns the `statement` array.

5. Write a `printStatement` function that prints each element in the in the `statement` array on its own line.

6. Write a `deposit` function that takes a value and updates the `balance` value using the `setBalance` function.

7. Write a `withdraw` function that takes a value and subtracts it from the `balance`.

8. Return the `printBalance`, `printStatement`, `deposit`, `withdraw` functions from the `createMiniBank` function.

* Then, create a new `minibank` object using the `createMiniBank` function.

1. Print the `minibank` balance.

2. Deposit some money into the `minibank` object.

3. Print the `minibank` balance.

4. Withdraw some money from the `minibank` object.

5. Print the `minibank` balance.

## Bonus 🏆

* Add code to throw an error if the user tries to withdraw more money than they have, or try to deposit or withdraw values that aren't positive numbers.

* Add code to return a copy of the `statement` when `getStatement` is called, rather than returning the original array.
