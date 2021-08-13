const CACHE_NAME = "movietime_cache_v1";
var urlsToCache = [
"/",
"/index.html",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      return cache.addAll (urlsToCache)
    })
  )
})

// tjekker om vi har cachet fetchet, så bliver dét serveret, ellers leder den på nettet efter det
// self.addEventListener("fetch", function (event){
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response){
//         if (response) return response;
//         return fetch(event.request);
//       })
//   )
// })
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
