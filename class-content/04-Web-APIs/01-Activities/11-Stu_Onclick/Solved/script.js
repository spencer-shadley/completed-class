'use strict'

var count = 0;
var incrementElement = document.querySelector('#increment');
var decrementElement = document.querySelector('#decrement');
var countElement = document.querySelector('#count');

function setCounterText() {
  countElement.textContent = count;
}

function updateCount(updatedCount) {
  if (updatedCount >= 0) {
    count = updatedCount;
    setCounterText();
  }
}

incrementElement.addEventListener('click', function() {
  updateCount(count + 1);
});

decrementElement.addEventListener('click', function() {
  updateCount(count - 1);
});
