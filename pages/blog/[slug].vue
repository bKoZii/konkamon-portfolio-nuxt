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
            <div v-else-if="status == 'pending'">
              <UAlert class="not-prose" title="Loading" color="primary" description="กำลังโหลดเนื้อหา กรุณารอสักครู่" variant="subtle" />
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
const { data } = await useAsyncData(
  'blogSlug',
  () =>
    findOne<StrapiBlogSlug>('blogs', route.params.slug as string, {
      fields: ['title', 'subtitle', 'publishedAt', 'slug', 'content', 'updatedAt', 'createdAt'],
      populate: {
        mainImage: {
          fields: ['url']
        },
        categories: {
          fields: ['name']
        }
      }
    }).then((data) => data.data.attributes),
  {
    default(){
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
  },
  }
)

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
const { status } = await useAsyncData('markdown', () => parseMarkdown(blogSlug.value?.content as string), {
  getCachedData: (key) => {
    if (nuxt.isHydrating && nuxt.payload.data[key]) {
      return nuxt.payload.data[key]
    }
    if (nuxt.static.data[key]) {
      return nuxt.static.data[key]
    }
    return null
  },
  default(){
    return ast.value
  },
  watch: false,
  deep: false,
  server: false,
  lazy: true
})
</script>
