<template>
  <div>
    <section class="mb-6 flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold text-gray-500">Blogs ล่าสุด</h2>
      <UButton label="Blogs ทั้งหมด" variant="ghost" icon="ph:arrow-right" trailing to="/blog" />
    </section>
    <section class="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-1 md:grid-cols-2">
      <ClientOnly>
        <div v-for="(post, index) in data" :key="index">
          <BlogIndexCard :post="post" />
        </div>
        <template #fallback>
          <div v-for="fallback in 2" :key="fallback">
            <BlogSkeletonFallback />
          </div>
        </template>
      </ClientOnly>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { IBlogIndex } from '~/types/BlogIndexInterface'

const query = groq`*[_type == "post"] {
title,
author->{image{asset{_ref}}, name},
  introText,
  mainImage {
    ...,
    asset{_ref}
  },
  categories[]->{title},
  slug{current},
  _createdAt
}
| order(_createdAt desc) [0..1]`
const sanity = useSanity()
const { data } = await useLazyAsyncData('latestBlogs', () => sanity.fetch<IBlogIndex>(query))
</script>

<style></style>
