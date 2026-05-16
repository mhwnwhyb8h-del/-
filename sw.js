const cacheName = "xinjiang-travel-v7";
const assets = [
  "./",
  "./index.html",
  "./styles.css?v=7",
  "./script.js?v=7",
  "./manifest.webmanifest?v=7"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
