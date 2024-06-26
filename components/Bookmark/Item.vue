<template>
  <div>
    <a
      :href="webItem.url"
      target="_blank"
      ref="noopener noreferrer"
      class="flex min-w-0 items-center gap-3 rounded-lg p-2 transition-all active:scale-[0.98]"
    >
      <span class="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-600 dark:text-gray-400"
        ><Icon name="ph:globe-duotone" mode="svg" size="30px"
      /></span>
      <div class="flex flex-col truncate">
        <p class="truncate font-semibold text-black dark:text-white">{{ webItem.name }}</p>
        <p class="truncate text-xs text-inherit">{{ webItem.description }}</p>
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
