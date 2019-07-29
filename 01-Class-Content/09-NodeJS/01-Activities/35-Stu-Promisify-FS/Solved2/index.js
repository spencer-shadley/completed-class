const fs = require("fs");

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

readFileAsync("text.txt", "utf8")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
