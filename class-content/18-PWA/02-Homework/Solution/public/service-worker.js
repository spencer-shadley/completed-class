'use strict';

const CACHE_NAME = `my-site-cache-v1`;

const urlsToCache = [`/`, `/styles.css`, `/index.js`];

self.addEventListener(`install`, event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`Opened cache`);
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener(`fetch`, event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then(response => {
      if (response) {
        return response;
      } else if (event.request.headers.get(`accept`).includes(`text/html`)) {
        return caches.match(`/index.html`);
      }
    }))
  );
});
