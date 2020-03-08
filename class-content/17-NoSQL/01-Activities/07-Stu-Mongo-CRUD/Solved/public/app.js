'use strict';

const actionBtn = document.getElementById(`action-button`);
// clear all items
const clear = document.getElementById(`clear-all`);
// delete an item
const results = document.getElementById(`results`);

const status = document.getElementById(`status`);

function getResults() {
  clearTodos();
  fetch(`/all`)
    .then(response => {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }
      response.json().then(data => {
        newTodoSnippet(data);
      });
    })
    .catch(err => {
      console.log(`Fetch Error :-S`, err);
    });
}

function newTodoSnippet(res) {
  for (let i = 0; i < res.length; ++i) {
    const dataId = res[i]._id;
    const title = res[i].title;
    const todoList = document.getElementById(`results`);
    snippet = `
      <p class="data-entry">
      <span class="dataTitle" data-id=${dataId}>${title}</span>
      <span onClick="delete" class="delete" data-id=${dataId}>x</span>;
      </p>`;
    todoList.insertAdjacentHTML(`beforeend`, snippet);
  }
}

function clearTodos() {
  const todoList = document.getElementById(`results`);
  todoList.innerHTML = ``;
}

function resetTitleAndNote() {
  const note = document.getElementById(`note`);
  note.value = ``;
  const title = document.getElementById(`title`);
  title.value = ``;
}

function updateTitleAndNote(data) {
  const note = document.getElementById(`note`);
  note.value = data.note;
  const title = document.getElementById(`title`);
  title.value = data.title;
}

getResults();

clear.addEventListener(`click`, e => {
  if (e.target.matches(`#clear-all`)) {
    element = e.target;
    fetch(`/clearall`, {
      method: `delete`
    })
      .then(response => {
        if (response.status !== 200) {
          console.log(
            `Looks like there was a problem. Status Code: ${response.status}`
          );
          return;
        }
        clearTodos();
      })
      .catch(err => {
        console.log(`Fetch Error :-S`, err);
      });
  }
});

results.addEventListener(`click`, e => {
  if (e.target.matches(`.delete`)) {
    element = e.target;
    const dataId = element.getAttribute(`data-id`);
    fetch(`/delete/${dataId}`, {
      method: `delete`
    })
      .then(response => {
        if (response.status !== 200) {
          console.log(
            `Looks like there was a problem. Status Code: ${response.status}`
          );
          return;
        }
        element.parentNode.remove();
        resetTitleAndNote();
        const newButton = `
      <button id='make-new'>Submit</button>`;
        actionBtn.innerHTML = newButton;
      })
      .catch(err => {
        console.log(`Fetch Error :-S`, err);
      });
  } else if (e.target.matches(`.dataTitle`)) {
    element = e.target;
    const dataId = element.getAttribute(`data-id`);
    status.innerText = `Editing`;
    fetch(`/find/${dataId}`, { method: `get` })
      .then(response => response.json())
      .then(data => {
        updateTitleAndNote(data);
        const newButton = `<button id='updater' data-id=${dataId}>Update</button>`;
        actionBtn.innerHTML = newButton;
      })
      .catch(err => {
        console.log(`Fetch Error :-S`, err);
      });
  }
});

actionBtn.addEventListener(`click`, e => {
  if (e.target.matches(`#updater`)) {
    updateBtnEl = e.target;
    const dataId = updateBtnEl.getAttribute(`data-id`);
    const title = document.getElementById(`title`).value;
    const note = document.getElementById(`note`).value;
    fetch(`/update/${dataId}`, {
      method: `post`,
      headers: {
        Accept: `application/json, text/plain, */*`,
        'Content-Type': `application/json`
      },
      body: JSON.stringify({
        title,
        note
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        element.innerText = title;
        resetTitleAndNote();
        const newButton = `<button id='make-new'>Submit</button>`;
        actionBtn.innerHTML = newButton;
        status.innerText = `Creating`;
      })
      .catch(err => {
        console.log(`Fetch Error :-S`, err);
      });
  } else if (e.target.matches(`#make-new`)) {
    element = e.target;
    fetch(`/submit`, {
      method: `post`,
      headers: {
        Accept: `application/json, text/plain, */*`,
        'Content-Type': `application/json`
      },
      body: JSON.stringify({
        title: document.getElementById(`title`).value,
        note: document.getElementById(`note`).value,
        created: Date.now()
      })
    })
      .then(res => res.json())
      .then(res => newTodoSnippet([res]));
    resetTitleAndNote();
  }
});
