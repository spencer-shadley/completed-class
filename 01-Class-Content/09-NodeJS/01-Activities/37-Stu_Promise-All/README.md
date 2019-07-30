# Promise All

In this activity you will read JSON from separate JSON files, combine the data into one combined JSON file.

## Instructions

* Change directories into the `Unsolved` folder and run `npm install` from your terminal.

* Once the installation completes examine the code in `Unsolved/index.js`.

  * The Array `map` method is used to loop over the array of file names.

  * Inside of the `map` method, the `readFileAsync` is called with the file name and returned.

  * The `filePromises` array contains an array of pending promise objects.

* In order to handle resolving all of the promises in `filePromises` at once, you'll need to call the `Promise.all` method and pass in the `filePromises` array.

* Since `Promise.all` returns a promise itself, you'll chain a `.then` method call off of the `Promise.all` call. The result of this promise will be an array containing the data read from each file.

* Since the data read from each file is a string, you'll need to use the `map` method again to convert each JSON string to a JSON object.

* From here, you'll need to use the `sort` method to sort animals by age.

* Then, call `JSON.stringify` on the entire sorted array to create a string version that can be written to a file.

* Then, write all the animals to a new `combined.json` file.

* Once this completes, print a message to the console indicating it was successful.

* You can verify that you completed this activity successfully if a `combined.json` file is created containing all animals when your code is run.

## 💡Hints

* Check out the [MDN documentation for the `Promise.prototype.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

* Don't hesitate to refer back to the previous activity examples.

## 🏆 Bonus

* Add code to sort each animal by age before saving them to the `combined.json` file.
