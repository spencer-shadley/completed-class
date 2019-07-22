const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const User = require("./userModel.js.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/crud", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
  const user = new User(body);
  User.create(user)
    .then(dbUser => {
      res.json(dbUser);
      console.log(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/users", (req, res) => {
  User.find({}).then(users => {
    res.send(users);
  });
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


// @TODO CRUD activities