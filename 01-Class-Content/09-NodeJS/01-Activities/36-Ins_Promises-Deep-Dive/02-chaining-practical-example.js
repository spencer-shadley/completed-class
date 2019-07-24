const fs = require("fs");
const path = require("path");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");

// util.promisify can be used to convert methods using node.js style callbacks to use promises
// Effectively doing the same as what we did manually in the previous activity
const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt({
  message: "Pick a movie!",
  name: "movie"
})
  .then(function({ movie }) {
    return axios.get("https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy");
  })
  .then(function({ data }) {
    return writeFileAsync(path.join(__dirname, "data.txt"), JSON.stringify(data), "utf8");
  })
  .then(function() {
    console.log("All done!");
  });
