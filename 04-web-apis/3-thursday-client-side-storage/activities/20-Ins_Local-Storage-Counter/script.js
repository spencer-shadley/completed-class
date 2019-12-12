var counter = document.querySelector('#counter');
var addButton = document.querySelector('#add');
var subtractButton = document.querySelector('#subtract');

var numHoursKey = 'count';
var count = localStorage.getItem(numHoursKey);

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
