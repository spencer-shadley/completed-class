const axios = require("axios");

const favoriteMovies = [
  "The Matrix",
  "Eternal Sunshine of the Spotless Mind",
  "Mr. Nobody"
];

// Save promises to an array
const promises = favoriteMovies.map(function(movie) {
  return axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=trilogy`);
});

// When all of the promises resolve...
Promise.all(promises)
  .then(function(responses) {
    // loop through the responses and save the movieData to an array
    const movieData = responses.map(function(response) {
      return response.data;
    });

    // Get the highest rated movie
    const [bestMovie] = movieData.sort(function(a, b) {
      return b.imdbRating - a.imdbRating;
    });

    console.log(
      `The best movie is ${bestMovie.Title} with a score of ${
        bestMovie.imdbRating
      }`
    );
  })
  .catch(function(err) {
    // Gets called if any of the promises fail to resolve
    console.log(err);
  });
