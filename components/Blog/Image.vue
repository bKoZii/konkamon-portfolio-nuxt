<template>
  <SanityImage class="rounded-lg shadow w-full" :asset-id="asset._ref" auto="format" fit="fillmax" />
</template>

<script setup>
// import { ref, computed } from 'vue';
// import imageUrlBuilder from '@sanity/image-url';

const props = defineProps({
  asset: {
    type: Object,
    required: true
  }
})

// const { config } = useSanity();
// const builder = imageUrlBuilder(config);
// const url = computed(() => builder.image(props.asset._ref).url());
</script>
