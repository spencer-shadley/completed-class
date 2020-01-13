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

function handleClick(event) {
  if (event.target.matches('button')) {
    event.preventDefault();
    modalElement.style.display = 'block';
    currentId = parseInt(event.target.parentElement.id);
    var name = people[currentId].name;
    var description = people[currentId].description;
    modalNameElement.textContent = name;
    descriptionElement.value = description ? description : '';
  }
}

closeElement.addEventListener('click', close);
saveButton.addEventListener('click', function(event) {
  event.preventDefault();
  people[currentId].description = descriptionElement.value;
  close();
});

addButton.addEventListener('click', addPersonToList);
peopleListElement.addEventListener('click', handleClick);
document.addEventListener('click', function(event) {
  if (event.target === modalElement) {
    close();
  }
});
