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
    err => callbackConsole(err, "index.html")
  );
  writeFile("style.css", htmlCss, err => callbackConsole(err, "style.css"));
}

function htmlJsFiles(projectName) {
  writeFile(
    "index.html",
    `${htmlTemplate(projectName)}${htmlTemplateWithScript}`,
    err => callbackConsole(err, "index.html")
  );

  writeFile("script.js", htmlJs, err => callbackConsole(err, "script.js"));
}

function htmlCssJsFiles(projectName) {
  writeFile(
    "index.html",
    `${htmlTemplateWithStyles(projectName)}${htmlTemplateWithScript}`,
    err => callbackConsole(err, "index.html")
  );

  writeFile("style.css", htmlCss, err => callbackConsole(err, "style.css"));

  writeFile("script.js", htmlJs, err => callbackConsole(err, "script.js"));
}

function ghRepoFiles(name) {
  writeFile("index.html", ghHTML(name), err =>
    callbackConsole(err, "index.html")
  );

  writeFile("style.css", ghCss, err => callbackConsole(err, "style.css"));

  writeFile("script.js", ghJs(name), err => callbackConsole(err, "script.js"));
}

module.exports = {
  htmlFile,
  htmlCssFiles,
  htmlJsFiles,
  htmlCssJsFiles,
  ghRepoFiles
};
