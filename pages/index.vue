<template>
  <main>
    <div class="flex flex-col flex-nowrap gap-10">
      <Hero />
      <AboutMe />
      <Technology />
      <LazyLatestBlogs />
      <SocialLinks />
      <FeaturedWork />
    </div>
  </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Konkamon Sion',
  description: 'เว็บไซต์ Portfolio & Blogs ของนาย กรกมล ศรีอ่อน - สร้างด้วย Nuxt 3 + TailwindCSS.',
  author: 'Konkamon Sion',
  ogTitle: '%s - Portfolio & Blogs Website',
  ogDescription: 'เว็บไซต์ Portfolio & Blogs ของนาย กรกมล ศรีอ่อน - สร้างด้วย Nuxt 3 + TailwindCSS.',
  creator: 'Konkamon Sion',
  ogImage: '/ogImage-index.webp',
  ogUrl: 'https://konkamon.vercel.app/',
  ogLocale: 'th_TH',
  ogSiteName: 'Konkamon Sion',
  titleTemplate: '%s - Portfolio & Blogs Website'
})
</script>

<style></style>
