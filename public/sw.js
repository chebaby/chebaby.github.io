// Temporary cleanup worker. The previous portfolio registered a Workbox 3.6.2
// service worker at /sw.js. This replaces it, removes the caches it created
// and unregisters itself. It does not cache or intercept any requests.

// Cache names created by the legacy worker: the Workbox precache for this
// scope, and the two runtime caches named in the legacy sw.js.
const LEGACY_CACHES = [
  `workbox-precache-${self.registration.scope}`,
  'echebaby-google-fonts',
  'echebaby-images',
];

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.filter((name) => LEGACY_CACHES.includes(name)).map((name) => caches.delete(name)),
      );
      await self.registration.unregister();
    })(),
  );
});
