'use strict';

// Dependencies
const http = require('http');

const PORT = 8080;

const server = http.createServer(handleRequest);

let allRequestData = [];

function handleRequest(req, res) {
  // Saving the request data as a variable
  let currentRequestData = '';

  // When the server receives data add it to requestData
  req.on('data', data => {
    currentRequestData += data;
    allRequestData.push(currentRequestData);
  });

  // When the request has ended...
  req.on('end', () => {
    // Log (server-side) the request method, as well as the data received!
    console.log('You did a', req.method, 'with the data:', currentRequestData);
    console.log('All request data', JSON.stringify(allRequestData));
    res.end();
  });
}

// Start our server
server.listen(PORT, () =>
  console.log('Server listening on: http://localhost:' + PORT)
);
