<template>
  <div>
    <ClientOnly>
      <div v-if="blogSlug">
        <article class="flex flex-col gap-5">
          <BlogSlugHeader :blog-slug="blogSlug" />
          <UDivider class="my-3" />
          <section
            v-if="ast"
            class="prose prose-neutral dark:prose-invert prose-sm md:prose-base prose-h1:mb-5 prose-h2:my-4 prose-pre:text-sm prose-pre:m-0 prose-li:my-1 max-w-none font-sans tracking-tight"
          >
            <div v-if="ast && status == 'success'">
              <MDCRenderer :body="ast.body" :data="ast.data" />
            </div>
            <div v-else-if="status == 'pending' && !ast">
              <LazyUAlert class="not-prose" title="Loading" color="primary" description="กำลังโหลดเนื้อหา กรุณารอสักครู่" variant="subtle" />
            </div>
          </section>
        </article>
      </div>
      <template #fallback>
        <BlogSlugFallback />
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router'
import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug'

const { findOne } = useStrapi()
const route: RouteLocationNormalized = useRoute()
const nuxt = useNuxtApp()
const { data: blogSlug } = useNuxtData('blogSlug')
const fetchBlogSlug = async () => {
  const cache = await caches.open('api-cache')
  const cachedResponse = await cache.match(`/api/blogs/${route.params.slug}`)
  if (cachedResponse) {
    return cachedResponse.json()
  }
  const response = await findOne<StrapiBlogSlug>('blogs', route.params.slug as string, {
    fields: ['title', 'subtitle', 'publishedAt', 'slug', 'content', 'updatedAt', 'createdAt'],
    populate: {
      mainImage: {
        fields: ['url']
      },
      categories: {
        fields: ['name']
      }
    }
  })
  cache.put(`/api/blogs/${route.params.slug}`, new Response(JSON.stringify(response.data.attributes)))
  return response.data.attributes
}

const { data } = await useAsyncData('blogSlug', fetchBlogSlug, {
  default() {
    return blogSlug.value
  },
  watch: false,
  deep: false,
  getCachedData: (key) => {
    if (nuxt.isHydrating && nuxt.payload.data[key]) {
      return nuxt.payload.data[key]
    }
    if (nuxt.static.data[key]) {
      return nuxt.static.data[key]
    }
    return null
  }
})

useSeoMeta({
  title: blogSlug.value?.title,
  ogTitle: '%s [Blogs - Konkamon]',
  titleTemplate: '%s [Blogs - Konkamon]',
  description: blogSlug.value?.subtitle,
  ogDescription: blogSlug.value?.subtitle,
  ogImage: blogSlug.value?.mainImage.data.attributes.url,
  ogUrl: `https://konkamon.live/blog/${blogSlug.value?.slug}`
})

definePageMeta({
  middleware: ['check-blog-post']
})

const { data: ast } = useNuxtData('markdown')
const fetchMarkdown = async () => {
  const mdCache = await caches.open('markdown-cache')
  const cachedMdResponse = await mdCache.match(`/api/markdown/${route.params.slug}`)
  if (cachedMdResponse) {
    return cachedMdResponse.json()
  }
  const response = await parseMarkdown(blogSlug.value?.content as string)
  mdCache.put(`/api/markdown/${route.params.slug}`, new Response(JSON.stringify(response)))
  return response
}
const { status } = await useAsyncData('markdown', fetchMarkdown, {
  default() {
    return ast.value
  },
  watch: false,
  deep: false,
  getCachedData: (key) => {
    if (nuxt.isHydrating && nuxt.payload.data[key]) {
      return nuxt.payload.data[key]
    }
    if (nuxt.static.data[key]) {
      return nuxt.static.data[key]
    }
    return null
  }
})
</script>
