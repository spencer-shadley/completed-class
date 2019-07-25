const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const files = ["cat.json", "dog.json", "goldfish.json", "hamster.json"];

const filePromises = files.map(function(fileName) {
  return readFileAsync(fileName, "utf8");
});

combineAndSort(filePromises).catch(function(err) {
  console.log(err);
});

async function combineAndSort(filePromises) {
  const animalStrings = await Promise.all(filePromises);

  const animalJSON = animalStrings.map(function parseJSON(str) {
    return JSON.parse(str);
  });

  const sortedAnimals = animalJSON.sort(function sortByOldest(a, b) {
    return b.age - a.age;
  });

  await writeFileAsync(
    "combined.json",
    JSON.stringify(sortedAnimals, null, 2),
    "utf8"
  );
  
  console.log("Successfully saved combined animal list!");
}
