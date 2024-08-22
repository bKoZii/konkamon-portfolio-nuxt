<template>
  <div>
    <div v-if="blogSlug">
      <article class="flex flex-col gap-5">
        <BlogSlugHeader :blog-slug="blogSlug" />
        <UDivider class="my-3" />
        <ClientOnly>
          <section
            class="prose prose-neutral dark:prose-invert prose-sm md:prose-base prose-h1:mb-5 prose-h2:my-4 prose-pre:text-sm prose-pre:m-0 prose-li:my-1 max-w-none font-sans tracking-tight">
            <MDCRenderer :body="ast?.body" :data="ast?.data" />
          </section>
          <template #fallback>
            <BlogSlugFallback />
          </template>
        </ClientOnly>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router'
import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug'

const { findOne } = useStrapi()
const route: RouteLocationNormalized = useRoute()

const { data: blogSlug } = await useAsyncData('blogSlug', () =>
  findOne<StrapiBlogSlug>('blogs', route.params['slug'] as string, {
    fields: ['title', 'subtitle', 'publishedAt', 'slug', 'content', 'updatedAt', 'createdAt'],
    populate: {
      mainImage: true,
      categories: {
        fields: ['name']
      }
    }
  }).then((data) => data.data.attributes)
)

const title = computed(() => `${blogSlug.value?.title}`)
useSeoMeta({
  title: title.value,
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

const { data: ast } = await useFetch(() => `/api/mdc-transform`, {
  method: 'POST',
  body: {
    content: blogSlug.value?.content
  }
})

// const {data: ast } = await useAsyncData('markdownParser', ()=> $fetch('/api/mdc-transform', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     content: blogSlug.value?.content
//   })
// }).then((data) => data))
</script>
