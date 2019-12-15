var statusSpan = document.querySelector('#status');
var statusToggle = document.querySelector('#status-toggle');
var playButton = document.querySelector('#play');
var pauseButton = document.querySelector('#pause');
var stopButton = document.querySelector('#stop');
var minutesDisplay = document.querySelector('#minutes');
var secondsDisplay = document.querySelector('#seconds');
var workMinutesInput = document.querySelector('#work-minutes');
var restMinutesInput = document.querySelector('#rest-minutes');

var totalSeconds = 0;
var secondsElapsed = 0;
var workingStatus = 'Working';
var restingStatus = 'Resting';
var status = workingStatus;
var interval;

getTimePreferences();

function getFormattedMinutes() {
  var secondsLeft = totalSeconds - secondsElapsed;
  var minutesLeft = Math.floor(secondsLeft / 60);
  return getPadding(minutesLeft) + minutesLeft;
}

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  return getPadding(secondsLeft) + secondsLeft;
}

function getPadding(num) {
  return num < 10 ? '0' : '';
}

function setTime() {
  var minutes = (status === workingStatus ? workMinutesInput : restMinutesInput).value.trim();

  clearInterval(interval);
  totalSeconds = minutes * 60;
}

function renderTime() {
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();

  if (secondsElapsed >= totalSeconds) {
    var statusMessage = status === workingStatus ? 'Time for a break!' : 'Time to get back to work!';
    alert(statusMessage);
    stopTimer();
  }
}

function startTimer() {
  setTime();

  interval = setInterval(function () {
    ++secondsElapsed;
    renderTime();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  renderTime();
}

function stopTimer() {
  secondsElapsed = 0;
  setTime();
  renderTime();
  setTimePreferences();
}

function toggleStatus(event) {
  var checked = event.target.checked;

  status = checked ? workingStatus : restingStatus;
  statusSpan.textContent = status;

  secondsElapsed = 0;
  setTime();
  renderTime();
}

function getTimePreferences() {
  var preferences = JSON.parse(localStorage.getItem('preferences'));

  if (preferences) {
    if (preferences.workMinutes) {
      workMinutesInput.value = preferences.workMinutes;
    }

    if (preferences.restMinutes) {
      restMinutesInput.value = preferences.restMinutes;
    }

  }

  setTime();
  renderTime();
}

function setTimePreferences() {
  localStorage.setItem(
    'preferences',
    JSON.stringify({
      workMinutes: workMinutesInput.value.trim(),
      restMinutes: restMinutesInput.value.trim()
    })
  );
}

playButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);
statusToggle.addEventListener('change', toggleStatus);

