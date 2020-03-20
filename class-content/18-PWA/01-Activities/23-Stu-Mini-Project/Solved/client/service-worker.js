'use strict';

const FILES_TO_CACHE = [
  `/`,
  `/index.html`,
  `/favorites.html`,
  `/topic.html`,
  `/assets/css/style.css`,
  `/dist/app.bundle.js`,
  `/dist/favorites.bundle.js`,
  `/dist/topic.bundle.js`
];

const PRECACHE = `precache-v1`;
const RUNTIME = `runtime`;

self.addEventListener(`install`, event => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener(`activate`, event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => cacheNames.filter(
        cacheName => !currentCaches.includes(cacheName)
      ))
      .then(cachesToDelete => Promise.all(
        cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener(`fetch`, event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => fetch(event.request).then(response => cache.put(event.request, response.clone()).then(() => response)));
      })
    );
  }
});
