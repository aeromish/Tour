/* Dọc Bờ — service worker nhẹ.
   Mục tiêu: mở nhanh + trụ được khi sóng chập chờn.
   Cache "vỏ app" (HTML/JS/CSS/data/icon). KHÔNG cache tile bản đồ (OSM) — tile luôn lấy từ mạng. */

const CACHE = 'docbo-v1';
const SHELL = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './lib/leaflet.js',
  './lib/leaflet.css',
  './lib/leaflet.markercluster.js',
  './lib/MarkerCluster.css',
  './lib/MarkerCluster.Default.css',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Tile bản đồ (OpenStreetMap) và mọi thứ khác origin: để trình duyệt tự lấy từ mạng.
  if (url.origin !== self.location.origin) return;

  // Tài nguyên cùng origin (vỏ app): ưu tiên cache, thiếu thì lấy mạng rồi cache thêm.
  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
