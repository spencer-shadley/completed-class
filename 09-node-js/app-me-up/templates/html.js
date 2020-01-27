"use strict";

const htmlTemplate = projectName => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${projectName}</title>
</head>
<body>
<h1>${projectName}</h1>
`;
};

const htmlTemplateEnd = `
</body>
</html>
`;

const htmlTemplateWithScript = `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
`;

const htmlTemplateWithStyles = projectName => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>${projectName}</title>
  </head>
  <body>
  <h1>${projectName}</h1>
  `;
};
const htmlCss = `
h1 {
  color: green;
}
`;

const htmlJs = `
"use strict";

const timeEl = document.createElement("h3");
document.body.appendChild(timeEl);

setInterval(() => {
  timeEl.innerText = moment().format("MMMM Do YYYY, h:mm:ss a");
}, 1000);

`;

module.exports = {
  htmlTemplate,
  htmlTemplateEnd,
  htmlTemplateWithScript,
  htmlTemplateWithStyles,
  htmlCss,
  htmlJs
};
