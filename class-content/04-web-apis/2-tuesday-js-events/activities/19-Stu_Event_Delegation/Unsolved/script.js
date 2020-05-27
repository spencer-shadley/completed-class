var addButton = document.querySelector('#add-btn');
var peopleListElement = document.querySelector('#people-list');
var nameElement = document.querySelector('#name');
var modalElement = document.querySelector('#modal-container');
var modalNameElement = document.querySelector('#modal-name');
var descriptionElement = document.querySelector('#description');
var closeElement = document.querySelector('.close');
var saveButton = document.querySelector('#save');

var people = [{ name: 'Spencer' }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameElement.value;
  var li = document.createElement('li');
  li.id = people.length;
  li.innerHTML = name + ' <button>edit</button>';
  people.push({ name: name });
  peopleListElement.append(li);
}

function close() {
  modalElement.style.display = 'none';
}

function handleClick() {
  // Use event delegation to handle when the user clicks 'edit'
}

closeElement.addEventListener('click', close);
addButton.addEventListener('click', addPersonToList);
