<template>
  <div>
    <article class="prose prose-sm md:prose-base dark:prose-invert max-w-none text-center lg:text-left prose-h1:m-0">
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
    </article>
  </div>
</template>

<script lang="ts" setup>
const pageHeader = defineProps({
  title: String,
  description: String,
})
const data = markRaw(pageHeader)
</script>
