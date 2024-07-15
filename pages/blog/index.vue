<template>
  <div v-if="blogData">
    <div class="flex flex-col gap-8">
      <PageHeader title="My Blog" description="รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ" />
      <section class="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-1 md:grid-cols-2">
        <ClientOnly>
          <div v-for="(post, index) in data" :key="index">
            <BlogIndexCard :post="post" />
          </div>
          <template #fallback>
            <div v-for="fallback in 4" :key="fallback">
              <BlogSkeletonFallback />
            </div>
          </template>
        </ClientOnly>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBlogIndex } from '~/types/BlogIndexInterface'
const blogData = ref<IBlogIndex[]>([])
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
| order(_createdAt desc)`
const sanity = useSanity()
const { data } = await useAsyncData('blogs', () => sanity.fetch<IBlogIndex>(query))
useSeoMeta({
  title: 'Blogs',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวม Blog ต่างๆ จากนาย กรกมล ศรีอ่อน',
  ogDescription: 'รวม Blog ต่างๆ จากนาย กรกมล ศรีอ่อน',
  ogImage: '/ogImage-blogs.webp',
  ogUrl: 'https://konkamon.vercel.app/blog'
})

if (data.value) {
  blogData.value = [data.value] as IBlogIndex[]
}
</script>

<style></style>
