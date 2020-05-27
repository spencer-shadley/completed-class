// Perform install steps
self.addEventListener(`install`, event =>
  event.waitUntil(preCache())
);

const CACHE_NAME = `my-site-cache-v1`;
async function preCache() {
  const urlsToCache = [`/`, `/styles.css`, `/index.js`, `/db.js`];

  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(urlsToCache);
}

self.addEventListener(`fetch`, event => {
  event.respondWith(
    onlineFirst(event.request)
  );
});

async function onlineFirst(request) {
  try {
    // cache the latest response
    const networkResponse = await fetch(request);

    if (request.method === `GET`) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (e) {
    // no network available, must ask for cached version
    console.error(e);
    const cacheResponse = await caches.match(request);
    if (cacheResponse) {
      return cacheResponse;
    } else if (isHtml(request)) {
      // no network, no cache - default to index
      return caches.match(`/index.html`);
    }
  }
}

function isHtml(request) {
  return request.headers.get(`accept`).includes(`text/html`);
}
