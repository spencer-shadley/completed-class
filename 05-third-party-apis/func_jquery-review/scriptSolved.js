// Grab our elements form our DOM
var timerEl = document.getElementById('timer');
var countEl = document.getElementById('counter');
var incrementButton = document.getElementById('button-1');
var decrementButton = document.getElementById('button-2');
var timerStartButton = document.getElementById('button-3');
var timerStopButton = document.getElementById('button-4');
var multiplyButton = document.getElementById('button-5');
var resetButton = document.getElementById('button-6');
var timerPlus10Button = document.getElementById('button-7');
var timerMinus10Button = document.getElementById('button-8');


// Create any variables we need
var time = 100;
var count = 0;
var timerId;

// Functions
function increment() {
    ++count;
    countEl.innerHTML = count;
};

function decrement() {
    if (count >= 1) {
    --count;
    countEl.innerHTML = count;
    };
};

function clockTick() {
    --time;
    timerEl.innerHTML = time;
};

function startTime() {
  timerId = setInterval(clockTick, 1000);
};

function stopTime() {
   clearInterval(timerId);
};

function multiply() {
    count = count * 2;
    countEl.innerHTML = count;
};

function reset() {
    count = 0;
    countEl.innerHTML = count;
};

function addTenSeconds() {
    time += 10;
    timerEl.innerHTML = time;
};

function minusTenSeconds() {
    if (time >= 10) {
    time -= 10;
    timerEl.innerHTML = time;
    };
};

// Set on click functions
incrementButton.onclick = increment;
decrementButton.onclick = decrement;
timerStartButton.onclick = startTime;
timerStopButton.onclick = stopTime;
multiplyButton.onclick = multiply;
resetButton.onclick = reset;
timerPlus10Button.onclick = addTenSeconds;
timerMinus10Button.onclick = minusTenSeconds;
$('#button-8').on('click', function() {
    minusTenSeconds();
    increment();
})