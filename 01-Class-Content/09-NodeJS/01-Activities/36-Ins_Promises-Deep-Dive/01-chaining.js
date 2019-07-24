function numberMagic(number) {
  return new Promise(function(resolve) {
    resolve(number);
  });
}

var originalNumber = 12;

numberMagic(originalNumber)
  .then(function(number) {
    console.log(`Doubling ${number}!`);

    return number * 2;
  })
  .then(function(number) {
    console.log(`Adding 10 to ${number}!`);

    return number + 10;
  })
  .then(function(number) {
    console.log(`Cutting ${number} in half!`);

    return number / 2;
  })
  .then(function(number) {
    console.log(`Subtracting ${originalNumber} from ${number}`);

    return number - originalNumber;
  })
  .then(function(number) {
    console.log(`${number} should be equal to 5!`);
  });
