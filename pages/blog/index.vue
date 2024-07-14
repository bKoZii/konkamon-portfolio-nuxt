<template>
  <div v-if="data">
    <div class="flex flex-col gap-8">
      <PageHeader title="My Blog" description="รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ" />
      <section class="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-1 md:grid-cols-2">
        <div v-for="(post, index) in data" :key="index">
          <BlogIndexCard :post="post" />
        </div>
      </section>
    </div>
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
</script>

<style></style>
