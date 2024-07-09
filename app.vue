<template>
  <Html class="dark:bg-neutral-950" />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'th'
  },
  titleTemplate: '%s - Konkamon Sion',
  link: [
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      href: '/favicon.ico'
    }
  ]
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
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
