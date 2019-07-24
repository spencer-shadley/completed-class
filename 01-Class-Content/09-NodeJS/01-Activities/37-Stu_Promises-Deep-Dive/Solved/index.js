const axios = require("axios");
const fs = require("fs");

const favoriteMovies = [
  "The Matrix",
  "Eternal Sunshine of the Spotless Mind",
  "Interstellar",
  "Mr. Nobody"
];

// Create an array of promise objects
const moviePromises = favoriteMovies.map(function(movie) {
  return axios.get("https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy");
});

// Wait for ALL of the promises resolve, then...
Promise.all(moviePromises)
  .then(function(responses) {
    // From an array containing all the response data
    // Create a new array containing only the movie data
    const movies = responses.map(function(response) {
      return response.data;
    });

    return movies;
  })
    .then(function(movies) {
      fs.writeFileSync("./movies.json", JSON.stringify(movies, null, 2));
    });

