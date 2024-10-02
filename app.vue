<template>
  <Html class="bg-slate-100 dark:bg-neutral-950" />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'th',
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Konkamon Sion` : 'Konkamon Sion'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      href: '/favicon.ico',
    },
  ],
})

useSeoMeta({
  ogLocale: 'th_TH',
  themeColor: '#379777',
})
</script>

<style>
@media (min-width: 400px) and (prefers-reduced-motion: no-preference) {
  .page-enter-active {
    transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1);
  }
  .page-leave-active {
    transition: all 0.3s cubic-bezier(0.75, 0, 0.75, 0);
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(-20px);
  }
  .layout-enter-active {
    transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1);
  }
  .layout-leave-active {
    transition: all 0.3s cubic-bezier(0.75, 0, 0.75, 0);
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
