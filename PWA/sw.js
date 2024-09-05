// if (typeof navigator.serviceWorker !== 'undefined') {
//     navigator.serviceWorker.register('sw.js')
//   }

self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
  });