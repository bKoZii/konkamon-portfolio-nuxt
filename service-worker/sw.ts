/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { CacheFirst } from 'workbox-strategies'
import { clientsClaim } from 'workbox-core'
import { skipWaiting } from 'workbox-core'

declare let self: ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST)

clientsClaim()
skipWaiting()

registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new StaleWhileRevalidate({
    cacheName: 'api-cache'
  })
)

registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new CacheFirst({
    cacheName: 'static-resources'
  })
)

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  if (url.pathname === '/api/blogs/search') {
    event.respondWith(
      caches.open('api-cache').then(async (cache) => {
        const cachedResponse = await cache.match(event.request)
        if (cachedResponse) {
          return cachedResponse
        }
        const response = await fetch(event.request)
        cache.put(event.request, response.clone())
        return response
      })
    )
  }
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  if (url.pathname.startsWith('/api/markdown')) {
    event.respondWith(
      caches.open('markdown-cache').then(async (cache) => {
        const cachedResponse = await cache.match(event.request)
        if (cachedResponse) {
          return cachedResponse
        }
        const response = await fetch(event.request)
        cache.put(event.request, response.clone())
        return response
      })
    )
  }
})
