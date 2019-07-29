const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const animals = [];
    const files = ["dog.json", "goldfish.json", "cat.json", "hamster.json"];
  } catch(err) {

  }
}

combineAnimals();
