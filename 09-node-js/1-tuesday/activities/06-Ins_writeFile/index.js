var fs = require('fs');

fs.writeFile('log.txt', 'hello world!', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Success!');
});
