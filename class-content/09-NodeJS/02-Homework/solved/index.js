const inquirer = require('inquirer');
const open = require('open');
const pdf = require('html-pdf');
const api = require('./api');
const generateHTML = require('./generateHTML');

const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },

  {
    type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: ['red', 'blue', 'green', 'pink']
  }
];

function init() {
  inquirer.prompt(questions).then(({ github, color }) => {
    console.log('Searching...');

    api
      .getUser(github)
      .then(response =>
        api.getTotalStars(github).then(stars => {
          return generateHTML({
            stars,
            color,
            ...response.data
          });
        })
      )
      .then(html => {
        pdf
          .create(html, { format: 'Tabloid' })
          .toFile('./resume.pdf', (err, res) => {
            if (err) {
              return console.error(err);
            }
            console.log('successfully created resume', res);
            open('./resume.pdf');
          });
      });
  });
}

init();
