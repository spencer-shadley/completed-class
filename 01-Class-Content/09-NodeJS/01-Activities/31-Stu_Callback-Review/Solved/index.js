const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "animals.csv"), "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Split the data into an array of its lines, separate the heading from the entries
  const rows = data.split("\n");
  const heading = rows[0];
  const entries = rows.slice(1);

  // Create two new arrays to contain the lines that will be written to the new files
  const dogs = [heading];
  const cats = [heading];
  
  entries.forEach(function(entry) {
    const species = entry.split(",")[1];

    if (species === "dog") {
      dogs.push(entry);
    } else if (species === "cat") {
      cats.push(entry);
    }
  });

  fs.writeFile(path.join(__dirname, "dogs.csv"), dogs.join("\n"), function(
    err,
    data
  ) {
    if (err) {
      throw err;
    }

    console.log("Successfully wrote to dogs.csv file");
  });

  fs.writeFile(path.join(__dirname, "cats.csv"), cats.join("\n"), function(
    err,
    data
  ) {
    if (err) {
      throw err;
    }

    console.log("Successfully wrote to cats.csv file");
  });
});
