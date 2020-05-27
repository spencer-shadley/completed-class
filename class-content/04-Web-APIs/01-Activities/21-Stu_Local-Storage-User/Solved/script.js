'use strict';

var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userEmailSpan = document.querySelector('#user-email');
var userPasswordSpan = document.querySelector('#user-password');

var emailKey = 'email';
var passwordKey = 'password';

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  var email = localStorage.getItem(emailKey);
  var password = localStorage.getItem(passwordKey);

  if (email === null || password === null) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

signUpButton.addEventListener('click', function(event) {
  event.preventDefault();

  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    localStorage.setItem(emailKey, email);
    localStorage.setItem(passwordKey, password);
    renderLastRegistered();
  }
});
