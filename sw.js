// Nombre del caché para la versión actual de la aplicación
const CACHE_NAME = 'logistica-pro-v1';

// Recursos estáticos que se almacenarán en caché inmediatamente
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// Evento de instalación: se descargan y guardan los recursos esenciales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Almacenando recursos en caché');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Fuerza al Service Worker activo actual a reemplazarse por este nuevo
  self.skipWaiting();
});

// Evento de activación: se limpian los cachés antiguos para liberar espacio
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Eliminando caché antiguo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  // Reclama el control de los clientes inmediatamente sin recargar la página
  return self.clients.claim();
});

// Evento fetch: intercepta las peticiones de red y sirve desde caché si no hay conexión
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si el recurso existe en caché, se sirve inmediatamente
      if (cachedResponse) {
        return cachedResponse;
      }

      // De lo contrario, se solicita a la red de forma normal
      return fetch(event.request).catch(() => {
        // En caso de fallo total (sin red ni caché), podrías retornar una respuesta por defecto
        console.log('[Service Worker] El recurso no está disponible sin conexión:', event.request.url);
      });
    })
  );
});