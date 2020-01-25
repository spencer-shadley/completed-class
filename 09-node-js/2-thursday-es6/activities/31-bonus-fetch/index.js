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

// ES5
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     // Typical action to be performed when the document is ready:
//     document.getElementById('demo').innerHTML = xhttp.responseText;
//   }
// };
// xhttp.open('GET', 'filename', true);
// xhttp.send();
