<template>
  <SanityImage class="rounded-lg w-full" :asset-id="image._ref" auto="format" fit="fillmax" />
</template>

<script setup lang="ts">
import type { MainImage } from '~/types/BlogInterface';

const props = defineProps({
  asset: {
    type: Object as () => MainImage["asset"],
    required: true
  }
})
const image = markRaw(props.asset)
</script>
