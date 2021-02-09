importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

addEventListener("install", ()=>console.log("installed sw"));
addEventListener("activate", ()=>console.log("activated sw"));

workbox.setConfig({
  debug: true,
});

workbox.routing.registerRoute(
  ({url}) => url.pathname.startsWith('/test-bucket-tyler'),
  new workbox.strategies.CacheOnly({
    cacheName: 'test-cache'
  })
);

