# Operators in MongoDB

Make sure you are using the database, `lessondb`, that we created earlier.

```js
db
use lessondb
```

**Updating**

- We update data using `db.[COLLECTION_NAME].update()`

```js
db.places.update({ country: 'Morocco' }, { $set: { continent: 'Antarctica' } });
```

- Note that the above will only update the first entry it matches.

- To update multiple entries, you need to add `{multi: true}`

```js
db.places.update(
  { country: 'Morocco' },
  { $set: { continent: 'Antarctica' } },
  { multi: true }
);
```

- Recall from the earlier demo the structure of our document:

```js
db.places.insert({
  continent: 'Africa',
  country: 'Morocco',
  majorcities: ['Casablanca', 'Fez', 'Marrakech']
});
```

- What do you think will happen when you run the following command, even though there is not a `capital` field in the document?

```js
db.places.update({ country: 'Morocco' }, { $set: { capital: 'Rabat' } });
```

- **Answer**: `$set` will create the field `capital`

- The newly created field can now be updated with the same command:

```js
db.places.update({ country: 'Morocco' }, { $set: { capital: 'RABAT' } });
```

- We can update the values in an array with `$push`:

```js
db.places.update({ country: 'Morocco' }, { $push: { majorcities: 'Agadir' } });
```

**Deleting**

- We delete an entry with `db.[COLLECTION_NAME].remove()`

```js
db.places.remove({ country: 'Morocco' });
```

- We can also empty a collection with `db.[COLLECTION_NAME].remove()`

```js
db.places.remove({});
```

**Dropping**

- We drop a collection with `db.[COLLECTION_NAME].drop()`

```js
db.places.drop();
```

- To drop a database:

```js
db.dropDatabase();
```
