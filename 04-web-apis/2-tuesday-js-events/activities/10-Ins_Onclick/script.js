var themeSwitcher = document.querySelector('#theme-switcher');
var container = document.querySelector('.container');
var mode = 'dark';

// all the event types - https://developer.mozilla.org/en-US/docs/Web/Events
// click, keypress, resize, mouseover, load, ...
themeSwitcher.addEventListener('click', handleClick);

function handleClick() {
  mode = mode === 'dark' ? 'light' : 'dark';
  container.setAttribute('class', mode);
}
