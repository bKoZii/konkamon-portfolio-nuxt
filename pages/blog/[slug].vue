<template>
  <div>
    <div v-if="blogSlug">
      <article class="flex flex-col gap-5">
        <ClientOnly>
          <BlogSlugHeader :blog-slug="blogSlug" />
          <UDivider class="my-3" />
          <section
            class="prose prose-neutral dark:prose-invert prose-sm md:prose-base prose-h1:mb-5 prose-h2:my-4 prose-pre:text-sm prose-pre:m-0 prose-li:my-1 max-w-none font-sans tracking-tight">
            <MDC :value="blogSlug.content" tag="article" />
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

const { data:blogSlug } = await useAsyncData('blogSlug', () =>
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
  })
    .then((data) => data.data.attributes)
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
</script>
