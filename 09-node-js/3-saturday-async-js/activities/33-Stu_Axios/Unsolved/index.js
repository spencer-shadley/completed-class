'use strict';

const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

inquirer
  .prompt({
    message: 'Enter your GitHub username',
    name: 'username'
  })
  .then(({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  });
