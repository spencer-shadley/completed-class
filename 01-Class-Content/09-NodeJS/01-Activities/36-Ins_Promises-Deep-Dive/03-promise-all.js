const axios = require("axios");

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
      // Find the highest rated movie in the array of movie data
      const [highestRated] = movies.sort(function(a, b) {
        return b.imdbRating - a.imdbRating;
      });

      return highestRated;
    })
    .then(function(highestRated) {
      // Print out the highest rated movie
      console.log(`The highest rated movie is ${highestRated.Title}, with a score of ${highestRated.imdbRating}`);
    });

