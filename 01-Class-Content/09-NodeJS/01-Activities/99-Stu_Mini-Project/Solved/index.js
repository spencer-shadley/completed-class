const inquirer = require("inquirer");
const fs = require("fs");
var path = require("path");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "location",
    message: "Where are you from?"
  },
  {
    type: "input",
    name: "hobby",
    message: "What is your favorite hobby?"
  },
  {
    type: "input",
    name: "food",
    message: "What is your favorite food?"
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username"
  },
  {
    type: "input",
    name: "linkedin",
    message: "Enter your LinkedIn URL."
  }
];

function promptUser(questions) {
  return inquirer.prompt(questions);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

promptUser(questions).then(answers => {
  var html = generateHTML(answers);
  writeToFile("index.html", html);
});
