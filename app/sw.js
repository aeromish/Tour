/* Dọc Bờ — service worker.
   - index.html, data.js, manifest, trang gốc: stale-while-revalidate
     (trả cache ngay cho nhanh/offline, đồng thời tải bản mới về cho lần sau).
   - Thư viện & icon tĩnh (lib/, assets/): cache-first.
   - Tile bản đồ (OSM) và mọi thứ khác origin: luôn lấy từ mạng, không cache. */

const CACHE = 'docbo-v2';
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

// File hay đổi -> luôn ngầm cập nhật
function isFresh(url){
  const p = url.pathname;
  return p.endsWith('/') || p.endsWith('/index.html') || p.endsWith('/data.js') || p.endsWith('/manifest.json');
}

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
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
  if (url.origin !== self.location.origin) return; // tile OSM + fonts: qua mạng

  if (isFresh(url)) {
    // stale-while-revalidate
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(req).then(cached => {
          const net = fetch(req).then(res => {
            if (res && res.status === 200) cache.put(req, res.clone());
            return res;
          }).catch(() => cached);
          return cached || net;
        })
      )
    );
  } else {
    // cache-first cho tài nguyên tĩnh
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match('./index.html')))
    );
  }
});
