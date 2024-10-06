<template>
  <div>
    <ClientOnly fallback-tag="div">
      <div v-if="blogSlug">
        <article class="flex flex-col gap-5">
          <BlogSlugHeader :blog-slug="blogSlug" />
          <UDivider class="my-3" />
          <section
            class="prose prose-neutral dark:prose-invert prose-sm md:prose-base prose-h1:mb-5 prose-h2:my-4 prose-pre:text-sm dark:prose-pre:border dark:prose-pre:border-neutral-800 prose-li:my-1 max-w-none font-sans tracking-tight"
          >
            <div v-if="blogSlug.content && ast">
              <MDCRenderer :body="ast" />
            </div>
            <div v-else-if="status == 'pending'">
              <LazyUAlert
                class="not-prose"
                title="Loading"
                color="primary"
                description="กำลังโหลดเนื้อหา กรุณารอสักครู่"
                variant="subtle"
              />
            </div>
          </section>
          <UCard :ui="{ base: 'not-prose', body: { padding: 'p-0 sm:p-3' } }">
            <section class="flex justify-center flex-col items-center space-y-2">
              <p class="text-sm font-bold">
                Share this Blog!
              </p>
              <SocialShare
                network="facebook"
                :label="false"
                class="h-7 w-7 rounded bg-blue-600 p-1 text-white"
              />
            </section>
          </UCard>
        </article>
      </div>
      <template #fallback>
        <LazyBlogSlugFallback />
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
const { data: blogSlug } = useNuxtData<StrapiBlogSlug>('blogSlug')
const { status } = await useAsyncData(
  'blogSlug',
  () =>
    findOne<StrapiBlogSlug>('blogs', route.params.slug as string, {
      fields: ['title', 'subtitle', 'publishedAt', 'slug', 'content', 'updatedAt', 'createdAt'],
      populate: {
        mainImage: {
          fields: ['url'],
        },
        categories: {
          fields: ['name'],
        },
      },
    }).then((data) => data.data.attributes),
  {
    default() {
      return blogSlug.value as StrapiBlogSlug
    },
    watch: [],
    deep: false,
    getCachedData: (key) => {
      if (nuxt.isHydrating && nuxt.payload.data[key]) {
        return nuxt.payload.data[key]
      }
      if (nuxt.static.data[key]) {
        return nuxt.static.data[key]
      }
      return null
    },
  },
)
const { data: ast } = await useAsyncData('parsedMarkdown', () => $fetch('/api/mdc', {
  method: 'POST',
  body: {
    content: blogSlug.value ? blogSlug.value.content : '',
  },
  deep: false,
  cache: 'force-cache',
  priority: 'high',
}), {
  deep: false,
})

useSeoMeta({
  title: blogSlug.value?.title,
  ogTitle: '%s [Blogs - Konkamon]',
  titleTemplate: '%s [Blogs - Konkamon]',
  description: blogSlug.value?.subtitle,
  ogDescription: blogSlug.value?.subtitle,
  ogImage: blogSlug.value?.mainImage.data.attributes.url,
  ogImageType: 'image/png',
  ogImageAlt: `รูปภาพปกประจำโพสต์ ${blogSlug.value?.title}`,
  ogImageSecureUrl: blogSlug.value?.mainImage.data.attributes.url,
  ogUrl: `https://konkamon.live/blog/${blogSlug.value?.slug}`,
  publisher: 'Konkamon Sion',
  robots: {
    index: true,
  },
  ogType: 'article',
  articlePublishedTime: blogSlug.value?.publishedAt,
  articleModifiedTime: blogSlug.value?.updatedAt,
  articleTag: blogSlug.value?.categories.data.map((category) => category.attributes.name),
  articleAuthor: ['Konkamon Sion'],
  author: 'Konkamon Sion',
})

definePageMeta({
  middleware: ['check-blog-post'],
})
</script>
