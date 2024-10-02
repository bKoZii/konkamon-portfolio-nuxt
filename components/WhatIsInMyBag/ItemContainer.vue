<template>
  <div>
    <div v-for="data in dataInput" :key="data.name">
      <h3 class="text-sm font-bold sm:text-base dark:text-white">
        {{ data.name }}
      </h3>
      <p class="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type BagItemInterface from '../../types/BagItemInterface'

defineProps<{
  dataInput: BagItemInterface[]
}>()
</script>
