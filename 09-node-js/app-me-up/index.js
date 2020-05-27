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

const option = process.argv.slice(2)[0];

if (option && option !== "github") {
  throw `Did not recognize: ${option}`;
}

prompt(option === "github" ? githubQuestion : questions).then(
  ({ css, javascript, projectName, name }) => {
    switch (true) {
      case option === "github":
        ghRepoFiles(name);
        break;
      case css && javascript:
        htmlCssJsFiles(projectName);
        break;
      case javascript:
        htmlJsFiles(projectName);
        break;
      case css:
        htmlCssFiles(projectName);
        break;
      default:
        htmlFile(projectName);
    }

    openInBrowser(["index.html"], console.log.bind(console));
  }
);
