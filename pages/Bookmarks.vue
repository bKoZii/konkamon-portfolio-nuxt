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
    <section v-if="bookmarkItems?.meta" class="mt-5 flex justify-center gap-5">
      <USelectMenu
        v-model="sortBy"
        :options="sortType"
      >
        <template #leading>
          <UIcon v-if="sortBy.icon" :name="sortBy.icon" />
        </template>
      </USelectMenu>
      <UPagination
        v-model="currentPage"
        :page-count="itemPerPage"
        :total="bookmarkItems.meta.pagination.total"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from '~/types/BookmarkItemsInterface'

const sortType = [{
  id: 'name:asc',
  label: 'Name (Asc)',
  icon: 'mdi:sort-alphabetical-ascending',
}, {
  id: 'name:desc',
  label: 'Name (Desc)',
  icon: 'mdi:sort-alphabetical-descending',
}, {
  id: 'createdAt:asc',
  label: 'Added Date (Asc)',
  icon: 'mdi:sort-clock-ascending-outline',
}, {
  id: 'createdAt:desc',
  label: 'Added Date (Desc)',
  icon: 'mdi:sort-clock-descending-outline',
}]

const sortBy = ref(sortType[0])

const currentPage = ref(1)
const itemPerPage = 10
const nuxt = useNuxtApp()
const { find } = useStrapi()
const { data: bookmarkItems } = await useLazyAsyncData(
  'bookmarks',
  () => find<BookmarkItemsInterface>('bookmarks', { pagination: { page: currentPage.value, pageSize: itemPerPage }, sort: sortBy.value.id }),
  {
    watch: [currentPage, sortBy],
    deep: false,
    getCachedData(key) {
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
useSeoMeta({
  title: 'Bookmarks',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ',
  ogDescription: 'รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ',
  ogImage: '/ogImage-bookmarks.webp',
  ogUrl: 'https://konkamon.vercel.app/Bookmarks',
})
</script>
