'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(printRequest);

app.get('/', (req, res) => {
  console.log(res.hello);
  res.send(res.getHelloHtml());
});

app.get('*', (req, res) => res.send(res.get404(req.fullUrl)));

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));

function printRequest(req, res, next) {
  req.fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  console.log(`Request from ${req.fullUrl}`);
  res.hello = 'world';
  res.getHelloHtml = () => '<h1>Hello, world!</h1>';
  res.get404 = url => `<h1>404, unknown URL ${url}</h1>`;
  next();
}
