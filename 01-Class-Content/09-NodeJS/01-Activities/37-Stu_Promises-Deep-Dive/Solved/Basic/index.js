const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const animals = [];

readFileAsync("cat.json", "utf8")
  .then(function(data) {
    animals.push(JSON.parse(data));

    return readFileAsync("dog.json", "utf8");
  })
  .then(function(data) {
    animals.push(JSON.parse(data));

    return readFileAsync("goldfish.json", "utf8");
  })
  .then(function(data) {
    animals.push(JSON.parse(data));

    return readFileAsync("hamster.json", "utf8");
  })
  .then(function(data) {
    animals.push(JSON.parse(data));

    return writeFileAsync(
      "combined.json",
      JSON.stringify(animals, null, 2),
      "utf8"
    );
  })
  .then(function() {
    console.log("Successfully wrote to 'combined.json'");
  })
  .catch(function(err) {
    console.log(err);
  });
