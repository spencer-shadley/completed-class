var typefaceElement = document.querySelector('#typeface');
var clearElement = document.querySelector('#clear');
var h1Element = document.querySelector('#h1');
var h2Element = document.querySelector('#h2');
var h3Element = document.querySelector('#h3');
var pElement = document.querySelector('#p');
var textAreaElement = document.querySelector('#textarea');

var elements = [
  h1Element, h2Element, h3Element, pElement
];

var typeface;

typefaceElement.addEventListener('change', function (event) {
  event.preventDefault();
  typeface = typefaceElement.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

textAreaElement.addEventListener('keydown', function (event) {
  var key = event.key.toLowerCase();
  var alphaNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
  if (alphaNumericCharacters.includes(key)) {
    elements.forEach(function (element) {
      element.textContent += event.key;
    });
  }
});

clearElement.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaElement.value = '';
  elements.forEach(function (element) {
    element.textContent = '';
  });
});
