<template>
  <div>
    <div class="flex flex-col">
      <h3 class="font-bold">{{ title }}</h3>
      <div class="flex flex-row gap-1">
        <div v-for="item in technologyData" :key="item.name">
          <Icon :name="item.icon" mode="svg" size="36px" />
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
