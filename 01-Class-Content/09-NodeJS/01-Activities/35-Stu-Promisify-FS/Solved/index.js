const fs = require("fs");
const path = require("path");

function readFileAsync(file, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, encoding, function(err, data) {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

readFileAsync(path.join(__dirname, "./text.txt"), "utf8")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
