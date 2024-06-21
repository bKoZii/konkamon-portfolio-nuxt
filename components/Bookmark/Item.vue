<template>
  <div>
    <a
      :href="webItem.url"
      target="_blank"
      ref="noopener noreferrer"
      class="flex items-center gap-3 transition-all p-2 rounded-lg min-w-0 active:scale-[0.98]"
    >
      <span class="relative inline-flex items-center justify-center flex-shrink-0 text-gray-600 dark:text-gray-400 rounded-md h-8 w-8"
        ><Icon name="ph:globe-duotone" mode="svg" size="30px"
      /></span>
      <div class="flex flex-col truncate hover:text-primary">
        <p class="truncate text-black dark:text-white font-semibold">{{ webItem.name }}</p>
        <p class="truncate text-xs text-gray-400">{{ webItem.description }}</p>
      </div>
      <span class="flex-1"></span><span class="text-sm text-gray-400 dark:text-gray-500">{{ getHostname(webItem.url) }}</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from '../../types/BookmarkItemsInterface'

defineProps({
  webItem: {
    type: Object as () => BookmarkItemsInterface,
    required: true
  }
})

const getHostname = (url: string) => {
  const hostname = new URL(url).hostname
  return hostname.replace(/^www\./, '')
}
</script>

<style></style>
