<template>
  <Html class="dark:bg-neutral-950" />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Konkamon Sion - Portfolio',
  description: 'เว็บไซต์ Portfolio ของนาย กรกมล ศรีอ่อน - สร้างด้วย Nuxt 3 + TailwindCSS.',
  author: 'Konkamon Sion',
  ogTitle: 'Konkamon Sion - Portfolio',
  ogDescription: 'เว็บไซต์ Portfolio ของนาย กรกมล ศรีอ่อน - สร้างด้วย Nuxt 3 + TailwindCSS.',
  creator: 'Konkamon Sion',
  ogImage: '/ogImage.png',

  ogUrl: 'https://konkamon-nuxt.web.app/',
  ogLocale: 'th_TH',
  ogSiteName: 'Konkamon Sion - Portfolio'
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
