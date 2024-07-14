<script setup lang="ts">
import type { CodeBlock } from '~/types/BlogInterface'
const { $Prism } = useNuxtApp()
defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String
  },
  data: Object as () => CodeBlock
})

onMounted(() => {
  $Prism.highlightAll()
})
</script>

<template>
  <div class="not-prose text-sm lg:text-base">
    <pre :class="`language-${language} rounded-lg`"><code :class="`language-${language} !font-mono` ">{{ code }}</code></pre>
  </div>
</template>
