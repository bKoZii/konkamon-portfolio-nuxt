<template>
  <a
    ref="noopener noreferrer"
    :href="webItem.url"
    target="_blank"
  >
    <UCard
      :ui="{
        base: 'hover:scale-[1.02] transition-transform',
        padding: 'p-0',
        ring: 'ring-1 dark:ring-neutral-800',
        background: 'hover:bg-gray-100 dark:hover:bg-neutral-800',
        body: { base: 'flex min-w-0 flex-col items-start rounded-lg sm:flex-row sm:items-center sm:gap-3', padding: 'p-2 sm:p-2' },
      }"
    >
      <span class="relative hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-800 sm:inline-flex dark:text-gray-400"><Icon
        name="ph:globe-duotone"
        mode="svg"
        size="30px"
      /></span>
      <div class="flex flex-col">
        <p class="text-base font-semibold text-black dark:text-white">{{ webItem.name }}</p>
        <p class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">{{ webItem.description }}</p>
      </div>
      <span class="flex-1" /><span class="text-sm text-gray-800 sm:block dark:text-gray-400">{{ useGetHostname(webItem.url) }}</span>
    </UCard>
  </a>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from '~/types/BookmarkItemsInterface'

defineProps({
  webItem: {
    type: Object as () => BookmarkItemsInterface,
    required: true,
  },
})
</script>
