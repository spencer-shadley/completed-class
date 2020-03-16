'use strict';

const express = require(`express`);
const mongojs = require(`mongojs`);
const logger = require(`morgan`);

const dbName = `warmup`;
const collections = [`books`];
const db = mongojs(dbName, collections);

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

db.on(`error`, error => {
  console.log(`Database Error:`, error);
});

app.post(`/submit`, ({ body }, res) => {
  const book = body;

  book.hasRead = false;

  // save vs insert:
  // https://stackoverflow.com/questions/16209681/what-is-the-difference-between-save-and-insert-in-mongo-db
  db.books.save(book, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

app.get(`/read`, (req, res) => {
  db.books.find({ hasRead: true }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.get(`/unread`, (req, res) => {
  db.books.find({ hasRead: false }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.put(`/markread/:id`, ({ params }, res) => {
  db.books.updateOne(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        hasRead: true
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

app.put(`/markunread/:id`, ({ params }, res) => {
  db.books.updateOne(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        hasRead: false
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

app.listen(3000, () => {
  console.log(` App running on port http://localhost:3000`);
});
