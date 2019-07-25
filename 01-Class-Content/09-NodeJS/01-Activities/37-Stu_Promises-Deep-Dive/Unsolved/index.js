const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const files = ["cat.json", "dog.json", "goldfish.json", "hamster.json"];
