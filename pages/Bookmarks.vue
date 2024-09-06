<template>
  <div>
    <PageHeader title="Bookmarks" description="รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ" />
    <section class="mt-6 flex flex-col flex-nowrap gap-3">
      <ClientOnly>
        <div v-for="data in bookmarkItems" :key="data.name">
          <BookmarkItem :web-item="data" />
        </div>
        <template #fallback>
          <BookmarkFallback />
        </template>
      </ClientOnly>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from '~/types/BookmarkItemsInterface'

const { find } = useStrapi()
const { data: bookmarkItems } = await useLazyAsyncData('bookmarks', () =>
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
