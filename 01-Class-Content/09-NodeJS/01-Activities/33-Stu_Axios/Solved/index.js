const fs = require("fs");
const path = require("path");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      fs.writeFile(
        path.join(__dirname, "repos.txt"), repoNames.join("\n"), function(err, data) {
          if (err) {
            throw err;
          }

          console.log(`Saved ${repoNames.length} repos`);
        }
      );
    });
  });
