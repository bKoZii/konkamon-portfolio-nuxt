<template>
  <div>
    <PageHeader title="Bookmarks" description="รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ" />
    <section class="mt-6 flex flex-col flex-nowrap gap-3">
      <div
        v-for="data in bookmarkItems"
        :key="data.name"
        class="rounded-lg text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-700 hover:shadow dark:text-gray-400 dark:hover:bg-neutral-800 hover:dark:text-gray-200"
      >
        <BookmarkItem :web-item="data" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from '~/types/BookmarkItemsInterface'

const { find } = useStrapi()
const { data: bookmarkItems } = await useAsyncData('bookmarks', () =>
  find<BookmarkItemsInterface>('bookmarks').then((item) => item.data.map((item) => item.attributes))
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
