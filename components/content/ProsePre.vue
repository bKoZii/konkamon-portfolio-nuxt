<template>
  <div>
    <div class="text-xs bg-neutral-900 rounded-t-lg dark:bg-neutral-900 p-2 dark:border border-b-0 dark:border-neutral-700 space-x-1">
      <UIcon :name="`vscode-icons:file-type-${language}`" mode="svg" class="inline-block w-5 h-5" /><span class="text-white">{{ $props.filename }}</span>
    </div>
    <pre :class="`${$props.class} !mt-0 !rounded-t-none dark:border dark:border-t-0 dark:border-neutral-700 !font-mono !text-lg`"><slot /></pre>
  </div>
</template>


<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: 'font-mono'
  }
})
</script>

<style>
pre code .line {
  display: block;
}
</style>