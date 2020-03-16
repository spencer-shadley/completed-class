'use strict';

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);

const PORT = process.env.PORT || 3000;

const db = require(`./models`);

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/populate`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

db.Library.create({ name: `Campus Library` })
  .then(dbLibrary => {
    console.log(dbLibrary);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.post(`/submit`, ({ body }, res) => {
  db.Book.create(body)
    .then(({ _id }) =>
      db.Library.findOneAndUpdate(
        {},
        { $push: { books: _id } },
        {
          new: true // return the document AFTER the update is applied
        })
    )
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get(`/books`, (req, res) => {
  db.Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get(`/library`, (req, res) => {
  db.Library.find({})
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});

// https://mongoosejs.com/docs/populate.html
// "Population is the process of automatically replacing the specified paths in the document
// with document(s) from other collection(s)."
app.get(`/populated`, (req, res) => {
  db.Library.find({})
    .populate(`books`)
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
