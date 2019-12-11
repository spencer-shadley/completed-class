var count = 0;
var updateAmountElement = document.querySelector('#update-amount');
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

function getUpdatemount() {
  var amount = parseInt(updateAmountElement.value);
  if (isNaN(amount)) {
    return 5; // default to 5
  }
  return amount;
}

incrementElement.addEventListener('click', function () {
  updateCount(count + getUpdatemount());
});

decrementElement.addEventListener('click', function () {
  updateCount(count - getUpdatemount());
});

incrementElement.addEventListener('mouseover', function () {
  updateCount(count + 1);
});

decrementElement.addEventListener('mouseout', function () {
  updateCount(count - 1);
});
