<template>
  <div>
    <section class="mb-6 flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold text-gray-500">Blogs ล่าสุด</h2>
      <UButton label="Blogs ทั้งหมด" variant="ghost" icon="ph:arrow-right" trailing to="/blog" />
    </section>
    <section class="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-1 md:grid-cols-2">
      <div v-for="(post, index) in data" :key="index">
        <ClientOnly>
          <Motion is="div" preset="popVisibleOnce" :delay="index * 100">
            <BlogIndexCard :post="post" />
          </Motion>
          <template #fallback>
            <UCard class="h-fit">
              <div class="flex flex-col space-y-4">
                <USkeleton class="h-40 w-full" />
                <USkeleton class="h-4 w-full" />
                <USkeleton class="h-10 w-full" />
                <USkeleton class="h-6 w-full" />
              </div>
            </UCard>
          </template>
        </ClientOnly>
      </div>
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
