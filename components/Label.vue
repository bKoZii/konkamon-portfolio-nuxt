<template>
  <div>
    <span
      class="group-hover:opacity-100 transition-opacity bg-white text-black px-2 py-1 text-sm border shadow-lg rounded-md absolute left-1/2 -translate-x-1/2 translate-y-10 opacity-0 mx-auto text-nowrap whitespace-nowrap dark:bg-black dark:text-white dark:border-gray-700"
    >
      {{ msg }}
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  msg: String,
  offset: String
})
</script>