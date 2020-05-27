'use strict';

// Require dependencies
const http = require('http');
const fs = require('fs');

// Set our port to 8080
const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // Capture the url the request is made to
  const path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {
    case '/food':
      return fs.readFile(__dirname + '/food.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });

    case '/movies':
      return fs.readFile(__dirname + '/movies.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });

    case '/modules':
      return fs.readFile(__dirname + '/modules.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });

    // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(__dirname + '/index.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  }
}

// Starts our server.
server.listen(PORT, () => console.log('Server is listening on PORT: ' + PORT));
