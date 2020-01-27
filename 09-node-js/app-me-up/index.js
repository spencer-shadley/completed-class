#!/usr/bin/env node
"use strict";

const { prompt } = require("inquirer");
const { openInBrowser } = require("./openInBrowser");
const { githubQuestion, questions } = require("./questions");

const {
  htmlFile,
  htmlCssFiles,
  htmlJsFiles,
  htmlCssJsFiles,
  ghRepoFiles
} = require("./fileWriters");

const github = process.argv.slice(2)[0];

if (github && github !== "github") {
  throw `Did not recognize: ${github}`;
}

prompt(github ? githubQuestion : questions).then(
  ({ css, javascript, projectName, name }) => {
    if (name) {
      ghRepoFiles(name);
    } else if (javascript && css) {
      htmlCssJsFiles(projectName);
    } else if (javascript) {
      htmlJsFiles(projectName);
    } else if (css) {
      htmlCssFiles(projectName);
    } else {
      htmlFile(projectName);
    }

    openInBrowser(["index.html"], console.log.bind(console));
  }
);
