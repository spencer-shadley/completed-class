const MovieSearch = require("./movieSearch");

const movie = new MovieSearch();

movie.search("Spider-Man")
  .then(res => movie.writeJson(res.data, "movie.json"));
