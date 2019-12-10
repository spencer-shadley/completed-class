var submitElement = document.querySelector('#submit');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var submissionResponseElement = document.querySelector('#response');

submitElement.addEventListener('click', function (event) {
  event.preventDefault();

  console.log(event);

  var response = 'Thank you for your submission ' +
    nameInput.value + '! We will reach out to you at ' +
    emailInput.value + '.';

  submissionResponseElement.textContent = response;
});
