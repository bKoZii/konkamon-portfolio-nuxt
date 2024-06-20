<template>
  <Html class="dark:bg-neutral-950" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Konkamon Sion',
  description: 'เว็บไซต์ Portfolio ของนาย กรกมล ศรีอ่อน',
  author: 'Konkamon Sion'
})
useHead({
  htmlAttrs: {
    lang: 'th'
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(4px);
  transform: translateY(20px);
}
</style>
