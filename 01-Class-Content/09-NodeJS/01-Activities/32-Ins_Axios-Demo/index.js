const axios = require("axios");
const inquirer = require("inquirer");

promptUser();

function promptUser() {
  inquirer
  .prompt({
    message: "Which movie would you like to search for?",
    name: "movie"
  })
  .then(function(answer) {
    searchMovie(answer.movie);
  });
}

function searchMovie(movie) {
  const queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
  
  axios
      .get(queryURL)
      .then(res => console.log(res.data));
}
