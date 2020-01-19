'use strict';

// MDN on fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

var queryURL =
  'https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy';

fetch(queryURL).then(response => response.json().then(console.log));

// jquery ajax version
// $.ajax({
//   url: queryURL,
//   method: 'GET'
// }).then(function(response) {
//   console.log(response);
// });
