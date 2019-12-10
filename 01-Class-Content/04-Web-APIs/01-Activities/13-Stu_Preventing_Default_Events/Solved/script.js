var tipElement = document.querySelector('#tip-percentage');
var totalElement = document.querySelector('#total');
var submitElement = document.querySelector('#submit');
var splitElement = document.querySelector('#split');

function calculateTip(total, tipPercentage) {
  return (total * tipPercentage).toFixed(2);
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  event.preventDefault();
  var tipPercentage = tipElement.value * .01;
  var total = totalElement.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector('#tip-amount').textContent = tipAmount;
  document.querySelector('#new-total').textContent = newTotal.toFixed(2);
}

function splitTotal(event) {
  event.preventDefault();

  var total = document.querySelector('#new-total').textContent;
  var numPeople = document.querySelector('#num-people').value;

  var newTotal = (total / numPeople).toFixed(2);
  document.querySelector('#split-total').textContent = newTotal;
}

submitElement.addEventListener('click', addTip);
splitElement.addEventListener('click', splitTotal);
