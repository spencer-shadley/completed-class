// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsElement = document.getElementById('questions');
var timerElement = document.getElementById('time');
var choicesElement = document.getElementById('choices');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');
var initialsElements = document.getElementById('initials');
var feedbackElement = document.getElementById('feedback');

// sound effects
var sfxRight = new Audio('assets/sfx/correct.wav');
var sfxWrong = new Audio('assets/sfx/incorrect.wav');

function startQuiz() {
  var startScreenElement = document.getElementById('start-screen');
  startScreenElement.setAttribute('class', 'hide');

  questionsElement.removeAttribute('class');

  timerId = setInterval(clockTick, 1000);

  timerElement.textContent = time;

  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var titleElement = document.getElementById('question-title');
  titleElement.textContent = currentQuestion.title;

  choicesElement.innerHTML = '';

  currentQuestion.choices.forEach(addAnswer);
}

function addAnswer(choice, i) {
  var choiceNode = document.createElement('button');
  choiceNode.setAttribute('class', 'choice');
  choiceNode.setAttribute('value', choice);

  choiceNode.textContent = i + 1 + '. ' + choice;

  choiceNode.onclick = questionClick;

  choicesElement.appendChild(choiceNode);
}

function questionClick() {
  if (this.value === questions[currentQuestionIndex].answer) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }
  showFeedback();

  ++currentQuestionIndex;

  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function handleCorrectAnswer() {
  sfxRight.play();
  feedbackElement.textContent = 'Correct!';
}

function handleWrongAnswer() {
  time -= 15;

  if (time < 0) {
    time = 0;
  }

  timerElement.textContent = time;
  sfxWrong.play();
  feedbackElement.textContent = 'Wrong!';
}

function showFeedback() {
  feedbackElement.setAttribute('class', 'feedback');
  setTimeout(function() {
    feedbackElement.setAttribute('class', 'feedback hide');
  }, 1000);
}

function endQuiz() {
  clearInterval(timerId);

  var endScreenElement = document.getElementById('end-screen');
  endScreenElement.removeAttribute('class');

  var finalScoreElement = document.getElementById('final-score');
  finalScoreElement.textContent = time;

  questionsElement.setAttribute('class', 'hide');
}

function clockTick() {
  --time;
  timerElement.textContent = time;

  if (time <= 0) {
    endQuiz();
  }
}

function saveHighscore() {
  var initials = initialsElements.value.trim();

  if (initials !== '') {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem('highscores')) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    // redirect to next page
    window.location.href = 'highscores.html';
  }
}

function checkForEnter(event) {
  if (event.key === 'Enter') {
    saveHighscore();
  }
}

submitButton.onclick = saveHighscore;
startButton.onclick = startQuiz;
initialsElements.onkeyup = checkForEnter;
