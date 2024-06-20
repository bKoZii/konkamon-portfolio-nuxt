<template>
  <div class="relative flex py-5 items-center">
    <span class="flex-shrink me-4 text-gray-600 dark:text-gray-400">{{ msg }}</span>
    <div class="flex-grow border-t-2 border-gray-200 dark:border-gray-800"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  msg: String
})
</script>

<style></style>
