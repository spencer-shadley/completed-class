const songs = document.querySelectorAll('ol > li');
const forType = 'for...of'; // update me to whichever for loop you want to try!

// more info on loop types - https://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript
switch (forType) {
  case 'for...of':
    for (const song of songs) {
      addGreenClass(song);
    }
    break;
  case 'for':
    for (var i = 0; i < songs.length; ++i) {
      addGreenClass(songs[i]);
    }
    break;
  case 'forEach':
    songs.forEach(addGreenClass);
    break;
  case 'for-in':
    console.error("for-in is a dangerous loop type, don't use it!");
  default:
    console.error('unknown for type', forType);
}

function addGreenClass(song) {
  song.classList.add('green');
}
