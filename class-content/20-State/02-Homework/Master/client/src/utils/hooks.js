export function idbPromise(databaseName, storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(databaseName, 1);
        let db; let tx; let store;
        request.onupgradeneeded = e => {
            console.log(e);
            const resultDb = request.result;
            resultDb.createObjectStore(storeName, { keyPath: `productId` });
        };

        request.onerror = function(e) {
            console.log(`There was an error`);
            reject(e);
        };

        request.onsuccess = function (e) {
            console.log(e);
            db = request.result;
            tx = db.transaction(storeName, `readwrite`);
            store = tx.objectStore(storeName);

            db.onerror = function (error) {
                console.error(error);
                reject(error);
            };
            if (method === `put`) {
                console.log(object.productId);

                store.put(object);
                resolve(object);
            } else if (method === `get`) {
                const all = store.getAll();
                all.onsuccess = function() {
                    resolve(all.result);
                };
            } else if (method === `delete`) {
                console.log(object);
                store.delete(object.productId);
            }
            tx.oncomplete = function() {
                db.close();
            };
        };
    });
}
