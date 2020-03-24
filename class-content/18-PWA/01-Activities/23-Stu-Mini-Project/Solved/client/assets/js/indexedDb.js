export function checkForIndexedDb() {
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support a stable version of IndexedDB.`);
    return false;
  }
  return true;
}

export function useIndexedDb(databaseName, storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(databaseName, 1);

    let db;
    let tx;
    let store;

    request.onupgradeneeded = event => {
      console.log(event);
      request.result.createObjectStore(storeName, { keyPath: `_id` });
    };

    request.onerror = event => {
      console.log(`There was an error`);
      reject(event);
    };

    request.onsuccess = event => {
      console.log(event);

      db = request.result;
      tx = db.transaction(storeName, `readwrite`);
      store = tx.objectStore(storeName);

      db.onerror = err => console.error(err);

      if (method === `put`) {
        store.put(object);
      } else if (method === `get`) {
        const all = store.getAll();
        all.onsuccess = () => {
          resolve(all.result);
        };
      } else if (method === `delete`) {
        store.delete(object._id);
      }
      tx.oncomplete = () => db.close(); };
  });
}
