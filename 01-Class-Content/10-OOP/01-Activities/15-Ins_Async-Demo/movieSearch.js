const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function MovieSearch() {}

MovieSearch.prototype.buildUrl = function(movie) {
  return `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
};

MovieSearch.prototype.search = function(movie) {
  return axios.get(this.buildUrl(movie));
};

MovieSearch.prototype.writeJson = function(data, destination) {
  return writeFileAsync(destination, JSON.stringify(data, null, 2));
};

module.exports = MovieSearch;
