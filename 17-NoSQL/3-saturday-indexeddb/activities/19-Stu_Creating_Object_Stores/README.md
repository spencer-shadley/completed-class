# Creating an Object Store

In this activity, you will create an object store for your IndexedDB database

## Instructions

- Write code to request an IndexedDB database instance
- On success, log the result to your console
- On error, log the error
- Inside the `onupgradeneeded` method, create an object store for you database called `toDoList`

## 💡 Hint(s)

- Use the [open](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open) docs to learn about the arguments it takes
- You can `console.log` the `request` to see what attributes are available to you

## 🏆 Bonus

- Read through [the IndexedDB guide](../../../../17-NoSQL/supplemental/indexeddb-guide.md)
