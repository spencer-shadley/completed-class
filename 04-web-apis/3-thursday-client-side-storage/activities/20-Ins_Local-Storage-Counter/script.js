var counter = document.querySelector('#counter');
var addButton = document.querySelector('#add');
var subtractButton = document.querySelector('#subtract');

var numHoursKey = 'numHoursCoding';
var count = localStorage.getItem(numHoursKey) || 0;

counter.textContent = count;

addButton.addEventListener('click', function () {
  ++count;
  counter.textContent = count;

  localStorage.setItem(numHoursKey, count);
});

subtractButton.addEventListener('click', function () {
  --count;
  counter.textContent = count;

  localStorage.setItem(numHoursKey, count);
});
