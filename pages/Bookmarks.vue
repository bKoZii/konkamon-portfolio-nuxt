<template>
  <div>
    <PageHeader title="Bookmarks" description="รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ" />
    <section class="mt-6 flex flex-col flex-nowrap gap-3">
      <ClientOnly>
        <div v-for="data in bookmarkItems?.data" :key="data.id">
          <BookmarkItem :web-item="data.attributes" />
        </div>
        <template #fallback>
          <BookmarkFallback />
        </template>
      </ClientOnly>
    </section>
    <section class="mt-5 flex justify-center" v-if="bookmarkItems?.meta">
      <UPagination v-model="currentPage" :page-count="itemPerPage" :total="bookmarkItems.meta.pagination.total" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from '~/types/BookmarkItemsInterface'
const currentPage = ref(1)
const itemPerPage = 6
const nuxt = useNuxtApp()
const { find } = useStrapi()
const { data: bookmarkItems } = await useLazyAsyncData(
  'bookmarks',
  () => find<BookmarkItemsInterface>('bookmarks', { pagination: { page: currentPage.value, pageSize: itemPerPage } }),
  {
    watch: [currentPage],
    getCachedData(key) {
      if (nuxt.isHydrating && nuxt.payload.data[key]) {
        return nuxt.payload.data[key]
      }
      if (nuxt.static.data[key]) {
        return nuxt.static.data[key]
      }
      return null
    }
  }
)
useSeoMeta({
  title: 'Bookmarks',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ',
  ogDescription: 'รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ',
  ogImage: '/ogImage-bookmarks.webp',
  ogUrl: 'https://konkamon.vercel.app/Bookmarks'
})
</script>
