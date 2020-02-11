'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(printRequest);

app.get('/', (req, res) => {
  console.log(res.hello);
  res.send(res.getHelloHtml());
});

app.get('*', (req, res) => {
  res.send(res.get404());
});

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));

function printRequest(req, res, next) {
  console.log(
    `Request from: ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  res.hello = 'world';
  res.getHelloHtml = () => '<h1>Hello, world!</h1>';
  res.get404 = () => '<h1>404</h1>';
  next();
}
