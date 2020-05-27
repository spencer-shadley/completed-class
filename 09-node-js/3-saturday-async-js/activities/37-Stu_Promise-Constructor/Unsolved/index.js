'use strict';

function waitFor(seconds, callback) {
  if (isNaN(seconds) || seconds < 1) {
    return callback(Error("Parameter 'seconds' must be a positive number!"));
  }

  setTimeout(() => {
    callback(null, 'Success!');
  }, seconds * 1000);
}

waitFor(2, (err, msg) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(msg);
});
