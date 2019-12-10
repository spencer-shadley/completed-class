var eventType = document.querySelector('#event-type');
var mouseEventsElement = document.querySelector('#click-events');
var keyEventsElement = document.querySelector('#key-events');

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === 'keydown') {
    mouseEventsElement.classList.add('hide');
    keyEventsElement.classList.remove('hide');
  }
  else {
    mouseEventsElement.classList.remove('hide');
    keyEventsElement.classList.add('hide');
  }
}

function keydown(event) {
  var key = event.key;
  var keyCode = event.code;
  document.querySelector('#key').textContent = key;
  document.querySelector('#code').textContent = keyCode;
  document.querySelector('#status').textContent = 'KEYDOWN Event';
}

function keyup() {
  document.querySelector('#status').textContent = 'KEYUP Event';
}

function click(event) {
  var target = event.target.textContent;
  var x = event.clientX;
  var y = event.clientY;
  document.querySelector('#target').textContent = target;
  document.querySelector('#x').textContent = x;
  document.querySelector('#y').textContent = y;
}

document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
document.addEventListener('click', click);
eventType.addEventListener('change', toggleDisplay);
