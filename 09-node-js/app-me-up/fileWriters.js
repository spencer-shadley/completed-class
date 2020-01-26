const { writeFile } = require("fs");
const {
  htmlTemplate,
  htmlTemplateWithScript,
  htmlTemplateEnd,
  htmlTemplateWithStyles,
  htmlCss,
  htmlJs
} = require("./templates/html");

const { ghCss, ghHTML, ghJs } = require("./templates/ghRepo");

function callbackConsole(err, file) {
  err
    ? console.error("There was an error", err)
    : console.log(`Success created ${file} file!`);
}

function htmlFile(projectName) {
  writeFile(
    "index.html",
    `${htmlTemplate(projectName)}${htmlTemplateEnd}`,
    err => callbackConsole(err, "index.html")
  );
}

function htmlCssFiles(projectName) {
  writeFile(
    "index.html",
    `${htmlTemplateWithStyles(projectName)}${htmlTemplateEnd}`,
    err => callbackConsole(err, "file")
  );
  writeFile("style.css", htmlCss, err => callbackConsole(err, "file"));
}

function htmlJsFiles(projectName) {
  writeFile(
    "index.html",
    `${htmlTemplate(projectName)}${htmlTemplateWithScript}`,
    err => callbackConsole(err, "file")
  );

  writeFile("script.js", htmlJs, err => callbackConsole(err, "file"));
}

function htmlCssJsFiles(projectName) {
  writeFile(
    "index.html",
    `${htmlTemplateWithStyles(projectName)}${htmlTemplateWithScript}`,
    err => callbackConsole(err, "file")
  );

  writeFile("style.css", htmlCss, err => callbackConsole(err, "file"));

  writeFile("script.js", htmlJs, err => callbackConsole(err, "file"));
}

function ghRepoFiles(name) {
  writeFile("index.html", ghHTML(name), err => callbackConsole(err, "file"));

  writeFile("style.css", ghCss, err => callbackConsole(err, "file"));

  writeFile("script.js", ghJs(name), err => callbackConsole(err, "file"));
}

module.exports = {
  htmlFile,
  htmlCssFiles,
  htmlJsFiles,
  htmlCssJsFiles,
  ghRepoFiles
};
