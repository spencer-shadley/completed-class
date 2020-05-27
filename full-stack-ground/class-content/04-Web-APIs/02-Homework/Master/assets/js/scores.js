'use strict';

function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

  // sort highscores by score property in descending order
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(showHighscore);
}

function showHighscore(score) {
  var liTag = document.createElement('li');
  liTag.textContent = score.initials + ' - ' + score.score;

  var olEl = document.getElementById('highscores');
  olEl.appendChild(liTag);
}

function clearHighscores() {
  window.localStorage.removeItem('highscores');
  window.location.reload();
}

document.getElementById('clear').onclick = clearHighscores;

// run function when page loads
printHighscores();
