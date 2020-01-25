'use strict';

const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

inquirer
  .prompt({
    message: 'Enter your GitHub username:',
    name: 'username'
  })
  .then(({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(res => {
      let repoNames = res.data.map(repo => repo.name);

     repoNames = repoNames.join('\n');

      fs.writeFile('repos.txt', repoNames, err => {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });
