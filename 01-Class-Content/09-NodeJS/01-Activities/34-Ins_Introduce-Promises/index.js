function wait(seconds) {
  const handlePromise = function(resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      reject("Error: Parameter 'seconds' must be a number larger than 0");
    }

    setTimeout(function() {
      resolve(seconds);
    }, seconds * 1000);
  };

  return new Promise(handlePromise);
}

// Since a 'seconds' argument is provided and no error is produced, only the 'then' should run
wait(3)
  .then(function(seconds) {
    console.log(`Printing after ${seconds} seconds`);
  })
  .catch(function(err) {
    console.log(err);
  });

// Since a 'seconds' argument isn't provided, the 'catch' should run
wait()
  .then(function(seconds) {
    console.log(`Printing after ${seconds} seconds`);
  })
  .catch(function(err) {
    console.log(err);
  });
