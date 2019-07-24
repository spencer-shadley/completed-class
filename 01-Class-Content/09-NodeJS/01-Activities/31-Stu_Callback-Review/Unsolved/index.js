const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "animals.csv"), "utf8", (err, data) => {
  if (err) {
    throw err;
  }

  const rows = data.split("\n");

  const heading = rows[0];
  const entries = rows.slice(1);

  const dogs = [heading];
  const cats = [heading];

  // use entries.forEach to loop through all entries
  // If the entry is a dog, push it to the dogs array
  // Else push it to the cats array

  // Join the dogs array to a newline separated string and write it to a new dogs.csv file
  // Print a message to the console letting the user know if this was successful

  // Join the cats array to a newline separated string and write it to a new cats.csv file
  // Print a message to the console letting the user know if this was successful
});
