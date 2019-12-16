var firstNumInput = document.getElementById("firstNum");
var secondNumInput = document.getElementById("secondNum");
var sumButton = document.getElementById("sum");
var answerEl = document.getElementById("answer");

function add(x, y) {
  var sum = x + y;
  return sum;
}

function showSum() {
  var num1 = parseFloat(firstNumInput.value);
  var num2 = parseFloat(secondNumInput.value);
  var sum = add(num1, num2);
  answerEl.textContent = sum;
}

sumButton.addEventListener("click", showSum);
