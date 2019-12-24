var eventType = document.querySelector('#event-type');
var mouseEventsElement = document.querySelector('#click-events');
var keyEventsElement = document.querySelector('#key-events');

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === 'keydown') {
    mouseEventsElement.classList.add('hide');
    keyEventsElement.classList.remove('hide');
  } else {
    mouseEventsElement.classList.remove('hide');
    keyEventsElement.classList.add('hide');
  }
}

function handleKeyDown(event) {
  var key = event.key;
  var keyCode = event.code;
  document.querySelector('#key').textContent = key;
  document.querySelector('#code').textContent = keyCode;
  document.querySelector('#status').textContent = 'KEYDOWN Event';
}

function handleKeyUp() {
  document.querySelector('#status').textContent = 'KEYUP Event';
}

function handleClick(event) {
  var target = event.target.textContent;
  var x = event.clientX;
  var y = event.clientY;
  document.querySelector('#target').textContent = target;
  document.querySelector('#x').textContent = x;
  document.querySelector('#y').textContent = y;
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
document.addEventListener('click', handleClick);
eventType.addEventListener('change', toggleDisplay);
