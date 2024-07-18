<template>
  <div>
    <div class="flex w-full flex-col dark:text-gray-200">
      <h3 class="mb-2 font-bold">{{ title }}</h3>
      <div class="flex flex-row flex-wrap justify-center gap-1 sm:justify-start">
        <div v-for="item in technologyData" :key="item.name">
          <UBadge class="flex flex-row gap-1" variant="subtle" size="xs">
            <UIcon :name="item.icon" class="size-6" />
            {{ item.name }}
          </UBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from '../../types/FrameworkListInterface'
defineProps({
  technologyData: {
    type: Array as () => FrameworkListInterface[],
    required: true
  },
  title: String
})
</script>

<style></style>
