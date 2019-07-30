const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const files = ["cat.json", "dog.json", "goldfish.json", "hamster.json"];

const filePromises = files.map(function(fileName) {
  return readFileAsync(fileName, "utf8");
});

Promise.all(filePromises)
  .then(function(animalStrings) {
    const animalJSON = animalStrings.map(function parseJSON(str) {
      return JSON.parse(str);
    });

    return writeFileAsync(
      "combined.json",
      JSON.stringify(animalJSON, null, 2),
      "utf8"
    );
  })
  .then(function() {
    console.log("Successfully saved combined animal list!");
  })
  .catch(function(err) {
    console.log(err);
  });
