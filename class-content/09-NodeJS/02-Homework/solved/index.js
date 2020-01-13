import { createWriteStream } from 'fs';
import { join } from 'path';
import { prompt } from 'inquirer';
import open from 'open';
import convertFactory, { converters } from 'electron-html-to';
import { getUser, getTotalStars } from './api';
import generateHTML from './generateHTML';

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
  prompt(questions).then(({ github, color }) => {
    console.log('Searching...');

    getUser(github)
      .then(response =>
        getTotalStars(github).then(stars => {
          return generateHTML({
            stars,
            color,
            ...response.data
          });
        })
      )
      .then(html => {
        const conversion = convertFactory({
          converterPath: converters.PDF
        });

        conversion({ html }, function(err, result) {
          if (err) {
            return console.error(err);
          }

          const resumeFilePath = join(__dirname, 'resume.pdf');

          result.stream.pipe(createWriteStream(resumeFilePath));
          conversion.kill();
          open(resumeFilePath);
        });
      });
  });
}

init();
