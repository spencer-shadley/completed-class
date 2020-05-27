'use strict';

// mongoose is just an npm package
const mongoose = require(`mongoose`);

// similar to sequelize we create external model classes and import them
const Example = require(`./exampleModel.js`);

// connect to mongo
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/dbExample`, {
  useNewUrlParser: true // avoid the old deprecated url parser
});

// create data to insert into mongodb
const data = {
  array: [`item1`, `item2`, `item3`],
  boolean: false,
  string: `"Don't worry if it doesn't work right. If everything did, you'd be out of a job"
    - Mosher's Law of Software Engineering`,
  number: 42
};

// models have a "create" function to insert data
Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });
