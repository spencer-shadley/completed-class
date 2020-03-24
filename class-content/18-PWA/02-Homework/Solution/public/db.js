const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

let db;
const request = indexedDB.open(`budget`, 3);

request.onupgradeneeded = ({ target }) => {
  db = target.result;
  db.createObjectStore(`pending`, { autoIncrement: true });
};

request.onsuccess = ({ target }) => {
  db = target.result;

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = event =>
  console.error(event);

function checkDatabase() {
  const transaction = db.transaction([`pending`], `readwrite`);
  const store = transaction.objectStore(`pending`);
  const getAll = store.getAll();

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch(`/api/transaction/bulk`, {
        method: `POST`,
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: `application/json, text/plain, */*`,
          'Content-Type': `application/json`
        }
      })
        .then(response => response.json())
        .then(() => {
          // delete records if successful
          const transaction = db.transaction([`pending`], `readwrite`);
          const store = transaction.objectStore(`pending`);
          store.clear();
        });
    }
  };
}

// called in index.js
// eslint-disable-next-line no-unused-vars
function saveRecord(record) {
  const transaction = db.transaction([`pending`], `readwrite`);
  const store = transaction.objectStore(`pending`);

  store.add(record);
}

// listen for app coming back online
window.addEventListener(`online`, checkDatabase);
