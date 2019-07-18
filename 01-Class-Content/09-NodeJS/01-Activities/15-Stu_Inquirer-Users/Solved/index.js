var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([

  {
    type: "input",
    name: "name",
    message: "What is your name?"
  }

]).then(function(data) {
  console.log(data);

  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
