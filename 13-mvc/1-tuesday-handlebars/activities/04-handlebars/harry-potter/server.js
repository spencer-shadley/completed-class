'use strict';

const express = require('express');
const expressHandlebars = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'wizard_schools_db'
});

// set our template engine to 'handlebars'
// and set our primary HTML layout to 'main' (which the views will build on)
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));

// use handlebars for our view engine
app.set('view engine', 'handlebars');

app.get('/schools-no-db', (req, res) =>
  res.render('schools', {
    schools: ['Ilvermorny', 'Hogwarts', 'Durmstrang Institute']
  })
);

app.get('/schools', (req, res) => {
  connection.query('SELECT * FROM schools', (err, schools) => {
    if (err) throw err;
    const schoolNames = schools.map(school => school.name);
    res.render('schools', { schools: schoolNames });
  });
});

app.get('*', (req, res) =>
  res.render('index', { hello: 'world', url: req.url })
);

connection.connect(err => {
  if (err) {
    console.error('error connecting', err.stack);
    return;
  }
  app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
  );
  console.log(`connected with id ${connection.threadId}`);
});
