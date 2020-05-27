const githubQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is your github username?"
  }
];

const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
    default: "Document"
  },
  {
    type: "confirm",
    name: "css",
    message: "Do you want a css file?"
  },
  {
    type: "confirm",
    name: "javascript",
    message: "Do you want a js file?"
  }
];

module.exports = {
  githubQuestion,
  questions
};
