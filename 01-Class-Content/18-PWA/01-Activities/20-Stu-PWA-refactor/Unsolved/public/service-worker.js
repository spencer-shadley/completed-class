const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/dist/bundle.js",
  "/assets/images/1.jpg",
  "/assets/images/2.jpg",
  "/assets/images/3.jpg",
  "/assets/images/4.jpg",
  "/assets/images/5.jpg",
  "/assets/images/6.jpg",
  "/assets/images/7.jpg",
  "/assets/images/8.jpg",
  "/assets/images/9.jpg",
  "/assets/images/10.jpg",
  "/assets/images/11.jpg",
  "/assets/images/12.jpg",
  "/assets/images/13.jpg",
  "/assets/images/14.jpg",
  "/assets/images/15.jpg",
  "/assets/images/16.jpg",
  "/assets/images/17.jpg",
  "/assets/images/18.jpg",
  "/assets/images/19.jpg",
  "/assets/images/20.jpg",
  "/assets/images/21.jpg",
  "/assets/images/22.jpg",
  "/assets/images/23.jpg",
  "/assets/images/24.jpg",
  "/assets/images/25.jpg",
  "/assets/images/26.jpg",
  "/assets/images/27.jpg",
  "/assets/images/28.jpg",
  "/assets/images/29.jpg",
  "/assets/images/30.jpg",
  "/assets/images/31.jpg",
  "/assets/images/32.jpg",
  "/assets/images/33.jpg",
  "/assets/images/34.jpg",
  "/assets/images/35.jpg",
  "/assets/images/36.jpg",
  "/assets/images/37.jpg",
  "/assets/images/38.jpg"
];


const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});