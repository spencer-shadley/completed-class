const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const animals = [];

readFileAsync("cat.json", "utf8").then(function(data) {
  animals.push(JSON.parse(data));

  return readFileAsync("dog.json", "utf8");
});
