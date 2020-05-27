# Sorting in MongoDB

- The format of a sort follows `db.COLLECTION_NAME.find().sort({FIELD:1})`

- A value of `1` is for ascending order.

- A value of `-1` is for descending order.

- NOTE: Remember to add `.pretty()` afterwards so the results are readable!

- Use our `farm` db and `animals` collection to insert at least 5 animals with the following attributes:

  - `age`

  - `weight`

  - `name`

  - `species`

- Example:

  ```js
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

- Using the animals collection that you created:

## Sort by id:

- The id contains a timestamp, so sorting by id will sort by when they were entered to the database.

```js
db.animals
  .find()
  .sort({ _id: 1 })
  .pretty();
```

```js
db.animals
  .find()
  .sort({ _id: -1 })
  .pretty();
```

## Sort by an integer - weight:

```js
db.animals
  .find()
  .sort({ weight: 1 })
  .pretty();
```

```js
db.animals
  .find()
  .sort({ weight: -1 })
  .pretty();
```

## Sort by a string - species:

```js
db.animals
  .find()
  .sort({ species: 1 })
  .pretty();
```

```js
db.animals
  .find()
  .sort({ species: -1 })
  .pretty();
```
