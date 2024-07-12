<template>
  <div>
    <div class="flex w-full flex-col dark:text-gray-200">
      <h3 class="font-bold">{{ title }}</h3>
      <div class="flex flex-row justify-center gap-1 sm:justify-start">
        <div v-for="item in technologyData" :key="item.name">
          <UTooltip :text="item.name" :popper="{ arrow: true, strategy: 'absolute' }">
            <UIcon :name="item.icon" dynamic size="36px" />
          </UTooltip>
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
