<template>

    <div class="flex flex-col gap-8">
      <PageHeader title="My Blog" description="รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ" />
      <div>
        <UInput type="text" size="lg" icon="ph:magnifying-glass" placeholder="ค้นหา Blog..." @input="debounceSearch" v-model="searchInput" />
        <UAlert
          description="ระบบ Search อยู่ในช่วงพัฒนา / Experimental"
          title="แจ้งให้ทราบ"
          color="orange"
          variant="subtle"
          size="lg"
          icon="ph:warning-circle-duotone"
          class="my-2"
        />
      </div>
      <div v-if="Array.isArray(blogData) && blogData.length > 0">
      <section class="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-1 md:grid-cols-2">
        <ClientOnly>
          <div v-for="(post, index) in blogData" :key="index">
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
      <div v-else><h1>Not found</h1></div>
    </div>
</template>

<script lang="ts" setup>
import type { IBlogIndex } from '~/types/BlogIndexInterface'
const blogData = ref<IBlogIndex>()

const textInput = ref()
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
  blogData.value = data.value as IBlogIndex
}
const searchInput = ref('')
let debounceTimeout: ReturnType<typeof setTimeout> | null = null

const query2 = groq`*[_type == "post" && (title match $searchInput || introText match $searchInput)] {
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

const debounceSearch = () => {
  if (debounceTimeout !== null) {
    clearTimeout(debounceTimeout)
  }
  debounceTimeout = setTimeout(async () => {
    const searchRes = await sanity.fetch<IBlogIndex>(query2, { searchInput: `*${searchInput.value}*` })
    blogData.value = (await searchRes) as IBlogIndex
    console.log(searchRes)
    console.log(blogData.value.length)
  }, 300)
}
</script>

<style></style>
