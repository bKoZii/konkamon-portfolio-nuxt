<template>
  <div class="flex flex-col">
    <a
      v-if="workData.link"
      :href="workData.link"
      target="_blank"
      ref="noopener noreferrer"
      class="hover:text-primary flex flex-shrink-0 gap-2 text-lg"
      >{{ workData.name }}
      <Icon name="mdi:launch" mode="svg" />
    </a>
    <p v-else class="text-lg">
      {{ workData.name }}
    </p>
    <span class="flex-shrink-0 text-sm text-gray-600 dark:text-gray-400">{{ workData.description }}</span>
  </div>

  <span class="flex-grow border-b border-dashed border-gray-300 dark:border-gray-700"></span>
  <span class="flex flex-shrink-0 gap-2 text-gray-800 dark:text-white">
    <Icon :name="workData.icon" size="36px" mode="svg" />
  </span>
</template>

<script lang="ts" setup>
import type workListInterface from '../../types/workListInterface'
defineProps<{
  workData: workListInterface
}>()
</script>

<style></style>
