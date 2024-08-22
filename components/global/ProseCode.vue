<template>
  <div class="inline-block text-base sm:text-sm">
    <div v-if="language" class="border dark:border-neutral-700">
      <code><slot /></code>
    </div>
    <div v-else>
      <code class="rounded border bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800"><slot /></code>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  language: {
    type: String,
    default: null
  }
})
</script>
<style lang="scss" scoped>
div {
  code {
    padding: 4px;

    &::before {
      content: unset;
    }
    &::after {
      content: unset;
    }
  }
}
</style>
