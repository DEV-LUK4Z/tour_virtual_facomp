const CACHE_NAME = 'facomp-vr-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/tour/tour.html',
  '/src/style/main.css',
  '/src/tour/style.css',
  '/src/tour/script.js',
  '/src/tour/assets/modelo-3d-FACOMP.glb',
  'https://aframe.io/releases/1.6.0/aframe.min.js'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});