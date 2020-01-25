const fs = require("fs");
const path = require("path");
const {
  htmlTemplate,
  htmlTemplateWithScript,
  htmlTemplateEnd,
  htmlTemplateWithStyles,
  htmlCss,
  htmlJs
} = require("./templates/html");

const { ghCss, ghHTML, ghJs } = require("./templates/ghRepo");

const callbackConsole = err => {
  err
    ? console.error("There was an error", err)
    : console.log("Success created file(s)!");
};

const htmlFile = projectName => {
  fs.writeFile(
    path.join(__dirname, "index.html"),
    `${htmlTemplate(projectName)}${htmlTemplateEnd}`,
    callbackConsole
  );
};

const htmlCssFiles = projectName => {
  fs.writeFile(
    "index.html",
    `${htmlTemplateWithStyles(projectName)}${htmlTemplateEnd}`,
    callbackConsole
  );
  fs.writeFile("style.css", htmlCss, callbackConsole);
};

const htmlJsFiles = projectName => {
  fs.writeFile(
    "index.html",
    `${htmlTemplate(projectName)}${htmlTemplateWithScript}`,
    callbackConsole
  );

  fs.writeFile("script.js", htmlJs, callbackConsole);
};

const htmlCssJsFiles = projectName => {
  fs.writeFile(
    "index.html",
    `${htmlTemplateWithStyles(projectName)}${htmlTemplateWithScript}`,
    callbackConsole
  );

  fs.writeFile("style.css", htmlCss, callbackConsole);

  fs.writeFile("script.js", htmlJs, callbackConsole);
};

const ghRepoFiles = name => {
  fs.writeFile("index.html", ghHTML(name), callbackConsole);

  fs.writeFile("style.css", ghCss, callbackConsole);

  fs.writeFile("script.js", ghJs(name), callbackConsole);
};

module.exports = {
  htmlFile,
  htmlCssFiles,
  htmlJsFiles,
  htmlCssJsFiles,
  ghRepoFiles
};
