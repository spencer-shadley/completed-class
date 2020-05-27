# Creating, Inserting and Finding in MongoDB

## Setup

- run the mongod daemon with `mongod`

- start a mongo shell with `mongo`

- see the current database with `db`

- switch to a new "farm" database with `use farm`

- see all databases with `show dbs`

  - note: databases aren't created until a document is inserted

## C - Create

Create a document with:

```js
db.animals.insertOne({
  name: 'spot',
  species: 'cow',
  food: ['grass', 'hay']
});
```

Note: multiple lines are supported directly in the shell. Alternatively you can copy/paste from an editor like VS Code.

## R - Read

### Find all documents:

```js
db.animals.find();
```

#### Make the documents pretty

```js
db.animals.find().pretty();
```

### Find a subset of documents

```js
db.animals.find({ species: 'cow' });
```

### Find a specific document

Note: change the contents of `ObjectId` to whatever id was generated earlier

```js
db.animals.findOne({ _id: ObjectId('5e6c4a587ee7c1248fecffe9') });
```

## U - Update

### Change existing property

```js
db.animals.update(
  { name: 'spot' },
  {
    name: 'Speckle',
    species: 'cow',
    food: ['grass', 'hay']
  }
);
```

## D - Delete

### Delete a document

```js
db.animals.remove({ name: 'Speckle' });
```

### Delete a collection

```js
db.animals.drop();
```

---

# Bonus Example

```js
use lessondb
```

- Show the current db by running db:

```js
db;
```

- Insert data into the lessondb database with this command.

- NOTE: This will create the collection automatically.

- ALSO, TAKE NOTE: the contents of the insert are basically a JS object, and include an array:

```js
db.places.insertOne({
  continent: 'Africa',
  country: 'Morocco',
  majorcities: ['Casablanca', 'Fez', 'Marrakech']
});
```

- As a class, come up with 3-5 more countries and insert them into the db using the same syntax as above.

- Observe where the data was entered in the MongoDB instance (in mongod).

- Find all data in a Collection with `db.[COLLECTION_NAME].find()`.

- NOTE: the MongoDB \_id was created automatically.

- This id is specific for each doc in the collection:

```js
db.places.find();
```

- Adding .pretty() makes the data more readable:

```js
db.places.find().pretty();
```

- Find specific data by matching a field:

```js
db.places.find({ continent: 'Africa' });
db.places.find({ country: 'Morocco' });
```

- Try a few queries with the examples we came up with as a class.

- Also, pick something that will find more than one entry so we can see how it will return all matches.

- Find specific data by matching an \_id:

```js
db.places.find({_id:[COPY AN OBJECTID FROM THE PREVIOUS FIND RESULTS]})
```

- Example: `db.places.find({_id: ObjectId("5416fe1d94bcf86cd785439036")})`