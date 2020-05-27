# MongoJS Sorting

## Instructions

- Review the two routes provided to you and speak with a partner about what the code is doing.

  - Get `/`: Displays a simple "Hello World" message (no mongo required).

  - Get `/all`: Send JSON response with all animals. (Uses the same animals collection created in [05-Ins-Sorting-In-Mongo](../05-Ins-Sorting-In-Mongo/README.md))

- Make two routes that display results from your animals collection:

  - Name: Send JSON response sorted by name in ascending order.

  - Weight: Send JSON response sorted by weight in descending order.

## 💡 Hint(s)

- Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

## 🏆 Bonus

- Create an additional route that returns the heaviest animal

- Update the routes to allow sorting via a param

## Seed Farm DB

Run the following in the mongo shell if you did not add at least 5 animals in the previous activity:

```js
use farm;
db.animals.insertMany([
    {
      name: 'Oinkers',
      species: 'pig',
      age: 4,
      weight: 500
    },
    {
      name: 'Fluffy',
      species: 'dog',
      age: 13,
      weight: 42
    },
    {
      name: 'Roxy',
      species: 'dog',
      age: 12,
      weight: 46
    },
    {
      name: 'Mary',
      species: 'longhorn',
      age: 8,
      weight: 1200
    },
    {
      name: 'Max',
      species: 'longhorn',
      age: 1,
      weight: 400
    }
  ]);
```
