importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

addEventListener("install", ()=>console.log("installed sw"));
addEventListener("activate", ()=>console.log("activated sw"));

workbox.routing.registerRoute(
  /test-bucket-tyler.*/,
  workbox.strategies.CacheOnly({
    cacheName: 'test-cache'
  })
);

