const inquirer = require('inquirer');
const open = require('open');
const pdf = require('html-pdf');
const api = require('./api');
const generateHTML = require('./generateHTML');
const questions = require('./questions.json');

async function init() {
  try {
    const { github: githubUsername, color } = await inquirer.prompt(questions);
    console.log(`Searching for ${githubUsername}`);
    const githubData = await api.getUser(githubUsername);
    const stars = await api.getTotalStars(githubUsername);
    const html = generateHTML({
      stars,
      color,
      ...githubData.data
    });
    generatePdf(html);
  } catch (err) {
    console.error(err);
  }
}

function generatePdf(html) {
  const resumeFilePath = './resume.pdf';
  pdf.create(html, { format: 'Tabloid' }).toFile(resumeFilePath, (err, res) => {
    if (err) {
      return console.error(err);
    }
    console.log('successfully created resume', res.filename);
    open(resumeFilePath);
  });
}

init();
