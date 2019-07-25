const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const files = ["cat.json", "dog.json", "goldfish.json", "hamster.json"];

const filePromises = files.map(function(fileName) {
  return readFileAsync(fileName, "utf8");
});

combineAndSort(filePromises);

async function combineAndSort(filePromises) {
    const animalStrings = await Promise.all(filePromises);
}
