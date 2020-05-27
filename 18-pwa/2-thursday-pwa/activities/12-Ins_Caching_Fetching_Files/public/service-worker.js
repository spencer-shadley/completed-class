const FILES_TO_CACHE = [
  `/`,
  `/index.html`,
  `/assets/css/style.css`,
  `/assets/js/loadPosts.js`,
  `/assets/images/Angular-icon.png`,
  `/assets/images/React-icon.png`,
  `/assets/images/Vue.js-icon.png`,
  `/manifest.webmanifest`,
  `/favicon.ico`,
  `/assets/images/icons/icon-72x72.png`,
  `/assets/images/icons/icon-96x96.png`,
  `/assets/images/icons/icon-128x128.png`,
  `/assets/images/icons/icon-144x144.png`,
  `/assets/images/icons/icon-152x152.png`,
  `/assets/images/icons/icon-192x192.png`,
  `/assets/images/icons/icon-384x384.png`,
  `/assets/images/icons/icon-512x512.png`
];

const CACHE_NAME = `static-cache-v3`;
const DATA_CACHE_NAME = `data-cache-v1`;

self.addEventListener(`install`, event => {
  console.log(`begin install`);
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`Your files were pre-cached successfully!`);
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener(`activate`, event => {
  console.log(`being activate`);
  event.waitUntil(
    caches.keys().then(keyList => Promise.all(
      keyList.map(key => {
        if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
          console.log(`Removing old cache data`, key);
          return caches.delete(key);
        }
        return undefined;
      })
    ))
  );

  self.clients.claim();
});

self.addEventListener(`fetch`, event => {
  console.log(`begin fetch`);
  // cache successful requests to the API
  if (event.request.url.includes(`/api/`)) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME)
        .then(cache => fetch(event.request)
          .then(response => {
          // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(event.request.url, response.clone());
            }

            return response;
          })
          // Network request failed, try to get it from the cache.
          .catch(() =>
            cache.match(event.request)
          ))
        .catch(err => console.error(err))
    );
  } else {
    // if the request is not for the API, serve static assets using "offline-first" approach.
    // https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  }
});

