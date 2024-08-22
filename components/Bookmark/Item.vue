<template>
  <div>
    <a
      :href="webItem.url"
      target="_blank"
      ref="noopener noreferrer"
      class="flex min-w-0 flex-col items-start rounded-lg border p-2 sm:flex-row sm:items-center sm:gap-3 dark:border-neutral-800"
    >
      <span class="relative hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-800 sm:inline-flex dark:text-gray-500 dark:text-gray-400"
        ><Icon name="ph:globe-duotone" mode="svg" size="30px"
      /></span>
      <div class="flex flex-col">
        <p class="text-base font-semibold text-black dark:text-white">{{ webItem.name }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">{{ webItem.description }}</p>
      </div>
      <span class="flex-1"></span><span class="text-sm text-gray-800 sm:block dark:text-gray-500 dark:text-gray-400">{{ useGetHostname(webItem.url) }}</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from '~/types/BookmarkItemsInterface'

defineProps({
  webItem: {
    type: Object as () => BookmarkItemsInterface,
    required: true
  }
})
</script>

<style></style>
