<template>
  <div>
    <div v-for="data in dataInput" :key="data.name">
      <h3 class="font-bold dark:text-white">{{ data.name }}</h3>
      <p class="text-gray-500 dark:text-gray-400 text-sm">{{ data.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type BagItemInterface from '../../types/BagItemInterface'
defineProps<{
  dataInput: BagItemInterface[]
}>()
</script>

<style></style>
